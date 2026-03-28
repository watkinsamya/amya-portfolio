# 🚀 How to Deploy Amya's Portfolio to GitHub Pages
### Your site will be live at: `https://yourusername.github.io`

---

## STEP 1 — Create a GitHub Account
1. Go to **github.com** and click **Sign Up**
2. Choose a username — pick something professional like `amyawatkins` or `amyawatkins-dev`
3. Verify your email

---

## STEP 2 — Create the Repository
1. Once logged in, click the **green "New"** button (top left sidebar)
2. Name the repository EXACTLY: **`yourusername.github.io`**
   - Example: if your username is `amyawatkins`, name it `amyawatkins.github.io`
   - ⚠️ This exact naming is what makes GitHub Pages work for free
3. Set it to **Public**
4. Check **"Add a README file"**
5. Click **Create repository**

---

## STEP 3 — Install Git on Your Computer
1. Go to **git-scm.com/downloads**
2. Download for your OS (Windows/Mac) and install with all default settings
3. Open VS Code → open Terminal (View → Terminal or Ctrl + `)
4. Type: `git --version` — if you see a version number, Git is installed ✓

---

## STEP 4 — Set Up Git (one time only)
In VS Code terminal, type these two commands:
```
git config --global user.name "Amya Watkins"
git config --global user.email "youremail@gmail.com"
```

---

## STEP 5 — Open Your Portfolio Folder in VS Code
1. Open VS Code
2. Go to **File → Open Folder**
3. Select the `amya-portfolio` folder you downloaded
4. You should see three files in the left sidebar:
   - `index.html`
   - `style.css`
   - `script.js`

---

## STEP 6 — Connect to GitHub and Upload
In the VS Code terminal, run these commands ONE BY ONE:

```bash
git init
git add .
git commit -m "Initial portfolio launch"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/YOURUSERNAME.github.io.git
git push -u origin main
```

⚠️ Replace `YOURUSERNAME` with your actual GitHub username in the remote command.

When prompted, sign in to GitHub in the browser popup that appears.

---

## STEP 7 — Enable GitHub Pages
1. Go to your repository on github.com
2. Click **Settings** (top tab)
3. In the left sidebar, click **Pages**
4. Under "Source", select **Deploy from a branch**
5. Set Branch to **main**, folder to **/ (root)**
6. Click **Save**

---

## STEP 8 — Wait 2 Minutes, Then Visit Your Site!
Go to: **`https://yourusername.github.io`**

🎉 Your portfolio is live and free forever.

---

## UPDATING YOUR SITE LATER

Whenever you make changes in VS Code, just run:
```bash
git add .
git commit -m "Updated projects section"
git push
```
Changes go live in about 60 seconds.

---

## CUSTOMIZING YOUR SITE

### Add your real email
In `index.html`, find:
```
href="mailto:amyawatkins@email.com"
```
Replace with your real email.

### Add your real GitHub link
Search for `https://github.com` and replace with your actual GitHub profile URL.

### Add your real LinkedIn
Search for `https://linkedin.com` and replace with your LinkedIn profile URL.

### Add project links
For each project card, find:
```html
<a href="#" class="card-link">View Project →</a>
```
Replace the `#` with your GitHub repo link, e.g.:
```html
<a href="https://github.com/amyawatkins/path-in-motion" class="card-link">View Project →</a>
```

### Add your photo
1. Save your photo as `photo.jpg` inside the `amya-portfolio` folder
2. In `index.html`, find the `about-img-frame` div
3. Replace the inner content with:
```html
<img src="photo.jpg" alt="Amya Watkins" style="width:100%;height:100%;object-fit:cover;border-radius:20px;" />
```

### Add your resume PDF
1. Name your resume file exactly: `amya-watkins-resume.pdf`
2. Put it inside the `amya-portfolio` folder
3. The Resume button in the nav will automatically link to it ✓

---

## CUSTOM DOMAIN (optional, ~$12/year)

If you want `amyawatkins.com` instead of `yourusername.github.io`:
1. Buy a domain from **Namecheap** or **Google Domains** (~$12/year)
2. In GitHub Pages settings, enter your custom domain
3. In your domain registrar, add a CNAME record pointing to `yourusername.github.io`
4. Done — GitHub Pages handles the SSL certificate for free

---

## FILE STRUCTURE REFERENCE
```
amya-portfolio/
├── index.html              ← Main page (all sections)
├── style.css               ← All styling
├── script.js               ← Animations & interactions
├── amya-watkins-resume.pdf ← Your resume (add this yourself)
└── photo.jpg               ← Your photo (add this yourself)
```

---

*Built for Amya Watkins · Hosted free on GitHub Pages*
