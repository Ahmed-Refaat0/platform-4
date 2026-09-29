// State: Theme ('light' | 'dark') and Language ('ar' | 'en')
let currentTheme = localStorage.getItem('site_theme') || 'light';
let currentLang = localStorage.getItem('site_lang') || 'ar';

// Apply state on initial load
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  applyLanguage(currentLang);
});

// 1. Toggle Theme Function
function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('site_theme', currentTheme);
  applyTheme(currentTheme);
}

// 2. Toggle Language Function
function toggleLanguage() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  localStorage.setItem('site_lang', currentLang);
  applyLanguage(currentLang);
}

// Apply Theme Styles
function applyTheme(theme) {
  const root = document.getElementById('root-html');
  const body = document.getElementById('body-app');
  const sidebar = document.getElementById('sidebar');
  const sidebarHeaderBox = document.getElementById('sidebar-header-box');
  const sidebarLogoIcon = document.getElementById('sidebar-logo-icon');
  const sidebarFooterBox = document.getElementById('sidebar-footer-box');
  const userAvatarBox = document.getElementById('user-avatar-box');
  const mainHeader = document.getElementById('main-header');
  const mainFooter = document.getElementById('main-footer');
  const infoBanner = document.getElementById('info-banner');
  const infoIconWrapper = document.getElementById('info-icon-wrapper');
  const infoIcon = document.getElementById('info-icon');
  const headerIconBox = document.getElementById('header-icon-box');

  const btnTheme = document.getElementById('btn-theme-toggle');
  const iconTheme = document.getElementById('icon-theme');
  const txtTheme = document.getElementById('txt-theme-toggle');

  if (theme === 'dark') {
    root.classList.add('dark');
    body.className = "min-h-screen flex antialiased bg-[#121514] text-[#e1ebe6] transition-colors duration-300";

    sidebar.className = "w-64 bg-[#0d1815] text-white flex flex-col justify-between shrink-0 min-h-screen sticky top-0 h-screen z-30 select-none shadow-2xl transition-all duration-300 " + (currentLang === 'ar' ? 'border-l border-[#1c2b25]' : 'border-r border-[#1c2b25]');
    sidebarHeaderBox.className = "flex items-center gap-3 pb-5 border-b border-[#1c2b25]";
    sidebarLogoIcon.className = "w-10 h-10 rounded-xl bg-[#14261f] border border-[#234235] flex items-center justify-center shrink-0 shadow-sm text-[#34d399]";
    document.getElementById('txt-brand-name').className = "font-bold text-base text-white tracking-wide";
    document.getElementById('txt-brand-badge').className = "text-[10px] bg-[#173328] text-[#57f1db] px-1.5 py-0.5 rounded border border-[#275340] font-semibold leading-tight";
    document.getElementById('txt-brand-sub').className = "text-xs text-[#8fa39b] mt-0.5";

    sidebarFooterBox.className = "p-4 border-t border-[#1c2b25] bg-[#08100e]";
    userAvatarBox.className = "w-8 h-8 rounded-lg bg-[#14261f] text-[#34d399] flex items-center justify-center text-sm font-bold border border-[#234235]";
    document.getElementById('txt-user-name').className = "text-xs font-bold text-white group-hover:text-[#34d399] transition-colors";
    document.getElementById('txt-user-role').className = "text-[11px] text-[#8fa39b]";

    // Header
    mainHeader.className = "bg-[#171c1a] border-b border-[#25332d] sticky top-0 z-20 px-8 py-3.5 transition-colors duration-300";
    if (headerIconBox) headerIconBox.className = "w-9 h-9 rounded-xl bg-[#14261f] text-[#34d399] flex items-center justify-center border border-[#234235]";
    document.getElementById('txt-page-title').className = "text-xl font-bold tracking-tight text-white";
    document.getElementById('txt-page-badge').className = "text-xs bg-[#173328] text-[#57f1db] font-bold px-2.5 py-0.5 rounded-md border border-[#275340]";
    document.getElementById('txt-page-desc').className = "text-xs text-[#8fa39b] font-medium mt-0.5";

    // Quick videos button
    const btnQuickVid = document.getElementById('btn-quick-videos');
    if (btnQuickVid) btnQuickVid.className = "bg-[#1e382e] hover:bg-[#284d3f] text-[#57f1db] hover:text-white font-bold px-3.5 py-2 rounded-lg flex items-center gap-2 border border-[#2e5446] shadow-xs transition-all cursor-pointer";

    // Info Banner
    infoBanner.className = "bg-[#171c1a] border border-[#2dd4bf] px-4 py-3 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs sm:text-sm font-medium shadow-xs transition-all duration-300";
    if (infoIconWrapper) infoIconWrapper.className = "w-8 h-8 rounded-lg bg-[#14261f] text-[#34d399] flex items-center justify-center shrink-0 border border-[#234235]";
    infoIcon.className = "material-symbols-outlined text-[#2dd4bf] text-[20px]";
    document.getElementById('txt-banner-title').className = "font-bold text-white";
    document.getElementById('txt-banner-sub').className = "text-xs text-[#8fa39b] font-normal";
    const bStat = document.getElementById('txt-banner-stat');
    if (bStat) bStat.className = "text-xs font-bold text-[#57f1db] bg-[#173328] px-2.5 py-1 rounded-md border border-[#275340]";

    // Footer
    mainFooter.className = "bg-[#171c1a] border-t border-[#25332d] py-4 px-8 text-xs text-[#8fa39b] mt-auto transition-colors duration-300";
    document.getElementById('txt-footer-left-1').className = "font-bold text-white";

    // Header action buttons
    document.querySelectorAll('.header-action-btn').forEach(btn => {
      btn.className = "header-action-btn bg-[#1d2622] hover:bg-[#25312c] text-[#cbdad3] font-medium px-3.5 py-2 rounded-lg flex items-center gap-2 border border-[#2a3a33] transition-colors cursor-pointer shadow-xs";
    });
    document.getElementById('icon-calendar').className = "material-symbols-outlined text-[18px] text-[#34d399]";
    document.getElementById('icon-notifications').className = "material-symbols-outlined text-[18px] text-[#34d399]";

    // Theme Toggle Button
    btnTheme.className = "px-3.5 py-2 rounded-lg font-bold flex items-center gap-2 border shadow-xs transition-all cursor-pointer bg-[#1d2622] hover:bg-[#25312c] text-[#34d399] border-[#2a3a33]";
    iconTheme.className = "material-symbols-outlined text-[18px] text-[#34d399]";
    iconTheme.innerText = "light_mode";
    txtTheme.innerText = currentLang === 'ar' ? 'الوضع النهاري' : 'Light Mode';

    // Lang Toggle Button
    document.getElementById('btn-lang-toggle').className = "px-3.5 py-2 rounded-lg font-bold flex items-center gap-2 border shadow-xs transition-all cursor-pointer bg-[#1d2622] hover:bg-[#25312c] text-white border-[#2a3a33]";
    document.getElementById('icon-lang').className = "material-symbols-outlined text-[18px] text-[#34d399]";

    // Cards Dark Theme Styling
    document.querySelectorAll('.card-item').forEach(card => {
      card.className = "card-item bg-[#1b221f] rounded-2xl border border-[#27332e] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#2dd4bf]/40 transition-all duration-300 flex flex-col group";
    });
    document.querySelectorAll('.card-title').forEach(t => {
      t.className = "card-title text-base font-bold text-white group-hover:text-[#34d399] transition-colors";
    });
    document.querySelectorAll('.card-action-btn').forEach(btn => {
      btn.className = "card-action-btn mt-4 w-full py-2.5 px-4 bg-[#1e382e] hover:bg-[#284d3f] text-[#57f1db] hover:text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer border border-[#2e5446]";
    });

    // Tags inside images in dark theme
    document.querySelectorAll('[id^="tag-card-"]').forEach(tag => {
      tag.className = "absolute top-3 start-3 bg-[#121514]/85 backdrop-blur-md text-[#34d399] text-[11px] font-semibold px-2.5 py-0.5 rounded-md border border-[#27332e]";
    });

    // Badges in dark theme
    const b1 = document.getElementById('badge-card-1');
    if (b1) b1.className = "text-xs bg-[#152e26] text-[#34d399] font-medium px-2 py-0.5 rounded border border-[#225042]";
    const b2 = document.getElementById('badge-card-2');
    if (b2) b2.className = "text-xs bg-[#172d3f] text-[#7bd0ff] font-medium px-2 py-0.5 rounded border border-[#204969]";

    updateNavStyles('dark');

  } else {
    // LIGHT THEME
    root.classList.remove('dark');
    body.className = "min-h-screen flex antialiased bg-[#ffffff] text-[#192420] transition-colors duration-300";

    sidebar.className = "w-64 bg-[#132821] text-white flex flex-col justify-between shrink-0 min-h-screen sticky top-0 h-screen z-30 select-none shadow-xl transition-all duration-300 " + (currentLang === 'ar' ? 'border-l border-[#1f3f35]' : 'border-r border-[#1f3f35]');
    sidebarHeaderBox.className = "flex items-center gap-3 pb-5 border-b border-[#224439]";
    sidebarLogoIcon.className = "w-10 h-10 rounded-xl bg-[#244d3f] border border-[#356655] flex items-center justify-center shrink-0 shadow-sm text-emerald-300";
    document.getElementById('txt-brand-name').className = "font-bold text-base text-white tracking-wide";
    document.getElementById('txt-brand-badge').className = "text-[10px] bg-[#244d3f] text-emerald-200 px-1.5 py-0.5 rounded border border-[#356655] font-semibold leading-tight";
    document.getElementById('txt-brand-sub').className = "text-xs text-emerald-100/60 mt-0.5";

    sidebarFooterBox.className = "p-4 border-t border-[#224439] bg-[#0f211b]";
    userAvatarBox.className = "w-8 h-8 rounded-lg bg-[#244d3f] text-emerald-200 flex items-center justify-center text-sm font-bold border border-[#356655]/50";
    document.getElementById('txt-user-name').className = "text-xs font-bold text-white group-hover:text-emerald-200 transition-colors";
    document.getElementById('txt-user-role').className = "text-[11px] text-emerald-100/50";

    // Header
    mainHeader.className = "bg-white border-b border-gray-100 sticky top-0 z-20 px-8 py-3.5 shadow-xs transition-colors duration-300";
    if (headerIconBox) headerIconBox.className = "w-9 h-9 rounded-xl bg-[#e9f2ee] text-[#1e3e34] flex items-center justify-center border border-[#d1ded9]";
    document.getElementById('txt-page-title').className = "text-xl font-bold tracking-tight text-gray-900";
    document.getElementById('txt-page-badge').className = "text-xs bg-[#e9f2ee] text-[#1e3e34] font-bold px-2.5 py-0.5 rounded-md border border-[#d1ded9]";
    document.getElementById('txt-page-desc').className = "text-xs text-gray-500 font-medium mt-0.5";

    // Quick videos button
    const btnQuickVid = document.getElementById('btn-quick-videos');
    if (btnQuickVid) btnQuickVid.className = "bg-[#1e3e34] hover:bg-[#162e27] text-white font-bold px-3.5 py-2 rounded-lg flex items-center gap-2 shadow-xs hover:shadow transition-all cursor-pointer";

    // Info Banner
    infoBanner.className = "bg-white border border-[#1e3e34] px-4 py-3 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs sm:text-sm font-medium shadow-xs transition-all duration-300";
    if (infoIconWrapper) infoIconWrapper.className = "w-8 h-8 rounded-lg bg-[#e9f2ee] text-[#1e3e34] flex items-center justify-center shrink-0 border border-[#d1ded9]";
    infoIcon.className = "material-symbols-outlined text-[#1e3e34] text-[20px]";
    document.getElementById('txt-banner-title').className = "font-bold text-gray-900";
    document.getElementById('txt-banner-sub').className = "text-xs text-gray-600 font-normal";
    const bStat = document.getElementById('txt-banner-stat');
    if (bStat) bStat.className = "text-xs font-bold text-[#1e3e34] bg-[#e9f2ee] px-2.5 py-1 rounded-md border border-[#d1ded9]";

    // Footer
    mainFooter.className = "bg-white border-t border-gray-200 py-4 px-8 text-xs text-gray-500 mt-auto transition-colors duration-300";
    document.getElementById('txt-footer-left-1').className = "font-bold text-gray-800";

    // Header buttons
    document.querySelectorAll('.header-action-btn').forEach(btn => {
      btn.className = "header-action-btn bg-white hover:bg-gray-50 text-gray-700 font-medium px-3.5 py-2 rounded-lg flex items-center gap-2 border border-gray-200 shadow-xs cursor-pointer";
    });
    document.getElementById('icon-calendar').className = "material-symbols-outlined text-[18px] text-[#1e3e34]";
    document.getElementById('icon-notifications').className = "material-symbols-outlined text-[18px] text-[#1e3e34]";

    // Theme Toggle Button
    btnTheme.className = "px-3.5 py-2 rounded-lg font-bold flex items-center gap-2 border shadow-xs transition-all cursor-pointer bg-white hover:bg-gray-50 text-gray-800 border-gray-200";
    iconTheme.className = "material-symbols-outlined text-[18px] text-[#1e3e34]";
    iconTheme.innerText = "dark_mode";
    txtTheme.innerText = currentLang === 'ar' ? 'الوضع الداكن' : 'Dark Mode';

    // Lang Toggle Button
    document.getElementById('btn-lang-toggle').className = "px-3.5 py-2 rounded-lg font-bold flex items-center gap-2 border shadow-xs transition-all cursor-pointer bg-gray-50 hover:bg-gray-100 text-gray-800 border-gray-200";
    document.getElementById('icon-lang').className = "material-symbols-outlined text-[18px] text-[#1e3e34]";

    // Cards Light Theme Styling
    document.querySelectorAll('.card-item').forEach(card => {
      card.className = "card-item bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group";
    });
    document.querySelectorAll('.card-title').forEach(t => {
      t.className = "card-title text-base font-bold text-gray-900 group-hover:text-[#1e3e34] transition-colors";
    });
    document.querySelectorAll('.card-action-btn').forEach(btn => {
      btn.className = "card-action-btn mt-4 w-full py-2.5 px-4 bg-[#1e3e34] hover:bg-[#162e27] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs group-hover:shadow";
    });

    // Tags inside images
    document.querySelectorAll('[id^="tag-card-"]').forEach(tag => {
      tag.className = "absolute top-3 start-3 bg-white/90 backdrop-blur-xs text-[#1e3e34] text-[11px] font-bold px-2.5 py-0.5 rounded-md shadow-xs border border-gray-200/60";
    });

    // Badges in light theme
    const b1 = document.getElementById('badge-card-1');
    if (b1) b1.className = "text-xs bg-emerald-50 text-emerald-800 font-semibold px-2 py-0.5 rounded border border-emerald-100";
    const b2 = document.getElementById('badge-card-2');
    if (b2) b2.className = "text-xs bg-blue-50 text-blue-800 font-semibold px-2 py-0.5 rounded border border-blue-100";

    updateNavStyles('light');
  }
}

