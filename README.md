# 🧑‍💻 Nisarg Solanki - Portfolio

A modern, responsive personal portfolio built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**.  
It showcases my projects, skills, experience, and provides an easy way for visitors to contact me or download my resume.


## 🚀 Features

- **Modern Tech Stack:** Built using Next.js (App Router), TypeScript, and Tailwind CSS  
- **Dark / Light Theme Toggle:** Seamless theme switching using custom context provider  
- **Dynamic Sitemap & Robots.txt:** For improved SEO and search engine visibility  
- **Contact Form Integration:** Formspree-powered form for quick user interaction  
- **Download Resume API:** Secure API endpoint for serving the latest resume  
- **Reusable Components:** Modular layout and sections for scalability  
- **Fully Responsive:** Optimized for desktop, tablet, and mobile devices  
- **Analytics Ready:** Compatible with Vercel Analytics integration  


## 🧩 Folder Structure
```
📁 app
┣ 📂 api
┃ ┗ 📂 resume
┃ ┗ 📜 route.ts # API endpoint to handle resume download
┣ 📜 layout.tsx # Root layout file
┣ 📜 page.tsx # Homepage rendering all sections
┣ 📜 globals.css # Global styles
┣ 📜 sitemap.ts # Dynamic sitemap generation
┣ 📜 robots.ts # Robots.txt setup

📁 components
┣ 📂 forms
┃ ┗ 📜 GetInTouch.tsx # Contact form component (Formspree)
┣ 📂 layout
┃ ┣ 📜 Header.tsx # Navbar with theme toggle
┃ ┗ 📜 Footer.tsx # Footer section

📁 sections
┣ 📜 Hero.tsx # Introduction banner
┣ 📜 About.tsx # About Me section
┣ 📜 Experience.tsx # Work experience
┣ 📜 Projects.tsx # Portfolio projects
┣ 📜 Skills.tsx # Tech stack & skill bars
┣ 📜 Contact.tsx # Contact info + form
┗ 📜 ThemeProvider.tsx # Custom context for theme handling

📁 lib
┗ 📜 constants.ts # Static data and reusable constants

📁 public
┗ (Static assets like images, favicon, resume, etc.)

📜 .env # Environment variables (e.g., NEXT_PUBLIC_DOMAIN, FORMSPREE_ID)
📜 next.config.ts # Next.js configuration
📜 postcss.config.mjs # PostCSS setup
📜 tailwind.config.ts # Tailwind CSS configuration
📜 package.json # Project dependencies and scripts
📜 README.md # Project documentation
```


## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```bash
NEXT_PUBLIC_DOMAIN=https://yourdomain.com
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
```


## 🧠 Tech Stack

**Frontend**: Next.js 16, React, TypeScript

**Styling**: Tailwind CSS

**Forms**: Formspree

**Hosting**: Vercel

**Version** Control: Git & GitHub


## 🧾 API Routes
/api/resume

Handles serving your resume PDF file dynamically.
```
GET /api/resume
```


## 🧰 Setup Instructions

1. Clone the repository:
```
git clone https://github.com/Nisarg-Solanki/portfolio.git
```
2. Navigate into the project folder:
```
cd portfolio
```
3. Install dependencies:
```
npm install
```
4. Run the development server:
```
npm run dev
```
5. Open in browser:
```
http://localhost:3000
```


## 🌐 Deployment

Deployed easily on Vercel:
```
vercel
```

## 📄 License

This project is open source and available under the MIT License.


## 💬 Connect With Me

Portfolio: https://nisarg-portfolio.info

LinkedIn: https://www.linkedin.com/in/nisarg-solanki-808113292/

GitHub: https://github.com/Nisarg-Solanki