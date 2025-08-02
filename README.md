# Ekaant - Agro Tourism Retreat Website

A modern, responsive website for Ekaant Agro Tourism Retreat located near Bor Tiger Reserve, Maharashtra. Built with Next.js and Tailwind CSS, this website showcases the peaceful retreat and provides comprehensive information for potential visitors.

## 🌿 About Ekaant

Ekaant (एकांत), meaning "solitude" in Sanskrit, is a boutique agro-tourism retreat designed to offer visitors a peaceful escape from urban chaos. Located near the famous Bor Tiger Reserve in Maharashtra, Ekaant provides authentic rural experiences, sustainable living, and mindful travel opportunities.

## ✨ Features

- **Responsive Design**: Fully responsive layout optimized for all devices
- **Modern UI/UX**: Clean, contemporary design with smooth animations
- **Component-Based Architecture**: Modular React components for easy maintenance
- **Performance Optimized**: Built with Next.js for optimal loading speeds
- **SEO Friendly**: Structured data and meta tags for better search visibility
- **Interactive Elements**: Smooth scrolling, hover effects, and transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Language**: JavaScript (JSX)
- **Deployment**: Ready for Vercel deployment
- **Icons**: Custom SVG icons and Lucide React
- **Fonts**: Poppins font family

## 📂 Project Structure

```
ekaant-home/
├── app/
│   ├── components/
│   │   ├── About.jsx          # About section component
│   │   ├── Faq.jsx            # FAQ accordion component
│   │   ├── Footer.jsx         # Footer with contact info
│   │   ├── HeroSection.jsx    # Main hero banner
│   │   ├── Location.jsx       # How to reach section
│   │   ├── Navbar.jsx         # Navigation header
│   │   └── Services.jsx       # What we offer section
│   ├── data/
│   │   └── content.js         # Content data structure
│   ├── globals.css            # Global styles
│   ├── layout.js              # Root layout component
│   └── page.js                # Homepage component
├── public/                    # Static assets
│   ├── images/               # All images and graphics
│   ├── bg.jpg                # Hero background image
│   ├── about.png             # About section image
│   ├── group1.jpg            # Service images group 1
│   ├── group2.jpg            # Service images group 2
│   ├── Traced Image.png      # Location illustration
│   └── whatweoffer.png       # Section title background
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <https://github.com/royanish0410/ekaant-homepage>
   cd ekaant-home
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

### Build for Production

```bash
npm run build
npm start
```

## 📱 Sections Overview

### 🏠 Hero Section
- Full-screen background with resort imagery
- Compelling headline and subtitle
- Responsive typography with Figma specifications

### 📖 About Section
- Introduction to Ekaant philosophy
- Visual storytelling with high-quality images
- Call-to-action for exploration

### 🎯 Services Section
- Six key offerings with visual cards:
  - Boutique Farm Stay
  - Agro-Tourism Activities
  - Forest & Wildlife Encounters
  - Stargazing Nights
  - Bonfire Evenings
  - Digital Detox & Wellness

### 🗺️ Location Section
- Three transportation methods (Road, Train, Air)
- Custom illustrated route guidance
- Detailed distance and connectivity information

### ❓ FAQ Section
- Interactive accordion-style questions
- Comprehensive answers about the retreat
- Two-column responsive layout

### 📞 Footer
- Contact information and social links
- Location details
- Professional dark green branding

## 🎨 Design System

### Colors
- **Primary Green**: `#003E17` (Footer background)
- **Secondary Green**: `#7CB342` (Accents and buttons)
- **Text White**: `#FFFFFF`
- **Background Gray**: `#F5F5F5`

### Typography
- **Primary Font**: Poppins
- **Font Weights**: 400, 600, 700
- **Responsive Text Sizes**: From mobile (16px) to desktop (72px)

### Components
- Rounded corners (`rounded-3xl`)
- Subtle shadows and hover effects
- Smooth transitions (300ms duration)
- Mobile-first responsive breakpoints

## 📊 Content Management

All website content is centralized in `/app/data/content.js`:

```javascript
export const contentData = {
  header: { /* Navigation items */ },
  hero: { /* Hero section content */ },
  about: { /* About section content */ },
  services: { /* Services offered */ },
  location: { /* Transportation methods */ },
  faqs: [ /* Frequently asked questions */ ],
  footer: { /* Contact information */ }
}
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically with each push


## 📈 Performance Features

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting by Next.js
- **CSS Optimization**: Tailwind CSS purging unused styles
- **SEO Optimization**: Meta tags and structured data
- **Mobile Performance**: Optimized for mobile-first experience

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.


## 🙏 Acknowledgments

- Design inspiration from modern agro-tourism websites
- Images and content provided by Ekaant team
- Built with modern web technologies for optimal user experience

---

**Experience the tranquility of Ekaant - Where silence heals, and nature whispers...**