// Apply Language (AR / EN)
function applyLanguage(lang) {
  const root = document.getElementById('root-html');
  const body = document.getElementById('body-app');
  const sidebar = document.getElementById('sidebar');
  const btnLang = document.getElementById('btn-lang-toggle');
  const txtTheme = document.getElementById('txt-theme-toggle');

  if (lang === 'ar') {
    root.setAttribute('dir', 'rtl');
    root.setAttribute('lang', 'ar');
    body.className = body.className.replace('text-left', 'text-right');
    btnLang.querySelector('span:last-child').innerText = "English";
    txtTheme.innerText = currentTheme === 'dark' ? 'الوضع النهاري' : 'الوضع الداكن';

    // Brand & User
    document.getElementById('txt-brand-name').innerText = "النظام الأكاديمي";
    document.getElementById('txt-brand-badge').innerText = "المنصة";
    document.getElementById('txt-brand-sub').innerText = "بوابة هيئة التدريس";
    document.getElementById('txt-user-name').innerText = "د. أحمد عبد الرحمن";
    document.getElementById('txt-user-role').innerText = "أستاذ المادة • منسق الأقسام";

    // Navigation
    document.getElementById('nav-lbl-dashboard').innerText = "لوحة التحكم الأكاديمية";
    document.getElementById('nav-lbl-videos').innerText = "الفيديوهات التعليمية";
    document.getElementById('nav-lbl-books').innerText = "المكتبة والكتب الدراسية";

    // Header
    document.getElementById('txt-page-title').innerText = "لوحة التحكم الأكاديمية";
    document.getElementById('txt-page-badge').innerText = "الفصل الدراسي الحالي 2026";
    document.getElementById('txt-page-desc').innerText = "البوابة الموحدة لإدارة وتوصيف المقررات والمناهج والأنشطة الجامعية";
    document.getElementById('txt-quick-videos').innerText = "الفيديوهات التعليمية";
    document.getElementById('txt-calendar-btn').innerText = "التقويم الأكاديمي";
    document.getElementById('txt-notifications-btn').innerText = "الإشعارات";

    // Banner
    document.getElementById('txt-banner-title').innerText = "منظومة التعليم الأكاديمي وإدارة المقررات والمناهج";
    document.getElementById('txt-banner-sub').innerText = "متابعة المناهج الدراسية، المحاضرات المرئية، والمراجع العلمية المعتمدة.";
    document.getElementById('txt-banner-stat').innerText = "الفصل الدراسي 2 • معتمد";

    // Card 1
    document.getElementById('txt-tag-1').innerText = "الخطة والمناهج";
    document.getElementById('txt-card-title-1').innerText = "مكتب إعداد المناهج والخطط";
    document.getElementById('badge-card-1').innerText = "معتمد 96%";
    document.getElementById('txt-card-desc-1').innerText = "توصيف المقررات الأكاديمية والخطط الأسبوعية وتوزيع درجات أعمال السنة.";
    document.getElementById('txt-btn-1').innerText = "استعراض الخطط الدراسية";

    // Card 2
    document.getElementById('txt-tag-2').innerText = "المكتبة الرقمية";
    document.getElementById('txt-card-title-2').innerText = "المكتبة والمراجع والكتب";
    document.getElementById('badge-card-2').innerText = "14 كتاباً متاحاً";
    document.getElementById('txt-card-desc-2').innerText = "فهرس المراجع والكتب المقررة مع إمكانية القراءة والتحميل لكافة التخصصات.";
    document.getElementById('txt-btn-2').innerText = "تصفح مكتبة الكتب";

    // Footer
    document.getElementById('txt-footer-left-1').innerText = "بوابة النظام الأكاديمي الموحد";
    document.getElementById('txt-footer-left-2').innerText = "الإدارة العامة للمناهج ونظم المعلومات";
    document.getElementById('txt-footer-right').innerText = "جميع الحقوق محفوظة © 2026";

    document.querySelectorAll('.nav-chevron').forEach(icon => {
      icon.innerText = "chevron_left";
    });
    document.querySelectorAll('.btn-card-icon').forEach(icon => {
      icon.innerText = "arrow_back";
      icon.className = "material-symbols-outlined text-[16px] btn-card-icon group-hover:-translate-x-1 transition-transform";
    });

    sidebar.classList.remove('border-r');
    sidebar.classList.add('border-l');

  } else {
    // ENGLISH
    root.setAttribute('dir', 'ltr');
    root.setAttribute('lang', 'en');
    body.className = body.className.replace('text-right', 'text-left');
    btnLang.querySelector('span:last-child').innerText = "العربية";
    txtTheme.innerText = currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode';

    // Brand & User
    document.getElementById('txt-brand-name').innerText = "Academic Portal";
    document.getElementById('txt-brand-badge').innerText = "Faculty";
    document.getElementById('txt-brand-sub').innerText = "Faculty & Student Workspace";
    document.getElementById('txt-user-name').innerText = "Dr. Ahmed Abdelrahman";
    document.getElementById('txt-user-role').innerText = "Professor • Department Coordinator";

    // Navigation
    document.getElementById('nav-lbl-dashboard').innerText = "Academic Dashboard";
    document.getElementById('nav-lbl-videos').innerText = "Educational Videos";
    document.getElementById('nav-lbl-books').innerText = "Library & Textbooks";

    // Header
    document.getElementById('txt-page-title').innerText = "Academic Dashboard";
    document.getElementById('txt-page-badge').innerText = "Current Term 2026";
    document.getElementById('txt-page-desc').innerText = "Unified portal for coursework planning, syllabi, and academic activities";
    document.getElementById('txt-quick-videos').innerText = "Educational Videos";
    document.getElementById('txt-calendar-btn').innerText = "Calendar";
    document.getElementById('txt-notifications-btn').innerText = "Notifications";

    // Banner
    document.getElementById('txt-banner-title').innerText = "Academic System & Curriculum Management Infrastructure";
    document.getElementById('txt-banner-sub').innerText = "Facilitating coursework tracking, video lectures, and approved textbooks.";
    document.getElementById('txt-banner-stat').innerText = "Term 2 • Verified";

    // Card 1
    document.getElementById('txt-tag-1').innerText = "Curriculum Plan";
    document.getElementById('txt-card-title-1').innerText = "Coursework & Syllabus Desk";
    document.getElementById('badge-card-1').innerText = "96% Approved";
    document.getElementById('txt-card-desc-1').innerText = "Syllabi rubrics, weekly lesson modules, and grading criteria verification.";
    document.getElementById('txt-btn-1').innerText = "Review Syllabi";

    // Card 2
    document.getElementById('txt-tag-2').innerText = "Digital Library";
    document.getElementById('txt-card-title-2').innerText = "Textbooks & Reference Works";
    document.getElementById('badge-card-2').innerText = "14 Books Available";
    document.getElementById('txt-card-desc-2').innerText = "Comprehensive repository of approved textbooks with instant reading and downloads.";
    document.getElementById('txt-btn-2').innerText = "Browse Textbooks";

    // Footer
    document.getElementById('txt-footer-left-1').innerText = "Academic Faculty Portal";
    document.getElementById('txt-footer-left-2').innerText = "Curriculum & Information Systems Administration";
    document.getElementById('txt-footer-right').innerText = "All rights reserved © 2026";

    document.querySelectorAll('.nav-chevron').forEach(icon => {
      icon.innerText = "chevron_right";
    });
    document.querySelectorAll('.btn-card-icon').forEach(icon => {
      icon.innerText = "arrow_forward";
      icon.className = "material-symbols-outlined text-[16px] btn-card-icon group-hover:translate-x-1 transition-transform";
    });

    sidebar.classList.remove('border-l');
    sidebar.classList.add('border-r');
  }

  updateNavStyles(currentTheme);
}

