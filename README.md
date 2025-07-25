# ⚛️ React + ⚡ Vite Starter Template

Welcome to your minimal, fast, and modern React project powered by [Vite](https://vitejs.dev/)!  
This template provides the essentials to get you started quickly with React and includes built-in support for HMR (Hot Module Replacement) and ESLint for code quality.

---

## 🚀 What's Inside?

- **React** – Build interactive UIs with the popular JavaScript library.
- **Vite** – Next-gen frontend tooling that’s incredibly fast and lightweight.
- **HMR (Hot Module Replacement)** – Instantly reflect code changes without full page reload.
- **ESLint** – Pre-configured rules to help keep your code clean and consistent.

---

## 🔌 Plugin Options

Choose your preferred React plugin for development:

### 1. [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react)
Uses **Babel** under the hood and enables Fast Refresh, JSX transformation, and more.

### 2. [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react-swc)
Uses **SWC** – a Rust-based compiler that’s blazing fast. Ideal for large projects.

> 💡 **Tip:** SWC is recommended for better performance in big apps, while Babel offers more plugin flexibility.

---

## 📏 Expanding ESLint Configuration

If you're building a **production-grade** application, consider the following enhancements:

- Add **TypeScript** for type safety and better scalability.
- Enable **type-aware linting** using [`typescript-eslint`](https://typescript-eslint.io).

➡️ Check out the [official React + TypeScript template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to get started with both.

---

## 🛠 Quick Start

```bash
# Create a new Vite + React project
npm create vite@latest my-app -- --template react

# Go into the project directory
cd my-app

# Install dependencies
npm install

# Start the development server
npm run dev
