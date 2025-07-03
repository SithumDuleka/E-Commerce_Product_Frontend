# 🛒 E-Commerce Product Frontend

This is a simple and responsive e-commerce frontend built with **React + Vite**, allowing users to browse products, view product variants, and manage products through an admin pop-up interface.

> 🚀 Hosted on [Vercel](https://vercel.com/)  
> 🔗 Backend Repo: [E-Commerce Product Backend](https://github.com/SithumDuleka/E-Commerce_Product.git)

---

## ✨ Features

- View all products on the landing page
- View detailed product variants (with price, stock, and size filtering)
- Add and update products through a modal form
- Filter variants by size
- Responsive and fast user experience using Vite
- Supabase integration for database and storage

---

## 🖼️ UI Preview

![Landing Page](https://your-image-link.com)
![Product Variants](https://your-image-link.com)

*(Add screenshots if available)*

---

## 🔧 Tech Stack

| Frontend     | Hosting     | Integration     |
|--------------|-------------|-----------------|
| React + Vite | Vercel      | Supabase (PostgreSQL) |

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/SithumDuleka/E-Commerce_Product_Frontend.git
cd E-Commerce_Product_Frontend


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
