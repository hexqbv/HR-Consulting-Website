# The Ascent Group: Official Website

Welcome to the official repository for **The Ascent Group**, a modern, professional HR consulting firm dedicated to driving organizational growth and strategic talent management.

This project showcases our commitment to clean design, fast performance, and user experience, built entirely on a lightweight, static foundation for maximum reliability.

---

## Key Features

This is a high-performing, multi-page website featuring core functionalities vital for a modern consulting practice:

* **Responsive Design:** Fully optimized for desktop, tablet, and mobile views, ensuring accessibility for all visitors.
* **Persistent Theme Toggle:** Includes a functioning Dark Mode switch that remembers the user's preference using browser storage.
* **Lead Capture Form:** A dedicated `contact.html` page with a professional form ready for integration with third-party services (like Formspree) to efficiently capture client inquiries.
* **Core Pages:** Dedicated pages for Home, Services, About Us, and Contact, establishing clear navigation and strong credibility.
* **Professional Aesthetic:** Clean, vibrant, and consistent styling across all pages, achieved solely through CSS.

---

## Tech Stack (The Simple Power)

This project was intentionally built using a simple, un-opinionated stack for lightning-fast loading and zero build complexity.

* **HTML5:** Semantic structure for accessibility and SEO.
* **CSS3:** Styling, responsiveness (Flexbox/Grid), and theme definitions.
* **Plain JavaScript:** For simple interactivity (Hamburger menu toggle, Dark Mode persistence).

No heavy frameworks, no complicated build steps. Just clean code.

---

## Getting Started

Since this is a static website, getting it running locally is incredibly fast and simple.

### Prerequisites

You only need a modern web browser (Chrome, Firefox, Safari, etc.).

### Local Setup

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/hexqbv/HR-Consulting-Website.git](https://github.com/hexqbv/HR-Consulting-Website.git)
    ```
2.  **Navigate to the Directory:**
    ```bash
    cd HR-Consulting-Website
    ```
3.  **Open in Browser:** Locate the main file, `index.html`, in your file explorer and **double-click** it.

The site will open instantly! For automatic refreshing during development, the **Live Server** extension (if using a VS Code-based editor like Cursor) is recommended.

---

## Configuration & Customization

Before launching this site, you must complete one critical step:

### 1. Finalize the Contact Form

The form on `contact.html` is currently set up with a placeholder endpoint. To receive client leads:

1.  Sign up for a form service like **Formspree**, **Netlify Forms**, or **Web3Forms**.
2.  Obtain your unique form submission URL (your hash ID).
3.  Open `contact.html` and replace the placeholder `action` attribute on the `<form>` tag with your real, verified endpoint.

    ```html
    <form action="[https://formspree.io/f/your-unique-endpoint](https://formspree.io/f/your-unique-endpoint)" method="POST"> 
        </form>
    ```

### 2. Update Content

* Update the logo text in the header of all HTML pages to your final branding if you plan to use an image logo.
* Update the company name, testimonials, and service descriptions across the `index.html`, `services.html`, and `about.html` pages with **The Ascent Group's** real content and expertise areas.

---

## Deployment (Live Demo)

This repository is already configured for easy deployment via **GitHub Pages**.

Your site should be live (or building) at the following URL:
**`https://693c5d8d7ffa0339e8777fc1--lighthearted-profiterole-6b6898.netlify.app/`**

If the link isn't working, ensure that GitHub Pages is enabled in your repository settings on the `main` branch, pointing to the root `/` directory.

---

## Contributions

If you find an issue, have a suggestion for performance improvement, or want to contribute to the styling, please open a pull request!

---