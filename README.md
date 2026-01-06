# Demo API - Product Listing App

A modern, responsive React application that fetches and displays products from a public API using a custom hook.

## 🚀 Features

- **Product Grid**: Displays a list of products with titles, prices, and images.
- **Custom Hook**: Powered by a robust `useFetch` hook for handling API calls, loading states, and error handling.
- **Abort Controller**: Implements `AbortController` to prevent memory leaks and handle component unmounting.
- **Error Handling**: Graceful error states with a "Try Again" refetch capability.
- **Responsive Design**: Clean and responsive layout using modern CSS.
- **Image Safety**: Fallback logic for broken or missing product images.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vite.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **API**: [Platzi Fake Store API](https://api.escuelajs.co/docs/)

## 📦 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
<img width="1918" height="1036" alt="image" src="https://github.com/user-attachments/assets/a4b5e8cb-a2fa-495a-96aa-48190a9be326" />

## 📂 Project Structure

- `src/components/Products.jsx`: Main product listing component.
- `src/hooks/useFetch.js`: Custom hook for data fetching logic.
- `src/App.jsx`: Root application component.
- `src/App.css`: Custom styles and Tailwind directives.

## 📝 License

This project is open-source and available under the MIT License.

# demoapi

deployee link:
https://papaya-gnome-1202fa.netlify.app/
