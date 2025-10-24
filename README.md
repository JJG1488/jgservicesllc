# JGServicesLLC Portfolio

A modern, professional web development portfolio built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Next.js 16** - Latest version with App Router
- 🎨 **Tailwind CSS 4** - Modern utility-first CSS framework
- 📘 **TypeScript** - Type-safe code
- 🖼️ **Optimized Images** - Automatic image optimization with Next.js Image
- 📱 **Responsive Design** - Mobile-first approach
- 🚀 **SEO Optimized** - Server-side rendering for better SEO
- ♿ **Accessible** - WCAG compliant components

## Pages

- **Home** - Hero section, process overview, and services highlight
- **Services** - Custom web development services showcase
- **Contact** - Contact information and links
- **Schedule** - Direct link to Calendly for appointment booking

## Getting Started

### Prerequisites

- Node.js 21.6.2 or higher
- pnpm 10.18.3 or higher

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd portfolio-nextjs
\`\`\`

2. Install dependencies:
\`\`\`bash
pnpm install
\`\`\`

3. Copy environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. Run the development server:
\`\`\`bash
pnpm dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checking

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Configure environment variables
4. Deploy!

The easiest way to deploy is using [Vercel](https://vercel.com/new).

### Manual Deployment

\`\`\`bash
pnpm build
pnpm start
\`\`\`

## Project Structure

\`\`\`
portfolio-nextjs/
├── public/
│   └── images/          # Static images
├── src/
│   ├── app/
│   │   ├── contact/     # Contact page
│   │   ├── schedule/    # Schedule page
│   │   ├── services/    # Services page
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   └── components/
│       ├── Navigation.tsx
│       └── Footer.tsx
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
\`\`\`

## Migration from React CRA

This project was migrated from Create React App to Next.js 16 with the following improvements:

- Upgraded from React 19 to latest with Next.js 16
- Replaced React Router with Next.js App Router
- Migrated from Bootstrap 4 to Tailwind CSS 4
- Added TypeScript for type safety
- Implemented server-side rendering for better SEO
- Optimized images with Next.js Image component
- Modernized component architecture

## Environment Variables

Create a `.env.local` file based on `.env.example`:

- `NEXT_PUBLIC_API_URL` - Backend API URL (if using separate backend)

## Technologies

- **Framework**: Next.js 16
- **Language**: TypeScript 5.9
- **Styling**: Tailwind CSS 4.1
- **Fonts**: Playfair Display, Ephesis
- **Deployment**: Vercel

## License

MIT

## Contact

James Gault
- Email: jgservicesllc14@gmail.com
- Phone: +1 (586) 276-5646
- LinkedIn: [James Gault](https://www.linkedin.com/in/jamesgault1488)
- Website: https://jgservicesllc.com
