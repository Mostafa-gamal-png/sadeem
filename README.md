# موقع شركة سديم للأمن والسلامة | Sadeem Company for Safety and Security

صفحة واحدة تعرض الحسابات البنكية الرسمية للشركة (مصرف الراجحي ومصرف الإنماء) مع زر نسخ لكل رقم آيبان ورقم حساب.

A single-page site showing the company's official bank details (Al Rajhi Bank and Alinma Bank) with one-tap copy buttons for every IBAN and account number.

## الرابط المباشر | Live site

https://mostafa-gamal-png.github.io/sadeem/

## كيف يُنشر الموقع | How it deploys

- GitHub Pages يقدّم الموقع من الفرع `gh-pages`.
- أي دفعة (push) إلى الفرع `main` تشغّل `.github/workflows/publish-pages.yml` الذي ينسخ الملفات إلى `gh-pages`، فيتحدّث الموقع خلال دقيقة تقريبًا.
- لا تعدّل الفرع `gh-pages` يدويًا؛ يُعاد إنشاؤه مع كل نشر.
- GitHub Pages serves the `gh-pages` branch. Every push to `main` runs the publish workflow, which copies the site files there. No build step: the files are served as-is.

## التعديل | Editing

- المحتوى كله في `index.html` (النصوص والأرقام والتنسيق).
- الصور: `Untitled-1.png` شعار الشركة، `39-4-1536x547.png` شعار الراجحي، `1332406-640644031.jpg` شعار الإنماء.
- صورة الخلفية `8dee3b25-d332-4fff-af5c-9ace09dc79cc.jpg` غير موجودة في المستودع؛ إن أضفتها بنفس الاسم تظهر تلقائيًا، وإلا يُعرض تدرّج لوني بدلًا منها.
- للمعاينة محليًا افتح `index.html` في المتصفح مباشرة.
