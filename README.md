# Al-Hikmah University Web Application

A modern, full-stack web application for Al-Hikmah University featuring a comprehensive university website with academic information, admissions, faculty details, student portal, and content management system.

## 🏛️ About Al-Hikmah University

Al-Hikmah University is a leading private university in Nigeria, committed to providing quality education and fostering wisdom and morality in its students. Located in Ilorin, Kwara State, the university offers a wide range of undergraduate and postgraduate programs across various disciplines.

**Motto:** Learning for Wisdom and Morality

## ✨ Features

### Frontend (React)
- **Responsive Design**: Mobile-first, fully responsive design
- **Modern UI/UX**: Clean, professional interface with university branding
- **Page Components**:
  - Home page with trending stories
  - Academic programs and information
  - Admission requirements and application process
  - Faculty and departments showcase
  - Student life and campus facilities
  - Student portal with quick access links
  - Administrative dashboard for content management

### Backend (Node.js/Express)
- **RESTful API**: Well-structured API endpoints
- **Authentication**: JWT-based authentication system
- **Database**: MongoDB with Mongoose ODM
- **Security**: Helmet, rate limiting, input validation
- **File Upload**: Multer for image/document uploads
- **Error Handling**: Comprehensive error handling and logging

### Security Features
- Rate limiting for API endpoints
- Input validation and sanitization
- Helmet for security headers
- JWT token authentication
- Password hashing with bcrypt
- CORS configuration
- Error boundary components

### SEO & Performance
- Meta tags and Open Graph tags
- Structured data for search engines
- Responsive images and lazy loading
- Performance optimizations
- Error boundaries for better UX

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ibrahim-sultan/hui-web.git
   cd hui-web
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install all dependencies (server + client)
   npm run install-all
   ```

3. **Environment Setup**
   ```bash
   # Copy environment example file
   cp api/.env.example api/.env
   
   # Edit the .env file with your configuration
   # Make sure to update:
   # - JWT_SECRET (use a strong secret key)
   # - MONGODB_URI (your MongoDB connection string)
   ```

4. **Start the development servers**
   ```bash
   # Start both server and client
   npm start
   
   # Or start them separately:
   npm run server:dev  # API server on http://localhost:4000
   npm run client      # React app on http://localhost:3000
   ```

## 🔧 Environment Variables

Create a `.env` file in the `api/` directory:

```env
# Server Configuration
PORT=4000
NODE_ENV=development

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/universityDB
# Or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/universityDB

# Security Settings
BCRYPT_ROUNDS=12
SESSION_SECRET=your-session-secret-key

# File Upload Limits
MAX_FILE_SIZE=5242880
MAX_FILES=10
```

## 🎨 Design Features

- **University Branding**: Red (#e74c3c) and dark blue (#2c3e50) color scheme
- **Responsive Grid**: Mobile-first responsive design
- **Modern Typography**: Professional font stack with proper hierarchy
- **Accessibility**: WCAG compliant with proper focus states
- **Performance**: Optimized CSS with CSS custom properties

## 🔐 Security Enhancements

- Rate limiting to prevent abuse
- Input validation on all endpoints
- JWT authentication with secure token handling
- Password hashing with bcrypt (12 rounds)
- Helmet.js for security headers
- CORS properly configured
- Error handling without information leakage

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Flexible grid system
- Optimized typography scaling
- Touch-friendly interface elements
- Fast loading on mobile networks

## 🚀 Production Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Set production environment variables**
   - Update JWT_SECRET with a strong key
   - Set NODE_ENV=production
   - Configure MongoDB Atlas connection
   - Update CORS origins for your domain

3. **Start the production server**
   ```bash
   npm run server
   ```

## 👨‍💻 Development

- **Tech Stack**: React, Node.js, Express, MongoDB
- **Styling**: CSS Custom Properties, Responsive Design
- **Authentication**: JWT with bcrypt password hashing
- **Database**: MongoDB with Mongoose ODM
- **Development Tools**: Nodemon, Create React App

## 📞 Contact

- **Institution**: Al-Hikmah University
- **Location**: Ilorin, Kwara State, Nigeria
- **Email**: info@alhikmah.edu.ng
- **Website**: https://www.alhikmah.edu.ng

## 📄 License

This project is licensed under the ISC License.

---

**Al-Hikmah University** - Learning for Wisdom and Morality 🎓
