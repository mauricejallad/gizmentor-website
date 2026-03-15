# Deploying GizMentor (Vite + React)

The app builds to the `dist/` folder. Client-side routes (e.g. `/products`, `/terms`) are configured so they work on refresh and direct links.

---

## Connect to GitHub (repo: gizmentor-app)

1. **Create the repository on GitHub**  
   Go to [github.com/new](https://github.com/new), set the name to **gizmentor-app**, leave it empty (no README, .gitignore, or license). Create the repo.

2. **From your project folder, run:**

   ```bash
   # Add the GitHub repo as the remote named "origin"
   git remote add origin https://github.com/YOUR_USERNAME/gizmentor-app.git

   # Ensure the branch is named "main" (Vercel expects this by default)
   git branch -M main

   # Push your commits and set "main" to track "origin/main"
   git push -u origin main
   ```

   Replace `YOUR_USERNAME` with your GitHub username. If you use SSH instead of HTTPS, use:

   `git remote add origin git@github.com:YOUR_USERNAME/gizmentor-app.git`

3. After the push, the project is on GitHub and ready to import in Vercel.

---

## Option 1: Vercel (recommended)

1. Push your code to GitHub (if not already).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New** → **Project** and import this repo.
4. **Build and Output:**
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**. Done.

`vercel.json` is already set so all routes serve `index.html` (SPA support).

---

## Option 2: Netlify

1. Push your code to GitHub (if not already).
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import an existing project**.
3. Connect the repo and set:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy.

`public/_redirects` is set so every path serves `index.html` (SPA support).

---

## Option 3: Manual / static host

1. Build: `npm run build`
2. Upload the contents of `dist/` to your host.
3. Configure the server so all requests (e.g. `/products`, `/terms`) return `index.html` (single-page app behavior).  
   - **Apache:** use `mod_rewrite` to send `/*` → `index.html`.  
   - **Nginx:** `try_files $uri $uri/ /index.html;`  
   - **GitHub Pages:** add a `404.html` that copies `index.html` and use the same content, or use the Actions workflow with a proper SPA redirect.

---

## Check before deploy

- Run locally: `npm run build && npm run preview` then open the URL and test routes like `/products`, `/terms`, `/products/magfusion-air`.
