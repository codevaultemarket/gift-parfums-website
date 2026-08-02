"use strict";

/* ==========================================================================
   GIFT PARFUMS — LUXURY CINEMATIC WEBSITE
   File: js/app.js
   ========================================================================== */


/* ==========================================================================
   01. WEBSITE CONFIGURATION
   ========================================================================== */

const APP_CONFIG = Object.freeze({
    brandName: "Gift Parfums",
    location: "Marrakech, Morocco",

    /*
     * ضع رقم WhatsApp الحقيقي هنا بصيغة دولية:
     * مثال مغربي:
     * 212612345678
     *
     * من دون:
     * +
     * مسافات
     * شرطات
     */
    whatsappNumber: "212600000000",

    currency: "MAD",
    defaultLanguage: "ar",

    loaderMinimumDuration: 1800,
    toastDuration: 3500,
    searchMinimumCharacters: 1,
    contactMessageMaximumLength: 500,

    storageKeys: {
        cart: "gift_parfums_cart_v1",
        wishlist: "gift_parfums_wishlist_v1",
        cookies: "gift_parfums_cookie_consent_v1",
        language: "gift_parfums_language_v1",
        announcement: "gift_parfums_announcement_v1"
    }
});


/* ==========================================================================
   02. PRODUCT DATABASE
   ========================================================================== */

const PRODUCTS = Object.freeze({
    "suprem-bouquet": {
        id: "suprem-bouquet",
        brand: "Gift Parfums",
        name: "Suprem Bouquet",
        subtitle: "Eau de Parfum",
        category: ["signature", "women"],
        audience: "للنساء ولعشاق الروائح الفاخرة",
        family: ["floral", "warm", "amber"],
        occasion: ["evening", "special"],
        intensity: ["medium", "intense"],
        presence: ["balanced", "strong"],

        description:
            "تركيبة عطرية فاخرة مستوحاة من أضواء مراكش الذهبية، تجمع بين الإشراقة الناعمة، القلب الزهري الغني والقاعدة الدافئة التي تمنح العطر حضورًا أنيقًا وثابتًا.",

        shortDescription:
            "رائحة زهرية دافئة وفاخرة بتوقيع ذهبي مميز.",

        notes: {
            top: "نفحات مضيئة ومنعشة",
            heart: "باقة زهرية دافئة",
            base: "عنبر، أخشاب ولمسة مخملية"
        },

        image: "assets/images/products/suprem-bouquet-gold.jpg",

        gallery: [
            "assets/images/products/suprem-bouquet-gold.jpg",
            "assets/images/products/suprem-bouquet-oriental.jpg",
            "assets/images/products/perfume-collection.jpg"
        ],

        sizes: ["30ml", "50ml", "100ml"],
        defaultSize: "50ml",
        rating: 5,
        badge: "SIGNATURE"
    },

    "bleu-de-chanel": {
        id: "bleu-de-chanel",
        brand: "Men Collection",
        name: "Bleu de Chanel",
        subtitle: "Pour Homme",
        category: ["men"],
        audience: "للرجال",
        family: ["fresh", "woody"],
        occasion: ["daily", "evening"],
        intensity: ["medium"],
        presence: ["balanced", "strong"],

        description:
            "رائحة عصرية تجمع بين الانتعاش والنفحات الخشبية الداكنة. تمنح حضورًا هادئًا وواثقًا، وتناسب الاستخدام اليومي والإطلالات المسائية الأنيقة.",

        shortDescription:
            "عطر منعش وخشبي بحضور عصري وواثق.",

        notes: {
            top: "حمضيات وانتعاش عطري",
            heart: "أعشاب وتوابل ناعمة",
            base: "أخشاب وبخور دافئ"
        },

        image: "assets/images/products/bleu-de-chanel.jpg",

        gallery: [
            "assets/images/products/bleu-de-chanel.jpg",
            "assets/images/products/perfume-collection.jpg"
        ],

        sizes: ["30ml", "50ml", "100ml"],
        defaultSize: "50ml",
        rating: 5,
        badge: "MEN"
    },

    "versace-eros": {
        id: "versace-eros",
        brand: "Men Collection",
        name: "Versace Eros",
        subtitle: "Eau de Toilette",
        category: ["men"],
        audience: "للرجال",
        family: ["fresh", "woody", "warm"],
        occasion: ["evening", "special"],
        intensity: ["intense"],
        presence: ["strong"],

        description:
            "عطر نابض بالطاقة يجمع بين الانتعاش والدفء والقوة. مناسب لمن يريد رائحة ملفتة وحضورًا واضحًا في المناسبات واللقاءات المسائية.",

        shortDescription:
            "رائحة قوية، منعشة ودافئة للمناسبات المسائية.",

        notes: {
            top: "نعناع وانتعاش حيوي",
            heart: "نفحات عطرية دافئة",
            base: "أخشاب وفانيلا وعنبر"
        },

        image: "assets/images/products/versace-eros.jpg",

        gallery: [
            "assets/images/products/versace-eros.jpg",
            "assets/images/products/perfume-collection.jpg"
        ],

        sizes: ["30ml", "50ml", "100ml"],
        defaultSize: "50ml",
        rating: 5,
        badge: "MEN"
    },

    "candy-love": {
        id: "candy-love",
        brand: "Women Collection",
        name: "Candy Love",
        subtitle: "Eau de Parfum",
        category: ["women"],
        audience: "للنساء",
        family: ["floral", "sweet"],
        occasion: ["daily", "evening"],
        intensity: ["light", "medium"],
        presence: ["soft", "balanced"],

        description:
            "رائحة ناعمة وحلوة تجمع بين الطابع الزهري واللمسات الأنثوية الدافئة، مناسبة للاستعمال اليومي ولمن تفضل عطرًا لطيفًا وقريبًا.",

        shortDescription:
            "عطر أنثوي ناعم، زهري وحلو بلمسة رومانسية.",

        notes: {
            top: "نفحات حلوة ومشرقة",
            heart: "زهور ناعمة",
            base: "فانيلا ومسك دافئ"
        },

        image: "assets/images/products/perfume-collection.jpg",

        gallery: [
            "assets/images/products/perfume-collection.jpg",
            "assets/images/products/suprem-bouquet-gold.jpg"
        ],

        sizes: ["30ml", "50ml", "100ml"],
        defaultSize: "50ml",
        rating: 5,
        badge: "WOMEN"
    }
});


/* ==========================================================================
   03. TRANSLATION DATABASE
   ========================================================================== */

const LANGUAGE_DATA = Object.freeze({
    ar: {
        code: "AR",
        htmlLang: "ar",
        htmlDirection: "rtl",
        cartAdded: "تمت إضافة العطر إلى السلة.",
        cartRemoved: "تم حذف العطر من السلة.",
        wishlistAdded: "تمت إضافة العطر إلى المفضلة.",
        wishlistRemoved: "تم حذف العطر من المفضلة.",
        chooseQuizAnswer: "اختر إجابة قبل الانتقال إلى السؤال التالي.",
        formInvalid: "يرجى التأكد من المعلومات المطلوبة.",
        newsletterSuccess: "شكرًا لك، تم تسجيل بريدك بنجاح.",
        newsletterInvalid: "أدخل بريدًا إلكترونيًا صحيحًا.",
        copied: "تم النسخ بنجاح.",
        videoSoundOn: "إيقاف الصوت",
        videoSoundOff: "تشغيل الصوت",
        noSearchResults: "لم نعثر على عطر يطابق عملية البحث.",
        searchStart: "ابدأ بكتابة اسم العطر الذي تبحث عنه.",
        orderReady: "سيتم فتح WhatsApp لإكمال الطلب."
    },

    fr: {
        code: "FR",
        htmlLang: "fr",
        htmlDirection: "ltr",
        cartAdded: "Le parfum a été ajouté au panier.",
        cartRemoved: "Le parfum a été retiré du panier.",
        wishlistAdded: "Le parfum a été ajouté aux favoris.",
        wishlistRemoved: "Le parfum a été retiré des favoris.",
        chooseQuizAnswer: "Choisissez une réponse avant de continuer.",
        formInvalid: "Veuillez vérifier les informations demandées.",
        newsletterSuccess: "Merci, votre adresse a été enregistrée.",
        newsletterInvalid: "Saisissez une adresse e-mail valide.",
        copied: "Copié avec succès.",
        videoSoundOn: "Désactiver le son",
        videoSoundOff: "Activer le son",
        noSearchResults: "Aucun parfum ne correspond à votre recherche.",
        searchStart: "Commencez à saisir le nom du parfum.",
        orderReady: "WhatsApp va s’ouvrir pour finaliser la commande."
    },

    en: {
        code: "EN",
        htmlLang: "en",
        htmlDirection: "ltr",
        cartAdded: "The perfume was added to your cart.",
        cartRemoved: "The perfume was removed from your cart.",
        wishlistAdded: "The perfume was added to your wishlist.",
        wishlistRemoved: "The perfume was removed from your wishlist.",
        chooseQuizAnswer: "Choose an answer before continuing.",
        formInvalid: "Please review the required information.",
        newsletterSuccess: "Thank you. Your email has been registered.",
        newsletterInvalid: "Enter a valid email address.",
        copied: "Copied successfully.",
        videoSoundOn: "Mute sound",
        videoSoundOff: "Play sound",
        noSearchResults: "No perfume matches your search.",
        searchStart: "Start typing the perfume name.",
        orderReady: "WhatsApp will open to complete your order."
    }
});


/* ==========================================================================
   04. APPLICATION STATE
   ========================================================================== */

const appState = {
    cart: [],
    wishlist: [],
    currentLanguage: APP_CONFIG.defaultLanguage,
    activeProductId: null,
    activeProductSize: null,
    activeProductQuantity: 1,
    activeFilter: "all",
    quizStep: 1,
    quizAnswers: {},
    testimonialIndex: 0,
    videoIsPlaying: true,
    videoSoundEnabled: false,
    lastScrollPosition: 0,
    scrollTicking: false,
    mouseTicking: false,
    loaderFinished: false
};


/* ==========================================================================
   05. DOM UTILITIES
   ========================================================================== */

const DOM = {
    select(selector, parent = document) {
        return parent.querySelector(selector);
    },

    selectAll(selector, parent = document) {
        return Array.from(parent.querySelectorAll(selector));
    },

    byId(id) {
        return document.getElementById(id);
    },

    exists(element) {
        return element instanceof Element || element instanceof HTMLDocument;
    }
};


function clamp(value, minimum = 0, maximum = 1) {
    return Math.min(Math.max(value, minimum), maximum);
}


function lerp(start, end, progress) {
    return start + (end - start) * progress;
}


function normalizeText(value = "") {
    return String(value)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[أإآ]/g, "ا")
        .replace(/ة/g, "ه")
        .replace(/ى/g, "ي")
        .trim();
}


function escapeHTML(value = "") {
    const element = document.createElement("div");
    element.textContent = String(value);
    return element.innerHTML;
}


function getCurrentTranslations() {
    return (
        LANGUAGE_DATA[appState.currentLanguage] ||
        LANGUAGE_DATA[APP_CONFIG.defaultLanguage]
    );
}


