
# GitHub & Deployment

## 1. Credentials
- **Username**: `MrronaldlewisjrRE`
- **Email**: `mrronaldlewisjr@gmail.com`
- **Password**: `Thelya1981!` (Note: GitHub now requires a Personal Access Token for HTTPS pushes)

## 2. One-Click Setup
Double-click the file `push_to_github.bat` in this folder.
1. It will set your username and email.
2. It will ask for your password.
   - **Try your password first.**
   - If it fails with `Authentication failed`, you need a Token.

## 3. If Password Fails (Token Required)
1. Go to: [https://github.com/settings/tokens](https://github.com/settings/tokens)
2. Generate new token (classic).
3. Select `repo` scope.
4. Use that token as your password when running the script.

## 4. Vercel & Supabase
Once code is on GitHub:
1. **Supabase**: Login `mrronaldlewisjr@gmail.com`, Password `Thelya1981!`. Create project. Run SQL from [DEPLOY.md](./DEPLOY.md).
2. **Vercel**: Login with GitHub. Import `wholesale-nexus`. Add Supabase keys.
