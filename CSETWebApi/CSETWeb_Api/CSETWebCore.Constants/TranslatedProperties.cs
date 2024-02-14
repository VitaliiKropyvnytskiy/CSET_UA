using System.Collections.Generic;


namespace CSETWebCore.Constants
{
    public static class TranslatedProperties
    {
        public static Dictionary<string, string> PropertyNames = new Dictionary<string, string>
        {
            { "CriticalService", "Критична служба" },
            { "OrganizationType", "Тип організації" },
            { "OrganizationName", "Назва організації" },
            { "Sector", "Сектор" },
            { "Subsector", "Підсектор" },
            { "NumberEmployeesTotal", "Кількість працівників державного органу" },
            { "NumberEmployeesUnit", "Кількість працівників у відділі" },
            { "AnnualRevenue", "Загальний річний дохід організації" },
            { "CriticalServiceRevenuePercent", "Відсоток річного доходу вашої організації, який залежить від критично важливої послуги" },
            { "CriticalDependencyIncidentResponseSupport", "Критична залежність для підтримки реагування на інциденти" },
            { "NumberPeopleServedByCritSvc", "Кількість людей, які щорічно обслуговуються критично важливою службою" },
            { "DisruptedSector1", "Перший критичний сектор інфраструктури" },
            { "DisruptedSector2", "Другий критичний сектор інфраструктури" },
            { "Standard1", "Перший стандарт" },
            { "Standard2", "Другий стандарт" },
            { "RegulationType1", "Перший тип регулювання" },
            { "RegulationType2", "Другий тип регулювання" },
            { "Barrier1", "Перша перешкода" },
            { "Barrier2", "Друга перешкода" },
            { "BusinessUnit", "Підрозділ" },
            { "CriticalServiceDescription", "Опис критичної служби" },
            { "ItIcsName", "Назва IT/ICS системи" },
            { "BudgetBasis", "Основа бюджету кібербезпеки для цієї критично важливої служби" },
            { "AuthorizedOrganizationalUserCount", "Кількість авторизованих організаційних користувачів" },
            { "AuthorizedNonOrganizationalUserCount", "Кількість авторизованих неорганізаційних користувачів" },
            { "CustomersCount", "Кількість клієнтів" },
            { "ItIcsStaffCount", "Кількість ІТ/ICS керівництва та персоналу" },
            { "CybersecurityItIcsStaffCount", "Кількість керівних кадрів і персоналу з кібербезпеки IT/ICS" },
            { "NetworksDescription", "Опис мереж" },
            { "ServicesDescription", "Опис сервісів" },
            { "ApplicationsDescription", "Опис додатків" },
            { "ConnectionsDescription", "Опис зв'язків" },
            { "PersonnelDescription", "Опис персоналу" },
            { "PrimaryDefiningSystem", "Кіберсистема, що визначає критичну службу" },
            {"Question_Id","ID питання"},
            {"Question_Group_Heading","Заголовок групи питань"},
            {"Simple_Question","Питання"},
            {"Requirement_Title","Назва вимоги"},
            {"Answer_Text","Відповідь"},
            {"Mark_For_Review","Позначено для перегляду"},
            {"Is_Question","Модель питання?"},
            {"Is_Requirement","Модель вимоги?"},
            {"Is_Maturity","Модель зрілості?"},
            {"Is_Component","Модель компоненту?"},
            {"Is_Framework","Модель структури?"},
            {"Answer_Id","ID відповіді"},
            {"Comment","Коментар"},
            {"Alternate_Justification","Альтернативне обгрунтування"},
            {"Component_Guid" , "ID компонента"},
            {"Version","Версія" }
        };
    }
}
