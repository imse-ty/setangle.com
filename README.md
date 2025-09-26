# setangle.com

The website for Set Angle. Built with [SvelteKit](https://svelte.dev/), [Tailwind CSS](https://tailwindcss.com/), [daisyUI](https://daisyui.com/) and [Sanity](https://www.sanity.io/).

---

## Requirements

- Git
- Node.js (LTS version)
- npm (comes with Node)
- VS Code (for the VS Code method)

> ⚠️ Do **not** clone the project inside cloud-synced folders (Dropbox, iCloud, OneDrive, etc.).
> The `node_modules` folder is large, and sync conflicts can break Git.

---

## Method 1 — Using VS Code

1. **Login to GitHub**
   - In VS Code, click your avatar in the bottom-left corner and sign in to GitHub.

2. **Clone the repository**
   - Press `Ctrl + Shift + P` (`Cmd + Shift + P` on macOS)
   - Type and select **Git: Clone**
   - Choose **Clone from GitHub**
   - Find the `setangle.com` repo
   - Select a location on your computer (avoid cloud folders)

3. **Open the folder**
   - When prompted, open the newly cloned folder in VS Code.

4. **Switch to the `v2` branch**
   - Click the branch name in the bottom-left corner and select `v2`
   - Or run this in the terminal:
     ```bash
     git checkout v2
     ```

5. **Install dependencies**

   ```bash
   npm install
   ```

   > Must be in the `v2` branch when you do this

6. **Start the development server**
   `npm run dev`
   Then visit: [http://localhost:5173](http://localhost:5173)

7. **Create a feature branch**
   - Always create a new branch **from `v2`** for new features.
   - Example branch name:
     `v2-your-feature-name`
   - In VS Code: use the branch menu → “Create new branch”
   - Or:
     `git checkout -b v2-your-feature-name`

8. **Make and commit changes**
   - Use the **Source Control** panel or Command Palette.
   - Write commit messages as actions:
     `Make BG pink`
     not
     `Made BG pink`
9. **Push your branch**
   - Push your branch to GitHub (not directly to `v2`)
   - Then open a **Pull Request** from your branch → into `v2`

---

## Method 2 — Using Terminal Only

1. **Clone the repository**
   `git clone https://github.com/YOUR-ORG/setangle.com.git cd setangle.com`
2. **Switch to the `v2` branch**
   `git fetch --all git checkout v2`
3. **Install dependencies**
   `npm install`
4. **Run the dev server**
   `npm run dev`
   Visit [http://localhost:5173](http://localhost:5173)
5. **Create a feature branch**
   `git checkout -b v2-your-feature-name`
6. **Commit and push your changes**
   `git add -A git commit -m "Make BG pink" git push -u origin v2-your-feature-name`
   - Open a Pull Request to merge into `v2`.

---

## Branch Rules

- **master** → live at [setangle.com](https://setangle.com)
- **v2** → live at [v2.setangle.com](https://v2.setangle.com)

> Treat `v2` like a protected branch.
> **Never** push directly to `v2` or `master`.

---

## Update Your Local Copy

When syncing with the latest updates:

`git checkout v2 git pull origin v2 npm install  # only if package.json changed`
