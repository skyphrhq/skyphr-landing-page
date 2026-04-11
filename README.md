# SkyPhr — Landing Page

Welcome to the official SkyPhr Landing Page repository. This project is the public-facing website for SkyPhr, a registered company. It is designed to deliver a high-performance, visually engaging, and fully responsive landing experience that represents the SkyPhr brand online.

## Project Overview

The SkyPhr Landing Page is built with a modern front-end stack focused on performance, smooth animations, and pixel-perfect design. It serves as the primary entry point for SkyPhr's audience and communicates the company's identity, services, and value proposition.

## Features

- **Responsive Design**
  Fully optimized for all screen sizes — mobile, tablet, and desktop.

- **Smooth Animations**
  GSAP-powered animations and Lenis smooth scrolling for a premium user experience.

- **Performance-First Architecture**
  Built on Next.js with server-side rendering and static generation for fast load times.

- **Component-Driven Structure**
  Modular, reusable components for scalable and maintainable code.

- **Type-Safe Codebase**
  Full TypeScript support across all components and utilities.

- **Consistent Commit Standards**
  Enforced conventional commit messages via Commitlint and Husky.

## Technologies Used

- **Framework:** Next.js 16 + React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** GSAP / @gsap/react, Lenis
- **Utilities:** clsx, tailwind-merge, react-icons
- **Code Quality:** ESLint, Husky, Commitlint
- **Build Tool:** Next.js (built-in)
- **Package Manager:** PNPM

## Getting Started

Follow these steps to set up and run the SkyPhr Landing Page locally.

### Prerequisites

- Node.js (v22.10.0)
- PNPM (recommended package manager)
- Git

### Installation

1. **Clone the Repository**:

   ```
   git clone https://github.com/VarunPatel-07/SkyPhr-LandingPage
   cd SkyPhr-LandingPage
   ```

2. **Install Dependencies**:

   ```
   pnpm install
   ```

### Running the Application

1. **Start the Development Server**:

   ```
   pnpm run dev
   ```

   The application will be accessible at `http://localhost:3000`.

2. **Build for Production**:

   ```
   pnpm run build
   ```

3. **Start the Production Server**:

   ```
   pnpm run start
   ```

## Folder Structure

```
SkyPhr-LandingPage/
├── public/                     # Static public assets
├── app/
│   ├── (page)/                 # Route-based page components
│   ├── assets/                 # Images, logos, and brand assets
│   ├── components/             # Reusable UI components
│   ├── data/                   # Static content and data
│   ├── lib/                    # Third-party library configurations
│   ├── screens/                # Page sections and screen layouts
│   ├── styles/                 # Global stylesheets
│   ├── utils/                  # Utility/helper functions
│   ├── layout.tsx              # Root layout component
│   └── favicon.ico             # Site favicon
├── commitlint.config.cjs       # Commitlint configuration
├── eslint.config.mjs           # ESLint configuration
├── next.config.ts              # Next.js configuration
├── postcss.config.mjs          # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

- **app/**: The core Next.js App Router directory containing all pages, components, and logic.
- **app/components/**: Reusable UI components shared across sections.
- **app/screens/**: Full page sections that compose the landing page layout.
- **app/data/**: Static content data used across the landing page.
- **app/utils/**: Shared utility and helper functions.
- **public/**: Assets served directly (fonts, open-graph images, etc.).

## Intellectual Property & Usage

All content, assets, and website material — including but not limited to text, images, illustrations, logos, icons, design elements, animations, and visual identity — are the exclusive property of **SkyPhr** and are protected under applicable intellectual property laws.

**No part of this website's content or assets may be copied, reproduced, distributed, republished, displayed, or transmitted in any form or by any means without prior written permission from SkyPhr.**

The source code in this repository is proprietary. See the [LICENSE](/LICENSE) and [Trademark & Branding Policy](/TRADEMARK.md) for full details.

## Contributing

This is a private repository maintained by the SkyPhr development team. External contributions are not accepted at this time.

For internal contributors, please follow the established branch and commit conventions:

1. **Create a Feature Branch**: Use a descriptive name (e.g., `feat/hero-section`).
2. **Follow Commit Conventions**: All commits must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification enforced by Commitlint.
3. **Open a Pull Request**: Submit a PR against the `main` branch with a clear description of changes.

## License

All rights reserved. The source code and all associated content in this repository are proprietary and owned exclusively by **SkyPhr**.

See the [LICENSE](/LICENSE) file for full terms.  
See the [Trademark & Branding Policy](/TRADEMARK.md) for details on trademark and branding restrictions.

## Contact

For any inquiries, licensing requests, or support, please contact:

- **Company:** SkyPhr
- **Email:** contact@skyphr.com
- **Website:** [https://skyphr.com](https://skyphr.com)
