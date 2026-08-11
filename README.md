# Personal Website

A static academic portfolio site: home/about, CV, publications, and a blog. Plain HTML/CSS/JS - no build step required.

## Structure

```
.
├── index.html            Home / About
├── cv.html                CV
├── publications.html      Publications list
├── blog.html               Blog index
├── blog/
│   └── post-1.html         Sample blog post (duplicate this file per post)
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── cv-talha.pdf        (add your CV PDF here - linked from cv.html)
└── README.md
```

## 1. Edit your content

Search each HTML file for bracketed placeholders like `[University Name]`, `[Award or scholarship name]`, `you@example.com`, and `yourusername`, and replace them with your real details. `publications.html` and `blog.html` each have a yellow "placeholder" note pointing at what to fill in.

To add a new blog post: copy `blog/post-1.html`, rename it (e.g. `blog/post-2.html`), edit the title/content, then add a matching card to `blog.html`.

## 2. Push to GitHub

If you don't have a repo yet, create one on GitHub named `yourusername.github.io` (using your exact GitHub username) - this gives you a site at the root domain. Any other repo name also works, but the site will live at `yourusername.github.io/repo-name`.

From inside this folder:

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

(Replace the URL with your actual repo. If the repo already exists with content, `git pull origin main --allow-unrelated-histories` first.)

## 3. Turn on GitHub Pages

1. On GitHub, open your repo → **Settings** → **Pages**.
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
4. Wait a minute or two - GitHub will show your live URL at the top of that page:
   - `https://yourusername.github.io/` (if the repo is named `yourusername.github.io`)
   - `https://yourusername.github.io/repo-name/` (otherwise)

## 4. Custom domain (optional)

If you own a domain, add a `CNAME` file to the repo root containing just your domain (e.g. `talha.dev`), then point your domain's DNS at GitHub Pages per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Making future edits

Any push to the `main` branch redeploys the site automatically - usually live within a minute.
