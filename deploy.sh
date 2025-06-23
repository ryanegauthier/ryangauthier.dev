#!/bin/bash

# DreamHost Deployment Script
# This script helps prepare and deploy your resume website to DreamHost

echo "🚀 DreamHost Deployment Script"
echo "=============================="

# Check if we're in the right directory
if [ ! -f "server.js" ]; then
    echo "❌ Error: server.js not found. Please run this script from your project root."
    exit 1
fi

echo "✅ Found server.js - we're in the right directory"

# Create deployment package
echo "📦 Creating deployment package..."

# Create a deployment directory
mkdir -p ../resume-deploy
cp -r * ../resume-deploy/
cp .env.example ../resume-deploy/.env

# Remove git files from deployment
rm -rf ../resume-deploy/.git
rm -rf ../resume-deploy/.gitignore

echo "✅ Deployment package created in ../resume-deploy/"
echo ""
echo "📋 Next Steps:"
echo "1. Upload the contents of ../resume-deploy/ to your DreamHost server"
echo "2. Configure your .env file on DreamHost with your actual credentials"
echo "3. Run 'npm install' on your DreamHost server"
echo "4. Enable Node.js in your DreamHost panel"
echo "5. Restart your application"
echo ""
echo "📖 See DREAMHOST_DEPLOYMENT.md for detailed instructions"
echo ""
echo "🔑 Don't forget to:"
echo "   - Set up Gmail App Password"
echo "   - Configure reCAPTCHA keys"
echo "   - Enable SSL certificate"
echo ""
echo "🌐 Your site will be available at: https://ryangauthier.dev" 