//////////////////////////////// 
// 
//   Copyright 2023 Battelle Energy Alliance, LLC  
// 
// 
//////////////////////////////// 
using CSETWebCore.Business.Assessment;
using CSETWebCore.Business.Contact;
using CSETWebCore.Business.ImportAssessment.Models.Version_10_1;
using CSETWebCore.Business.Maturity;
using CSETWebCore.DataLayer.Model;
using CSETWebCore.Helpers;
using CSETWebCore.Interfaces.Helpers;
using CSETWebCore.Model.Assessment;
using DocumentFormat.OpenXml.InkML;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using Nelibur.ObjectMapper;
using System;
using System.Collections.Generic;
using System.Linq;


namespace CSETWebCore.Business.AssessmentIO.Import
{
    public class Importer
    {
        /// <summary>
        /// Maps old keys to new keys.
        /// </summary>
        Dictionary<string, Dictionary<int, int>> mapIdentity = new Dictionary<string, Dictionary<int, int>>();

        private UploadAssessmentModel _model;
        private int? _currentUserId;
        private string _primaryEmail;
        private string _accessKey;
        private CSETContext _context;
        private ITokenManager _token;
        private IAssessmentUtil _assessmentUtil;

        private AssessmentBusiness _assessmentBiz;
        private MaturityBusiness _mb;
        private ContactBusiness _cb;


        /// <summary>
        /// 
        /// </summary>
        public Importer(UploadAssessmentModel model,
            int? currentUserId, string primaryEmail, string accessKey,
            CSETContext context, ITokenManager token, IAssessmentUtil assessmentUtil)
        {
            _model = model;
            _currentUserId = currentUserId;
            _primaryEmail = primaryEmail;
            _accessKey = accessKey;
            _context = context;
            _token = token;
            _assessmentUtil = assessmentUtil;

            _mb = new Maturity.MaturityBusiness(_context, null, null);
            _cb = new Contact.ContactBusiness(_context, _assessmentUtil, _token, null, null, null);
            _assessmentBiz = new AssessmentBusiness(null, _token, null, _cb, null, _mb, _assessmentUtil, null, null, _context);


            //ignore the emass document we are not using it anyway.
            TinyMapper.Bind<jINFORMATION, INFORMATION>(config =>
            {
                config.Ignore(x => x.eMass_Document_Id);
                config.Ignore(x => x.Id);
            });
            TinyMapper.Bind<jASSESSMENT_CONTACTS, ASSESSMENT_CONTACTS>(config =>
            {
                config.Ignore(x => x.Assessment_Contact_Id);
            });
            TinyMapper.Bind<jFINDING, FINDING>(config =>
             {
                 config.Ignore(x => x.Finding_Id);
             });
            //copy the incoming information to an intermediary
            //then copy from the intermediary to destination
            //and permit updates.

            // RKW 22-MAR-19 - this was crashing with a StackOverflowException.  
            //TinyMapper.Bind<INFORMATION, INFORMATION>(config =>
            //{
            //    config.Ignore(x => x.Id);
            //    config.Ignore(x => x.IdNavigation);
            //    config.Ignore(x => x.ASSESSMENT);
            //});
        }


