# Digi Vila - Product Requirements Document (PRD)

## 1. Product Overview
**Digi Vila** is a comprehensive e-commerce platform specializing in luxury and modern equipment for villas and gardens. The platform enables users to browse, search, and purchase various villa-related accessories, including outdoor lighting, furniture, plants, and irrigation systems.

## 2. Sitemap
- **Home Page (`/`)**
- **Products Page (`/products`)**
- **Category Pages (`/products/category/[slug]`)**
- **Product Details Page (`/products/[id]`)**
- **Search Results (`/search`)**
- **Shopping Cart (`/cart`)**
- **Checkout (`/checkout`)**
- **User Authentication**
  - Login (`/login`)
  - Register (`/register`)
  - Forgot Password (`/forgot-password`)
- **User Dashboard (`/dashboard`)**
  - Profile Settings
  - Order History
- **Static Pages**
  - About Us (`/about`)
  - Contact Us (`/contact`)
  - Articles/Blog (`/blog`)

## 3. User Flows
### 3.1. Browsing and Purchasing
1. User lands on the Home Page and inspects the categories or uses the search bar.
2. User navigates to a Category or Search Results page.
3. User views the Product List (displaying image, title, description snippet, price, and 'Add to cart' button).
4. User clicks 'Add to cart'.
5. User navigates to the Shopping Cart and proceeds to Checkout.
6. If unauthenticated, user is prompted to login or register.
7. User completes the purchase.

### 3.2. Authentication
1. User clicks "Sign In" / "Sign Up".
2. User authenticates via email/password or Google (OAuth).
3. User accesses their dashboard and order history.

## 4. Components
- **Global:**
  - `Header`: Logo, Search Bar, Navigation Links, Cart Icon, User Profile Icon.
  - `Footer`: Contact info (phone, email), Quick Links, Trust badges (Free delivery, 10-year warranty, Secure payment, 30-day return).
- **Home:**
  - `HeroSection`: High-quality imagery, main value proposition.
  - `CategoryGrid`: Cards linking to primary categories (Lighting, Furniture, Plants, Irrigation).
- **Products:**
  - `ProductCard`: Thumbnail, Title, Truncated Description, Price, "Add to Cart" button.
  - `Filters`: Categories, Price Range, Sort by.
  - `ProductDetail`: Image gallery, Full description, Price, Stock status, Add to Cart.

## 5. Data Models
### User
- `id` (UUID)
- `email` (String, unique)
- `password_hash` (String)
- `first_name` (String)
- `last_name` (String)
- `role` (Enum: ADMIN, CUSTOMER)
- `created_at` (Timestamp)

### Product
- `id` (UUID)
- `title` (String)
- `description` (Text)
- `price` (Decimal)
- `image_url` (String)
- `category_id` (UUID)
- `stock_quantity` (Integer)
- `created_at` (Timestamp)

### Category
- `id` (UUID)
- `name` (String)
- `slug` (String, unique)
- `image_url` (String)

### Order
- `id` (UUID)
- `user_id` (UUID)
- `total_price` (Decimal)
- `status` (Enum: PENDING, PAID, SHIPPED, COMPLETED, CANCELLED)
- `created_at` (Timestamp)

### OrderItem
- `id` (UUID)
- `order_id` (UUID)
- `product_id` (UUID)
- `quantity` (Integer)
- `unit_price` (Decimal)

## 6. Business Logic & Permissions
- **Guests:** Can browse products, search, add items to cart. Must log in to checkout.
- **Customers:** Can place orders, view their order history, manage profile.
- **Admins:** Can manage products, categories, orders, and users.
- **Cart Logic:** Stored in local storage (Zustand/Redux) and synced to the backend upon login.

## 7. Responsive Behavior
- **Desktop:** Full navigation, multi-column grids for products and categories.
- **Tablet:** Adjusted grid columns (e.g., 2 or 3 columns).
- **Mobile:** Hamburger menu, single-column product layout, sticky bottom cart bar.

## 8. Technology Stack
- **Frontend:** Next.js 15, React, TypeScript, Tailwind CSS, shadcn/ui, TanStack Query, Zustand.
- **Backend:** Spring Boot, Java 21, PostgreSQL, Redis, JWT.
- **Infrastructure:** Docker, Docker Compose, GitHub Actions (CI/CD).
