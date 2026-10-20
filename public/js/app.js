// Mini Bot — اسکریپت سایت
// آدرس‌ها و لینک‌ها؛ برای تغییر فقط همین سه خط را عوض کنید:
const WEB_URL     = "https://web.minibot.online";
const APK_URL     = "https://github.com/minibot-af/minibot-android/releases/latest/download/MiniBot.apk";
const SUPPORT_URL = "https://wa.me/255617029838";

// ست کردن خودکار لینک‌ها روی همه دکمه‌ها
document.querySelectorAll('[data-web]').forEach((a) => (a.href = WEB_URL));
document.querySelectorAll('[data-apk]').forEach((a) => (a.href = APK_URL));
document.querySelectorAll('[data-support]').forEach((a) => (a.href = SUPPORT_URL));

// رندر آیکن‌های شیک (lucide)
if (window.lucide?.createIcons) {
  window.lucide.createIcons();
}

// منوی موبایل
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

nav?.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => nav.classList.remove('open'))
);

// ظاهر شدن نرم کارت‌ها هنگام اسکرول
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.card, .why-item').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  observer.observe(el);
});

const style = document.createElement('style');
style.textContent = '.card.visible, .why-item.visible { opacity: 1 !important; transform: none !important; }';
document.head.appendChild(style);
