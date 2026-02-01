# Palak Dwivedi – Portfolio

A modern, recruiter-ready personal portfolio built with React (Vite), Tailwind CSS, and Framer Motion. Dark mode by default, teal accent, mobile-first and responsive.

## Tech Stack

- **React** (Vite)
- **JavaScript**
- **Tailwind CSS**
- **Framer Motion** (subtle animations)

## Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

## Run Locally

1. **Clone / open the project**
   ```bash
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start dev server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Production build**
   ```bash
   npm run build
   ```
   Output is in `dist/`. Preview with:
   ```bash
   npm run preview
   ```

## Before You Go Live

1. **Resume PDF**  
   Put your resume in the `public` folder and name it `resume.pdf`. The "Download Resume" buttons (Hero + Footer) link to `/resume.pdf`.

2. **Photo**  
   Place your professional photo in `public` as `photo.jpg`. If missing, a fallback avatar is shown.

3. **LinkedIn & GitHub**  
   Update the URLs in `src/components/Contact.jsx` (`LINKEDIN_URL`, `GITHUB_URL`) to match your profile links from your resume.

4. **Project links**  
   Replace the `href="#"` for GitHub and Live Demo in `src/components/Projects.jsx` with real URLs when you have them.

## Deploy on Vercel

1. Push this repo to GitHub (or GitLab/Bitbucket).

2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.

3. **New Project** → Import your repository.

4. **Framework Preset:** Vite (auto-detected).  
   **Build Command:** `npm run build`  
   **Output Directory:** `dist`

5. Click **Deploy**. Vercel will build and give you a URL.

6. (Optional) Add a custom domain in Project Settings → Domains.

## Project Structure

```
Portofolio/
├── public/
│   ├── favicon.svg
│   ├── photo.jpg          # Your photo (add this)
│   ├── resume.pdf         # Your resume PDF (add this)
│   └── resume-placeholder.txt
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
└── README.md
```

## License

Private / personal use. All rights reserved.
