# Portfolio Website
A modern portfolio website with integrated functions for blog and projects as well as support for multiple languages.

## Project Overview

A modern portfolio website with integrated functions for blog and projects as well as support for multiple languages.

## Technologies Used

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Features

- Multilingual support
- Dark/light theme mode
- Responsive design
- Blog section
- Projects showcase
- Contact page
- Imprint page

## Detailed Installation Guide

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or newer)
- [Git](https://git-scm.com/downloads)
- GitHub account

### Local Setup

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd portfolio_website

# Install dependencies
npm install

# Start the development server
npm run dev
```

### GitHub Setup with SSH

#### 1. Generate SSH Key (if you don't have one already)

```sh
# Generate a new SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Start the SSH agent
eval "$(ssh-agent -s)"

# Add your SSH key to the agent
ssh-add ~/.ssh/id_ed25519
```

#### 2. Add SSH Key to GitHub

```sh
# Copy your public key to clipboard
# On macOS:
pbcopy < ~/.ssh/id_ed25519.pub
# On Windows (PowerShell):
Get-Content ~/.ssh/id_ed25519.pub | Set-Clipboard
# On Linux:
cat ~/.ssh/id_ed25519.pub
```

1. Go to GitHub → Settings → SSH and GPG keys  
2. Click "New SSH key"  
3. Paste your key and give it a title  
4. Click "Add SSH key"

#### 3. Test SSH Connection

```sh
ssh -T git@github.com
```

You should see a message like "Hi username! You've successfully authenticated..."

#### 4. Configure Git

```sh
git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"
```

#### 5. Create and Push to GitHub Repository

1. Create a new repository on GitHub (don't initialize with README)  
2. Push your local repository:

```sh
# Initialize git if needed
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Add the remote repository
git remote add origin git@github.com:username/repository-name.git

# Push to GitHub
git push -u origin main
```

### Deployment Options

#### GitHub Pages

1. Install gh-pages:
```sh
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
},
"homepage": "https://username.github.io/repository-name"
```

3. Deploy:
```sh
npm run deploy
```

### Troubleshooting

#### SSH Issues

- **Permission denied error**: Ensure your SSH key is added to GitHub and the SSH agent  
- **Host key verification failed**: Run `ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts`

#### Git Issues

- **'fatal: refusing to merge unrelated histories'**: Use `git pull origin main --allow-unrelated-histories`  
- **Conflicts during merge**: Resolve conflicts manually in your code editor

#### Build Issues

- **Module not found errors**: Run `npm install` to ensure all dependencies are installed  
- **Vite build failing**: Try clearing the cache with `npm run dev -- --force`

#### Deployment Issues

- **404 on GitHub Pages**: Ensure base path is set correctly in vite.config.ts:
```js
base: '/repository-name/'
```

## Contributing

Feel free to fork this repository and submit pull requests.

## License

This project is licensed under the **Non-Commercial License** (NC License).

**You are allowed to use, modify, and share the code for personal, educational, or non-commercial purposes only.**  
**Commercial use of any kind is strictly prohibited.**

## Copyright

© 2025 **Nebeo Studio**  
All rights reserved.  
Credit sections must not be removed, hidden, or modified in any form.
