/* presentation button */
const bouton = document.querySelector("#btnPortfolio");
const message = document.querySelector("#message");
bouton.addEventListener("click", function() {
    if (langue === "fr") {
        message.textContent =
            "Bienvenue dans notre galerie de créations Fati Designer !";
    } else {
        message.textContent =
            "مرحبا بكم في معرض إبداعات Fati Designer!";
    }
});
/* image zoom */
const images = document.querySelectorAll(
    ".carte img, .carte-avis img"
);
const lightbox = document.querySelector("#lightbox");
const imageGrand = document.querySelector("#imageGrand");
const fermer = document.querySelector("#fermer");
const zoomPlus = document.querySelector("#zoomPlus");
const zoomMoins = document.querySelector("#zoomMoins");
let zoom = 1;
images.forEach(function(image) {
    image.addEventListener("click", function() {
        lightbox.style.display = "flex";
        imageGrand.src = image.src;
        imageGrand.alt = image.alt;

        zoom = 1;
        imageGrand.style.transform = "scale(1)";
    });
});

/* zoom in */
zoomPlus.addEventListener("click", function() {
    if (zoom < 3) {
        zoom = zoom + 0.2;
        imageGrand.style.transform = "scale(" + zoom + ")";
    }
});

/* zoom out */
zoomMoins.addEventListener("click", function() {
    if (zoom > 0.6) {
        zoom = zoom - 0.2;
        imageGrand.style.transform = "scale(" + zoom + ")";
    }
});
/* close image */
fermer.addEventListener("click", function() {
    lightbox.style.display = "none";
});
/* close by clicking outside image */
lightbox.addEventListener("click", function(event) {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
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
let langue = "fr";
langBtn.addEventListener("click", function() {
    if (langue === "fr") {
        document.documentElement.lang = "ar";
        document.body.dir = "rtl";
        /* header */
        document.querySelector("header h1").textContent = "فاتي ديزاينر";
        const headerP = document.querySelectorAll("header p");
        headerP[0].textContent = "رؤيتكم، إبداعنا";
        headerP[1].textContent = "إبداعات رقمية وخدمات الذكاء الاصطناعي";
        /* navigation */
        const liens = document.querySelectorAll("nav a");
        liens[0].textContent = "الرئيسية";
        liens[1].textContent = "خدماتنا";
        liens[2].textContent = "معرض الأعمال";
        liens[3].textContent = "الطلب";
        /* presentation */
        document.querySelector(".presentation h2").textContent = "معرض أعمالنا";
        document.querySelector(".presentation p").textContent =
            "اكتشفوا مجموعة من تصاميمنا وإبداعاتنا الرقمية.";
        bouton.textContent = "اكتشف أعمالنا";
        /* sections */
        const titres = document.querySelectorAll(".creations h2");
        const titresAr = [
            "الشعارات والهوية البصرية",
            "السير الذاتية الاحترافية",
            "الملصقات والمنشورات الإعلانية",
            "بطاقات أعياد الميلاد",
            "بطاقات الزيارة",
            "الشهادات والدبلومات",
            "الملصقات والملصقات المخصصة",
            "الملصقات الإعلانية",
            "الفواصل المرجعية"
        ];
        titres.forEach(function(titre, index) {
            if (titresAr[index]) {
                titre.textContent = titresAr[index];
            }
        });
        /* videos */
        document.querySelector(".videos h2").textContent = "فيديوهات أعمالنا";
        /* client reviews */
        document.querySelector(".avis h2").textContent = "آراء حرفائنا";
        /* prix */
        document.querySelector(".tarifs h2").textContent = "أسعار خدماتنا";
        document.querySelector(".intro-tarifs").textContent =
            "اكتشفوا أسعار خدماتنا المختلفة.";
        /* order */
        document.querySelector(".commande h2").textContent = "اطلبوا خدمتكم";
        document.querySelector(".commande p").textContent =
            "تواصلوا معنا لإنجاز تصميمكم الخاص.";
        document.querySelector(".commande a").textContent = "اطلب الآن";
        /* footer */
        document.querySelector("footer h3").textContent = "اتصلوا بنا";
        langBtn.textContent = "🌐 Français";
        langue = "ar";
    } else {
        location.reload();

    }
});