function safeJSONParse(value, fallback) {
    try {
        const parsed = JSON.parse(value);
        return parsed ?? fallback;
    } catch (error) {
        return fallback;
    }
}


function readStorage(key, fallback) {
    try {
        const value = localStorage.getItem(key);

        if (value === null) {
            return fallback;
        }

        return safeJSONParse(value, fallback);
    } catch (error) {
        console.warn("Local storage could not be read:", error);
        return fallback;
    }
}


function writeStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.warn("Local storage could not be updated:", error);
        return false;
    }
}


function removeStorage(key) {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.warn("Local storage item could not be removed:", error);
    }
}


function formatTime(seconds) {
    if (!Number.isFinite(seconds)) {
        return "00:00";
    }

    const roundedSeconds = Math.max(0, Math.floor(seconds));
    const minutes = Math.floor(roundedSeconds / 60);
    const remainingSeconds = roundedSeconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
        remainingSeconds
    ).padStart(2, "0")}`;
}


function buildWhatsAppURL(message) {
    const phone = APP_CONFIG.whatsappNumber.replace(/\D/g, "");
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}


function openWhatsApp(message) {
    const url = buildWhatsAppURL(message);
    window.open(url, "_blank", "noopener,noreferrer");
}


function getProduct(productId) {
    return PRODUCTS[productId] || null;
}


function scrollToElement(target, offset = 0) {
    const element =
        typeof target === "string" ? DOM.select(target) : target;

    if (!element) {
        return;
    }

    const top =
        element.getBoundingClientRect().top +
        window.scrollY -
        offset;

    window.scrollTo({
        top,
        behavior: prefersReducedMotion() ? "auto" : "smooth"
    });
}


function prefersReducedMotion() {
    return window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;
}


/* ==========================================================================
   06. INITIALIZATION
   ========================================================================== */

document.addEventListener("DOMContentLoaded", initializeApplication);

function initializeApplication() {
    restoreApplicationState();
    initializeCurrentYear();
    initializePageLoader();
    initializeAnnouncementBar();
    initializeHeader();
    initializeSmoothNavigation();
    initializeMobileMenu();
    initializeLanguageMenu();
    initializeHeroVideo();
    initializeCustomCursor();
    initializeParticles();
    initializeScrollEffects();
    initializeRevealAnimations();
    initializeProductInteractions();
    initializeProductModal();
    initializeCart();
    initializeWishlist();
    initializeSearch();
    initializeCollectionFilters();
    initializeCollectionViews();
    initializeQuiz();
    initializeTestimonials();
    initializeContactForm();
    initializeNewsletter();
    initializeCookieNotice();
    initializeBackToTop();
    initializeKeyboardAccessibility();
    initializeImageErrorHandling();

    updateCartInterface();
    updateWishlistInterface();
    applyLanguage(appState.currentLanguage, false);
}


/* ==========================================================================
   07. RESTORE SAVED STATE
   ========================================================================== */

function restoreApplicationState() {
    const savedCart = readStorage(
        APP_CONFIG.storageKeys.cart,
        []
    );

    const savedWishlist = readStorage(
        APP_CONFIG.storageKeys.wishlist,
        []
    );

    const savedLanguage = readStorage(
        APP_CONFIG.storageKeys.language,
        APP_CONFIG.defaultLanguage
    );

    appState.cart = Array.isArray(savedCart)
        ? savedCart.filter((item) => getProduct(item.productId))
        : [];

    appState.wishlist = Array.isArray(savedWishlist)
        ? savedWishlist.filter((productId) => getProduct(productId))
        : [];

    appState.currentLanguage =
        LANGUAGE_DATA[savedLanguage]
            ? savedLanguage
            : APP_CONFIG.defaultLanguage;
}


/* ==========================================================================
   08. PAGE LOADER
   ========================================================================== */

function initializePageLoader() {
    const loader = DOM.byId("pageLoader");
    const progressBar = DOM.byId("loaderProgressBar");
    const percentage = DOM.byId("loaderPercentage");

    if (!loader) {
        completePageLoading();
        return;
    }

    const startTime = performance.now();
    let displayedProgress = 0;
    let assetsFinished = document.readyState === "complete";

    const updateLoader = () => {
        if (assetsFinished) {
            displayedProgress = Math.min(
                100,
                displayedProgress + Math.random() * 12 + 4
            );
        } else {
            displayedProgress = Math.min(
                88,
                displayedProgress + Math.random() * 5 + 1
            );
        }

        if (progressBar) {
            progressBar.style.width = `${displayedProgress}%`;
        }

        if (percentage) {
            percentage.textContent = `${Math.round(displayedProgress)}%`;
        }

        const elapsed = performance.now() - startTime;
        const minimumReached =
            elapsed >= APP_CONFIG.loaderMinimumDuration;

        if (
            assetsFinished &&
            minimumReached &&
            displayedProgress >= 100
        ) {
            loader.classList.add("is-hidden");
            completePageLoading();

            window.setTimeout(() => {
                loader.remove();
            }, 1000);

            return;
        }

        window.requestAnimationFrame(updateLoader);
    };

    if (!assetsFinished) {
        window.addEventListener(
            "load",
            () => {
                assetsFinished = true;
            },
            { once: true }
        );
    }

    window.requestAnimationFrame(updateLoader);
}


function completePageLoading() {
    if (appState.loaderFinished) {
        return;
    }

    appState.loaderFinished = true;

    document.body.classList.remove("is-loading");
    document.body.classList.add("is-ready");

    const heroVideo = DOM.byId("heroVideo");

    if (heroVideo) {
        const playPromise = heroVideo.play();

        if (playPromise instanceof Promise) {
            playPromise.catch(() => {
                setHeroVideoPlayingState(false);
            });
        }
    }

    window.dispatchEvent(
        new CustomEvent("giftParfumsReady")
    );
}


/* ==========================================================================
   09. CURRENT YEAR
   ========================================================================== */

function initializeCurrentYear() {
    const currentYear = DOM.byId("currentYear");

    if (currentYear) {
        currentYear.textContent = String(
            new Date().getFullYear()
        );
    }
}


/* ==========================================================================
   10. ANNOUNCEMENT BAR
   ========================================================================== */

function initializeAnnouncementBar() {
    const announcementBar = DOM.byId("announcementBar");
    const closeButton = DOM.byId("announcementClose");

    if (!announcementBar || !closeButton) {
        return;
    }

    const wasClosed = readStorage(
        APP_CONFIG.storageKeys.announcement,
        false
    );

    if (wasClosed === true) {
        announcementBar.classList.add("is-hidden");
        document.body.classList.add("announcement-closed");
    }

    closeButton.addEventListener("click", () => {
        announcementBar.classList.add("is-hidden");
        document.body.classList.add("announcement-closed");

        writeStorage(
            APP_CONFIG.storageKeys.announcement,
            true
        );

        window.dispatchEvent(new Event("resize"));
    });
}


/* ==========================================================================
   11. HEADER
   ========================================================================== */

function initializeHeader() {
    updateHeaderOnScroll();

    window.addEventListener(
        "scroll",
        () => {
            if (appState.scrollTicking) {
                return;
            }

            appState.scrollTicking = true;

            window.requestAnimationFrame(() => {
                updateHeaderOnScroll();
                appState.scrollTicking = false;
            });
        },
        { passive: true }
    );
}


function updateHeaderOnScroll() {
    const header = DOM.byId("siteHeader");

    if (!header) {
        return;
    }

    const currentPosition = Math.max(0, window.scrollY);
    const scrollingDown =
        currentPosition > appState.lastScrollPosition;
    const scrollDifference = Math.abs(
        currentPosition - appState.lastScrollPosition
    );

    header.classList.toggle(
        "is-scrolled",
        currentPosition > 30
    );

    if (
        scrollingDown &&
        currentPosition > 500 &&
        scrollDifference > 4 &&
        !document.body.classList.contains("menu-open") &&
        !document.body.classList.contains("modal-open") &&
        !document.body.classList.contains("drawer-open")
    ) {
        header.classList.add("is-hidden");
    } else {
        header.classList.remove("is-hidden");
    }

    appState.lastScrollPosition = currentPosition;

    updateActiveNavigationLink();
}


function updateActiveNavigationLink() {
    const sections = DOM.selectAll(
        "#home, #signature, #collection, #experience, #story, #contact"
    );

    const navigationLinks = DOM.selectAll(
        ".desktop-navigation__link"
    );

    if (!sections.length || !navigationLinks.length) {
        return;
    }

    const viewportMarker = window.innerHeight * 0.38;
    let activeSectionId = "home";

    sections.forEach((section) => {
        const rectangle = section.getBoundingClientRect();

        if (
            rectangle.top <= viewportMarker &&
            rectangle.bottom > viewportMarker
        ) {
            activeSectionId = section.id;
        }
    });

    navigationLinks.forEach((link) => {
        const targetId = link
            .getAttribute("href")
            ?.replace("#", "");

        link.classList.toggle(
            "is-active",
            targetId === activeSectionId
        );
    });
}


/* ==========================================================================
   12. SMOOTH NAVIGATION
   ========================================================================== */

function initializeSmoothNavigation() {
    DOM.selectAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const href = link.getAttribute("href");

            if (!href || href === "#") {
                return;
            }

            const target = DOM.select(href);

            if (!target) {
                return;
            }

            event.preventDefault();

            closeMobileMenu();

            const header = DOM.byId("siteHeader");
            const headerHeight = header
                ? header.offsetHeight
                : 0;

            scrollToElement(target, headerHeight - 1);
        });
    });
}


/* ==========================================================================
   13. MOBILE MENU
   ========================================================================== */

function initializeMobileMenu() {
    const openButton = DOM.byId("menuToggle");
    const closeButton = DOM.byId("mobileMenuClose");
    const backdrop = DOM.byId("mobileMenuBackdrop");
    const menuLinks = DOM.selectAll(
        ".mobile-navigation__link"
    );

    openButton?.addEventListener("click", openMobileMenu);
    closeButton?.addEventListener("click", closeMobileMenu);
    backdrop?.addEventListener("click", closeMobileMenu);

    menuLinks.forEach((link) => {
        link.addEventListener("click", closeMobileMenu);
    });
}


function openMobileMenu() {
    const menu = DOM.byId("mobileMenu");
    const toggle = DOM.byId("menuToggle");

    if (!menu) {
        return;
    }

    closeAllOverlays("mobile-menu");

    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");

    toggle?.setAttribute("aria-expanded", "true");

    document.body.classList.add("menu-open");

    const firstLink = DOM.select(
        ".mobile-navigation__link",
        menu
    );

    window.setTimeout(() => firstLink?.focus(), 350);
}


function closeMobileMenu() {
    const menu = DOM.byId("mobileMenu");
    const toggle = DOM.byId("menuToggle");

    if (!menu) {
        return;
    }

    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");

    toggle?.setAttribute("aria-expanded", "false");

    document.body.classList.remove("menu-open");
}


/* ==========================================================================
   14. LANGUAGE MENU
   ========================================================================== */

function initializeLanguageMenu() {
    const languageButton = DOM.byId("languageButton");
    const languageMenu = DOM.byId("languageMenu");

    if (!languageButton || !languageMenu) {
        return;
    }

    languageButton.addEventListener("click", (event) => {
        event.stopPropagation();

        const isOpen = !languageMenu.hasAttribute("hidden");

        if (isOpen) {
            closeLanguageMenu();
        } else {
            languageMenu.removeAttribute("hidden");
            languageButton.setAttribute(
                "aria-expanded",
                "true"
            );
        }
    });

    DOM.selectAll(
        ".language-menu__item",
        languageMenu
    ).forEach((button) => {
        button.addEventListener("click", () => {
            const language = button.dataset.language;

            if (LANGUAGE_DATA[language]) {
                applyLanguage(language, true);
            }

            closeLanguageMenu();
        });
    });

    document.addEventListener("click", (event) => {
        if (
            !languageMenu.contains(event.target) &&
            !languageButton.contains(event.target)
        ) {
            closeLanguageMenu();
        }
    });
}


function closeLanguageMenu() {
    const languageButton = DOM.byId("languageButton");
    const languageMenu = DOM.byId("languageMenu");

    languageMenu?.setAttribute("hidden", "");
    languageButton?.setAttribute("aria-expanded", "false");
}


function applyLanguage(language, showNotification = true) {
    const languageInformation = LANGUAGE_DATA[language];

    if (!languageInformation) {
        return;
    }

    appState.currentLanguage = language;

    document.documentElement.lang =
        languageInformation.htmlLang;

    document.documentElement.dir =
        languageInformation.htmlDirection;

    const currentLanguage = DOM.byId("currentLanguage");

    if (currentLanguage) {
        currentLanguage.textContent = languageInformation.code;
    }

    DOM.selectAll(".language-menu__item").forEach(
        (button) => {
            button.classList.toggle(
                "is-active",
                button.dataset.language === language
            );
        }
    );

    writeStorage(
        APP_CONFIG.storageKeys.language,
        language
    );

    if (showNotification) {
        const message =
            language === "ar"
                ? "تم تغيير لغة العرض."
                : language === "fr"
                  ? "La langue d’affichage a été modifiée."
                  : "The display language has been changed.";

        showToast(message, "success");
    }
}


/* ==========================================================================
   15. HERO VIDEO
   ========================================================================== */

function initializeHeroVideo() {
    const video = DOM.byId("heroVideo");
    const playPauseButton = DOM.byId(
        "heroPlayPauseButton"
    );
    const soundButton = DOM.byId("heroSoundButton");

    if (!video) {
        return;
    }

    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    video.addEventListener("loadedmetadata", () => {
        updateHeroVideoProgress();
    });

    video.addEventListener(
        "timeupdate",
        updateHeroVideoProgress
    );

    video.addEventListener("play", () => {
        setHeroVideoPlayingState(true);
    });

    video.addEventListener("pause", () => {
        setHeroVideoPlayingState(false);
    });

    video.addEventListener("ended", () => {
        video.currentTime = 0;

        video.play().catch(() => {
            setHeroVideoPlayingState(false);
        });
    });

    video.addEventListener("error", () => {
        const hero = DOM.byId("home");
        hero?.classList.add("has-video-error");
    });

    playPauseButton?.addEventListener("click", () => {
        if (video.paused) {
            video.play().catch(() => {
                showToast(
                    "تعذر تشغيل الفيديو تلقائيًا.",
                    "error"
                );
            });
        } else {
            video.pause();
        }
    });

    soundButton?.addEventListener("click", () => {
        video.muted = !video.muted;
        appState.videoSoundEnabled = !video.muted;

        updateHeroSoundInterface();
    });

    document.addEventListener(
        "visibilitychange",
        () => {
            if (document.hidden && !video.paused) {
                video.dataset.resumeAfterVisibility = "true";
                video.pause();
            } else if (
                !document.hidden &&
                video.dataset.resumeAfterVisibility === "true"
            ) {
                delete video.dataset.resumeAfterVisibility;

                video.play().catch(() => {
                    setHeroVideoPlayingState(false);
                });
            }
        }
    );

    updateHeroSoundInterface();
}


function setHeroVideoPlayingState(isPlaying) {
    const hero = DOM.byId("home");
    const button = DOM.byId("heroPlayPauseButton");
    const pauseIcon = DOM.select(
        ".video-control__pause-icon",
        button || document
    );
    const playIcon = DOM.select(
        ".video-control__play-icon",
        button || document
    );

    appState.videoIsPlaying = isPlaying;

    hero?.classList.toggle(
        "is-video-paused",
        !isPlaying
    );

    button?.setAttribute(
        "aria-pressed",
        String(!isPlaying)
    );

    button?.setAttribute(
        "aria-label",
        isPlaying ? "إيقاف الفيديو" : "تشغيل الفيديو"
    );

    if (pauseIcon) {
        pauseIcon.hidden = !isPlaying;
    }

    if (playIcon) {
        playIcon.hidden = isPlaying;
    }
}


function updateHeroSoundInterface() {
    const hero = DOM.byId("home");
    const soundButton = DOM.byId("heroSoundButton");
    const label = DOM.byId("heroSoundLabel");
    const translations = getCurrentTranslations();

    hero?.classList.toggle(
        "is-sound-active",
        appState.videoSoundEnabled
    );

    soundButton?.setAttribute(
        "aria-pressed",
        String(appState.videoSoundEnabled)
    );

    if (label) {
        label.textContent = appState.videoSoundEnabled
            ? translations.videoSoundOn
            : translations.videoSoundOff;
    }
}


function updateHeroVideoProgress() {
    const video = DOM.byId("heroVideo");
    const progressBar = DOM.byId("heroVideoProgress");
    const timeLabel = DOM.byId("heroVideoTime");

    if (!video) {
        return;
    }

    const duration =
        Number.isFinite(video.duration) && video.duration > 0
            ? video.duration
            : 10;

    const progress = clamp(video.currentTime / duration);
    const percentage = `${progress * 100}%`;

    document.documentElement.style.setProperty(
        "--hero-progress",
        percentage
    );

    if (progressBar) {
        progressBar.style.width = percentage;
    }

    if (timeLabel) {
        timeLabel.textContent =
            `${formatTime(video.currentTime)} / ` +
            `${formatTime(duration)}`;
    }
}


/* ==========================================================================
   16. CUSTOM CURSOR
   ========================================================================== */

function initializeCustomCursor() {
    const cursor = DOM.byId("customCursor");

    if (
        !cursor ||
        window.matchMedia("(pointer: coarse)").matches
    ) {
        return;
    }

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let cursorX = targetX;
    let cursorY = targetY;

    document.addEventListener("mousemove", (event) => {
        targetX = event.clientX;
        targetY = event.clientY;

        document.documentElement.style.setProperty(
            "--mouse-x",
            `${(event.clientX / window.innerWidth) * 100}%`
        );

        document.documentElement.style.setProperty(
            "--mouse-y",
            `${(event.clientY / window.innerHeight) * 100}%`
        );
    });

    const animateCursor = () => {
        cursorX = lerp(cursorX, targetX, 0.18);
        cursorY = lerp(cursorY, targetY, 0.18);

        cursor.style.transform =
            `translate3d(${cursorX}px, ${cursorY}px, 0)`;

        window.requestAnimationFrame(animateCursor);
    };

    window.requestAnimationFrame(animateCursor);

    const interactiveElements = DOM.selectAll(
        "a, button, input, textarea, select, [data-cursor-label]"
    );

    interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            const label = DOM.byId("cursorLabel");
            const customLabel =
                element.dataset.cursorLabel || "";

            if (label) {
                label.textContent = customLabel;
            }

            cursor.classList.add("is-active");
        });

        element.addEventListener("mouseleave", () => {
            cursor.classList.remove("is-active");
        });
    });

    document.addEventListener("mouseleave", () => {
        cursor.style.opacity = "0";
    });

    document.addEventListener("mouseenter", () => {
        cursor.style.opacity = "1";
    });
}


/* ==========================================================================
   17. PARTICLES
   ========================================================================== */

function initializeParticles() {
    createParticleField(
        DOM.byId("heroParticles"),
        28,
        "hero-particle"
    );

    createParticleField(
        DOM.byId("globalParticles"),
        20,
        "ambient-particle"
    );

    DOM.selectAll(".signature-section__particles").forEach(
        (container) => {
            createParticleField(
                container,
                24,
                "signature-particle"
            );
        }
    );
}


function createParticleField(container, count, className) {
    if (!container || prefersReducedMotion()) {
        return;
    }

    const fragment = document.createDocumentFragment();

    for (let index = 0; index < count; index += 1) {
        const particle = document.createElement("span");

        particle.className = className;
        particle.style.position = "absolute";
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        const size = Math.random() * 4 + 1;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.borderRadius = "50%";
        particle.style.background =
            "rgba(241, 202, 122, 0.75)";
        particle.style.boxShadow =
            "0 0 12px rgba(224, 165, 64, 0.65)";
        particle.style.opacity =
            String(Math.random() * 0.65 + 0.15);

        const duration = Math.random() * 12 + 10;
        const delay = Math.random() * -15;

        particle.style.animation =
            `giftParticleFloat ${duration}s ${delay}s ` +
            "ease-in-out infinite alternate";

        fragment.appendChild(particle);
    }

    container.appendChild(fragment);
    ensureParticleKeyframes();
}


function ensureParticleKeyframes() {
    if (DOM.byId("giftParticleStyles")) {
        return;
    }

    const style = document.createElement("style");
    style.id = "giftParticleStyles";

    style.textContent = `
        @keyframes giftParticleFloat {
            0% {
                transform: translate3d(0, 12px, 0) scale(0.7);
                opacity: 0.15;
            }

            50% {
                transform: translate3d(14px, -25px, 0) scale(1.15);
                opacity: 0.75;
            }

            100% {
                transform: translate3d(-12px, -55px, 0) scale(0.85);
                opacity: 0.2;
            }
        }
    `;

    document.head.appendChild(style);
}


/* ==========================================================================
   18. SCROLL ANIMATIONS AND CINEMATIC ZOOM
   ========================================================================== */

function initializeScrollEffects() {
    updateAllScrollEffects();

    window.addEventListener(
        "scroll",
        requestScrollEffectsUpdate,
        { passive: true }
    );

    window.addEventListener(
        "resize",
        requestScrollEffectsUpdate,
        { passive: true }
    );
}


function requestScrollEffectsUpdate() {
    if (appState.scrollTicking) {
        return;
    }

    appState.scrollTicking = true;

    window.requestAnimationFrame(() => {
        updateAllScrollEffects();
        appState.scrollTicking = false;
    });
}


function updateAllScrollEffects() {
    updateSignatureScrollProgress();
    updateProductStoryProgress();
    updateHeroParallax();
}


function calculateSectionProgress(section) {
    if (!section) {
        return 0;
    }

    const rectangle = section.getBoundingClientRect();
    const scrollableDistance =
        section.offsetHeight - window.innerHeight;

    if (scrollableDistance <= 0) {
        return 0;
    }

    const travelledDistance = -rectangle.top;

    return clamp(
        travelledDistance / scrollableDistance,
        0,
        1
    );
}


function createCinematicProgress(rawProgress) {
    const progress = clamp(rawProgress);

    /*
     * المراحل:
     * 0.00 → 0.22 : دخول العطر وزيادة الزوم.
     * 0.22 → 0.72 : الاحتفاظ بالزوم وإظهار الوصف.
     * 0.72 → 1.00 : إبعاد العطر استعدادًا للقسم التالي.
     */

    if (progress < 0.22) {
        return easeInOutCubic(progress / 0.22);
    }

    if (progress <= 0.72) {
        return 1;
    }

    return 1 - easeInOutCubic(
        (progress - 0.72) / 0.28
    );
}


function easeInOutCubic(value) {
    const progress = clamp(value);

    return progress < 0.5
        ? 4 * progress * progress * progress
        : 1 -
              Math.pow(-2 * progress + 2, 3) / 2;
}


function updateSignatureScrollProgress() {
    const section = DOM.byId("signature");

    if (!section) {
        return;
    }

    const rawProgress = calculateSectionProgress(section);
    const cinematicProgress =
        createCinematicProgress(rawProgress);

    section.style.setProperty(
        "--signature-progress",
        cinematicProgress.toFixed(4)
    );

    section.style.setProperty(
        "--signature-raw-progress",
        rawProgress.toFixed(4)
    );

    const progressFill = DOM.byId(
        "signatureProgressFill"
    );

    if (progressFill) {
        progressFill.style.height =
            `${rawProgress * 100}%`;
    }
}


function updateProductStoryProgress() {
    const stories = DOM.selectAll(".product-story");

    stories.forEach((story) => {
        const rawProgress = calculateSectionProgress(story);
        const cinematicProgress =
            createCinematicProgress(rawProgress);

        story.style.setProperty(
            "--story-progress",
            cinematicProgress.toFixed(4)
        );

        story.style.setProperty(
            "--story-raw-progress",
            rawProgress.toFixed(4)
        );

        story.classList.toggle(
            "is-story-active",
            rawProgress > 0.05 && rawProgress < 0.95
        );

        updateStoryFineAnimation(
            story,
            rawProgress,
            cinematicProgress
        );
    });
}


function updateStoryFineAnimation(
    story,
    rawProgress,
    cinematicProgress
) {
    const visual = DOM.select(
        ".product-story__image-wrapper",
        story
    );

    const content = DOM.select(
        ".product-story__content",
        story
    );

    if (!visual || !content || prefersReducedMotion()) {
        return;
    }

    const rotation =
        (0.5 - rawProgress) * 8;

    const verticalShift =
        (1 - cinematicProgress) * 35;

    visual.style.filter =
        `brightness(${0.88 + cinematicProgress * 0.12}) ` +
        `saturate(${0.9 + cinematicProgress * 0.18})`;

    visual.style.setProperty(
        "--fine-rotation",
        `${rotation}deg`
    );

    content.style.filter =
        `blur(${(1 - cinematicProgress) * 2}px)`;

    content.style.setProperty(
        "--content-shift",
        `${verticalShift}px`
    );
}


function updateHeroParallax() {
    const hero = DOM.byId("home");
    const video = DOM.byId("heroVideo");
    const content = DOM.select(
        ".hero-section__content",
        hero || document
    );

    if (!hero || !video || !content) {
        return;
    }

    const heroHeight = hero.offsetHeight || window.innerHeight;
    const progress = clamp(window.scrollY / heroHeight);

    if (prefersReducedMotion()) {
        return;
    }

    video.style.transform =
        `scale(${1.03 + progress * 0.09}) ` +
        `translateY(${progress * 4}%)`;

    content.style.transform =
        `translateY(${progress * 90}px)`;

    content.style.opacity =
        String(clamp(1 - progress * 1.35, 0, 1));
}


/* ==========================================================================
   19. REVEAL ANIMATIONS
   ========================================================================== */

function initializeRevealAnimations() {
    const elements = DOM.selectAll(
        [
            ".section-heading",
            ".product-card",
            ".service-card",
            ".testimonial-card",
            ".story-value",
            ".contact-information__item",
            ".gallery-item"
        ].join(",")
    );

    elements.forEach((element) => {
        if (!element.hasAttribute("data-reveal")) {
            element.setAttribute("data-reveal", "");
        }
    });

    if (
        prefersReducedMotion() ||
        !("IntersectionObserver" in window)
    ) {
        elements.forEach((element) => {
            element.classList.add("is-visible");
        });

        return;
    }

    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");
                currentObserver.unobserve(entry.target);
            });
        },
        {
            root: null,
            threshold: 0.12,
            rootMargin: "0px 0px -7% 0px"
        }
    );

    elements.forEach((element, index) => {
        element.style.transitionDelay =
            `${(index % 4) * 75}ms`;

        observer.observe(element);
    });
}


/* ==========================================================================
   20. PRODUCT INTERACTIONS
   ========================================================================== */

function initializeProductInteractions() {
    document.addEventListener("click", (event) => {
        const detailsButton = event.target.closest(
            ".product-details-button"
        );

        if (detailsButton) {
            const productId =
                detailsButton.dataset.productId;

            if (productId) {
                openProductModal(productId);
            }

            return;
        }

        const cartButton = event.target.closest(
            ".add-to-cart-button"
        );

        if (cartButton) {
            const productId = cartButton.dataset.productId;

            if (productId) {
                addProductToCart(productId);
            }

            return;
        }

        const wishlistButton = event.target.closest(
            ".add-to-wishlist-button"
        );

        if (wishlistButton) {
            const productId =
                wishlistButton.dataset.productId;

            if (productId) {
                toggleWishlistProduct(productId);
            }
        }
    });
}


/* ==========================================================================
   21. PRODUCT MODAL
   ========================================================================== */

function initializeProductModal() {
    const closeButton = DOM.byId("productModalClose");
    const backdrop = DOM.byId("productModalBackdrop");
    const addButton = DOM.byId("modalAddToCartButton");
    const wishlistButton = DOM.byId(
        "modalWishlistButton"
    );
    const decreaseButton = DOM.byId("quantityDecrease");
    const increaseButton = DOM.byId("quantityIncrease");
    const quantityInput = DOM.byId("productQuantity");

    closeButton?.addEventListener(
        "click",
        closeProductModal
    );

    backdrop?.addEventListener(
        "click",
        closeProductModal
    );

    addButton?.addEventListener("click", () => {
        if (!appState.activeProductId) {
            return;
        }

        const selectedSize = getSelectedModalSize();
        const quantity = getModalQuantity();

        addProductToCart(
            appState.activeProductId,
            selectedSize,
            quantity
        );

        closeProductModal();
        openCartDrawer();
    });

    wishlistButton?.addEventListener("click", () => {
        if (appState.activeProductId) {
            toggleWishlistProduct(
                appState.activeProductId
            );

            updateModalWishlistButton();
        }
    });

    decreaseButton?.addEventListener("click", () => {
        setModalQuantity(getModalQuantity() - 1);
    });

    increaseButton?.addEventListener("click", () => {
        setModalQuantity(getModalQuantity() + 1);
    });

    quantityInput?.addEventListener("change", () => {
        setModalQuantity(getModalQuantity());
    });
}


function openProductModal(productId) {
    const product = getProduct(productId);
    const modal = DOM.byId("productModal");

    if (!product || !modal) {
        return;
    }

    closeAllOverlays("product-modal");

    appState.activeProductId = productId;
    appState.activeProductSize = product.defaultSize;
    appState.activeProductQuantity = 1;

    populateProductModal(product);

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    window.setTimeout(() => {
        DOM.byId("productModalClose")?.focus();
    }, 350);
}


function closeProductModal() {
    const modal = DOM.byId("productModal");

    if (!modal) {
        return;
    }

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

    appState.activeProductId = null;
}


function populateProductModal(product) {
    setTextContent("productModalBrand", product.brand);
    setTextContent("productModalTitle", product.name);
    setTextContent(
        "productModalSubtitle",
        product.subtitle
    );
    setTextContent(
        "productModalDescription",
        product.description
    );
    setTextContent(
        "productModalTopNotes",
        product.notes.top
    );
    setTextContent(
        "productModalHeartNotes",
        product.notes.heart
    );
    setTextContent(
        "productModalBaseNotes",
        product.notes.base
    );

    const image = DOM.byId("productModalImage");

    if (image) {
        image.src = product.image;
        image.alt = product.name;
    }

    const rating = DOM.byId("productModalRating");

    if (rating) {
        const stars = "★".repeat(
            Math.max(1, Math.min(5, product.rating))
        );

        rating.innerHTML = `
            <span aria-label="${product.rating} من 5">${stars}</span>
            <small>${Number(product.rating).toFixed(1)}</small>
        `;
    }

    renderProductModalThumbnails(product);
    renderProductSizes(product);
    setModalQuantity(1);
    updateModalWishlistButton();
}


function renderProductModalThumbnails(product) {
    const container = DOM.byId(
        "productModalThumbnails"
    );

    const mainImage = DOM.byId("productModalImage");

    if (!container || !mainImage) {
        return;
    }

    container.innerHTML = "";

    product.gallery.forEach((imagePath, index) => {
        const button = document.createElement("button");
        const image = document.createElement("img");

        button.type = "button";
        button.className =
            index === 0 ? "is-active" : "";

        button.setAttribute(
            "aria-label",
            `عرض الصورة ${index + 1}`
        );

        image.src = imagePath;
        image.alt = `${product.name} — صورة ${index + 1}`;
        image.loading = "lazy";

        button.appendChild(image);

        button.addEventListener("click", () => {
            mainImage.src = imagePath;
            mainImage.alt = image.alt;

            DOM.selectAll("button", container).forEach(
                (thumbnail) => {
                    thumbnail.classList.remove("is-active");
                }
            );

            button.classList.add("is-active");
        });

        container.appendChild(button);
    });
}


function renderProductSizes(product) {
    const container = DOM.byId("productSizeOptions");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    product.sizes.forEach((size) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        const visual = document.createElement("span");

        label.className = "product-size-option";

        input.type = "radio";
        input.name = "productSize";
        input.value = size;
        input.checked = size === product.defaultSize;

        visual.textContent = size.toUpperCase();

        input.addEventListener("change", () => {
            appState.activeProductSize = size;
        });

        label.append(input, visual);
        container.appendChild(label);
    });
}


function getSelectedModalSize() {
    const selected = DOM.select(
        'input[name="productSize"]:checked'
    );

    return (
        selected?.value ||
        appState.activeProductSize ||
        "50ml"
    );
}


function getModalQuantity() {
    const input = DOM.byId("productQuantity");
    const value = Number.parseInt(input?.value || "1", 10);

    return clamp(
        Number.isFinite(value) ? value : 1,
        1,
        10
    );
}


function setModalQuantity(quantity) {
    const normalizedQuantity = clamp(
        Number.parseInt(quantity, 10) || 1,
        1,
        10
    );

    appState.activeProductQuantity = normalizedQuantity;

    const input = DOM.byId("productQuantity");

    if (input) {
        input.value = String(normalizedQuantity);
    }
}


function updateModalWishlistButton() {
    const button = DOM.byId("modalWishlistButton");

    if (!button || !appState.activeProductId) {
        return;
    }

    const isSaved = appState.wishlist.includes(
        appState.activeProductId
    );

    button.classList.toggle("is-active", isSaved);

    button.innerHTML = isSaved
        ? "<span>♥</span><span>حذف من المفضلة</span>"
        : "<span>♡</span><span>إضافة إلى المفضلة</span>";
}


function setTextContent(elementId, value) {
    const element = DOM.byId(elementId);

    if (element) {
        element.textContent = value;
    }
}


/* ==========================================================================
   22. CART
   ========================================================================== */

function initializeCart() {
    DOM.byId("cartOpenButton")?.addEventListener(
        "click",
        openCartDrawer
    );

    DOM.byId("cartDrawerClose")?.addEventListener(
        "click",
        closeCartDrawer
    );

    DOM.byId("cartDrawerBackdrop")?.addEventListener(
        "click",
        closeCartDrawer
    );

    DOM.byId("continueShoppingButton")?.addEventListener(
        "click",
        () => {
            closeCartDrawer();
            scrollToElement("#collection", 70);
        }
    );

    DOM.byId("checkoutWhatsAppButton")?.addEventListener(
        "click",
        submitCartToWhatsApp
    );
}


function openCartDrawer() {
    const drawer = DOM.byId("cartDrawer");

    if (!drawer) {
        return;
    }

    closeAllOverlays("cart-drawer");

    updateCartInterface();

    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");

    document.body.classList.add("drawer-open");

    window.setTimeout(() => {
        DOM.byId("cartDrawerClose")?.focus();
    }, 300);
}


function closeCartDrawer() {
    const drawer = DOM.byId("cartDrawer");

    if (!drawer) {
        return;
    }

    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");

    document.body.classList.remove("drawer-open");
}


function addProductToCart(
    productId,
    size = null,
    quantity = 1
) {
    const product = getProduct(productId);

    if (!product) {
        return;
    }

    const selectedSize = size || product.defaultSize;
    const normalizedQuantity = clamp(
        Number.parseInt(quantity, 10) || 1,
        1,
        10
    );

    const existingItem = appState.cart.find(
        (item) =>
            item.productId === productId &&
            item.size === selectedSize
    );

    if (existingItem) {
        existingItem.quantity = clamp(
            existingItem.quantity + normalizedQuantity,
            1,
            10
        );
    } else {
        appState.cart.push({
            productId,
            size: selectedSize,
            quantity: normalizedQuantity
        });
    }

    persistCart();
    updateCartInterface();

    showToast(
        getCurrentTranslations().cartAdded,
        "success"
    );
}


function removeCartItem(productId, size) {
    appState.cart = appState.cart.filter(
        (item) =>
            !(
                item.productId === productId &&
                item.size === size
            )
    );

    persistCart();
    updateCartInterface();

    showToast(
        getCurrentTranslations().cartRemoved,
        "info"
    );
}


function updateCartItemQuantity(
    productId,
    size,
    quantity
) {
    const item = appState.cart.find(
        (cartItem) =>
            cartItem.productId === productId &&
            cartItem.size === size
    );

    if (!item) {
        return;
    }

    item.quantity = clamp(
        Number.parseInt(quantity, 10) || 1,
        1,
        10
    );

    persistCart();
    updateCartInterface();
}


function persistCart() {
    writeStorage(
        APP_CONFIG.storageKeys.cart,
        appState.cart
    );
}


function getCartTotalQuantity() {
    return appState.cart.reduce(
        (total, item) => total + item.quantity,
        0
    );
}


function updateCartInterface() {
    const counter = DOM.byId("cartCounter");
    const totalItems = DOM.byId("cartTotalItems");
    const itemsContainer = DOM.byId("cartItems");
    const emptyState = DOM.byId("cartEmptyState");
    const footer = DOM.byId("cartDrawerFooter");

    const totalQuantity = getCartTotalQuantity();

    if (counter) {
        counter.textContent = String(totalQuantity);
        counter.hidden = totalQuantity === 0;
    }

    if (totalItems) {
        totalItems.textContent = String(totalQuantity);
    }

    if (!itemsContainer || !emptyState) {
        return;
    }

    itemsContainer.innerHTML = "";

    const hasItems = appState.cart.length > 0;

    emptyState.hidden = hasItems;

    if (footer) {
        footer.hidden = !hasItems;
    }

    if (!hasItems) {
        return;
    }

    const fragment = document.createDocumentFragment();

    appState.cart.forEach((item) => {
        const product = getProduct(item.productId);

        if (!product) {
            return;
        }

        fragment.appendChild(
            createCartItemElement(item, product)
        );
    });

    itemsContainer.appendChild(fragment);
}


function createCartItemElement(item, product) {
    const article = document.createElement("article");

    article.className = "cart-item";
    article.dataset.productId = product.id;
    article.dataset.size = item.size;

    article.innerHTML = `
        <div class="cart-item__image">
            <img
                src="${escapeHTML(product.image)}"
                alt="${escapeHTML(product.name)}"
                loading="lazy"
            >
        </div>

        <div class="cart-item__content">
            <h3 class="cart-item__title">
                ${escapeHTML(product.name)}
            </h3>

            <p class="cart-item__meta">
                ${escapeHTML(item.size.toUpperCase())}
                ·
                ${escapeHTML(product.subtitle)}
            </p>

            <div class="cart-item__quantity">
                <button
                    type="button"
                    data-cart-action="decrease"
                    aria-label="تقليل الكمية"
                >
                    −
                </button>

                <span>${item.quantity}</span>

                <button
                    type="button"
                    data-cart-action="increase"
                    aria-label="زيادة الكمية"
                >
                    +
                </button>
            </div>
        </div>

        <button
            class="cart-item__remove"
            type="button"
            aria-label="حذف المنتج"
        >
            ×
        </button>
    `;

    const quantityContainer = DOM.select(
        ".cart-item__quantity",
        article
    );

    if (quantityContainer) {
        Object.assign(quantityContainer.style, {
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "12px",
            fontSize: "11px"
        });
    }

    DOM.select(
        '[data-cart-action="decrease"]',
        article
    )?.addEventListener("click", () => {
        if (item.quantity <= 1) {
            removeCartItem(product.id, item.size);
        } else {
            updateCartItemQuantity(
                product.id,
                item.size,
                item.quantity - 1
            );
        }
    });

    DOM.select(
        '[data-cart-action="increase"]',
        article
    )?.addEventListener("click", () => {
        updateCartItemQuantity(
            product.id,
            item.size,
            item.quantity + 1
        );
    });

    DOM.select(
        ".cart-item__remove",
        article
    )?.addEventListener("click", () => {
        removeCartItem(product.id, item.size);
    });

    return article;
}


function submitCartToWhatsApp() {
    if (!appState.cart.length) {
        showToast("السلة فارغة.", "error");
        return;
    }

    const lines = [
        `السلام عليكم، أريد تقديم طلب من ${APP_CONFIG.brandName}:`,
        ""
    ];

    appState.cart.forEach((item, index) => {
        const product = getProduct(item.productId);

        if (!product) {
            return;
        }

        lines.push(
            `${index + 1}. ${product.name}`,
            `السعة: ${item.size.toUpperCase()}`,
            `الكمية: ${item.quantity}`,
            ""
        );
    });

    lines.push(
        `إجمالي عدد القطع: ${getCartTotalQuantity()}`,
        "",
        "المرجو تزويدي بالسعر النهائي وتفاصيل التوصيل."
    );

    showToast(
        getCurrentTranslations().orderReady,
        "success"
    );

    openWhatsApp(lines.join("\n"));
}


/* ==========================================================================
   23. WISHLIST
   ========================================================================== */

function initializeWishlist() {
    DOM.byId("wishlistOpenButton")?.addEventListener(
        "click",
        openWishlistDrawer
    );

    DOM.byId("wishlistDrawerClose")?.addEventListener(
        "click",
        closeWishlistDrawer
    );

    DOM.byId(
        "wishlistDrawerBackdrop"
    )?.addEventListener(
        "click",
        closeWishlistDrawer
    );
}


function openWishlistDrawer() {
    const drawer = DOM.byId("wishlistDrawer");

    if (!drawer) {
        return;
    }

    closeAllOverlays("wishlist-drawer");

    updateWishlistInterface();

    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");

    document.body.classList.add("drawer-open");

    window.setTimeout(() => {
        DOM.byId("wishlistDrawerClose")?.focus();
    }, 300);
}


function closeWishlistDrawer() {
    const drawer = DOM.byId("wishlistDrawer");

    if (!drawer) {
        return;
    }

    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");

    document.body.classList.remove("drawer-open");
}


function toggleWishlistProduct(productId) {
    const product = getProduct(productId);

    if (!product) {
        return;
    }

    const existingIndex =
        appState.wishlist.indexOf(productId);

    if (existingIndex >= 0) {
        appState.wishlist.splice(existingIndex, 1);

        showToast(
            getCurrentTranslations().wishlistRemoved,
            "info"
        );
    } else {
        appState.wishlist.push(productId);

        showToast(
            getCurrentTranslations().wishlistAdded,
            "success"
        );
    }

    persistWishlist();
    updateWishlistInterface();
    updateWishlistButtons();
}


function persistWishlist() {
    writeStorage(
        APP_CONFIG.storageKeys.wishlist,
        appState.wishlist
    );
}


function updateWishlistInterface() {
    const counter = DOM.byId("wishlistCounter");
    const itemsContainer = DOM.byId("wishlistItems");
    const emptyState = DOM.byId(
        "wishlistEmptyState"
    );

    const total = appState.wishlist.length;

    if (counter) {
        counter.textContent = String(total);
        counter.hidden = total === 0;
    }

    if (!itemsContainer || !emptyState) {
        updateWishlistButtons();
        return;
    }

    itemsContainer.innerHTML = "";
    emptyState.hidden = total > 0;

    const fragment = document.createDocumentFragment();

    appState.wishlist.forEach((productId) => {
        const product = getProduct(productId);

        if (!product) {
            return;
        }

        fragment.appendChild(
            createWishlistItemElement(product)
        );
    });

    itemsContainer.appendChild(fragment);
    updateWishlistButtons();
}


function createWishlistItemElement(product) {
    const article = document.createElement("article");

    article.className = "wishlist-item";

    article.innerHTML = `
        <button
            class="wishlist-item__image product-details-button"
            type="button"
            data-product-id="${escapeHTML(product.id)}"
            aria-label="عرض ${escapeHTML(product.name)}"
        >
            <img
                src="${escapeHTML(product.image)}"
                alt="${escapeHTML(product.name)}"
                loading="lazy"
            >
        </button>

        <div class="wishlist-item__content">
            <h3 class="wishlist-item__title">
                ${escapeHTML(product.name)}
            </h3>

            <p class="wishlist-item__meta">
                ${escapeHTML(product.subtitle)}
            </p>

            <button
                class="text-button wishlist-item__cart"
                type="button"
            >
                إضافة إلى السلة
            </button>
        </div>

        <button
            class="wishlist-item__remove"
            type="button"
            aria-label="حذف من المفضلة"
        >
            ×
        </button>
    `;

    DOM.select(
        ".wishlist-item__cart",
        article
    )?.addEventListener("click", () => {
        addProductToCart(product.id);
    });

    DOM.select(
        ".wishlist-item__remove",
        article
    )?.addEventListener("click", () => {
        toggleWishlistProduct(product.id);
    });

    return article;
}


function updateWishlistButtons() {
    DOM.selectAll(
        ".add-to-wishlist-button"
    ).forEach((button) => {
        const productId = button.dataset.productId;
        const isActive =
            appState.wishlist.includes(productId);

        button.classList.toggle("is-active", isActive);

        if (
            button.classList.contains(
                "product-card__wishlist"
            ) ||
            button.classList.contains("circle-button")
        ) {
            button.textContent = isActive ? "♥" : "♡";
        }

        button.setAttribute(
            "aria-pressed",
            String(isActive)
        );
    });

    updateModalWishlistButton();
}


/* ==========================================================================
   24. SEARCH
   ========================================================================== */

function initializeSearch() {
    const openButton = DOM.byId("searchOpenButton");
    const closeButton = DOM.byId("searchCloseButton");
    const overlay = DOM.byId("searchOverlay");
    const input = DOM.byId("searchInput");
    const form = DOM.byId("searchForm");

    openButton?.addEventListener("click", openSearch);
    closeButton?.addEventListener("click", closeSearch);

    overlay?.addEventListener("click", (event) => {
        if (
            event.target === overlay ||
            event.target.classList.contains(
                "search-overlay__background"
            )
        ) {
            closeSearch();
        }
    });

    input?.addEventListener("input", () => {
        performProductSearch(input.value);
    });

    form?.addEventListener("submit", (event) => {
        event.preventDefault();
        performProductSearch(input?.value || "");
    });
}


function openSearch() {
    const overlay = DOM.byId("searchOverlay");

    if (!overlay) {
        return;
    }

    closeAllOverlays("search");

    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");

    document.body.classList.add("search-open");

    window.setTimeout(() => {
        DOM.byId("searchInput")?.focus();
    }, 350);
}


function closeSearch() {
    const overlay = DOM.byId("searchOverlay");

    if (!overlay) {
        return;
    }

    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");

    document.body.classList.remove("search-open");
}


function performProductSearch(query) {
    const resultsContainer = DOM.byId("searchResults");

    if (!resultsContainer) {
        return;
    }

    const normalizedQuery = normalizeText(query);
    const translations = getCurrentTranslations();

    if (
        normalizedQuery.length <
        APP_CONFIG.searchMinimumCharacters
    ) {
        resultsContainer.innerHTML = `
            <p class="search-results__empty">
                ${escapeHTML(translations.searchStart)}
            </p>
        `;

        return;
    }

    const results = Object.values(PRODUCTS).filter(
        (product) => {
            const searchableContent = normalizeText(
                [
                    product.name,
                    product.brand,
                    product.subtitle,
                    product.description,
                    product.shortDescription,
                    product.family.join(" "),
                    product.notes.top,
                    product.notes.heart,
                    product.notes.base
                ].join(" ")
            );

            return searchableContent.includes(
                normalizedQuery
            );
        }
    );

    if (!results.length) {
        resultsContainer.innerHTML = `
            <p class="search-results__empty">
                ${escapeHTML(translations.noSearchResults)}
            </p>
        `;

        return;
    }

    resultsContainer.innerHTML = "";

    const grid = document.createElement("div");
    grid.className = "search-results__grid";

    Object.assign(grid.style, {
        display: "grid",
        gap: "12px"
    });

    results.forEach((product) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "search-result";

        Object.assign(button.style, {
            display: "grid",
            gridTemplateColumns: "80px 1fr auto",
            gap: "18px",
            alignItems: "center",
            width: "100%",
            padding: "12px",
            textAlign: "right",
            border: "1px solid rgba(255,255,255,.09)",
            borderRadius: "16px",
            background: "rgba(255,255,255,.025)"
        });

        button.innerHTML = `
            <img
                src="${escapeHTML(product.image)}"
                alt="${escapeHTML(product.name)}"
                style="
                    width:80px;
                    height:95px;
                    object-fit:cover;
                    border-radius:10px;
                "
            >

            <span>
                <strong
                    style="
                        display:block;
                        font-family:'Cormorant Garamond',serif;
                        font-size:27px;
                        font-weight:500;
                    "
                >
                    ${escapeHTML(product.name)}
                </strong>

                <small
                    style="
                        color:#81776b;
                        font-size:10px;
                    "
                >
                    ${escapeHTML(product.shortDescription)}
                </small>
            </span>

            <span style="color:#f0cb7b;font-size:20px;">
                ↗
            </span>
        `;

        button.addEventListener("click", () => {
            closeSearch();
            openProductModal(product.id);
        });

        grid.appendChild(button);
    });

    resultsContainer.appendChild(grid);
}


/* ==========================================================================
   25. COLLECTION FILTERS
   ========================================================================== */

function initializeCollectionFilters() {
    DOM.selectAll(".collection-filter").forEach(
        (button) => {
            button.addEventListener("click", () => {
                const filter =
                    button.dataset.filter || "all";

                applyProductFilter(filter);
            });
        }
    );

    DOM.byId("loadMoreProductsButton")?.addEventListener(
        "click",
        () => {
            showToast(
                "سيتم إضافة عطور جديدة إلى المجموعة قريبًا.",
                "info"
            );
        }
    );
}


function applyProductFilter(filter) {
    appState.activeFilter = filter;

    DOM.selectAll(".collection-filter").forEach(
        (button) => {
            const isActive =
                button.dataset.filter === filter;

            button.classList.toggle(
                "is-active",
                isActive
            );

            button.setAttribute(
                "aria-pressed",
                String(isActive)
            );
        }
    );

    DOM.selectAll(".product-card").forEach((card) => {
        const categories = (
            card.dataset.category || ""
        )
            .split(/\s+/)
            .filter(Boolean);

        const shouldShow =
            filter === "all" ||
            categories.includes(filter);

        if (shouldShow) {
            card.classList.remove("is-filtered-out");

            if (!prefersReducedMotion()) {
                card.animate(
                    [
                        {
                            opacity: 0,
                            transform:
                                "translateY(20px) scale(.97)"
                        },
                        {
                            opacity: 1,
                            transform:
                                "translateY(0) scale(1)"
                        }
                    ],
                    {
                        duration: 450,
                        easing:
                            "cubic-bezier(.22,1,.36,1)"
                    }
                );
            }
        } else {
            card.classList.add("is-filtered-out");
        }
    });
}


/* ==========================================================================
   26. COLLECTION VIEW
   ========================================================================== */

function initializeCollectionViews() {
    const gridButton = DOM.byId("gridViewButton");
    const listButton = DOM.byId("listViewButton");
    const productsGrid = DOM.byId("productsGrid");

    if (!productsGrid) {
        return;
    }

    gridButton?.addEventListener("click", () => {
        productsGrid.classList.remove("is-list-view");

        gridButton.classList.add("is-active");
        listButton?.classList.remove("is-active");

        gridButton.setAttribute("aria-pressed", "true");
        listButton?.setAttribute("aria-pressed", "false");
    });

    listButton?.addEventListener("click", () => {
        productsGrid.classList.add("is-list-view");

        listButton.classList.add("is-active");
        gridButton?.classList.remove("is-active");

        listButton.setAttribute("aria-pressed", "true");
        gridButton?.setAttribute("aria-pressed", "false");
    });
}


/* ==========================================================================
   27. FRAGRANCE QUIZ
   ========================================================================== */

function initializeQuiz() {
    const nextButton = DOM.byId("quizNextButton");
    const previousButton = DOM.byId(
        "quizPreviousButton"
    );
    const restartButton = DOM.byId("quizRestartButton");
    const resultDetailsButton = DOM.byId(
        "quizResultDetailsButton"
    );

    const totalSteps = DOM.selectAll(
        ".quiz-step"
    ).length;

    const totalStepsLabel = DOM.byId("quizTotalSteps");

    if (totalStepsLabel) {
        totalStepsLabel.textContent =
            String(totalSteps);
    }

    nextButton?.addEventListener("click", () => {
        saveCurrentQuizAnswer();

        if (!hasCurrentQuizAnswer()) {
            showToast(
                getCurrentTranslations().chooseQuizAnswer,
                "error"
            );
            return;
        }

        if (appState.quizStep < totalSteps) {
            setQuizStep(appState.quizStep + 1);
        } else {
            showQuizResult();
        }
    });

    previousButton?.addEventListener("click", () => {
        if (appState.quizStep > 1) {
            saveCurrentQuizAnswer();
            setQuizStep(appState.quizStep - 1);
        }
    });

    restartButton?.addEventListener(
        "click",
        restartQuiz
    );

    resultDetailsButton?.addEventListener(
        "click",
        () => {
            const productId =
                resultDetailsButton.dataset.productId;

            if (productId) {
                openProductModal(productId);
            }
        }
    );

    DOM.selectAll(
        '.quiz-step input[type="radio"]'
    ).forEach((input) => {
        input.addEventListener("change", () => {
            const step = input.closest(".quiz-step");

            if (step) {
                step.classList.add("has-selection");
            }
        });
    });

    setQuizStep(1);
}


function getCurrentQuizStepElement() {
    return DOM.select(
        `.quiz-step[data-quiz-step="${appState.quizStep}"]`
    );
}


function getSelectedQuizInput() {
    const step = getCurrentQuizStepElement();

    return step
        ? DOM.select('input[type="radio"]:checked', step)
        : null;
}


function hasCurrentQuizAnswer() {
    return Boolean(getSelectedQuizInput());
}


function saveCurrentQuizAnswer() {
    const input = getSelectedQuizInput();

    if (!input) {
        return;
    }

    appState.quizAnswers[input.name] = input.value;
}


function setQuizStep(stepNumber) {
    const steps = DOM.selectAll(".quiz-step");
    const totalSteps = steps.length;

    appState.quizStep = clamp(
        Number.parseInt(stepNumber, 10) || 1,
        1,
        totalSteps
    );

    steps.forEach((step) => {
        const stepValue = Number.parseInt(
            step.dataset.quizStep,
            10
        );

        const isActive =
            stepValue === appState.quizStep;

        step.hidden = !isActive;
        step.classList.toggle("is-active", isActive);
    });

    setTextContent(
        "quizCurrentStep",
        String(appState.quizStep)
    );

    const progress = DOM.byId("quizProgressFill");

    if (progress) {
        progress.style.width =
            `${(appState.quizStep / totalSteps) * 100}%`;
    }

    const previousButton = DOM.byId(
        "quizPreviousButton"
    );

    if (previousButton) {
        previousButton.disabled =
            appState.quizStep === 1;
    }

    const nextButton = DOM.byId("quizNextButton");
    const nextButtonText = DOM.select(
        ".luxury-button__text",
        nextButton || document
    );

    if (nextButtonText) {
        nextButtonText.textContent =
            appState.quizStep === totalSteps
                ? "عرض النتيجة"
                : "التالي";
    }

    restoreQuizSelectionForCurrentStep();
}


function restoreQuizSelectionForCurrentStep() {
    const step = getCurrentQuizStepElement();

    if (!step) {
        return;
    }

    const inputs = DOM.selectAll(
        'input[type="radio"]',
        step
    );

    inputs.forEach((input) => {
        input.checked =
            appState.quizAnswers[input.name] ===
            input.value;
    });
}


function calculateQuizRecommendation() {
    const answers = appState.quizAnswers;
    const productScores = {};

    Object.values(PRODUCTS).forEach((product) => {
        let score = 0;

        if (
            answers.presence &&
            product.presence.includes(answers.presence)
        ) {
            score += 3;
        }

        if (
            answers.family &&
            product.family.includes(answers.family)
        ) {
            score += 4;
        }

        if (
            answers.occasion &&
            product.occasion.includes(answers.occasion)
        ) {
            score += 3;
        }

        if (
            answers.intensity &&
            product.intensity.includes(answers.intensity)
        ) {
            score += 3;
        }

        if (
            answers.presence === "strong" &&
            product.id === "versace-eros"
        ) {
            score += 1;
        }

        if (
            answers.family === "floral" &&
            product.id === "suprem-bouquet"
        ) {
            score += 2;
        }

        if (
            answers.family === "fresh" &&
            product.id === "bleu-de-chanel"
        ) {
            score += 2;
        }

        if (
            answers.presence === "soft" &&
            product.id === "candy-love"
        ) {
            score += 2;
        }

        productScores[product.id] = score;
    });

    const rankedProducts = Object.entries(productScores)
        .sort((first, second) => second[1] - first[1]);

    return (
        getProduct(rankedProducts[0]?.[0]) ||
        PRODUCTS["suprem-bouquet"]
    );
}


function showQuizResult() {
    saveCurrentQuizAnswer();

    const recommendation =
        calculateQuizRecommendation();

    const quiz = DOM.byId("fragranceQuiz");
    const result = DOM.byId("quizResult");
    const image = DOM.byId("quizResultImage");
    const detailsButton = DOM.byId(
        "quizResultDetailsButton"
    );

    if (!result) {
        return;
    }

    if (quiz) {
        quiz.hidden = true;
    }

    result.hidden = false;

    setTextContent(
        "quizResultTitle",
        recommendation.name
    );

    setTextContent(
        "quizResultDescription",
        `${recommendation.shortDescription} ` +
            "تم اختيار هذا الاقتراح بناءً على إجاباتك حول " +
            "الطابع، المناسبة والقوة التي تفضلها."
    );

    if (image) {
        image.src = recommendation.image;
        image.alt = recommendation.name;
    }

    if (detailsButton) {
        detailsButton.dataset.productId =
            recommendation.id;
    }

    window.setTimeout(() => {
        scrollToElement(result, 100);
    }, 50);
}


function restartQuiz() {
    appState.quizStep = 1;
    appState.quizAnswers = {};

    DOM.selectAll(
        '.quiz-step input[type="radio"]'
    ).forEach((input) => {
        input.checked = false;
    });

    const quiz = DOM.byId("fragranceQuiz");
    const result = DOM.byId("quizResult");

    if (quiz) {
        quiz.hidden = false;
    }

    if (result) {
        result.hidden = true;
    }

    setQuizStep(1);
    scrollToElement(quiz, 100);
}


/* ==========================================================================
   28. TESTIMONIAL SLIDER
   ========================================================================== */

function initializeTestimonials() {
    const slider = DOM.byId("testimonialsSlider");
    const previousButton = DOM.byId(
        "testimonialsPrevious"
    );
    const nextButton = DOM.byId("testimonialsNext");

    if (!slider) {
        return;
    }

    const cards = DOM.selectAll(
        ".testimonial-card",
        slider
    );

    createTestimonialsPagination(cards.length);

    previousButton?.addEventListener("click", () => {
        moveTestimonialSlider(-1);
    });

    nextButton?.addEventListener("click", () => {
        moveTestimonialSlider(1);
    });

    let touchStartX = 0;

    slider.addEventListener(
        "touchstart",
        (event) => {
            touchStartX =
                event.touches[0]?.clientX || 0;
        },
        { passive: true }
    );

    slider.addEventListener(
        "touchend",
        (event) => {
            const touchEndX =
                event.changedTouches[0]?.clientX || 0;

            const difference = touchEndX - touchStartX;

            if (Math.abs(difference) > 55) {
                moveTestimonialSlider(
                    difference > 0 ? -1 : 1
                );
            }
        },
        { passive: true }
    );
}


function createTestimonialsPagination(count) {
    const container = DOM.byId(
        "testimonialsPagination"
    );

    if (!container) {
        return;
    }

    container.innerHTML = "";

    for (let index = 0; index < count; index += 1) {
        const button = document.createElement("button");

        button.type = "button";
        button.classList.toggle(
            "is-active",
            index === appState.testimonialIndex
        );

        button.setAttribute(
            "aria-label",
            `عرض الرأي ${index + 1}`
        );

        button.addEventListener("click", () => {
            appState.testimonialIndex = index;
            updateTestimonialsSlider();
        });

        container.appendChild(button);
    }
}


function moveTestimonialSlider(direction) {
    const cards = DOM.selectAll(
        ".testimonial-card",
        DOM.byId("testimonialsSlider") || document
    );

    if (!cards.length) {
        return;
    }

    appState.testimonialIndex =
        (appState.testimonialIndex +
            direction +
            cards.length) %
        cards.length;

    updateTestimonialsSlider();
}


function updateTestimonialsSlider() {
    const slider = DOM.byId("testimonialsSlider");
    const cards = DOM.selectAll(
        ".testimonial-card",
        slider || document
    );

    if (!slider || !cards.length) {
        return;
    }

    if (window.innerWidth <= 767) {
        cards[appState.testimonialIndex]?.scrollIntoView({
            behavior: prefersReducedMotion()
                ? "auto"
                : "smooth",
            block: "nearest",
            inline: "center"
        });
    } else {
        cards.forEach((card, index) => {
            card.style.opacity =
                index === appState.testimonialIndex
                    ? "1"
                    : "0.68";

            card.style.transform =
                index === appState.testimonialIndex
                    ? "translateY(-8px)"
                    : "translateY(0)";
        });
    }

    DOM.selectAll(
        "#testimonialsPagination button"
    ).forEach((button, index) => {
        button.classList.toggle(
            "is-active",
            index === appState.testimonialIndex
        );
    });
}


/* ==========================================================================
   29. CONTACT FORM
   ========================================================================== */

function initializeContactForm() {
    const form = DOM.byId("contactForm");
    const message = DOM.byId("customerMessage");
    const characterCount = DOM.byId(
        "messageCharacterCount"
    );

    if (!form) {
        return;
    }

    message?.addEventListener("input", () => {
        if (
            message.value.length >
            APP_CONFIG.contactMessageMaximumLength
        ) {
            message.value = message.value.slice(
                0,
                APP_CONFIG.contactMessageMaximumLength
            );
        }

        if (characterCount) {
            characterCount.textContent = String(
                message.value.length
            );
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        clearFormErrors(form);

        const formData = new FormData(form);

        const data = {
            name: String(
                formData.get("customerName") || ""
            ).trim(),

            phone: String(
                formData.get("customerPhone") || ""
            ).trim(),

            city: String(
                formData.get("customerCity") || ""
            ).trim(),

            product: String(
                formData.get("requestedProduct") || ""
            ).trim(),

            message: String(
                formData.get("customerMessage") || ""
            ).trim(),

            consent:
                formData.get("contactConsent") === "on"
        };

        const errors = validateContactData(data);

        if (Object.keys(errors).length > 0) {
            displayFormErrors(form, errors);

            showToast(
                getCurrentTranslations().formInvalid,
                "error"
            );

            const firstInvalidField = DOM.select(
                ".has-error input, .has-error textarea, .has-error select",
                form
            );

            firstInvalidField?.focus();

            return;
        }

        const productName =
            getProduct(data.product)?.name ||
            (data.product === "recommendation"
                ? "أحتاج إلى اقتراح"
                : data.product);

        const lines = [
            `السلام عليكم، أريد الاستفسار وطلب عطر من ${APP_CONFIG.brandName}.`,
            "",
            `الاسم: ${data.name}`,
            `رقم الهاتف: ${data.phone}`,
            `المدينة: ${data.city}`,
            `العطر المطلوب: ${productName}`
        ];

        if (data.message) {
            lines.push(
                "",
                "معلومات إضافية:",
                data.message
            );
        }

        lines.push(
            "",
            "المرجو تزويدي بالسعر وتفاصيل التوصيل."
        );

        showToast(
            getCurrentTranslations().orderReady,
            "success"
        );

        openWhatsApp(lines.join("\n"));
    });
}


function validateContactData(data) {
    const errors = {};

    if (data.name.length < 2) {
        errors.customerName =
            "أدخل اسمًا صحيحًا.";
    }

    const phoneDigits = data.phone.replace(/\D/g, "");

    if (phoneDigits.length < 9) {
        errors.customerPhone =
            "أدخل رقم هاتف صحيحًا.";
    }

    if (data.city.length < 2) {
        errors.customerCity =
            "أدخل اسم المدينة.";
    }

    if (!data.product) {
        errors.requestedProduct =
            "اختر العطر أو طلب الاقتراح.";
    }

    if (
        data.message.length >
        APP_CONFIG.contactMessageMaximumLength
    ) {
        errors.customerMessage =
            "الرسالة أطول من الحد المسموح.";
    }

    if (!data.consent) {
        errors.contactConsent =
            "يجب الموافقة قبل إرسال الطلب.";
    }

    return errors;
}


function clearFormErrors(form) {
    DOM.selectAll(".form-field", form).forEach(
        (field) => {
            field.classList.remove("has-error");
        }
    );

    DOM.selectAll(
        ".form-field__error",
        form
    ).forEach((error) => {
        error.textContent = "";
    });

    DOM.selectAll(
        "input, textarea, select",
        form
    ).forEach((input) => {
        input.removeAttribute("aria-invalid");
    });
}


function displayFormErrors(form, errors) {
    Object.entries(errors).forEach(
        ([fieldName, errorMessage]) => {
            const field = DOM.select(
                `[name="${fieldName}"]`,
                form
            );

            if (field) {
                field.setAttribute(
                    "aria-invalid",
                    "true"
                );

                field
                    .closest(".form-field")
                    ?.classList.add("has-error");
            }

            const errorElement = DOM.select(
                `[data-error-for="${fieldName}"]`,
                form
            );

            if (errorElement) {
                errorElement.textContent = errorMessage;
            }
        }
    );
}


/* ==========================================================================
   30. NEWSLETTER
   ========================================================================== */

function initializeNewsletter() {
    const form = DOM.byId("newsletterForm");

    if (!form) {
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const input = DOM.byId("newsletterEmail");
        const message = DOM.byId("newsletterMessage");
        const email = input?.value.trim() || "";

        if (!isValidEmail(email)) {
            if (message) {
                message.textContent =
                    getCurrentTranslations()
                        .newsletterInvalid;

                message.style.color = "#7e1e1e";
            }

            input?.focus();
            return;
        }

        if (message) {
            message.textContent =
                getCurrentTranslations()
                    .newsletterSuccess;

            message.style.color = "#153d25";
        }

        form.reset();

        showToast(
            getCurrentTranslations().newsletterSuccess,
            "success"
        );
    });
}


function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(
        email
    );
}


/* ==========================================================================
   31. COOKIE NOTICE
   ========================================================================== */

function initializeCookieNotice() {
    const notice = DOM.byId("cookieNotice");
    const acceptButton = DOM.byId(
        "cookieAcceptButton"
    );
    const declineButton = DOM.byId(
        "cookieDeclineButton"
    );

    if (!notice) {
        return;
    }

    const consent = readStorage(
        APP_CONFIG.storageKeys.cookies,
        null
    );

    if (consent === null) {
        window.setTimeout(() => {
            notice.classList.add("is-visible");
        }, 2000);
    }

    acceptButton?.addEventListener("click", () => {
        writeStorage(
            APP_CONFIG.storageKeys.cookies,
            "accepted"
        );

        notice.classList.remove("is-visible");
    });

    declineButton?.addEventListener("click", () => {
        writeStorage(
            APP_CONFIG.storageKeys.cookies,
            "declined"
        );

        notice.classList.remove("is-visible");
    });
}


/* ==========================================================================
   32. BACK TO TOP
   ========================================================================== */

function initializeBackToTop() {
    DOM.byId("backToTopButton")?.addEventListener(
        "click",
        () => {
            window.scrollTo({
                top: 0,
                behavior: prefersReducedMotion()
                    ? "auto"
                    : "smooth"
            });
        }
    );
}


/* ==========================================================================
   33. TOAST NOTIFICATIONS
   ========================================================================== */

function showToast(message, type = "info") {
    const container = DOM.byId("toastContainer");

    if (!container || !message) {
        return;
    }

    const toast = document.createElement("article");
    const icon = getToastIcon(type);

    toast.className = `toast toast--${type}`;
    toast.setAttribute("role", "status");

    toast.innerHTML = `
        <span class="toast__icon" aria-hidden="true">
            ${icon}
        </span>

        <p class="toast__message">
            ${escapeHTML(message)}
        </p>

        <button
            class="toast__close"
            type="button"
            aria-label="إغلاق الإشعار"
        >
            ×
        </button>
    `;

    const close = () => {
        if (toast.classList.contains("is-hiding")) {
            return;
        }

        toast.classList.add("is-hiding");

        window.setTimeout(() => {
            toast.remove();
        }, 420);
    };

    DOM.select(
        ".toast__close",
        toast
    )?.addEventListener("click", close);

    container.appendChild(toast);

    window.setTimeout(close, APP_CONFIG.toastDuration);
}


function getToastIcon(type) {
    const icons = {
        success: "✓",
        error: "!",
        warning: "!",
        info: "✦"
    };

    return icons[type] || icons.info;
}


/* ==========================================================================
   34. CLOSE OVERLAYS
   ========================================================================== */

function closeAllOverlays(except = "") {
    if (except !== "mobile-menu") {
        closeMobileMenu();
    }

    if (except !== "product-modal") {
        closeProductModal();
    }

    if (except !== "cart-drawer") {
        closeCartDrawer();
    }

    if (except !== "wishlist-drawer") {
        closeWishlistDrawer();
    }

    if (except !== "search") {
        closeSearch();
    }

    closeLanguageMenu();
}


/* ==========================================================================
   35. KEYBOARD ACCESSIBILITY
   ========================================================================== */

function initializeKeyboardAccessibility() {
    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") {
            return;
        }

        closeAllOverlays();
    });

    document.addEventListener("keydown", (event) => {
        if (
            event.key === "/" &&
            !isTypingElement(event.target)
        ) {
            event.preventDefault();
            openSearch();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key !== "Tab") {
            return;
        }

        const activeOverlay = getActiveOverlay();

        if (activeOverlay) {
            trapFocus(event, activeOverlay);
        }
    });
}


function isTypingElement(element) {
    return (
        element instanceof HTMLInputElement ||
        element instanceof HTMLTextAreaElement ||
        element instanceof HTMLSelectElement ||
        element?.isContentEditable
    );
}


function getActiveOverlay() {
    return (
        DOM.select(".product-modal.is-open") ||
        DOM.select(".cart-drawer.is-open") ||
        DOM.select(".wishlist-drawer.is-open") ||
        DOM.select(".search-overlay.is-open") ||
        DOM.select(".mobile-menu.is-open")
    );
}


function trapFocus(event, container) {
    const focusableElements = DOM.selectAll(
        [
            "a[href]",
            "button:not([disabled])",
            "input:not([disabled])",
            "textarea:not([disabled])",
            "select:not([disabled])",
            '[tabindex]:not([tabindex="-1"])'
        ].join(","),
        container
    ).filter(
        (element) =>
            !element.hidden &&
            element.offsetParent !== null
    );

    if (!focusableElements.length) {
        return;
    }

    const first = focusableElements[0];
    const last =
        focusableElements[focusableElements.length - 1];

    if (
        event.shiftKey &&
        document.activeElement === first
    ) {
        event.preventDefault();
        last.focus();
    } else if (
        !event.shiftKey &&
        document.activeElement === last
    ) {
        event.preventDefault();
        first.focus();
    }
}


/* ==========================================================================
   36. IMAGE ERROR HANDLING
   ========================================================================== */

function initializeImageErrorHandling() {
    document.addEventListener(
        "error",
        (event) => {
            const target = event.target;

            if (!(target instanceof HTMLImageElement)) {
                return;
            }

            if (target.dataset.fallbackApplied === "true") {
                return;
            }

            target.dataset.fallbackApplied = "true";

            const fallback =
                "assets/images/hero/hero-poster.jpg";

            if (!target.src.endsWith(fallback)) {
                target.src = fallback;
            }
        },
        true
    );
}


/* ==========================================================================
   37. PAGE TRANSITION
   ========================================================================== */

function runPageTransition(callback) {
    const transition = DOM.byId("pageTransition");

    if (!transition || prefersReducedMotion()) {
        callback?.();
        return;
    }

    transition.classList.add("is-active");

    window.setTimeout(() => {
        callback?.();
    }, 650);

    window.setTimeout(() => {
        transition.classList.remove("is-active");
    }, 1500);
}


/* ==========================================================================
   38. OPTIONAL PRODUCT CARD CREATOR
   ========================================================================== */

function createProductCard(product) {
    const article = document.createElement("article");

    article.className = "product-card";
    article.dataset.productId = product.id;
    article.dataset.category =
        product.category.join(" ");

    article.innerHTML = `
        <div class="product-card__media">
            <span class="product-card__badge">
                ${escapeHTML(product.badge)}
            </span>

            <button
                class="product-card__wishlist add-to-wishlist-button"
                type="button"
                data-product-id="${escapeHTML(product.id)}"
                aria-label="إضافة ${escapeHTML(product.name)} إلى المفضلة"
            >
                ♡
            </button>

            <button
                class="product-card__image-button product-details-button"
                type="button"
                data-product-id="${escapeHTML(product.id)}"
                aria-label="عرض تفاصيل ${escapeHTML(product.name)}"
            >
                <img
                    class="product-card__image"
                    src="${escapeHTML(product.image)}"
                    alt="${escapeHTML(product.name)}"
                    loading="lazy"
                >

                <span class="product-card__image-overlay"></span>

                <span class="product-card__quick-view">
                    عرض سريع
                </span>
            </button>
        </div>

        <div class="product-card__content">
            <div class="product-card__meta">
                <span>${escapeHTML(product.brand)}</span>
                <span>${escapeHTML(product.subtitle)}</span>
            </div>

            <h3 class="product-card__title">
                ${escapeHTML(product.name)}
            </h3>

            <p class="product-card__notes">
                ${escapeHTML(product.family.join(" · "))}
            </p>

            <div class="product-card__footer">
                <div class="product-card__price">
                    <span class="product-card__price-label">
                        السعر
                    </span>

                    <strong>
                        حسب السعة
                    </strong>
                </div>

                <button
                    class="product-card__add add-to-cart-button"
                    type="button"
                    data-product-id="${escapeHTML(product.id)}"
                    aria-label="إضافة ${escapeHTML(product.name)} إلى السلة"
                >
                    <span>+</span>
                </button>
            </div>
        </div>
    `;

    return article;
}


/* ==========================================================================
   39. NETWORK AND CONNECTION STATUS
   ========================================================================== */

window.addEventListener("offline", () => {
    showToast(
        "انقطع الاتصال بالإنترنت، لكن يمكنك مواصلة تصفح المحتوى المحمّل.",
        "warning"
    );
});

window.addEventListener("online", () => {
    showToast(
        "تم استرجاع الاتصال بالإنترنت.",
        "success"
    );
});


/* ==========================================================================
   40. GLOBAL ERROR PROTECTION
   ========================================================================== */

window.addEventListener("error", (event) => {
    console.error("Gift Parfums runtime error:", {
        message: event.message,
        file: event.filename,
        line: event.lineno,
        column: event.colno
    });
});

window.addEventListener(
    "unhandledrejection",
    (event) => {
        console.error(
            "Gift Parfums unhandled promise rejection:",
            event.reason
        );
    }
);


/* ==========================================================================
   41. PUBLIC WEBSITE API
   ========================================================================== */

/*
 * تسمح هذه الواجهة باستعمال بعض الوظائف من Console
 * أو من ملفات JavaScript أخرى مستقبلًا.
 *
 * أمثلة:
 *
 * GiftParfums.openProduct("suprem-bouquet");
 * GiftParfums.addToCart("versace-eros", "100ml", 1);
 * GiftParfums.openCart();
 */

window.GiftParfums = Object.freeze({
    products: PRODUCTS,

    openProduct(productId) {
        openProductModal(productId);
    },

    addToCart(productId, size, quantity) {
        addProductToCart(
            productId,
            size,
            quantity
        );
    },

    toggleWishlist(productId) {
        toggleWishlistProduct(productId);
    },

    openCart() {
        openCartDrawer();
    },

    openWishlist() {
        openWishlistDrawer();
    },

    openSearch() {
        openSearch();
    },

    showMessage(message, type = "info") {
        showToast(message, type);
    },

    scrollTo(selector) {
        scrollToElement(selector, 80);
    },

    changeLanguage(language) {
        applyLanguage(language, true);
    },

    clearCart() {
        appState.cart = [];
        persistCart();
        updateCartInterface();
    },

    clearWishlist() {
        appState.wishlist = [];
        persistWishlist();
        updateWishlistInterface();
    }
});


/* ==========================================================================
   END OF GIFT PARFUMS JAVASCRIPT
   ========================================================================== */
