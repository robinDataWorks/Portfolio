---
description: How to publish this portfolio to GitHub using GitHub Desktop
---

# Publishing to GitHub via GitHub Desktop

Since `git` commands in the terminal are not currently working on your system, using **GitHub Desktop** is the easiest way to upload your project.

### 1. Open GitHub Desktop
If you don't have it, download it from [desktop.github.com](https://desktop.github.com/).

### 2. Add Your Project Folder
1. Click on **File** -> **Add Local Repository...** (or press `Ctrl+O`).
2. Click **Choose...** and select your project folder: `c:\Users\sourav kumar\Downloads\NANDAFOLIO`.
3. GitHub Desktop will say: "This directory does not appear to be a Git repository. Would you like to create a repository here instead?"
4. Click the link **create a repository**.

### 3. Create the Repository
1. In the "Create a New Repository" window:
   - **Name**: `NANDAFOLIO` (or your preferred name).
   - **Local Path**: Should already be correct.
   - **Git Ignore**: You can leave this as "None" because I have already created a `.gitignore` file for you in the folder.
   - **License**: Optional.
2. Click **Create Repository**.

### 4. Commit Your Changes
1. You will see a list of files on the left (Changes).
2. At the bottom left, enter a summary like `Initial commit: Refined portfolio design`.
3. Click **Commit to main**.

### 5. Publish to GitHub
1. Click the **Publish repository** button at the top (or in the middle of the screen).
2. Keep **Keep this code private** checked if you want it private, or uncheck it for a public portfolio.
3. Click **Publish Repository**.

Your code is now on GitHub! You can now easily deploy it to platforms like **Vercel** by connecting your GitHub account.
