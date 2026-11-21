/* recuperation du formulaire */
const formulaire = document.querySelector("#formCommande");
const message = document.querySelector("#message");
/* recuperer le service choisi depuis services */
const selectService = document.querySelector("#service");
const parametres = new URLSearchParams(window.location.search);
const numeroService = Number(parametres.get("service"));
if (numeroService >= 1 && numeroService <= 10) {
    selectService.selectedIndex = numeroService;
}
/* langue */
let langue = "fr";
/* envoyer la commande */
formulaire.addEventListener("submit", function(event) {
    event.preventDefault();
    if (langue === "fr") {
        message.textContent =
            "Merci ! Votre commande a ete prise en compte.";
    } else {
        message.textContent =
            "شكرا لك! تم استلام طلبك بنجاح.";
    }
    message.style.color = "#B58A24";
});
/* reinitialisation du formulaire */
formulaire.addEventListener("reset", function() {
    message.textContent = "";
});
/* mode sombre */
const modeBtn = document.querySelector("#modeBtn");
modeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        modeBtn.textContent = "☀️ Mode clair";
    } else {
        modeBtn.textContent = "🌙 Mode sombre";
    }
});
/* traduction */
const langBtn = document.querySelector("#langBtn");
langBtn.addEventListener("click", function() {
    const headerP = document.querySelector("header p");
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("main section");
    const labels = document.querySelectorAll("form label");
    const inputs = document.querySelectorAll("form input, form textarea");
    const options = document.querySelectorAll("#service option");
    const buttons = document.querySelectorAll(".boutons button");
    if (langue === "fr") {
        document.documentElement.lang = "ar";
        document.body.dir = "rtl";
        /* header */
        document.querySelector("header h1").textContent = "فاتي ديزاينر";
        document.querySelector("header h2").textContent =
            "إبداعات رقمية وخدمات الذكاء الاصطناعي";
        headerP.textContent = "رؤيتكم، إبداعنا";
        /* navigation */
        navLinks[0].textContent = "الرئيسية";
        navLinks[1].textContent = "خدماتنا";
        navLinks[2].textContent = "معرض الأعمال";
        navLinks[3].textContent = "الطلبات";
        /* bienvenue */
        sections[0].querySelector("h2").textContent = "تقديم طلب";
        sections[0].querySelector("p").textContent =
            "هل اخترتم إحدى خدماتنا؟ املؤوا الاستمارة التالية لإرسال طلبكم.";
        /* formulaire */
        sections[1].querySelector("h2").textContent = "استمارة الطلب";
        const labelsAr = [
            "الاسم واللقب:",
            "العنوان:",
            "البريد الإلكتروني:",
            "رقم الهاتف:",
            "اختاروا الخدمة:",
            "وصف المشروع:",
            "تاريخ التسليم المطلوب:",
            "ملاحظات أخرى:"
        ];
        labels.forEach(function(label, index) {
            const etoile = label.querySelector(".obligatoire");

            label.textContent = labelsAr[index];

            if (etoile) {
                label.appendChild(etoile);
            }
        });
        /* placeholders */
        inputs[0].placeholder = "أدخل اسمك ولقبك";
        inputs[1].placeholder = "أدخل عنوانك";
        inputs[2].placeholder = "أدخل بريدك الإلكتروني";
        inputs[3].placeholder = "أدخل رقم هاتفك";
        inputs[4].placeholder = "صف طلبك هنا...";
        inputs[5].placeholder = "ملاحظاتك (اختياري)...";
        /* services */
        const servicesAr = [
            "-- اختر خدمة --",
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
        options.forEach(function(option, index) {
            option.textContent = servicesAr[index];
        });
        /* buttons */
        buttons[0].textContent = "إرسال الطلب";
        buttons[1].textContent = "إعادة تعيين";
        /* contact */
        document.querySelector("#contact h2").textContent =
            "هل تحتاجون إلى معلومات؟";
        const contactP = document.querySelectorAll("#contact p");
        contactP[0].textContent = "الهاتف: 92 527 202";
        contactP[1].textContent =
            "نحن هنا للإجابة عن جميع أسئلتكم.";
        /* footer */
        document.querySelector("footer p:last-child").textContent =
            "رؤيتكم، إبداعنا";
        langBtn.textContent = "🌐 Français";
        langue = "ar";
    } else {
        location.reload();

    }
});
