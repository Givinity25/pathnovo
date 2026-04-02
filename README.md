# Pathnovo - Empowering Youth, Enabling Change.

A modern, responsive landing page for Pathnovo, an organization dedicated to empowering youth and creating positive change through education, healthcare support, and community development.

## 🌟 About

Pathnovo is a non-profit organization focused on uplifting lives through learning, healing, and support. The organization's mission is to create peace and harmony through mass prayers and helping hands, with a special focus on empowering underserved and economically challenged youth through inclusive higher education, skill development, and healthcare support.

### Key Features

- **Hero Section**: Engaging landing area with call-to-action buttons
- **About Us**: Mission and vision with interactive tab switching
- **Focus Areas**: Highlighting key areas of impact
- **Get Involved**: Opportunities for volunteering and contribution
- **Call-to-Action**: Clear pathways for engagement
- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean, professional design with smooth animations

## 🚀 Tech Stack

- **Framework**: Next.js 15.4.5 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Development**: ESLint, Turbopack
- **Deployment**: Vercel-ready

## 📋 Prerequisites

- Node.js 18+
- npm or yarn package manager

## 🛠️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd pathnovo
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
pathnovo/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/             # React components
│   │   ├── hero.tsx           # Hero section
│   │   ├── about-us.tsx       # About section
│   │   ├── focus-areas.tsx    # Focus areas
│   │   ├── get-involved.tsx   # Get involved section
│   │   ├── cta-banner.tsx     # Call-to-action banner
│   │   ├── footer.tsx         # Footer
│   │   ├── objective.tsx      # Objective section
│   │   ├── logo.tsx           # Logo component
│   │   └── ui/                # UI components
│   ├── hooks/                 # Custom React hooks
│   │   ├── useAutoTabSwitch.ts
│   │   └── useMediaQuery.ts
│   └── constants/             # Constants and configuration
│       └── links.ts           # External links
├── public/                    # Static assets
│   ├── hero/                  # Hero images
│   ├── about-us/              # About section images
│   ├── focus-areas/           # Focus area images
│   ├── get-involved/          # Get involved images
│   └── banner/                # Banner images
└── package.json               # Dependencies and scripts
```

## 🎨 Key Components

### Hero Section (`hero.tsx`)

- Engaging landing area with mission statement
- Call-to-action buttons for joining, volunteering, and contributing
- Auto-scrolling image carousel on mobile
- Responsive design with mobile-first approach

### About Us (`about-us.tsx`)

- Interactive tab switching between Mission and Vision
- Auto-tab switching with pause on hover
- Smooth slide animations
- Rich content with images and descriptions

### Focus Areas (`focus-areas.tsx`)

- Highlighting key areas of impact
- Visual representation of organization's work

### Get Involved (`get-involved.tsx`)

- Opportunities for volunteering and internships
- Partnership opportunities
- Clear pathways for engagement

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

This project is optimized for deployment on Vercel:

1. Connect your repository to Vercel
2. Vercel will automatically detect Next.js and configure the build
3. Deploy with zero configuration

## 📱 Responsive Design

The landing page is fully responsive and optimized for:

- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Key Features

- **Auto-tab switching** in About Us section
- **Mobile-first design** with touch-friendly interactions
- **Smooth animations** and transitions
- **SEO optimized** with proper meta tags
- **Accessibility focused** with semantic HTML
- **Performance optimized** with Next.js Image component

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to Pathnovo.

## 📞 Contact

For questions or support, please reach out to the Pathnovo team.

---

**Empowering Youth. Enabling Change. Healing the World.** 🌍
