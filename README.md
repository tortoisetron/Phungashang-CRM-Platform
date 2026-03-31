# Phungashang - Academic Study Platform

A comprehensive multi-tenant academic study platform featuring a robust Laravel backend, a React-based CRM for administration, and a public-facing React landing page.

## 🏗 Project Structure

The project is organized into three main directories:

- **`/backend`**: Laravel 11.x API & Backend service.
- **`/crm`**: React + Vite administration portal for managing organizations, products, categories, and exams.
- **`/front`**: React + Vite public landing page for students and guests.

---

## 🚀 Tech Stack

### Backend
- **Framework**: Laravel 11
- **Authentication**: Laravel Sanctum & Socialite
- **Frontend Bridge**: Inertia.js (for backend-driven views where applicable)
- **Database**: PostgreSQL / MySQL
- **Tooling**: Composer, Artisan, PHPUnit/Pest

### CRM & Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM 6
- **State/API**: Axios

---

## 🛠 Getting Started

### 1. Backend Setup
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
# Configure your database in .env
php artisan migrate --seed
php artisan serve
```

### 2. CRM Setup
```bash
cd crm
npm install
npm run dev
```

### 3. Frontend Setup
```bash
cd front
npm install
npm run dev
```

---

## ✨ Key Features

- **Multi-Tenant Architecture**: Isolate data by organization (products, categories, exams).
- **Universal Theme Switching**: Support for Light, Dark, and System modes across both CRM and Public Front.
- **Test Bank Management**: Robust system for managing exam questions and academic content.
- **CRM Portal**: Centralized dashboard for administrative CRUD operations.
- **Responsive Design**: Beautifully crafted UI using modern Tailwind CSS patterns.

## 📄 License

[MIT License](LICENSE)