function updateNavStyles(theme) {
  const activeNav = document.querySelector('.nav-item.bg-\\[\\#244d3f\\], .nav-item.bg-\\[\\#173328\\]');
  if (activeNav) {
    if (theme === 'dark') {
      activeNav.className = "nav-item w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#173328] text-[#57f1db] font-bold shadow-inner transition-all border border-[#275340] cursor-pointer";
      const dot = activeNav.querySelector('.nav-dot');
      if (dot) dot.className = "nav-dot w-1.5 h-1.5 rounded-full bg-[#57f1db]";
    } else {
      activeNav.className = "nav-item w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#244d3f] text-white font-bold shadow-inner transition-all border border-[#3a6e5b]/40 cursor-pointer";
      const dot = activeNav.querySelector('.nav-dot');
      if (dot) dot.className = "nav-dot w-1.5 h-1.5 rounded-full bg-emerald-400";
    }
  }

  // Inactive items style
  document.querySelectorAll('.nav-item:not(.bg-\\[\\#244d3f\\]):not(.bg-\\[\\#173328\\])').forEach(el => {
    if (theme === 'dark') {
      el.className = "nav-item w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[#cbdad3] hover:text-white hover:bg-[#152921] font-semibold transition-all cursor-pointer";
      const ch = el.querySelector('.nav-chevron');
      if (ch) ch.className = "nav-chevron material-symbols-outlined text-[16px] text-[#8fa39b]";
    } else {
      el.className = "nav-item w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-emerald-100/75 hover:text-white hover:bg-[#1b382e] font-semibold transition-all cursor-pointer";
      const ch = el.querySelector('.nav-chevron');
      if (ch) ch.className = "nav-chevron material-symbols-outlined text-[16px] text-emerald-100/40";
    }
  });
}

