/* bouton decouvrir */
const bouton = document.querySelector("#btnMessage");
const message = document.querySelector("#message");
bouton.addEventListener("click", function() {
    message.textContent = "Merci de visiter Fati Designer !";
    message.style.color = "#B58A24";
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
/* traduction francais et arabe */
const langBtn = document.querySelector("#langBtn");
let langue = "fr";
langBtn.addEventListener("click", function() {
    if (langue === "fr") {
        document.documentElement.lang = "ar";
        document.body.dir = "rtl";
        document.querySelector("header h2").textContent =
            "الإبداعات الرقمية وخدمات الذكاء الاصطناعي";
        document.querySelector("header p").textContent =
            "رؤيتكم، إبداعنا.";
        document.querySelectorAll("nav ul li a")[0].textContent = "الرئيسية";
        document.querySelectorAll("nav ul li a")[1].textContent = "خدماتنا";
        document.querySelectorAll("nav ul li a")[2].textContent = "أعمالنا";
        document.querySelectorAll("nav ul li a")[3].textContent = "الطلبات";
        document.querySelector("#bienvenue h2").textContent =
            "مرحبا بكم في Fati Designer";
        document.querySelector("#bienvenue p:nth-of-type(1)").textContent =
            "يسعدنا استقبالكم في فضائنا للإبداع الرقمي.";
        document.querySelector("#bienvenue p:nth-of-type(2)").textContent =
            "اكتشفوا إبداعاتنا العصرية والأنيقة والمخصصة.";
        bouton.textContent = "اكتشف";
        document.querySelector("#presentation h2").textContent =
            "تقديم Fati Designer";
        document.querySelectorAll("#presentation p")[0].textContent =
            "Fati Designer فضاء متخصص في الإبداع الرقمي وخدمات الذكاء الاصطناعي.";
        document.querySelectorAll("#presentation p")[1].textContent =
            "هدفنا تحويل أفكاركم إلى إبداعات أصلية واحترافية.";
        document.querySelector("#avantages h2").textContent =
            "مميزاتنا";
        document.querySelectorAll(".avantage h3")[0].textContent =
            "عمل مخصص 100%";
        document.querySelectorAll(".avantage p")[0].textContent =
            "كل إبداع يتم إنجازه حسب احتياجات الحريف.";
        document.querySelectorAll(".avantage h3")[1].textContent =
            "أسعار في متناول الجميع";
        document.querySelectorAll(".avantage p")[1].textContent =
            "نقدم أسعارا مناسبة لجميع الميزانيات.";
        document.querySelectorAll(".avantage h3")[2].textContent =
            "الجودة والإبداع";
        document.querySelectorAll(".avantage p")[2].textContent =
            "ننجز إبداعات أصلية واحترافية.";
        document.querySelectorAll(".avantage h3")[3].textContent =
            "تخفيضات استثنائية";
        document.querySelectorAll(".avantage p")[3].textContent =
            "استفيدوا من عروضنا الخاصة وتخفيضاتنا.";
        document.querySelector("#contact h2").textContent =
            "اتصلوا بنا";
        document.querySelectorAll("#contact p")[0].textContent =
            "الهاتف: 92 527 202";
        document.querySelectorAll("#contact p")[1].innerHTML =
            'إنستغرام: <a href="https://www.instagram.com/fati_designer_officiel?hvrq=cnlwZThoN285dnE5">Fati Designer</a>';
        document.querySelectorAll("#contact p")[2].innerHTML =
            'فيسبوك: <a href="https://www.facebook.com/profile.php?id=61592477018297">Fati Designer</a>';
        document.querySelectorAll("footer p")[1].textContent =
            "رؤيتكم، إبداعنا.";
        bouton.textContent = "اكتشف";
        langBtn.textContent = "🌐 Français";
        langue = "ar";
    } else {
        document.documentElement.lang = "fr";
        document.body.dir = "ltr";
        location.reload();

    }
});
