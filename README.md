# موقع شركة سديم للأمن والسلامة | Sadeem Company for Safety and Security

صفحة واحدة تعرض الحسابات البنكية الرسمية للشركة (مصرف الراجحي ومصرف الإنماء) مع زر نسخ لكل رقم آيبان ورقم حساب.

A single-page site showing the company's official bank details (Al Rajhi Bank and Alinma Bank) with one-tap copy buttons for every IBAN and account number.

## الرابط المباشر | Live site

https://mostafa-gamal-png.github.io/sadeem/

## كيف يُنشر الموقع | How it deploys

- الموقع ينشر تلقائيًا على GitHub Pages عبر `.github/workflows/deploy-pages.yml`.
- أي دفعة (push) إلى الفرع `main` تعيد النشر خلال دقيقة تقريبًا.
- Every push to `main` redeploys the site through GitHub Actions. No build step: the repo is served as-is.

## التعديل | Editing

- المحتوى كله في `index.html` (النصوص والأرقام والتنسيق).
- الصور: `Untitled-1.png` شعار الشركة، `39-4-1536x547.png` شعار الراجحي، `1332406-640644031.jpg` شعار الإنماء.
- صورة الخلفية `8dee3b25-d332-4fff-af5c-9ace09dc79cc.jpg` غير موجودة في المستودع؛ إن أضفتها بنفس الاسم تظهر تلقائيًا، وإلا يُعرض تدرّج لوني بدلًا منها.
- للمعاينة محليًا افتح `index.html` في المتصفح مباشرة.
