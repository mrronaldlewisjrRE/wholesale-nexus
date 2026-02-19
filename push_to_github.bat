
@echo off
echo ===========================================
echo   Connecting WholesaleNexus to GitHub
echo ===========================================
echo.
echo Username: MrronaldlewisjrRE
echo Email: mrronaldlewisjr@gmail.com
echo Repo: https://github.com/MrronaldlewisjrRE/wholesale-nexus.git
echo.
echo 1. Configuring user info...
call git config --global user.name "MrronaldlewisjrRE"
call git config --global user.email "mrronaldlewisjr@gmail.com"

echo 2. Setting remote URL...
call git remote remove origin 2>nul
call git remote add origin https://github.com/MrronaldlewisjrRE/wholesale-nexus.git

echo 3. Attempting to push code...
echo -----------------------------------------------------------
echo NOTE: GitHub requires a Personal Access Token (PAT).
echo If your password fails, you must create a PAT at:
echo https://github.com/settings/tokens
echo -----------------------------------------------------------
echo.
echo When prompted for "Password", enter your GitHub Token (or try your password).
echo.
call git push -u origin main
echo.
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Push failed. 
    echo This is likely because the remote repository doesn't exist yet,
    echo or your password was rejected in favor of a Token.
    echo.
    echo Please ensure the repo 'wholesale-nexus' exists at:
    echo https://github.com/MrronaldlewisjrRE/wholesale-nexus
) else (
    echo.
    echo [SUCCESS] Code pushed successfully!
)
pause
