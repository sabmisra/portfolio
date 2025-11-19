# 🚀 Abhinav Misra - AI/ML Portfolio

A stunning, interactive portfolio website showcasing 15+ years of software development experience with cutting-edge AI/ML animations and modern web technologies.

## ✨ Features

### 🧠 **AI/ML Animations**
- **Three.js Neural Network**: Interactive 3D visualization with floating nodes and connections
- **Particle System**: Dynamic particle effects with AI-themed colors
- **Central AI Core**: Rotating icosahedron with wireframe effects
- **Auto-rotating Camera**: Smooth 3D scene navigation

### 🎬 **Smooth Animations**
- **Framer Motion**: Scroll-triggered animations and transitions
- **Interactive Elements**: Hover effects, 3D transforms, and micro-interactions
- **Staggered Reveals**: Progressive content loading animations
- **Responsive Design**: Optimized animations for all screen sizes

### 🎯 **Portfolio Sections**
- **Hero Section**: Animated introduction with AI-themed background
- **About Me**: Professional summary and certifications
- **Experience Timeline**: Interactive career progression
- **Technical Skills**: Categorized skill showcase with animations
- **Key Projects**: Highlighted AI/ML and development projects
- **Contact Section**: Professional contact information

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 15** - React framework with App Router
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **shadcn/ui** - Modern component library

### **Animations & 3D**
- **Three.js** - 3D graphics and WebGL
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Three.js helpers for React
- **Framer Motion** - Production-ready motion library

### **Development Tools**
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing
- **Hot Reload** - Development experience

## 🎨 Design Features

### **Visual Effects**
- **Gradient Backgrounds**: Modern color transitions
- **Glass Morphism**: Frosted glass effects
- **Dark Mode**: Complete theme support
- **Responsive Layout**: Mobile-first design

### **Interactive Elements**
- **3D Card Transforms**: Perspective and rotation effects
- **Hover Animations**: Scale, rotate, and color transitions
- **Loading States**: Smooth content reveals
- **Button Interactions**: Tap and hover feedback

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with theme provider
│   │   └── page.tsx           # Main portfolio page
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   ├── animated-ai-background.tsx  # Three.js AI scene
│   │   ├── skill-card.tsx      # Animated skill cards
│   │   ├── experience-timeline.tsx  # Animated timeline
│   │   └── theme-provider.tsx  # Theme context
│   └── hooks/
│       └── use-toast.ts        # Toast notifications
├── public/
│   ├── favicon.png             # Custom favicon
│   └── hero-bg.jpg           # Background image
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### **Build for Production**

```bash
# Build the application
npm run build

# Start production server
npm start
```

## ⚡ Performance

### **Optimization Features**
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Google Fonts with Next.js
- **Bundle Analysis**: Optimized dependencies
- **Tree Shaking**: Unused code elimination

### **Animation Performance**
- **Hardware Acceleration**: GPU-accelerated animations
- **React.memo**: Component memoization
- **Lazy Loading**: On-demand component loading
- **Optimized Renders**: Efficient re-rendering

## 🎯 Customization

### **Personal Information**
Update your details in `src/app/page.tsx`:

```typescript
const experience = [
  {
    company: 'Your Company',
    position: 'Your Position',
    period: 'Start Date – Present',
    description: 'Your role description',
    type: 'current'
  }
  // ... more experiences
];

const skills = {
  'Frontend': ['React', 'TypeScript', 'Tailwind'],
  'Backend': ['Node.js', 'Python', 'Django'],
  // ... more skills
};
```

### **Theme Customization**
Modify colors in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Your custom colors
        }
      }
    }
  }
}
```

### **Animation Tweaks**
Adjust animation parameters in component files:

```typescript
// Example: Modify AI background animation
<motion.div
  animate={{ 
    scale: [1, 1.1, 1],
    opacity: [1, 0.5, 1],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }}
/>
```

## 🔧 Configuration

### **Environment Variables**
Create `.env.local` for environment-specific settings:

```env
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_API_URL=your_api_endpoint
```

### **Next.js Configuration**
Customize `next.config.js` for additional features:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Experimental features
  },
  images: {
    domains: ['your-domain.com'],
  },
}

module.exports = nextConfig
```

## 📱 Browser Support

- **Chrome/Edge**: Full support with all animations
- **Firefox**: Full support with optimized performance
- **Safari**: Full support with fallback animations
- **Mobile**: Responsive design with touch interactions

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Next.js](https://nextjs.org/)** - The React framework
- **[Three.js](https://threejs.org/)** - 3D graphics library
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Tailwind CSS](https://tailwindcss.com/)** - CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Component library
- **[Lucide](https://lucide.dev/)** - Icon library

## 📞 Contact

- **Email**: sabmisra@gmail.com
- **Phone**: +91 8249949227
- **Location**: Bhubaneswar, Odisha, India
- **Portfolio**: [Live Demo](https://www.abhinavmisra.in/)

---

<div align="center">
  <p>🚀 Built with passion, AI, and modern web technologies</p>
  <p>⭐ Star this repo if it inspired you!</p>
</div>
