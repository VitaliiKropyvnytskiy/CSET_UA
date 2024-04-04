using CSETWebCore.Api.Models;
using CSETWebCore.DataLayer.Model;
using CSETWebCore.Enum;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSETWebCore.Business.RepositoryLibrary
{
    internal class HtmlNode : ResourceNode
    {
        public HtmlNode(string htmlDirectory, GEN_FILE doc)
            : base(doc)
        {
            Type = ResourceNodeType.PDFDoc;
            PathDoc = htmlDirectory + doc.File_Name;
            FileName = doc.File_Name;
        }
    }
}
