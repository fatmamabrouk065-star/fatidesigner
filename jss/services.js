/* recuperation des boutons */
const boutons = [
    document.querySelector("#btn1"),
    document.querySelector("#btn2"),
    document.querySelector("#btn3"),
    document.querySelector("#btn4"),
    document.querySelector("#btn5"),
    document.querySelector("#btn6"),
    document.querySelector("#btn7"),
    document.querySelector("#btn8"),
    document.querySelector("#btn9"),
    document.querySelector("#btn10")
];
/* noms des services */
const nomsServices = [
    "CV Professionnel",
    "Logo & Branding",
    "Affiches & Flyers",
    "Certificats & Diplômes",
    "Aide aux devoirs & projets",
    "Cartes de visite",
    "Stickers personnalisés",
    "Rapports & Mémoires",
    "Présentations PowerPoint",
    "Invitations spéciales"
];

/* noms des services en arabe */
const nomsServicesAr = [
    "سيرة ذاتية احترافية",
    "الشعارات والهوية البصرية",
    "الملصقات والمنشورات الإعلانية",
    "الشهادات والدبلومات",
    "المساعدة في الواجبات والمشاريع",
    "بطاقات الزيارة",
    "ملصقات مخصصة",
    "التقارير والمذكرات",
    "عروض PowerPoint",
    "دعوات خاصة"
];
/* commander un service */
boutons.forEach(function(bouton, index) {

    if (bouton) {
        bouton.addEventListener("click", function() {

            window.location.href =
                "commande.html?service=" + (index + 1);

        });
    }
});
/* mode sombre */
const modeBtn = document.querySelector("#modeBtn");

if (modeBtn) {
    modeBtn.addEventListener("click", function() {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            modeBtn.textContent = "☀️ Mode clair";
        } else {
            modeBtn.textContent = "🌙 Mode sombre";
        }
    });
}

/* traduction francais et arabe */
const langBtn = document.querySelector("#langBtn");
let langue = "fr";

if (langBtn) {
    langBtn.addEventListener("click", function() {

        const liens = document.querySelectorAll("nav ul li a");
        const titres = document.querySelectorAll(".service h3");
        const descriptions = document.querySelectorAll(".service p");
        const commander = document.querySelectorAll(".service button");

        if (langue === "fr") {

            document.documentElement.lang = "ar";
            document.body.dir = "rtl";

            /* header */
            document.querySelector("header h2").textContent =
                "الإبداعات الرقمية وخدمات الذكاء الاصطناعي";

            document.querySelector("header p").textContent =
                "رؤيتكم، إبداعنا.";

            /* navigation */
            liens[0].textContent = "الرئيسية";
            liens[1].textContent = "خدماتنا";
            liens[2].textContent = "أعمالنا";
            liens[3].textContent = "الطلبات";

            /* bienvenue */
            document.querySelector("#bienvenue h2").textContent =
                "خدماتنا";

            document.querySelector("#bienvenue p").textContent =
                "اكتشفوا خدماتنا المختلفة في مجال الإبداع الرقمي. نقدم حلولا مخصصة لتلبية احتياجاتكم.";

            /* titre services */
            document.querySelector("#services h2").textContent =
                "خدماتنا المختلفة";

            /* descriptions en arabe */
            const descriptionsAr = [
                "إنشاء سير ذاتية عصرية واحترافية لإبراز مؤهلاتكم.",
                "تصميم شعارات وهويات بصرية مخصصة.",
                "تصميم ملصقات ومنشورات إعلانية جذابة.",
                "إنشاء شهادات ودبلومات أنيقة ومخصصة.",
                "المساعدة في إعداد الواجبات والمشاريع.",
                "تصميم بطاقات زيارة احترافية ومميزة.",
                "إنشاء ملصقات حسب أذواقكم وتفضيلاتكم.",
                "تنسيق وتنظيم التقارير والمذكرات.",
                "إنجاز عروض واضحة وعصرية واحترافية.",
                "إنشاء دعوات مخصصة لمناسباتكم."
            ];

            for (let i = 0; i < 10; i++) {

                titres[i].textContent =
                    (i + 1) + ". " + nomsServicesAr[i];

                descriptions[i].textContent =
                    descriptionsAr[i];

                commander[i].textContent =
                    "اطلب هذه الخدمة";
            }

            /* contact */
            document.querySelector("#contact h2").textContent =
                "هل لديك مشروع؟";

            document.querySelectorAll("#contact p")[0].textContent =
                "اتصلوا بنا لطلب إبداعكم.";

            document.querySelectorAll("#contact p")[1].textContent =
                "الهاتف: 92 527 202";

            document.querySelector("#contact a").textContent =
                "تقديم طلب";

            /* footer */
            document.querySelectorAll("footer p")[1].textContent =
                "رؤيتكم، إبداعنا.";

            langBtn.textContent = "🌐 Français";
            langue = "ar";

        } else {
            location.reload();
        }
    });
}
