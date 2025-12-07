# 🌐 Personal Portfolio — Pankaj Suthar

This is the source code for my personal portfolio website.  
Designed and built using **React**, **Tailwind CSS**, and **Framer Motion**, the site highlights my journey, skills, projects, teaching experience, and professional achievements.

---

## 🚀 Features

### 🌙 Dark / Light Mode  
Interactive theme toggle with smooth transitions using Tailwind’s `dark:` classes.

### 🧭 Timeline Section  
A custom-built interactive timeline showing:
- JEE achievements  
- Research internship at Dalhousie University (MITACS)  
- Teaching experience (Physics & Maths, K12 Techno Services)  
- Software engineering and development journey  

Each timeline item supports **JSX descriptions** including clickable external links.

### 💼 Projects  
Showcases selected software engineering projects, including:
- Fleet Compliance Automation Systems  
- Automated PDF form filling tools  
- MERN stack applications  
- Android Management API projects  
- CFA Prep Platform (PalsAnalytix)

### 🖼️ Aesthetic UI  
- Tailwind CSS  
- Clean, modern card layouts  
- Smooth animations using Framer Motion  
- Fully responsive for mobile and desktop devices  

---

## 🛠️ Tech Stack

**Frontend:**  
- React (Vite)  
- Tailwind CSS  
- Framer Motion  
- Lucide Icons  

**Backend (for some projects):**  
- Node.js  
- Express  
- MongoDB  
- Firebase / Auth0 (for authentication in other projects)

---

## 📚 Sections Included

- **Hero Section** – Intro, role, and links  
- **Experience Timeline** – Interactive animated timeline  
- **Projects Showcase** – Cards with images, descriptions, and tech stack  
- **Teaching Experience**  
- **Research Work** – MITACS Globalink Internship  
- **Contact Section** – Social links and email  

---

## 🔗 Add Your Own Links

The timeline supports JSX descriptions, e.g.:

```jsx
description={
  <>
    MITACS Globalink Research Intern at Dalhousie University.  
    Worked with Dr. Nur Zincir-Heywood on network security analysis.{" "}
    <a
      href="YOUR-LINK-HERE"
      className="text-blue-600 underline dark:text-blue-400"
      target="_blank"
    >
      View Details
    </a>
  </>
}
