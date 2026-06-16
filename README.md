# PAZ Veterinary Care — Premium Website

PAZ is an award-winning, agency-quality, responsive website built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- **Location Specificity (Austin, TX Network)**:
  Supports four local veterinary clinics: **PAZ South (Austin Flagship)**, **PAZ East**, **PAZ West**, and **PAZ North**. Switching your clinic location focus seamlessly updates titles, metadata descriptions, telephone numbers, emails, addresses, emergency alerts, and clinic schedules.
- **Micro-Animations & Motion**:
  Interactive entrance preloader with dynamic initialization metrics, custom float canvas backgrounds, smooth zoom hero banners, and staggered list entries driven by physical touch coordinates.
- **Deep Technical Portals**:
  - Main Home layout with Fear-Free trust highlights.
  - Complete Online Pharmacy Refill support team listing with bio-details modals.
  - Specialized pages for all 9 clinic sectors including custom-calibrated checklists (Vaccination Guide, Dental Care Checklist, Emergency Trauma Guide).
  - Categorized Village Partners Directory (Health, Nutrition, Fitness, Community, Animal Welfare).
  - Integrated contact booking desks with specialized custom dark maps coordinate grids.
- **SEO & Accessibility Optimized**:
  - Implements WCAG 2.1 Level AA high contrast specs against responsive off-black backgrounds.
  - Dynamic meta configurations, schemas (VeterinaryCare, FAQs, Breadcrumbs), and structural indicators.

---

## 🛠️ Installation & Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Setup Local Environment Variables**:
   Create a `.env` file in your root folder:
   ```env
   # .env
   GEMINI_API_KEY="Your_Optional_Gemini_Key_Here"
   APP_URL="http://localhost:3000"
   ```

3. **Incorporate Local server**:
   Start your fast responsive local development server:
   ```bash
   npm run dev
   ```

4. **Production Compilation**:
   Bundle static build nodes:
   ```bash
   npm run build
   ```

---

## 📂 Code Architecture

- `/src/types.ts`: Core type assertions and location/partner models.
- `/src/components/*`: Reusable layers (Header menus, Footer indicators, Anim backdrops, Meta tags).
- `/src/pages/*`: Contextual views loaded dynamically (Home, Team, Services, Village, Contact, Resources).
- `/src/data/*`: Static local data sheets cleanly mapping provided Cloudinary assets and copy content.
