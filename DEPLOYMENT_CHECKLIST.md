# 🚀 DreamHost Deployment Checklist (Static Website)

## Pre-Deployment Setup
- [x] Formspree account created
- [x] Formspree form endpoint obtained
- [ ] Google reCAPTCHA account created
- [ ] reCAPTCHA site configured for ryangauthier.dev
- [ ] DreamHost shared hosting account

## DreamHost Configuration
- [ ] Domain ryangauthier.dev configured
- [ ] Website files uploaded to public_html directory
- [ ] File permissions set correctly (644 for files, 755 for directories)

## File Upload
- [ ] All HTML, CSS, and image files uploaded to DreamHost server
- [x] Formspree endpoint updated in index.html
- [ ] reCAPTCHA keys added to form (if needed)

## Formspree Setup
- [x] Account created at [formspree.io](https://formspree.io)
- [x] New form created for ryangauthier.dev
- [x] Form endpoint ID copied (starts with 'x')
- [x] Form endpoint updated in index.html contact form
- [ ] Email notifications configured

## Domain & SSL
- [ ] DNS records pointing to DreamHost
- [ ] SSL certificate enabled (Let's Encrypt)
- [ ] Domain ryangauthier.dev configured

## Testing
- [ ] Site loads at https://ryangauthier.dev
- [ ] Contact form works and sends emails
- [ ] Formspree notifications received
- [ ] No errors in browser console

## Security
- [ ] SSL certificate working
- [ ] Formspree spam protection enabled
- [ ] Contact form validation working

## Final Steps
- [ ] Test contact form from different devices
- [ ] Set up monitoring/backups
- [ ] Share your new website URL!

## Troubleshooting
If something doesn't work:
1. Check file permissions on DreamHost
2. Verify Formspree endpoint is correct
3. Check browser console for errors
4. Verify domain DNS settings
5. Test form submission manually 