
# Version Control, CI/CD - HW1

**Report on Frontend Development and Deployment to GitHub Pages**

This report outlines the implementation details of a static frontend application using the ReactJS framework and its automated deployment to GitHub Pages via GitHub Actions. The project utilizes git commands for version control, branching, and conflict resolution. Additionally, Continuous Integration/Continuous Deployment (CI/CD) has been set up using GitHub Actions to automatically deploy the project on GitHub Pages.

## Implementation Steps

### 1. Creating a GitHub Repository
A new repository was created on GitHub to host the project.

### 2. Installing React and Creating the Project
The React project was initialized using the following command:

```bash
npx create-react-app my-static-site
```

### 3. Setting Up .gitignore
A .gitignore file was added to the repository with the following content to exclude unnecessary files and directories (e.g., node_modules):

```bash
node_modules/
build/
.DS_Store
```

### 4. Branch Overview

Here is a list of the main branches created during the project:

- **main**
- **dev**
- **feature/item-list**
- **feature/footer**
- **feature-header**
- **initialize**
  - Status: Initial branch for setup

Here's a simplified and updated version of the new sections based on your input:
### 5. Resolving Conflicts

During the merging of branches into dev, two conflicts arose. These conflicts were manually resolved.
### 6. Protecting the main Branch

To prevent direct changes to the main branch, branch protection rules were set up in GitHub. With these restrictions, merging other branches into main is only possible through a Pull Request (PR).
### 7. Automated Deployment with GitHub Actions
For automated deployment to GitHub Pages, GitHub Actions and a predefined workflow were used. The deploy.yml file was added under the .github/workflows directory.

### 8. Final Project Deployment
After merging the dev branch into main using a Pull Request, the project was automatically deployed to GitHub Pages.




<div dir="rtl">

```markdown

```
### پاسخ سوالات

## پوشه‌ی .git چیست؟ چه اطلاعاتی در آن ذخیره می‌شود؟ با چه دستوری ساخته می‌شود؟

پوشه‌ی `.git` یک دایرکتوری مخفی است که در ریشه‌ی هر مخزن گیت (Git repository) قرار دارد. این پوشه شامل تمامی اطلاعات و متادیتاهای مربوط به پروژه و تاریخچه‌ی آن می‌باشد. اطلاعاتی که در این پوشه ذخیره می‌شود شامل:

- تاریخچه‌ی commits
- اطلاعات درباره‌ی branches
- configuration (تنظیمات)
- staged files (فایل‌های آماده برای commit)

برای ایجاد یک مخزن جدید گیت، از دستور زیر استفاده می‌شود:

```bash
git init
```


## منظور از atomic بودن در atomic commit و atomic pull-request چیست؟

**Atomic** به معنای اتمی است و در گیت به این معناست که یک commit یا pull-request شامل یک تغییر مشخص و جداگانه است که به طور کامل و بدون وابستگی به تغییرات دیگر انجام می‌شود. این به این معناست که:

- **Atomic Commit**: تمام تغییرات در یک commit یک هدف خاص را دنبال می‌کند و به راحتی می‌توان آن را جدا کرد.
- **Atomic Pull-Request**: هر pull-request تغییرات مرتبط با یک ویژگی یا باگ را در یک واحد اتمی جمع‌آوری می‌کند، که مدیریت و بررسی آن را ساده‌تر می‌کند.

## تفاوت دستورهای fetch و pull و merge و rebase و cherry-pick چیست؟

- **git fetch**: این دستور تغییرات جدید را از مخزن ریموت (remote) دریافت می‌کند اما آن‌ها را به مخزن محلی (local) ادغام نمی‌کند. به عبارت دیگر، فقط اطلاعات جدید را بارگذاری می‌کند.
  
- **git pull**: این دستور به طور همزمان دو کار انجام می‌دهد؛ اول، تغییرات جدید را با استفاده از `fetch` دریافت می‌کند و سپس با استفاده از `merge` آن‌ها را به branch فعلی ادغام می‌کند.

