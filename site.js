"use strict";

(() => {
  const messages = {
    en: {
      skip: "Skip to content",
      brandLabel: "Pivot Rush home",
      navLabel: "Main navigation",
      languageLabel: "Language",
      navGame: "The game",
      navSupport: "Support",
      eyebrow: "FIND YOUR FLOW. KEEP YOUR EDGE.",
      heroLine1: "Every turn",
      heroLine2: "changes everything.",
      heroDescription: "Your trail keeps growing. Your room to move doesn't. Swipe, time your turns, and see how far your reflexes can take you.",
      download: "Download on the App Store",
      discover: "Discover the game",
      availability: "Available on the App Store · Free download · In-app purchases",
      heroNote: "Your own trail is your next challenge.",
      gameplayAlt: "Pivot Rush gameplay: a short turquoise trail turns through a dark arena with yellow energy pickups.",
      gameplayCaption: "Actual gameplay",
      gameEyebrow: "EASY TO START. HARD TO PUT DOWN.",
      gameLine1: "Small arena.",
      gameLine2: "Big decisions.",
      gameDescription: "Collect energy and find your rhythm. Get comfortable in Easy, then test your turns against your own growing trail in Medium and Hard.",
      soloTitle: "Chase your best",
      soloDescription: "Pick Easy, Medium, or Hard and chase a new personal best. Each run is another chance to sharpen your reflexes.",
      soloTag: "SOLO ARCADE",
      raceTitle: "Make it a race",
      raceDescription: "Race a friend online in a 60-second Flow Race through Game Center. Quick Match searches for a real player first; if none joins, it starts a local race against a computer-controlled rival.",
      raceTag: "ONLINE FLOW RACE",
      styleTitle: "Find your style",
      styleDescription: "Explore character looks, trails, and arena styles. Complete daily tasks and give each run a look of your own.",
      paidDisclosure: "Some cosmetics require crystals or an in-app purchase.",
      styleTag: "CUSTOMIZE YOUR RUN",
      raceRequirement: "Online races require an internet connection and Game Center sign-in.",
      supportEyebrow: "PLAYER SUPPORT",
      supportTitle: "Let's get you back in the flow.",
      supportDescription: "A question, a purchase issue, or something that doesn't feel right? Contact the developer directly in English or Turkish.",
      supportNote: "Include your device model, iOS version, app version, and what happened. Please don't send passwords or payment card details.",
      faqTitle: "A few useful answers",
      faqPurchaseQuestion: "Need help with a purchase?",
      faqPurchaseAnswer: "For a missing item, email the developer with the product name and what happened. Apple handles App Store payments and refund requests.",
      appleRefund: "Apple's refund guidance ↗",
      faqRaceQuestion: "What do I need for online races?",
      faqRaceAnswer: "Flow Race uses Apple Game Center. Sign in to Game Center on your device and use an internet connection to join an online race.",
      faqPrivacyQuestion: "Where can I read about privacy?",
      faqPrivacyAnswer: "Our privacy policy explains local progress, optional Apple services, in-app purchases, and advertising.",
      privacy: "Read the privacy policy ↗",
      footerPrivacy: "Privacy policy",
      footerContact: "Contact",
      description: "A growing trail. A shrinking escape. Discover Pivot Rush, the neon arcade game with solo score challenges and online Flow Race duels. Get support in English or Turkish.",
      socialDescription: "A growing trail. A shrinking escape. Find your line in Pivot Rush.",
      locale: "en_US"
    },
    tr: {
      skip: "İçeriğe geç",
      brandLabel: "Pivot Rush ana sayfa",
      navLabel: "Ana menü",
      languageLabel: "Dil",
      navGame: "Oyun",
      navSupport: "Destek",
      eyebrow: "AKIŞI YAKALA. REFLEKSİNİ KONUŞTUR.",
      heroLine1: "Bir dönüş",
      heroLine2: "her şeyi değiştirir.",
      heroDescription: "İzin uzadıkça hareket alanın daralır. Kaydır, dönüşünü zamanla ve reflekslerinin seni ne kadar ileri taşıdığını gör.",
      download: "App Store'dan indir",
      discover: "Oyunu keşfet",
      availability: "App Store'da · Ücretsiz indir · Uygulama içi satın alımlar",
      heroNote: "Bir sonraki zorluğun kendi izin.",
      gameplayAlt: "Pivot Rush oyun ekranı: sarı enerji parçacıklarının bulunduğu karanlık arenada dönen kısa turkuaz iz.",
      gameplayCaption: "Gerçek oyun ekranı",
      gameEyebrow: "BAŞLAMASI KOLAY. BIRAKMASI ZOR.",
      gameLine1: "Küçük arena.",
      gameLine2: "Büyük kararlar.",
      gameDescription: "Enerjileri topla ve ritmini bul. Kolay seviyede alış, ardından Orta ve Zor seviyelerde uzayan izine karşı dönüşlerini test et.",
      soloTitle: "Rekorunun peşine düş",
      soloDescription: "Kolay, Orta veya Zor seviyeyi seç ve yeni rekoruna ulaş. Her oyun, reflekslerini geliştirmek için bir fırsat.",
      soloTag: "TEK OYUNCULU ARCADE",
      raceTitle: "Heyecanı yarışa taşı",
      raceDescription: "Game Center üzerinden arkadaşınla 60 saniyelik çevrimiçi Flow Race yarışına katıl. Hızlı Eşleşme önce gerçek bir oyuncu arar; rakip bulunamazsa bilgisayarın yönettiği rakiple yerel yarış başlar.",
      raceTag: "ONLINE FLOW RACE",
      styleTitle: "Tarzını bul",
      styleDescription: "Karakter görünümlerini, izleri ve arena stillerini keşfet. Günlük görevleri tamamla ve her oyuna kendi tarzını kat.",
      paidDisclosure: "Bazı kozmetikler kristal veya uygulama içi satın alma gerektirir.",
      styleTag: "OYUNUNA TARZ KAT",
      raceRequirement: "Online yarışlar için internet bağlantısı ve Game Center girişi gerekir.",
      supportEyebrow: "OYUNCU DESTEĞİ",
      supportTitle: "Akışa dönmene yardımcı olalım.",
      supportDescription: "Bir sorun, satın alma hakkında bir soru veya paylaşmak istediğin bir şey mi var? Geliştiriciye Türkçe veya İngilizce yazabilirsin.",
      supportNote: "Cihaz modelini, iOS sürümünü, uygulama sürümünü ve ne olduğunu belirt. Şifre veya ödeme kartı bilgisi gönderme.",
      faqTitle: "Birkaç yararlı yanıt",
      faqPurchaseQuestion: "Satın alma için yardım mı gerekiyor?",
      faqPurchaseAnswer: "Eksik bir içerik varsa ürün adını ve yaşanan sorunu geliştiriciye e-postayla ilet. App Store ödemeleri ve iade talepleri Apple tarafından yönetilir.",
      appleRefund: "Apple'ın iade rehberi ↗",
      faqRaceQuestion: "Online yarış için ne gerekiyor?",
      faqRaceAnswer: "Flow Race, Apple Game Center'ı kullanır. Online yarışa katılmak için cihazında Game Center'a giriş yap ve internet bağlantısı kullan.",
      faqPrivacyQuestion: "Gizlilik hakkında nereden bilgi alabilirim?",
      faqPrivacyAnswer: "Gizlilik politikamız; cihazdaki ilerlemeyi, isteğe bağlı Apple hizmetlerini, uygulama içi satın alımları ve reklamları açıklar.",
      privacy: "Gizlilik politikasını oku ↗",
      footerPrivacy: "Gizlilik politikası",
      footerContact: "İletişim",
      description: "İzin uzar, alanın daralır. Pivot Rush'ın neon arenasında rekorunun peşine düş ve Flow Race'te online yarış. Türkçe ve İngilizce oyuncu desteği.",
      socialDescription: "İzin uzar, alanın daralır. Pivot Rush'ta yolunu bul, dönüşünü zamanla.",
      locale: "tr_TR"
    }
  };
  const storageKey = "pivot-rush-language";
  const validLanguage = value => Object.prototype.hasOwnProperty.call(messages, value);
  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  let savedLanguage;
  try { savedLanguage = window.localStorage.getItem(storageKey); } catch { /* Storage may be disabled. */ }
  const initialLanguage = validLanguage(queryLanguage) ? queryLanguage : validLanguage(savedLanguage) ? savedLanguage : "en";

  function setLanguage(language, updateUrl = false) {
    if (!validLanguage(language)) return;
    const translation = messages[language];
    document.documentElement.lang = language;
    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(translation, key)) element.textContent = translation[key];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(element => element.setAttribute("aria-label", translation[element.dataset.i18nAria]));
    document.querySelectorAll("[data-i18n-alt]").forEach(element => element.setAttribute("alt", translation[element.dataset.i18nAlt]));
    document.querySelectorAll("[data-language]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.language === language)));
    document.querySelector('meta[name="description"]').content = translation.description;
    document.querySelector('meta[property="og:description"]').content = translation.socialDescription;
    document.querySelector('meta[property="og:locale"]').content = translation.locale;
    document.querySelector('meta[property="og:locale:alternate"]').content = messages[language === "en" ? "tr" : "en"].locale;
    document.getElementById("gameplay-image").src = `assets/pivot-rush-gameplay-${language}.png`;
    try { window.localStorage.setItem(storageKey, language); } catch { /* Switching still works without storage. */ }
    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", language);
      window.history.replaceState(null, "", url);
    }
  }

  document.querySelectorAll("[data-language]").forEach(button => {
    button.addEventListener("click", () => setLanguage(button.dataset.language, true));
  });
  setLanguage(initialLanguage);
})();
