var klaroConfig = {
    elementID: "klaro",
    storageMethod: "cookie",
    cookieName: "events_capinside_cookie_consent",
    cookieExpiresAfterDays: 3650,
    privacyPolicy: "capinside.com/datenschutz",
    "default": !1,
    mustConsent: !1,
    acceptAll: !0,
    hideDeclineAll: !1,
    translations: {
        de: {
            app: {
                disableAll: {
                    title: "Optionale Cookies aktivieren/deaktivieren",
                    description: "Nutzen Sie diesen Schalter, um alle optionalen Cookies zu aktivieren/deaktivieren."
                }
            },
            acceptSelected: "Ausgew\xe4hlten zustimmen",
            acceptAll: "Allen zustimmen",
            decline: "Essentiellen zustimmen",
            consentNotice: {
                learnMore: "Individuell einstellen",
                description: "CAPinside verwendet Cookies. Einige sind essentiell, andere helfen die Funktionalit\xe4t der Website zu verbessern. Wir setzen Cookies f\xfcr folgende Zwecke: {purposes}.\n"
            },
            consentModal: {
                title: "Diese Informationen speichern wir",
                description: "Hier k\xf6nnen Sie einsehen und anpassen, welche Cookies wir setzen."
            },
        
            "google-analytics": {
                description: "Analyse-Dienst zur Nutzeranalyse und Produktverbesserung."
            },
            hotjar: {
                description: "Analyse-Dienst zur Nutzeranalyse und Produktverbesserung."
            },
            
            userlike: {
                description: "Unser Live-Chat zur direkten Kontaktaufnahme."
            },
            vimeo: {
                description: "Tracking und Analyse der Vimeo Video Services."
            },
            purposes: {
                necessary: "Essentiell",
                functional: "Funktion",
                statistics: "Statistik",
                marketing: "Marketing"
            }
        },
        en: {
            consentModal: {
                description: "Here you can see and customize the cookies we use."
            },
            session: {
                description: "Necessary for correctly navigating our website."
            },
            userlike: {
                description: "Our live chat for direct contact."
            },
            
            purposes: {
                necessary: "Essential",
                functional: "Functional",
                statistics: "Statistics",
                marketing: "Marketing"
            },
            decline: "Essentials Only"
        }
    },
    apps: [{
        name: "google-analytics",
        title: "Google Analytics",
        purposes: ["statistics"],
        optOut: !1,
        required: !1
    }, {
        name: "hotjar",
        title: "Hotjar",
        purposes: ["statistics"],
        optOut: !1,
        required: !1
    }, {
        name: "userlike",
        title: "Userlike Live-Chat",
        purposes: ["functional", "statistics"],
        required: !1
    }, {
        name: "vimeo",
        title: "Vimeo",
        purposes: ["statistics"],
        optOut: !1,
        required: !1
    }]
};