        /// <summary>
        /// Populates a few principal assessment tables.
        /// </summary>
        /// <param name="model"></param>
        /// <param name="currentUserId"></param>
        /// <param name="primaryEmail"></param>
        /// <param name="context"></param>
        /// <returns></returns>
        public int RunImportManualPortion()
        {
            //create the new assessment
            //copy each of the items to the table 
            //as the copy occurs change to the current assessment_id
            //update the answer id's             


           


            Dictionary<int, DOCUMENT_FILE> oldIdToNewDocument = new Dictionary<int, DOCUMENT_FILE>();            
            AssessmentDetail detail = _assessmentBiz.CreateNewAssessmentForImport(_currentUserId, _accessKey);
            int _assessmentId = detail.Id;

            Dictionary<int, int> oldAnswerId = new Dictionary<int, int>();
            Dictionary<int, ANSWER> oldIdNewAnswer = new Dictionary<int, ANSWER>();

            Dictionary<string, int> oldUserNewUser = _context.USERS.ToDictionary(x => x.PrimaryEmail, y => y.UserId);

            foreach(var a in _model.jASSESSMENTS)
            {
                var item = _context.ASSESSMENTS.Where(x => x.Assessment_Id == _assessmentId).FirstOrDefault();
                if (item != null)
                {
                    item.Diagram_Markup = a.Diagram_Markup;
                    item.Diagram_Image = a.Diagram_Image;

                    item.Assets = a.Assets;
                    item.Charter = a.Charter;
                    item.CreditUnionName = a.CreditUnionName;
                    item.IRPTotalOverride = a.IRPTotalOverride;
                    item.IRPTotalOverrideReason = a.IRPTotalOverrideReason;
                    item.MatDetail_targetBandOnly = a.MatDetail_targetBandOnly != null ? a.MatDetail_targetBandOnly : false;
                    item.Edit_Status = true;
                    _context.SaveChanges();
                }
            }

            foreach (var a in _model.jINFORMATION)
            {
                var item = _context.ASSESSMENTS.Where(x => x.Assessment_Id == _assessmentId).FirstOrDefault();
                if (item != null)
                {
                    item.Assessment_Date = a.Assessment_Date;
                    _context.SaveChanges();
                }
            }

            // go through the assessment contacts and: 
            // - if the contact does exist create it then add the id
            // - if the contact does exist update the id
            var dictAC = new Dictionary<int, int>();
            foreach (var a in _model.jASSESSMENT_CONTACTS)
            {
                // Don't create another primary contact, but map its ID
                if (a.PrimaryEmail == _primaryEmail)
                {
                    var newPrimaryContact = _context.ASSESSMENT_CONTACTS.Where(x => x.PrimaryEmail == _primaryEmail && x.Assessment_Id == _assessmentId).FirstOrDefault();
                    dictAC.Add(a.Assessment_Contact_Id, newPrimaryContact.Assessment_Contact_Id);
                    continue;
                }
                
                var item = TinyMapper.Map<ASSESSMENT_CONTACTS>(a);
                item.Assessment_Id = _assessmentId;
                item.PrimaryEmail = a.PrimaryEmail;
               
                if (a?.PrimaryEmail != null 
                    && oldUserNewUser.TryGetValue(a.PrimaryEmail, out int userid))
                {
                    item.UserId = userid;
                }
                else
                {
                    item.UserId = null;
                }

                _context.ASSESSMENT_CONTACTS.Add(item);
                _context.SaveChanges();
                int newId;
                if (a.Assessment_Contact_Id != 0)
                {
                    if (dictAC.TryGetValue(a.Assessment_Contact_Id, out newId))
                    {
                        dictAC.Add(newId, newId);
                        a.Assessment_Contact_Id = newId;
                    }
                    else
                    {
                        dictAC.Add(a.Assessment_Contact_Id, item.Assessment_Contact_Id);
                    }
                }
            }

            // map the primary keys so that they can be passed to the generic import logic
            this.mapIdentity.Add("ASSESSMENT_CONTACTS", dictAC);


            //
            foreach (var a in _model.jUSER_DETAIL_INFORMATION)
            {
                if (_context.USER_DETAIL_INFORMATION.Where(x => x.Id == a.Id).FirstOrDefault() == null)
                {
                    var userInfo = TinyMapper.Map<USER_DETAIL_INFORMATION>(a);
                    userInfo.FirstName = String.IsNullOrWhiteSpace(a.FirstName) ? "First Name" : a.FirstName;
                    userInfo.LastName = String.IsNullOrWhiteSpace(a.LastName) ? "Last Name" : a.LastName;
                    _context.USER_DETAIL_INFORMATION.Add(userInfo);
                    foreach (var b in a.jADDRESSes)
                    {
                        var item = TinyMapper.Map<ADDRESS>(b);
                        item.AddressType = "Imported";
                        _context.ADDRESS.Add(item);
                    }
                    _context.SaveChanges();
                }
            }

            return _assessmentId;
        }


        /// <summary>
        /// Processes the rest of the tables automatically. 
        /// </summary>
        /// <param name="jsonObject"></param>
        /// <param name="context"></param>
        internal void RunImportAutomatic(int assessmentId, string jsonObject, CSETContext context)
        {
            var genericImporter = new GenericImporter(assessmentId);
            genericImporter.SetManualIdentityMaps(this.mapIdentity);
            genericImporter.SaveFromJson(jsonObject, context);
        }


        /// <summary>
        /// Does a few final housekeeping tasks once all of the records have been imported.
        /// </summary>
        /// <param name="assessmentId"></param>
        public void Finalize(int assessmentId)
        {
            // set the feature flags on the ASSESSMENTS record
            _assessmentBiz.SetFeaturesOnAssessmentRecord(assessmentId);
        }
    }
}

