# How to Run Milliy Sertifikat Prep

## Prerequisites
- Node.js (v18 or later)
- npm

## Setup & Run

1.  **Install Dependencies**
    Open your terminal in this directory and run:
    ```bash
    npm install
    ```

2.  **Start Development Server**
    ```bash
    npm run dev
    ```

3.  **View Website**
    Open your browser and navigate to:
    [http://localhost:3000](http://localhost:3000)

## Project Structure

- **`app/`**: Application routes and pages.
  - `page.tsx`: Home page
  - `about/`: About page
  - `mock-tests/`: List of mock tests and individual test pages
  - `problems/`: Problems topic list
  - `layout.tsx`: Main layout with Navbar and Footer
  - `globals.css`: Global styles (Tailwind)
- **`components/`**: Reusable UI components.
  - `Navbar.tsx`
  - `Footer.tsx`
  - `Card.tsx`

## Tech Stack
- Next.js 14 (App Router)
- React
- TypeScript
- Tailwind CSS
