# Contact Form Setup

## Quick Setup with Formspree (Free)

1. Go to [formspree.io](https://formspree.io)
2. Sign up with your email
3. Create a new form
4. Copy your form ID (looks like: `xpznvqko`)
5. Replace `YOUR_FORM_ID` in index.html with your actual form ID

Example:
```html
<form action="https://formspree.io/f/xpznvqko" method="POST" class="form" data-form>
```

## Alternative Options

### 1. Netlify Forms (if using Netlify)
```html
<form netlify class="form" data-form>
```

### 2. EmailJS (JavaScript only)
- Sign up at emailjs.com
- Add their script and configure

### 3. Custom Backend
- Use Node.js with Nodemailer
- Deploy on Vercel/Netlify Functions

## Current Status
✅ Form validation works
✅ Form styling complete  
⚠️ Need to replace YOUR_FORM_ID with actual Formspree ID