- **git merge**: این دستور برای ادغام تغییرات از یک branch به branch دیگر استفاده می‌شود. این تغییرات می‌توانند محلی یا ریموت باشند.

- **git rebase**: این دستور تغییرات branch فعلی را به بالای تغییرات branch دیگر منتقل می‌کند. این باعث می‌شود تاریخچه‌ی commit‌ها تمیزتر و خطی‌تر شود.

- **git cherry-pick**: این دستور برای انتخاب یک یا چند commit خاص از یک branch و اعمال آن‌ها به branch دیگر استفاده می‌شود، بدون نیاز به ادغام تمام تغییرات.

## تفاوت دستورهای reset و revert و restore و switch و checkout چیست؟

- **git reset**: این دستور برای برگرداندن HEAD به یک commit قبلی استفاده می‌شود. می‌تواند تغییرات را از staging area حذف کند یا به طور کامل از تاریخچه حذف کند (بسته به گزینه‌ی استفاده‌شده).

- **git revert**: این دستور یک commit را معکوس می‌کند و یک commit جدید با تغییرات معکوس ایجاد می‌کند. تاریخچه‌ی commit حفظ می‌شود.

- **git restore**: این دستور برای بازیابی فایل‌ها به حالت قبل از staging یا commit استفاده می‌شود. می‌توان از آن برای حذف تغییرات محلی استفاده کرد.

- **git switch**: این دستور برای جابه‌جایی بین branches استفاده می‌شود. به عنوان یک جایگزین ساده‌تر برای `checkout` طراحی شده است.

- **git checkout**: این دستور برای جابه‌جایی به یک branch دیگر یا بازیابی فایل‌ها به حالت قبلی استفاده می‌شود. در گیت نسخه‌های جدید، `switch` و `restore` به طور خاص برای این کارها طراحی شده‌اند.

## منظور از stage یا همان index چیست؟ دستور stash چه کاری را انجام می‌دهد؟

**Stage** یا **index** محلی است که تغییرات فایل‌ها قبل از commit شدن در آن قرار می‌گیرند. این به کاربر اجازه می‌دهد تغییرات را به صورت گزینشی انتخاب کند و فقط تغییرات مورد نظر را commit کند.

دستور **git stash** برای ذخیره موقت تغییرات در working directory استفاده می‌شود. با استفاده از این دستور، می‌توان تغییرات فعلی را به یک stash ذخیره کرد و سپس به حالت تمیز (clean) برگردید، بدون اینکه این تغییرات commit شوند. این بسیار مفید است وقتی که می‌خواهید تغییرات خود را برای مدتی کنار بگذارید و به branch دیگری بروید.

## مفهوم snapshot به چه معناست؟ ارتباط آن با commit چیست؟

**Snapshot** به معنای عکاسی از وضعیت فایل‌ها و دایرکتوری‌های پروژه در یک نقطه‌ی زمانی خاص است. در گیت، هر بار که یک commit انجام می‌شود، گیت یک snapshot از تمام فایل‌ها و تغییرات فعلی ایجاد می‌کند. این به معنای آن است که هر commit نماینده‌ی وضعیت کامل پروژه در آن زمان خاص است. به این ترتیب، می‌توان به آسانی به هر نقطه‌ای از تاریخچه‌ی پروژه برگردید.

## تفاوت‌های local repository و remote repository چیست؟

- **Local Repository**: این نسخه از مخزن است که روی سیستم محلی شما قرار دارد. شما می‌توانید تغییرات را به راحتی اعمال کنید، commits ایجاد کنید و به تاریخچه‌ی پروژه دسترسی داشته باشید.

- **Remote Repository**: این نسخه‌ی مخزن است که در یک سرور یا خدمات آنلاین (مانند GitHub، GitLab و Bitbucket) قرار دارد. این مخزن به تیم‌ها اجازه می‌دهد که تغییرات را به اشتراک بگذارند و با هم کار کنند. برای هماهنگی بین local و remote repository از دستورات `push`, `pull`, و `fetch` استفاده می‌شود.

```
