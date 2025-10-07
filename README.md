# 👨‍💻 Developer Portfolio - Faizal Khilmi Muzakki

A modern, animated developer portfolio built with vanilla JavaScript, showcasing projects and skills.

🌐 **[Live Demo](https://faizal-khilmi.dev)** (deploy your own!)

## ✨ Features

- 🎨 **Modern Design** - Beautiful gradient hero with animated particles
- ⚡ **Fast & Lightweight** - Pure vanilla JS, no frameworks
- 📱 **Fully Responsive** - Looks great on all devices
- 🎭 **Smooth Animations** - Intersection Observer for scroll animations
- 🚀 **Easy to Deploy** - Deploy to Cloudflare Pages in minutes
- 🎯 **SEO Friendly** - Semantic HTML and meta tags
- ♿ **Accessible** - WCAG compliant

## 🚀 Quick Deploy to Cloudflare Pages

```bash
# Option 1: Direct upload via Wrangler CLI
wrangler pages deploy . --project-name=solork-dev

# Option 2: Connect to GitHub and auto-deploy
# See deployment section below
```

## 📋 Customization

### Update Your Information

The portfolio is already customized with Faizal's information! To further personalize:

1. **Hero Section**
   - Add your professional photo to replace the emoji
   - Update the bio if needed

2. **Tech Stack**
   - Add/remove technologies based on your current skills

3. **Projects**
   - Add more projects as you build them
   - Update project URLs once deployed

4. **Contact Links**
   - Update your actual GitHub username
   - Add your real email address
   - Update LinkedIn profile URL

### Add Your Photo

Replace the emoji avatar:

```html
<!-- Replace this: -->
<div class="avatar">👨‍💻</div>

<!-- With this: -->
<img src="your-photo.jpg" alt="Your Name" style="border-radius: 50%; width: 200px; height: 200px;">
```

## 🛠️ Local Development

### Option 1: Open Directly

```bash
cd /home/solork/Projects/solork-dev-index
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows
```

### Option 2: Use a Local Server

```bash
# Using npx serve (recommended)
npm run dev

# Using Python
python -m http.server 3000

# Then visit http://localhost:3000
```

## 🌐 Deployment

### Cloudflare Pages (Recommended)

**Option A: Using Git Integration**

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Developer portfolio"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages
3. Click **Create a project**
4. Connect your GitHub repository
5. Configure build settings:
   - **Project name**: `solork-dev` (or your choice)
   - **Production branch**: `main`
   - **Framework preset**: None
   - **Build command**: `npm run build` (or leave empty)
   - **Build output directory**: `/` (root)
6. Click **Save and Deploy**

**Option B: Direct Upload via Wrangler**

```bash
# Install Wrangler globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy . --project-name=solork-dev
```

Your portfolio will be live at: `https://solork-dev.pages.dev`

### Custom Domain

1. Go to your Cloudflare Pages project
2. Navigate to **Custom domains**
3. Click **Set up a custom domain**
4. Add your domain (e.g., `solork.dev`)
5. Update DNS records as instructed

### GitHub Pages

```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main

# Enable GitHub Pages in repository settings
# Select main branch, root directory
```

Your site will be at: `https://yourusername.github.io/solork-dev-index`

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## 📂 Project Structure

```
solork-dev-index/
├── index.html          # Main HTML file
├── styles.css          # All styles
├── app.js             # JavaScript for animations
├── package.json       # Project metadata
├── README.md          # This file
└── .gitignore        # Git ignore rules
```

## 🎨 Features in Detail

### Animated Hero Section
- Floating particles background
- Smooth fade-in animations
- Hover effects on avatar

### Projects Showcase
- Two featured projects with descriptions
- Live demo and source code links
- Tags for technologies used
- Feature lists

### Skills Section
- Four main skill categories
- Icon-based cards
- Hover animations

### Contact Section
- Social media links
- Email contact
- Professional network links

### Interactive Elements
- Smooth scroll navigation
- Scroll progress indicator
- Intersection Observer animations
- Staggered card animations
- Console easter eggs

## 🔧 Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **Vanilla JavaScript** - No frameworks, pure JS
- **Zero Dependencies** - Lightweight and fast

## 📝 SEO & Performance

- Semantic HTML structure
- Meta tags included
- Optimized animations
- Lazy loading for images (when added)
- Fast load times

## ♿ Accessibility

- ARIA labels where needed
- Keyboard navigation support
- Semantic HTML elements
- Color contrast compliant
- Screen reader friendly

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 🤝 Customization Tips

1. **Colors**: Update CSS variables in `:root` in `styles.css`
2. **Fonts**: Change font families in the `body` selector
3. **Animations**: Adjust animation timings in `app.js`
4. **Layout**: Modify grid templates for different layouts
5. **Sections**: Add/remove sections as needed

## 🎯 Quick Links

- 🔗 [URL Shortener Project](https://shorten.solork.dev)
- 🔄 [Indentation Converter](https://indentation-converter.solork.dev)
- 🍅 [Pomodoro Timer](https://pomodoro.solork.dev)
- 💼 [Upwork Profile](https://www.upwork.com/freelancers/~01835f7d2dfee37bfa)

## ⭐ Show Your Support

If you like this portfolio template, consider:
- Starring the repository
- Sharing it with others
- Contributing improvements

---

**Built with ❤️ using Vanilla JS, CSS3, and HTML5**

