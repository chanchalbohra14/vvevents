# 🎉 VVEvent.in – Elegant Event Management Website

**VVEvent.in** is a beautifully designed, black-and-gold themed event management platform built using **React.js**. It offers a seamless experience for users to explore event services, view galleries, and book their special occasions online.

---

## 🌟 Live Demo

🔗 [Visit Website](https://vvevent.in)

---

## 🛠 Tech Stack

* ⚛️ **React.js** + **Vite**
* 📩 **EmailJS** (for booking confirmations)
* 🎨 **Tailwind CSS** + Custom Styling
* 🎞️ **Framer Motion** (for animations)
* 📷 **Responsive Image Sliders**
* 📱 Fully Responsive Design

---

## ✨ Features

* 🎨 Visually rich, black-and-gold theme
* 🏠 Pages: Home, About, Services, Contact, Booking
* 📸 Service-specific event galleries (Birthday, Baby Shower, Anniversary, etc.)
* 📧 Contact & Booking form with EmailJS integration
* 🗓️ Real-time event date & guest count selection
* 📨 Admin + User email notifications
* 🖼️ Hero sliders & service previews
* 🧱 Scroll-to-top animation & smooth navigation
* 📍 Embedded map on contact page
* 🞽️ video embeds for promotional content

---

## 📁 Project Structure

```
vv-event/
│
├── public/
├── src/
│   ├── assets/             # Images & Icons
│   ├── components/         # Reusable components (Navbar, Footer, etc.)
│   ├── pages/              # Home, About, Services, Contact, Booking
│   ├── data/               # Service & pricing details
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/yourusername/vv-event.git
cd vv-event
npm install
npm run dev
```

---

## 📨 EmailJS Setup

1. Create an account on [EmailJS](https://www.emailjs.com/).
2. Set up a new email service and template.
3. Get your `SERVICE_ID`, `TEMPLATE_ID`, and `USER_ID` (or `PUBLIC_KEY`).
4. Store them in a `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

5. Use `emailjs.send()` to handle contact/booking form submissions.

---

## 📸 Event Categories Supported

* Birthday Parties
* Baby Showers
* Anniversaries
* Housewarming
* Bride-To-Be Celebrations
* Office Inaugurations
* Naming Ceremonies
* Graduation Parties
* Retirement Gatherings

Each category includes:

* 🎯 Feature Highlights
* 📅 Duration & Capacity
* 💸 Custom Pricing
* 🖼️ Image Gallery
