# 🦷 DentWise - Smart Dental Appointment Management System

<div align="center">
  <img src="public/logo.png" alt="DentWise Logo" width="100" height="100">
  
  **A modern, AI-powered dental appointment booking platform that connects patients with verified dental professionals.**
  
  🌐 **[Live Demo](https://dentwise.vercel.app/)** | 📖 [Documentation](#-overview) | 🚀 [Quick Start](#-quick-start)
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Prisma](https://img.shields.io/badge/Prisma-6.16.2-white?style=for-the-badge&logo=prisma)](https://prisma.io/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
</div>

---

## 📖 Overview

DentWise is a comprehensive dental appointment management system that revolutionizes how patients book appointments and interact with dental professionals. Built with modern web technologies, it offers a seamless experience for both patients and dental practice administrators. 

### 🌟 Key Highlights

- **AI-Powered Voice Assistant** for instant dental consultations
- **Smart Appointment Booking** with real-time availability
- **Professional Admin Dashboard** for practice management
- **Automated Email Notifications** for appointment confirmations
- **Responsive Design** optimized for all devices
- **Secure Authentication** with Clerk integration

---

## ✨ Features

### 🔐 **User Management**
- Secure user authentication and registration via Clerk
- User profile management with personal information
- Role-based access control (Patients vs Admins)

### 📅 **Appointment Booking System**
- **Multi-step booking process:**
  1. Select verified dentist from available professionals
  2. Choose appointment type (Checkup, Cleaning, Emergency, etc.)
  3. Pick date and time from real-time availability
  4. Confirm booking with instant confirmation
- Real-time conflict detection and prevention
- Automated email confirmations with appointment details
- Appointment history and management

### 🤖 **AI Voice Assistant** (Pro Feature)
- Powered by Vapi AI for natural voice interactions
- Instant dental advice and consultation
- 24/7 availability for patient queries
- Voice-to-text transcription capabilities

### 👨‍⚕️ **Doctor Management**
- Comprehensive doctor profiles with specializations
- Professional credentials and bio information
- Appointment tracking and statistics
- Active/inactive status management

### 🎛️ **Admin Dashboard**
- **Real-time Statistics:**
  - Total doctors and active count
  - Appointment metrics and completion rates
  - Practice performance insights
- **Doctor Management:**
  - Add new dental professionals
  - Edit doctor information and credentials
  - Manage doctor availability status
- **Appointment Oversight:**
  - View all appointments across the practice
  - Update appointment statuses
  - Monitor recent booking activities

### 💳 **Subscription Management**
- Integrated with Clerk's subscription system
- Pro plan features for AI voice assistant
- Flexible pricing tiers

### 📧 **Email Integration**
- Beautiful HTML email templates
- Appointment confirmation emails
- Automated notifications via Resend
- Professional branding and styling

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework:** Next.js 15.5.0 with App Router
- **Language:** TypeScript 5.0
- **Styling:** TailwindCSS 4.0 with custom animations
- **UI Components:** Radix UI primitives
- **Icons:** Lucide React
- **Date Handling:** date-fns

### **Backend**
- **Runtime:** Node.js with Next.js API routes
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** Clerk (supports OAuth, magic links, etc.)
- **Email Service:** Resend for transactional emails

### **AI & Voice**
- **Voice AI:** Vapi AI integration for voice consultations
- **Real-time Communication:** WebSocket support

### **Development Tools**
- **Code Quality:** Biome for linting and formatting
- **Build Tool:** Turbopack for fast development
- **Package Manager:** npm/yarn/pnpm compatible
- **Type Safety:** Full TypeScript coverage

### **State Management**
- **Data Fetching:** TanStack Query (React Query)
- **Form Handling:** Native React state with validation
- **Global State:** React Context for auth and theme

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Clerk account for authentication
- Resend account for emails
- Vapi AI account for voice features

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ad-itya07/dentwise.git
   cd dentwise
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/dentwise"
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
   CLERK_SECRET_KEY="your_clerk_secret_key"
   
   # Admin Configuration
   NEXT_PUBLIC_ADMIN_EMAIL="admin@yourdomain.com"
   
   # Email Service (Resend)
   RESEND_API_KEY="your_resend_api_key"
   
   # AI Voice Assistant (Vapi)
   NEXT_PUBLIC_VAPI_API_KEY="your_vapi_api_key"
   VAPI_WEBHOOK_SECRET="your_vapi_webhook_secret"
   
   # Application URL
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   ```

4. **Database Setup**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run database migrations
   npx prisma db push
   
   # (Optional) Seed the database
   npx prisma db seed
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

6. **Access the Application**
   - Open [http://localhost:3000](http://localhost:3000) in your browser
   - Sign up for a new account or sign in
   - Admin access: Use the email configured in `NEXT_PUBLIC_ADMIN_EMAIL`

---

## 📂 Project Structure

```
dentwise/
├── prisma/
│   └── schema.prisma              # Database schema and models
├── public/                        # Static assets (images, icons)
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── admin/                # Admin dashboard pages
│   │   ├── api/                  # API routes
│   │   ├── appointments/         # Appointment booking pages
│   │   ├── dashboard/            # User dashboard
│   │   ├── pro/                  # Pro subscription pages
│   │   └── voice/                # AI voice assistant pages
│   ├── components/               # Reusable UI components
│   │   ├── admin/                # Admin-specific components
│   │   ├── appointments/         # Booking flow components
│   │   ├── dashboard/            # Dashboard widgets
│   │   ├── emails/               # Email templates
│   │   ├── landing/              # Landing page components
│   │   ├── ui/                   # Base UI components
│   │   └── voice/                # Voice assistant components
│   ├── hooks/                    # Custom React hooks
│   ├── lib/                      # Utility functions and configurations
│   │   └── actions/              # Server actions for data fetching
│   └── middleware.ts             # Next.js middleware for auth
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

## 🗄️ Database Schema

The application uses PostgreSQL with Prisma ORM. Key models include:

- **User**: Patient information and authentication data
- **Doctor**: Dental professional profiles and credentials  
- **Appointment**: Booking records with scheduling details

### Key Relationships
- Users can have multiple appointments
- Doctors can have multiple appointments
- Appointments link users and doctors with scheduling data

---

## 🎨 UI/UX Features

- **Modern Design System** with consistent spacing and typography
- **Dark/Light Theme Support** with system preference detection
- **Responsive Layout** optimized for mobile, tablet, and desktop
- **Loading States** with skeleton components for better UX
- **Toast Notifications** for user feedback and error handling
- **Progressive Enhancement** with JavaScript-optional functionality

---

## 🔒 Security Features

- **Authentication**: Secure user authentication via Clerk
- **Authorization**: Role-based access control for admin features
- **Data Validation**: Input validation on both client and server
- **SQL Injection Protection**: Prisma ORM prevents SQL injection
- **CORS Configuration**: Proper cross-origin resource sharing setup
- **Environment Variables**: Sensitive data stored securely

---

## 📱 API Documentation

### Appointment Management
- `POST /api/appointments` - Create new appointment
- `GET /api/appointments` - Fetch user appointments
- `PUT /api/appointments/[id]` - Update appointment status

### Email Services
- `POST /api/send-appointment-email` - Send confirmation emails

### Voice AI Integration
- `POST /api/vapi/webhook` - Handle voice assistant interactions

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes** with proper commit messages
4. **Add tests** if applicable
5. **Run the linter**: `npm run lint`
6. **Submit a pull request** with a detailed description

### Development Guidelines
- Follow TypeScript best practices
- Use meaningful component and variable names
- Add proper error handling
- Include JSDoc comments for complex functions
- Ensure responsive design compliance

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js Team** for the amazing React framework
- **Vercel** for hosting and deployment platform  
- **Clerk** for authentication infrastructure
- **Prisma** for the excellent database toolkit
- **Radix UI** for accessible component primitives
- **TailwindCSS** for the utility-first CSS framework

---

## 📞 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/ad-itya07/dentwise/issues)
- **Discussions**: [GitHub Discussions](https://github.com/ad-itya07/dentwise/discussions)
- **Email**: support@dentwise.com

---

<div align="center">
  <p><strong>Built with ❤️ by <a href="https://github.com/ad-itya07">Aditya</a></strong></p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
