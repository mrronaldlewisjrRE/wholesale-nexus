# System Requirements & Installation Guide

Before running the application, you need to install the following tools on your Windows machine.

## 1. Install Node.js (Required)
Node.js is needed to run the development server and install project dependencies.

1.  Go to [nodejs.org](https://nodejs.org/).
2.  Download the **LTS (Long Term Support)** version.
3.  Run the installer. **Important:** meaningful checking the box that says "Automatically install the necessary tools..." if available, or ensure "Add to PATH" is selected.
4.  Restart your computer or terminal after installation.

## 2. Install Git (Required)
Git is needed for version control and deploying to Vercel.

1.  Go to [git-scm.com](https://git-scm.com/download/win).
2.  Download the **64-bit Git for Windows Setup**.
3.  Run the installer and use the default settings (click Next until finished).
4.  Open a new terminal (PowerShell or Command Prompt) and run:
    ```bash
    git --version
    ```
    (You should see a version number, e.g., `git version 2.43.0.windows.1`)

## 3. Verify Installation
Once installed, close this terminal window and open a new one. Navigate back to your project folder:
```powershell
cd c:\Users\amy\Antigravity
```

Then run these commands to confirm everything is working:
```powershell
node --version
npm --version
git --version
```

If these commands output version numbers, you are ready to proceed with the `README.md` instructions!
