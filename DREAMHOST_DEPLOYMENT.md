# DreamHost Deployment Guide

## Prerequisites
- DreamHost account with Node.js hosting
- Custom domain (ryangauthier.dev) configured
- Gmail account with App Password enabled
- Google reCAPTCHA account

## Step 1: DreamHost Setup

### 1.1 Enable Node.js on DreamHost
1. Log into your DreamHost panel
2. Go to **Domains** → **Manage Domains**
3. Find your domain (ryangauthier.dev) and click **Edit**
4. Under **Web Options**, enable **Node.js**
5. Set **Node.js version** to 18.x or 20.x
6. Set **Application startup file** to `server.js`
7. Set **Application root** to your domain directory

### 1.2 Create Application Directory
Your Node.js app will be in: `/home/username/ryangauthier.dev/`

## Step 2: Environment Configuration

### 2.1 Create .env file on DreamHost
Create a `.env` file in your application root with:

```env
# Server Configuration
PORT=3000

# Email Configuration
EMAIL_USER=ryan.eugene.gauthier@gmail.com
EMAIL_PASS=your-gmail-app-password

# reCAPTCHA Configuration
RECAPTCHA_SITE_KEY=your-recaptcha-site-key
RECAPTCHA_SECRET_KEY=your-recaptcha-secret-key
```

### 2.2 Gmail App Password Setup
1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Generate an App Password for "Mail"
4. Use this password in EMAIL_PASS

### 2.3 reCAPTCHA Setup
1. Go to https://www.google.com/recaptcha/admin
2. Create a new site
3. Add your domain: `ryangauthier.dev`
4. Copy the Site Key and Secret Key

## Step 3: File Upload

### 3.1 Upload Files via FTP/SFTP
Upload all files to `/home/username/ryangauthier.dev/`:
- All HTML files (index.html, resume.html)
- All CSS files (assets/css/)
- All JavaScript files (assets/js/)
- All images (images/)
- All fonts (assets/webfonts/)
- server.js
- package.json
- .env (with your actual credentials)

### 3.2 Install Dependencies
SSH into your DreamHost server and run:
```bash
cd /home/username/ryangauthier.dev/
npm install
```

## Step 4: Domain Configuration

### 4.1 DNS Settings
Ensure your domain points to DreamHost:
- A record: `ryangauthier.dev` → DreamHost IP
- CNAME record: `www.ryangauthier.dev` → `ryangauthier.dev`

### 4.2 SSL Certificate
1. In DreamHost panel, go to **Security** → **SSL/TLS Certificates**
2. Enable **Let's Encrypt** for your domain
3. Wait for certificate to be issued

## Step 5: Testing

### 5.1 Start the Application
1. In DreamHost panel, go to **Domains** → **Manage Domains**
2. Find your domain and click **Edit**
3. Under **Node.js**, click **Restart Application**

### 5.2 Test Your Site
1. Visit `https://ryangauthier.dev`
2. Test the contact form
3. Check that emails are being sent
4. Verify reCAPTCHA is working

## Troubleshooting

### Common Issues:
1. **Port conflicts**: DreamHost uses port 3000 by default
2. **Environment variables**: Make sure .env file is in the correct location
3. **Dependencies**: Run `npm install` after uploading
4. **Permissions**: Ensure files have correct permissions (644 for files, 755 for directories)

### Logs:
Check application logs in DreamHost panel under **Domains** → **Manage Domains** → **Edit** → **Node.js** → **View Logs**

## Security Notes
- Never commit .env file to git
- Use strong passwords for Gmail App Password
- Keep reCAPTCHA keys secure
- Regularly update dependencies

## Maintenance
- Monitor application logs
- Update Node.js version when needed
- Keep dependencies updated
- Backup your site regularly 