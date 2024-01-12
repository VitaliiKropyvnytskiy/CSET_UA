//////////////////////////////// 
// 
//   Copyright 2023 Battelle Energy Alliance, LLC  
// 
// 
//////////////////////////////// 
using System.Collections.Generic;
using CSETWebCore.Interfaces.Maturity;
using CSETWebCore.Interfaces.Question;
using CSETWebCore.Model.Document;

namespace CSETWebCore.Interfaces.Document
{
    public interface IDocumentBusiness
    {
        void SetUserAssessmentId(int assessmentId);
        List<Model.Document.Document> GetDocumentsForAnswer(int answerId);
        void RenameDocument(int documentId, int? answerId, string title, int questionId, string questionType, IMaturityBusiness maturityBusiness, IQuestionRequirementManager questionRequirement);
        void DeleteDocument(int id, int questionId, int assessId);
        List<int> GetQuestionsForDocument(int id);
        void AddDocument(string title, int answerId, FileUploadStreamResult result);
        List<Model.Document.Document> GetDocumentsForAssessment(int assessmentId);
    }
}