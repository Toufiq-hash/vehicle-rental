

---


# Vehicle Rental System

**Live SIte:** https://vehicle-lovat.vercel.app/

A backend application for managing vehicle rentals, including authentication, booking workflows, and administrative operations. Built with Node.js, Express, TypeScript, and PostgreSQL.

---

##  Features

###  Authentication & Authorization
- User registration and login
- JWT-based authentication
- Role-based access control (Admin & Customer)
- Secure password hashing with bcryptjs

###  Vehicle Management
- Add, update, delete, and retrieve vehicles
- Supports multiple vehicle categories (Car, Bike, SUV, Van, etc.)
- Vehicle availability tracking
- Unique registration number validation
- Daily rental price support

###  Booking Management
- Create bookings with date-range validation
- Users can view their own bookings
- Admin can view all bookings
- Cancel bookings before the start date
- Admin can mark vehicles as returned
- Automatic rental price calculation
- Vehicle availability updates automatically

###  User Management
- Admin can list all users
- Users can update their profile
- Admin can delete users

###  Data Integrity & Validation
- Foreign key constraints enforced
- Transaction support for sensitive actions
- Prevents deletion of vehicles with active bookings
- Booking date and availability validation

---

##  Tech Stack

### Backend
- Node.js  
- Express.js  
- TypeScript  
- PostgreSQL  

### Security
- JSON Web Tokens (JWT)
- bcryptjs (password hashing)

### Developer Tools
- TypeScript Compiler (tsc)
- tsx (development runtime)
- dotenv (environment management)

### Deployment
- Hosted on Vercel

---

##  Installation & Setup

###  Prerequisites
Ensure you have installed:
- Node.js (v18+ recommended)
- npm
- PostgreSQL
- Git

---

###  Clone the Repository
```bash
git clone https://github.com/Toufiq-hash/vehicle-rental
cd vehicle
````

---

###  Install Dependencies

```bash
npm install
```

---

###  Environment Variables

Create a `.env` file in the root directory:

```env
PORT
DATABASE_URL
JWT_SECRET
```

---

### 5. Database Setup

The server automatically creates the following tables on startup:

* `users`
* `vehicles`
* `bookings`

Ensure your PostgreSQL instance is running and accessible.

---

### 6. Build the Project

```bash
npm run build
```

---

### 7. Run the Application

#### Development Mode

```bash
npm run dev
```

#### Production Mode

```bash
npm run build
node dist/server.js
```


