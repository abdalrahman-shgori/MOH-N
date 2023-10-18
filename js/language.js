const translations = {
    en: {
        welcome: "Welcome to the MCQ Quiz",
        aboutWalk: "About walking",
        path: "Walk paths 30",
        Partners: "Partners",
        walkdescription: "It is a qualitative initiative for the year 2023 that includes all interventions in previous years in two months of this year. This is to change society and motivate it to increase the rates of physical activity 150 minutes 3-5 times a week, which is consistent with the Kingdom’s 2030 vision and direction to increase the average age from 74 to 80 years.",
        start: "Start the Personal Knowledge Test",
        whatHappens: "?What happens if you walk thirty minutes a day ",
        whatHappens1: "Improve your physical fitness",
        whatHappens2: "Protects you from the risk of chronic diseases",
        whatHappens3: "It helps you lower the level of harmful cholesterol in the body",
        whatHappens4: "Reduces anxiety and depression and improves mood",
        whatHappens5: "Maintains joint flexibility and muscle strength",
        whatHappens6: "Improves balance and blood circulation in the body",
        ideastowalk: "Ideas to Walk Throughout the Day",
        idea1: "Park your car farther from your destination",
        idea2: "Walk with friends instead of sitting in one place all the time",
        idea3: "Go for a walk with family members",
        idea4: "Take short walks during work breaks instead of wasting all your time sitting",
        idea5: "Use stairs instead of elevators in the places you go to",
        idea6: "Listen to audio clips to make walking more enjoyable",
        idea7: "Set specific goals and track your progress",
        idea8: "Use smartphone apps to motivate you for more walking",
        idea9: "Every time you go out for a walk: change the places, change the company, change the podcast you listen to, so you don't get bored",
        differenceBetweenWalking: "?What is the difference between walking for exercise and regular walking",
        properWalking: "Proper walking means covering approximately one and a half kilometers with brisk walking, not strolling, and you can use smartphone apps to track the distance .",
        aboutWalking: "About walking exercise",
        walkPaths: "Walk for 30 minutes",
        walkingPersonalityTitle: "Your Personality in Walking",
        walkingPersonalityDescription: "A test that measures an individual's level of walking exercise and provides solutions for continued progress",
        walkingPersonalityBtnText: "Take the test now",
        whoisPartners: "Who are our partners?",
        walkDescription: "Walking is a fun sport with many levels. It starts with walking for thirty minutes daily for five days a week.",
        testPersonality:"Test your personality",
        walk30:"walk 30",
        namePlaceholder: "Name",


    },
    ar: {
        welcome: "مرحبًا بك في اختبار الاختيار من متعدد",
        aboutWalk: "عن رياضة المشي",
        path: "مسارات امش 30",
        Partners: "الشركاء",
        walkdescription: "هي مبادرة نوعية لعام 2023 تضم جميع التدخلات في السنوات السابقة في شهرين من هذا العام. وذلك لتغيير المجتمع وتحفيزه لزيادة معدلات ممارسة النشاط البدني 150 دقيقة 3-5 مرات أسبوعياً مما يتناسب مع توجه ورؤية المملكة 2030 بزيادة متوسط الأعمار من 74 إلى 80 عاماً.",
        start: "ابدأ اختبار المعرفة الشخصية",
        whatHappens: "ماذا يحدث إذا مشيت لمدة ثلاثين دقيقة يومياً؟",
        whatHappens1: "تحسين لياقتك البدنية",
        whatHappens2: "حمايتك من خطر الأمراض المزمنة",
        whatHappens3: "يساعد في خفض مستوى الكولسترول الضار في الجسم",
        whatHappens4: "تقليل القلق والاكتئاب وتحسين المزاج",
        whatHappens5: "الحفاظ على مرونة المفاصل وقوة العضلات",
        whatHappens6: "تحسن التوازن وتدفق الدم في الجسم",
        ideastowalk: "أفكار للمشي خلال اليوم",
        idea1: "قف سيارتك بعيدًا عن وجهتك",
        idea2: "امش مع أصدقائك بدلاً من الجلوس في مكان واحد طوال الوقت",
        idea3: "انطلق للنزهة مع أفراد عائلتك",
        idea4: "قم بمشيات قصيرة خلال استراحات العمل بدلاً من إضاعة الوقت بالجلوس",
        idea5: "استخدم السلالم بدلاً من المصاعد في الأماكن التي تذهب إليها",
        idea6: "استمع إلى مقاطع صوتية لتجعل المشي ممتعًا",
        idea7: "حدد أهدافًا محددة وقم بمتابعة تقدمك",
        idea8: "استخدم تطبيقات الهواتف الذكية لتحفيزك على المزيد من المشي",
        idea9: "كل مرة تخرج للمشي: غير الأماكن، غير الرفقة، غير البودكاست الذي تسمعه، حتى لا تشعر بالملل",
        differenceBetweenWalking: "ما الفرق بين رياضة المشي والمشي العادي؟",
        properWalking: "المشي الصحيح يعني أن تقطع كيلو متر ونصف تقريباً، بالمشي المتسارع وليس التمشية، ويمكن الاستعانة بتطبيقات الأجهزة الذكية لحساب المسافة المقطوعة.",
        aboutWalking: "عن رياضة المشي",
        walkPaths: "مسارات امش 30",
        walkingPersonalityTitle: "شخصيتك في المشي",
        walkingPersonalityDescription: "اختبار يقيس مستوى الشخص في ممارسة المشي ، ويقدم حلول للستمرار",
        walkingPersonalityBtnText: "اختبر الآن واعرف شخصيتك",
        whoisPartners: "من هم شركاؤنا",
        walkDescription: "رياضة المشي رياضة ممتعة ولها مستويات كثيرة تبدأ بالمشي ثلاثين دقيقة يومياً لمدة خمسة أيام في الأسبوع.",
        testPersonality:"اختبر شخصيتك",
        walk30:"امش 30",
        namePlaceholder: ":اسمك",


    },
};

function setLanguage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach((element) => {
        const translationKey = element.getAttribute('data-translate');
        element.textContent = translations[language][translationKey];
    });

    document.documentElement.lang = language;
    document.getElementById("dropdownMenuLink").innerHTML = document.documentElement.lang.toUpperCase()

    localStorage.setItem('selectedLanguage', language);
}

function initializeLanguage() {
    
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    
    if (selectedLanguage) {
        setLanguage(selectedLanguage);
    }
    document.getElementById("dropdownMenuLink").innerHTML = document.documentElement.lang.toUpperCase()
    setLanguage(selectedLanguage);
    if(selectedLanguage === "ar") {
        document.getElementById('nameInput').placeholder=" : اسمك"
    
    }
    else if (selectedLanguage === "en"){
        document.getElementById('nameInput').placeholder="Name :"
    
    }
    
}

document.querySelectorAll('.dropdown-item').forEach((item) => {
    item.addEventListener('click', (e) => {
        const selectedLanguage = e.target.textContent.toLowerCase();
        setLanguage(selectedLanguage);
        if(selectedLanguage === "ar") {
            document.getElementById('nameInput').placeholder=" : اسمك"        
        }
        else if (selectedLanguage === "en"){
            document.getElementById('nameInput').placeholder="Name :"
        
        }
        
    });
    
});

initializeLanguage();



