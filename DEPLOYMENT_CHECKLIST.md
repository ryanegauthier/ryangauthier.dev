# 🚀 DreamHost Deployment Checklist

## Pre-Deployment Setup
- [ ] Gmail 2-Factor Authentication enabled
- [ ] Gmail App Password generated
- [ ] Google reCAPTCHA account created
- [ ] reCAPTCHA site configured for ryangauthier.dev
- [ ] DreamHost account with Node.js hosting

## DreamHost Configuration
- [ ] Node.js enabled for ryangauthier.dev
- [ ] Application startup file set to `server.js`
- [ ] Node.js version set to 18.x or 20.x
- [ ] Application root configured

## File Upload
- [ ] All files uploaded to DreamHost server
- [ ] `.env` file created with real credentials
- [ ] `npm install` run on server
- [ ] File permissions set correctly (644 for files, 755 for directories)

## Environment Variables (.env)
- [ ] `EMAIL_USER=ryan.eugene.gauthier@gmail.com`
- [ ] `EMAIL_PASS=your-gmail-app-password`
- [ ] `RECAPTCHA_SITE_KEY=your-site-key`
- [ ] `RECAPTCHA_SECRET_KEY=your-secret-key`
- [ ] `PORT=3000`

## Domain & SSL
- [ ] DNS records pointing to DreamHost
- [ ] SSL certificate enabled (Let's Encrypt)
- [ ] Domain ryangauthier.dev configured

## Testing
- [ ] Application restarted in DreamHost panel
- [ ] Site loads at https://ryangauthier.dev
- [ ] Contact form works
- [ ] Emails are being sent
- [ ] reCAPTCHA verification working
- [ ] No errors in application logs

## Security
- [ ] .env file not committed to git
- [ ] Strong Gmail App Password used
- [ ] reCAPTCHA keys kept secure
- [ ] SSL certificate working

## Final Steps
- [ ] Update resume.html with your actual information
- [ ] Test contact form from different devices
- [ ] Set up monitoring/backups
- [ ] Share your new website URL!

## Troubleshooting
If something doesn't work:
1. Check DreamHost application logs
2. Verify .env file is in correct location
3. Ensure all dependencies are installed
4. Check file permissions
5. Verify domain DNS settings 