# Longevita Landing Page

A modern, responsive multi-page website for Longevita - a food-first wellness app designed for Millennials and Gen Z (18-44). This website introduces the app and its benefits to potential users through dedicated pages for each section.

## 🌟 Features

### Design & Styling
- **Green Color Palette**: Health-focused color scheme with various shades of green
- **Modern Design**: Clean, minimal aesthetic with soft gradients and rounded corners
- **Typography**: Professional yet approachable fonts (Inter & Poppins)
- **Responsive Layout**: Mobile-first design that works on all devices

### Pages
1. **Home Page** (`index.html`): Eye-catching introduction with overview cards
2. **About Page** (`about.html`): Problem-solution narrative with mission statement and values
3. **Features Page** (`features.html`): Detailed app features with how-it-works section
4. **Feedback Page** (`feedback.html`): Community feedback and feedback submission form
5. **Contact Page** (`contact.html`): Contact form, company info, and FAQ section

### Functionality
- **Multi-Page Navigation**: Separate pages for each major section
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Form Validation**: Contact and feedback forms with validation and notifications
- **Interactive Elements**: FAQ toggles, feedback filtering, hover effects, and animations
- **Progress Indicator**: Scroll progress bar at the top
- **Smooth Transitions**: Page transitions and micro-interactions

## 🚀 Getting Started

### Prerequisites
- Modern web browser
- Local web server (optional, for development)

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser to start with the homepage
3. Navigate between pages using the top navigation menu
4. For development, use a local server to avoid CORS issues

### File Structure
```
longetiva-landing-page/
├── index.html          # Homepage with overview
├── about.html          # About page with mission and values
├── features.html       # Features page with detailed app info
├── feedback.html       # Feedback page with community feedback
├── contact.html        # Contact page with form and FAQ
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── demo.html           # Quick demo showcase
└── README.md           # Project documentation
```

## 📄 Page Details

### Home Page (`index.html`)
- Hero section with tagline and call-to-action buttons
- Overview cards highlighting key benefits
- Quick navigation to other pages
- Floating animated elements

### About Page (`about.html`)
- Problem-solution format explaining the wellness challenge
- Mission statement and company values
- Call-to-action section
- Professional layout with icons

### Features Page (`features.html`)
- Four main app features with detailed descriptions
- Additional features list
- How-it-works section with step-by-step process
- Feature cards with hover effects

### Feedback Page (`feedback.html`)
- Feedback submission form with rating system
- Community feedback display with filtering
- Feedback statistics and metrics
- Anonymous feedback option

### Contact Page (`contact.html`)
- Contact form with subject selection
- Company contact information
- Social media links
- FAQ section with expandable answers

## 🎨 Customization

### Colors
The website uses CSS custom properties for easy color customization. Main colors are defined in `:root`:

```css
:root {
    --primary-green: #2D5A27;    /* Main brand color */
    --secondary-green: #4A7C59;  /* Secondary brand color */
    --accent-green: #6B8E6B;     /* Accent color */
    --light-green: #A8D5BA;      /* Light green */
    --pale-green: #E8F5E8;       /* Very light green */
    --dark-green: #1A3D1A;       /* Dark green */
}
```

### Content
- Update text content in respective HTML files
- Modify feedback and contact form fields
- Change social media links and company information
- Update FAQ questions and answers

### Styling
- Modify `styles.css` for layout and visual changes
- Adjust breakpoints for responsive design
- Update animations and transitions
- Customize page headers and section layouts

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (with some feature limitations)

## 📝 Features in Detail

### Navigation
- Fixed top navigation bar across all pages
- Active state indicators for current page
- Mobile hamburger menu with smooth transitions
- Consistent navigation across all pages

### Forms
- **Contact Form**: Name, email, subject, message with validation
- **Feedback Form**: Name, email, feedback type, rating, message
- Form validation with user-friendly error messages
- Success notifications and form reset functionality

### Interactive Elements
- **FAQ Toggles**: Expandable FAQ sections on contact page
- **Feedback Filtering**: Filter community feedback by category
- **Rating System**: Interactive star rating system
- **Hover Effects**: Cards and buttons with smooth animations

### Animations
- Fade-in animations for page elements
- Smooth page transitions
- Floating elements on homepage
- Hover effects and micro-interactions

## 🚀 Deployment

### Static Hosting
The website can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

### Custom Domain
1. Upload all HTML, CSS, and JS files to your hosting service
2. Configure your custom domain
3. Ensure all internal links work correctly
4. Test navigation between pages

## 🔮 Future Enhancements

Potential improvements and additions:
- **Analytics Integration**: Google Analytics or similar
- **SEO Optimization**: Meta tags, structured data, sitemap
- **Performance**: Image optimization, lazy loading, caching
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Internationalization**: Multi-language support
- **CMS Integration**: Content management system
- **A/B Testing**: Conversion optimization tools
- **Blog Section**: Wellness tips and company updates
- **User Dashboard**: Login system for app users

## 📄 License

This project is created for Longevita. All rights reserved.

## 🤝 Contributing

For internal development and updates:
1. Make changes to the appropriate HTML, CSS, or JS files
2. Test across different devices and browsers
3. Validate HTML and CSS
4. Test navigation between all pages
5. Update documentation as needed

## 📞 Support

For questions or support regarding this website, please contact the development team.

---

**Built with ❤️ for Longevita - Your trusted, food-first wellness companion**