// Modal Operations
function openModal(type) {
  const modal = document.getElementById('interactive-modal');
  const mContainer = document.getElementById('modal-container');
  const mTitle = document.getElementById('modal-title');
  const mSub = document.getElementById('modal-subtitle');
  const mBody = document.getElementById('modal-body');
  const mIcon = document.getElementById('modal-icon');
  const isAr = currentLang === 'ar';
  const isDark = currentTheme === 'dark';

  if (isDark) {
    mContainer.className = "bg-[#1b221f] text-[#e1ebe6] rounded-2xl max-w-lg w-full p-6 border border-[#27332e] shadow-2xl animate-modal relative";
  } else {
    mContainer.className = "bg-white text-gray-900 rounded-2xl max-w-lg w-full p-6 border border-gray-200 shadow-2xl animate-modal relative";
  }

  if (type === 'desk') {
    mTitle.innerText = isAr ? "مكتب إعداد المناهج وتوصيف المقررات" : "Academic Writing & Syllabus Desk";
    mSub.innerText = isAr ? "إدارة الخطة الدراسية وتوصيف المقررات الأكاديمية" : "Coursework & Evaluation Framework";
    mIcon.innerText = "edit_note";
    mBody.innerHTML = isAr ? 
      `<div class="space-y-3">
        <p>تم اعتماد خطة الفصل الدراسي الحالي بنسبة إنجاز <strong>96%</strong> متوافقة مع معايير الجودة الأكاديمية.</p>
        <div class="bg-gray-50 dark:bg-[#141a17] p-3 rounded-xl border border-gray-200 dark:border-[#27332e] text-xs space-y-1.5">
          <div class="flex justify-between"><span>المقررات المعتمدة:</span><span class="font-bold text-emerald-600">8 مقررات رئيسية</span></div>
          <div class="flex justify-between"><span>توصيف الواجبات:</span><span class="font-bold">مكتمل 100%</span></div>
          <div class="flex justify-between"><span>تحديث بنك الأسئلة:</span><span class="font-bold">الأسبوع 6</span></div>
        </div>
      </div>` :
      `<div class="space-y-3">
        <p>Curriculum syllabi and rubrics have been verified with <strong>96%</strong> completion rate compliant with quality standards.</p>
        <div class="bg-gray-50 dark:bg-[#141a17] p-3 rounded-xl border border-gray-200 dark:border-[#27332e] text-xs space-y-1.5">
          <div class="flex justify-between"><span>Approved Syllabi:</span><span class="font-bold text-emerald-600">8 Core Modules</span></div>
          <div class="flex justify-between"><span>Assignment Rubrics:</span><span class="font-bold">100% Completed</span></div>
          <div class="flex justify-between"><span>Item Bank Update:</span><span class="font-bold">Week 6</span></div>
        </div>
      </div>`;
  } else if (type === 'calendar') {
    mTitle.innerText = isAr ? "التقويم الأكاديمي" : "Academic Calendar";
    mSub.innerText = isAr ? "جدول الاختبارات والمحاضرات وساعات الإرشاد" : "Coursework and Office Hours Schedule";
    mIcon.innerText = "calendar_month";
    mBody.innerHTML = isAr ? 
      `<div class="space-y-3">
        <p>الأسبوع الجاري يشمل مراجعات منتصف الفصل الدراسي وتسليم المشاريع البحثية.</p>
        <div class="bg-gray-50 dark:bg-[#141a17] p-3 rounded-xl border border-gray-200 dark:border-[#27332e] text-xs space-y-1.5">
          <div class="flex justify-between"><span>بداية الاختبارات النصفية:</span><span class="font-bold">الأحد القادم</span></div>
          <div class="flex justify-between"><span>آخر موعد لتعديل الخطط:</span><span class="font-bold text-amber-500">الخميس 15 أكتوبر</span></div>
        </div>
      </div>` :
      `<div class="space-y-3">
        <p>Current calendar week is scheduled for midterm academic reviews and project milestones.</p>
        <div class="bg-gray-50 dark:bg-[#141a17] p-3 rounded-xl border border-gray-200 dark:border-[#27332e] text-xs space-y-1.5">
          <div class="flex justify-between"><span>Midterm Exam Window:</span><span class="font-bold">Next Sunday</span></div>
          <div class="flex justify-between"><span>Syllabus Revision Deadline:</span><span class="font-bold text-amber-500">Oct 15</span></div>
        </div>
      </div>`;
  } else if (type === 'notifications') {
    mTitle.innerText = isAr ? "مركز الإشعارات الأكاديمية" : "Notifications Center";
    mSub.innerText = isAr ? "التنبيهات الإدارية النشطة" : "Active System Alerts";
    mIcon.innerText = "notifications_active";
    mBody.innerHTML = isAr ? 
      `<div class="space-y-2 text-xs">
        <div class="p-2.5 bg-emerald-50 dark:bg-[#152e26] border border-emerald-200 dark:border-[#225042] rounded-lg">
          <strong class="text-emerald-800 dark:text-[#34d399] block mb-0.5">اعتماد الخطة الأكاديمية:</strong>
          <span>تم توثيق كافة المناهج ومراجعتها بنجاح من عمادة الكلية.</span>
        </div>
        <div class="p-2.5 bg-blue-50 dark:bg-[#172d3f] border border-blue-200 dark:border-[#204969] rounded-lg">
          <strong class="text-blue-800 dark:text-[#7bd0ff] block mb-0.5">محاضرات مصورة جديدة:</strong>
          <span>تمت إضافة 8 فيديوهات تعليمية جديدة لكافة المواد.</span>
        </div>
      </div>` :
      `<div class="space-y-2 text-xs">
        <div class="p-2.5 bg-emerald-50 dark:bg-[#152e26] border border-emerald-200 dark:border-[#225042] rounded-lg">
          <strong class="text-emerald-800 dark:text-[#34d399] block mb-0.5">Curriculum Approval:</strong>
          <span>All module rubrics verified and approved by dean of faculty.</span>
        </div>
        <div class="p-2.5 bg-blue-50 dark:bg-[#172d3f] border border-blue-200 dark:border-[#204969] rounded-lg">
          <strong class="text-blue-800 dark:text-[#7bd0ff] block mb-0.5">New Video Lectures:</strong>
          <span>8 newly recorded lectures are now accessible in the video library.</span>
        </div>
      </div>`;
  } else {
    mTitle.innerText = isAr ? "الملف الشخصي للأستاذ" : "Faculty Staff Profile";
    mSub.innerText = isAr ? "عضو هيئة التدريس ومنسق المواد" : "Academic Faculty Member";
    mIcon.innerText = "person";
    mBody.innerHTML = isAr ? 
      `<div class="space-y-2 text-xs">
        <p><strong>الاسم:</strong> د. أحمد عبد الرحمن</p>
        <p><strong>الرتبة:</strong> أستاذ مساعد • قسم العلوم الأكاديمية</p>
        <p><strong>البريد الأكاديمي:</strong> ahmed.rahman@faculty.edu</p>
        <p><strong>حالة الحساب:</strong> <span class="text-emerald-600 font-bold">متصل ونشط</span></p>
      </div>` :
      `<div class="space-y-2 text-xs">
        <p><strong>Name:</strong> Dr. Ahmed Abdelrahman</p>
        <p><strong>Rank:</strong> Associate Professor • Academic Sciences</p>
        <p><strong>Email:</strong> ahmed.rahman@faculty.edu</p>
        <p><strong>Status:</strong> <span class="text-emerald-600 font-bold">Active & Verified</span></p>
      </div>`;
  }

  document.getElementById('btn-modal-cancel').innerText = isAr ? "إغلاق" : "Close";
  document.getElementById('btn-modal-confirm').innerText = isAr ? "حسناً" : "OK";

  modal.classList.remove('hidden');
}

function closeModal() {
  document.getElementById('interactive-modal').classList.add('hidden');
}

function handleModalConfirm() {
  closeModal();
}

// Close on backdrop click or ESC
window.addEventListener('click', (e) => {
  const modal = document.getElementById('interactive-modal');
  if (e.target === modal) closeModal();
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
