const translations = {
    en: {
        welcome: "Welcome to the MCQ Quiz",
        aboutWalk:"About walking",
        path:"Walk paths 30",
        Partners:"Partners",
        walkdescription:"It is a qualitative initiative for the year 2023 that includes all interventions in previous years in two months of this year. This is to change society and motivate it to increase the rates of physical activity 150 minutes 3-5 times a week, which is consistent with the Kingdom’s 2030 vision and direction to increase the average age from 74 to 80 years.",
        start:"Start the Personal Knowledge Test"
        // Add more translations for other elements as needed
    },
    ar: {
        welcome: "مرحبًا بك في اختبار الاختيار من متعدد",
        aboutWalk:"عن رياضة المشي",
        path:"مسارات امش 30",
        Partners:"الشركاء",
        walkdescription:"هي مبادرة نوعية لعام 2023 تضم جميع التدخلات في السنوات السابقة في شهرين من هذا العام. وذلك لتغيير المجتمع وتحفيزه لزيادة معدلات ممارسة النشاط البدني 150 دقيقة 3-5 مرات أسبوعياً مما يتناسب مع توجه ورؤية المملكة 2030 بزيادة متوسط الأعمار من 74 إلى 80 عاماً.",
        start:"ابدأ اختبار المعرفة الشخصية"
        // Add more translations for other elements as needed
    },
};

// Function to set the language based on the selected language
function setLanguage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach((element) => {
        const translationKey = element.getAttribute('data-translate');
        element.textContent = translations[language][translationKey];
    });

    // Set the lang attribute of the HTML element
    document.documentElement.lang = language;
    document.getElementById("dropdownMenuLink").innerHTML = document.documentElement.lang.toUpperCase()

    // Save the selected language in localStorage
    localStorage.setItem('selectedLanguage', language);
}

// Function to initialize the language based on localStorage
function initializeLanguage() {
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
        setLanguage(selectedLanguage);
    }
}

// Event listener for the language dropdown
document.querySelectorAll('.dropdown-item').forEach((item) => {
    item.addEventListener('click', (e) => {
        const selectedLanguage = e.target.textContent.toLowerCase();
        setLanguage(selectedLanguage);
    });
});

// Initialize the language based on localStorage
initializeLanguage();
