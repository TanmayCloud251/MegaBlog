# 📝 MegaBlog

A minimalist, professional blogging platform designed for a distraction-free writing experience. **MegaBlog** combines a sleek, gray-themed UI with a powerful backend-as-a-service architecture.

---

## 🚀 Features

* **Secure Authentication:** User signup, login, and session management via Appwrite Auth.
* **Full CRUD Functionality:** Seamlessly create, read, update, and delete blog posts.
* **Image Hosting:** Integrated storage for featured blog images and user uploads.
* **Rich Text Editor:** Clean interface for professional content formatting.
* **Minimalist UI:** Modern, professional gray-scale aesthetic for maximum readability.
* **Fully Responsive:** Optimized for mobile, tablet, and desktop viewing.

---

## 🛠️ Tech Stack

* **Frontend:** React.js / Vite
* **Styling:** Tailwind CSS (Minimal Gray Theme)
* **Backend as a Service (BaaS):** [Appwrite](https://appwrite.io/)
    * **Database:** Storing posts, categories, and metadata.
    * **Authentication:** Managing secure user sessions.
    * **Storage:** Handling blog cover images.

---

## 📋 Prerequisites

Before running this project, ensure you have:
* **Node.js** installed.
* An **Appwrite** account (Cloud or Self-hosted).
* A project created in your Appwrite Console.

---

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/mega-blog.git](https://github.com/your-username/mega-blog.git)
   cd mega-blog

```

2. **Install dependencies:**
```bash
npm install

```


3. **Environment Configuration:**
Create a `.env` file in the root directory and add your credentials:
```env
VITE_APPWRITE_URL="[https://cloud.appwrite.io/v1](https://cloud.appwrite.io/v1)"
VITE_APPWRITE_PROJECT_ID=""
VITE_APPWRITE_DATABASE_ID=""
VITE_APPWRITE_COLLECTION_ID=""
VITE_APPWRITE_BUCKET_ID=""

```


4. **Start the development server:**
```bash
npm run dev

```



---

## 📂 Project Structure

```text
src/
├── appwrite/      # Appwrite configuration and service layers
├── components/    # Reusable UI components (Header, Footer, PostCard, etc.)
├── pages/         # Page layouts (Home, Login, Signup, AllPosts, etc.)
└── store/         # State management logic