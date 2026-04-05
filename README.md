# ÉLEVÉ Luxury Restaurant Web App

A premium, 11-page React clone of the Restoria Restaurant PSD template, rebranded as a luxury dining experience in Clifton, Karachi. Built with pixel-perfect attention to detail, modern aesthetics, and smooth animations.

## Tech Stack
*   **Framework:** React 18 + Vite
*   **Styling:** Tailwind CSS 3 (Glassmorphism, dark mode base)
*   **Animations:** Framer Motion (Scroll reveals, hovers)
*   **Routing:** React Router DOM
*   **Forms:** React Hook Form + Zod validation
*   **Icons:** Lucide React

## Local Development
To run this project locally:

1. Clone or download the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Access the application at `http://localhost:5173`.

## Vercel Deployment Instructions
This project is configured out-of-the-box for seamless Vercel deployment.

1. Create a GitHub repository and push your local `Eleve/` folder to it.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. **Configure Project:**
   * **Framework Preset:** Vite
   * **Build Command:** `npm run build`
   * **Output Directory:** `dist`
5. Click **Deploy**. Vercel will automatically build the project and provide a live production URL!

## Pages Implemented
1. Home (Landing)
2. About Us
3. Chef Profiles
4. Menu 1 (Appetizers)
5. Menu 2 (Mains)
6. Menu 3 (Desserts & Drinks)
7. Contact Us (with Form validation)
8. Reservation (with Date/Time handling)
9. Gallery (Masonry layout)
10. Testimonials
11. Services
