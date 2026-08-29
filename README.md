# 🏫 Dr. A.P.J. Abdul Kalam Inter College — Official Web Platform

[![Official Website](https://img.shields.io/badge/Website-drapjakicbjb.ac.in-0066cc?style=for-the-badge&logo=google-chrome)](https://drapjakicbjb.ac.in)
[![Developer](https://img.shields.io/badge/Developer-Tarun%20Yadav-7b2cbf?style=for-the-badge&logo=codefactor)](https://drapjakicbjb.ac.in)
[![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red.svg?style=for-the-badge)](LICENSE)
[![AI Engine](https://img.shields.io/badge/AI%20Assistant-BodhSakhā%20AI-ff6b00?style=for-the-badge&logo=google-gemini)](https://drapjakicbjb.ac.in)
[![Board Affiliation](https://img.shields.io/badge/Board-UPMSP%20UP%20Board-1e88e5?style=for-the-badge)](https://upmsp.edu.in)
[![Status](https://img.shields.io/badge/Status-Active%20Production-2e7d32?style=for-the-badge)](https://drapjakicbjb.ac.in)

Welcome to the official GitHub repository of **Dr. A.P.J. Abdul Kalam Inter College**, located in **Belwariya Jungle, Basti, Uttar Pradesh (272161)**. 

---

## 👨‍💻 Author & Lead Developer

Designed, engineered, and maintained by **Tarun Yadav**.

- **Developer**: **Tarun Yadav**
- **Role**: Full-Stack Lead Web Developer & AI System Architect
- **Project**: Dr. A.P.J. Abdul Kalam Inter College Official Web Platform

---

## 🔒 Copyright & License Protection

> **ATTENTION**: This repository and all associated source code, design assets, software architecture, scripts, and STEM simulators are strictly **PROPRIETARY** and protected under Copyright Law.

- **License**: **All Rights Reserved (Strict Proprietary)**
- **Copyright Holder**: **Tarun Yadav & Dr. A.P.J. Abdul Kalam Inter College**
- **Usage Restriction**: **No one is permitted to copy, clone, reproduce, modify, distribute, publish, re-license, sell, or use this codebase in ANY format or medium.**
- **Legal Enforcement**: Any unauthorized use, mirroring, scraping, or code reproduction will trigger immediate legal takedown notices (DMCA) and copyright infringement proceedings under the **Indian Copyright Act, 1957**.

---

## 🌟 Overview & Institutional Wings

The educational complex comprises three recognized academic wings serving students from Nursery to Class XII:

| Wing / Institution Name | Classes | UDISE Code | Description |
| :--- | :--- | :--- | :--- |
| **R.S.Y. Convent School** | Nursery – Class V | `09550504608` | Primary wing focusing on foundational literacy, English & Hindi medium learning. |
| **Late Dal Sringari Memorial Balika Junior High School** | Class VI – Class VIII | `09550504607` | Middle school wing fostering holistic education, activity-based science, and sports. |
| **Dr. A.P.J. Abdul Kalam Inter College** | Class IX – Class XII | `09550504609` | High School & Intermediate wing with Science (PCM/PCB/Agri), Commerce & Arts streams. |

---

## 🚀 Key Web Platform Features

### 1. 🤖 BodhSakhā AI Assistant (Smart Chatbot)
- **Powered by**: Google Gemini 3.1 Flash Lite API (`gemini-3.1-flash-lite`) + Client-Side RAG Synthesizer Engine.
- **Multilingual**: Supports Hindi (हिंदी), English, and Hinglish.
- **Full Knowledge Base RAG**: Indexed dataset from all 11 pages of the website providing exact fee tables, stream details, holiday calendars, and noticeboard updates.

### 2. 🔬 Interactive STEM Study Hub & 3D Simulators
Interactive web-based learning modules designed for students to explore scientific & mathematical concepts hands-on:
- **Optics Ray Diagram Simulator**: Convex & concave lens ray reflection and image formation (`/js/optics-simulator.js`).
- **Spherical Mirror Reflection Simulator**: Focal point & curvature mirror physics (`/js/mirror-simulator.js`).
- **Fractions Interactive Simulator**: Visual fraction circle slices & arithmetic calculator (`/js/fractions-simulator.js`).
- **Solar System 3D Simulator**: Interactive planetary orbits & astronomical data.
- **Plant Cell & Animal Cell Anatomy**: 3D cellular organelle visualizers.
- **Interactive Periodic Table**: Element properties, electron configurations, and atomic weights.
- **Simple Pendulum Simulator**: Harmonic motion, length, gravity, and period calculations.
- **Human Heart 3D Simulator**: Circulatory flow, chambers, and cardiac anatomy.

### 3. 📊 GradeCalc Portal
- Dedicated academic grading calculator (`/GradeCalc/`) for calculating **SGPA, CGPA, and Percentage** conversions.

### 4. 🔗 Central Link Hub
- Quick navigation portal (`/linkhub`) connecting students to online results, attendance tracking, UP Board syllabus, and INFLIBNET e-library access.

### 5. 📢 Noticeboard & Circulars
- Real-time searchable noticeboard (`/noticeboard`) with categorization filters for examinations, timetables, and official declarations.

---

## 📂 Project Directory Structure

```html
School Website/
├── index.html                 # Main Homepage (Hero, Leadership, Academics, Admissions, Facilities)
├── fees.html                  # Detailed Fee Structure Table (Nursery to 12th, HM & EM)
├── streams.html               # High School & Intermediate Stream Pathways (Science, Commerce, Arts)
├── holidays.html              # Academic Calendar & Festival Holiday List 2026-27
├── noticeboard.html           # Real-Time Searchable School Noticeboard
├── study.html                 # STEM Interactive Study Hub Portal
├── linkhub.html               # Central Student Link & Portal Directory
├── careers.html               # Post-12th Career Guidance & Entrance Exam Directory
├── sitemap.html               # Complete Site Directory & Navigation Index
├── privacy-policy.html        # Privacy Policy & Data Usage Terms
├── terms-of-service.html      # Website Terms of Service
│
├── chatbot/                   # BodhSakhā AI Chatbot Module
│   ├── chatbot.js             # Floating Chat UI Engine & Multilingual Event Handlers
│   ├── knowledge_base.js      # Structured Site Context Dataset
│   ├── api/
│   │   ├── ai.js              # Gemini 3.1 Flash Lite API Integrator & RAG Synthesizer
│   │   ├── all_pages_data.js  # Indexed Knowledge Base across all website pages
│   │   └── chat.js            # Universal Chat Request Handler
│   └── GEMINI_API_SETUP.md    # API Key Configuration Documentation
│
├── interactive-study-hub/    # STEM Simulator Webpages
│   ├── optics-simulator.html
│   ├── mirror-simulator.html
│   ├── fractions-simulator.html
│   ├── solar-system.html
│   ├── plant-anatomy.html
│   ├── periodic-table.html
│   ├── pendulum-simulator.html
│   ├── heart-simulator.html
│   └── biology-cell.html
│
├── GradeCalc/                 # SGPA / CGPA Grade Calculator App
│   ├── index.html
│   ├── sgpa.html
│   ├── cgpa.html
│   ├── sgpa-to-percentage.html
│   ├── percentage-to-cgpa.html
│   └── cgpa-to-percentage.html
│
├── components/                # Reusable Header & Footer Components
│   ├── header.html
│   └── footer.html
│
├── styles/                    # Cascading Style Sheets
│   ├── main.css               # Core Styles, Dark Glassmorphism Design Tokens & Layouts
│   ├── main.min.css           # Production Minified Stylesheet
│   └── components/            # Header, Footer & Chatbot Module Styles
│
├── js/                        # Client-Side JavaScripts & Simulators
│   ├── main.js                # Core UI Interactions & Scroll Animations
│   ├── optics-simulator.js
│   ├── mirror-simulator.js
│   └── fractions-simulator.js
│
└── assets/                    # Media Assets & Logos
    ├── images/                # WebP Optimized Images, Logos & Favicons
    └── docs/                  # School Prospectus & Offline Forms
```

---

## 🛠️ Technology Stack

- **Frontend**: HTML5, Vanilla CSS3 (Custom Properties, Flexbox/Grid, Dark Glassmorphism Theme), JavaScript (ES6+)
- **Icons & Typography**: FontAwesome 6, Google Fonts (`Poppins`)
- **AI & NLP**: Google Gemini 3.1 Flash Lite API (`generativelanguage.googleapis.com`)
- **SEO & Metadata**: Schema.org JSON-LD Structured Data (`EducationalOrganization`), Open Graph & Twitter Cards
- **Performance**: Preloaded critical fonts, minified CSS, WebP image compression, async Google Tag Manager

---

## 💻 Local Development Setup

To run and preview this project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/drapjakicbjb/school-website.git
   cd school-website
   ```

2. **Run a local web server**:
   - Using VS Code: Install the **Live Server** extension, right-click `index.html`, and select **Open with Live Server**.
   - Or using Python:
     ```bash
     python -m http.server 3000
     ```
   - Or using Node.js `serve`:
     ```bash
     npx serve .
     ```

3. **Open in Browser**:
   Navigate to `http://localhost:3000` or `http://127.0.0.1:5501`.

---

## 📞 Institution Contact Information

- **Address**: Belwariya Jungle, Basti, Uttar Pradesh — 272161
- **Phone / Office**: +91 9648904085
- **WhatsApp**: +91 9454242284
- **Email**: `drapjakicbjb@gmail.com`
- **Official Website**: [https://drapjakicbjb.ac.in](https://drapjakicbjb.ac.in)

---

&copy; 2026 Dr. A.P.J. Abdul Kalam Inter College. All Rights Reserved.
