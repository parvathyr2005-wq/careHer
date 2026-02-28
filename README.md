# 💜 careHer – Safe Career Platform for Women

careHer is a web-based career platform designed to empower women by providing secure job opportunities, employer access, and anonymous reporting features.  

The platform supports two primary roles:
- **Job Seekers** – Women looking for safe career opportunities
- **Employers** – Companies posting and managing job listings

---

## 🌟 Key Features

### 👩‍💼 Job Seeker
- Create a secure career profile
- View recommended job opportunities
- Apply for jobs
- Track application status (Pending / Approved / Rejected)
- Delete applications
- Submit anonymous workplace reports
- Set safety and work preferences

### 🏢 Employer
- Register company account
- Secure login to employer dashboard
- Post job listings
- View applicants for each job
- Manage and update application status

---

## 🔐 Authentication & Role-Based Access

The system uses **Firebase Authentication (Email & Password)** combined with **Firestore role management**.

Each user is assigned one of the following roles:

- `jobseeker`
- `employer`

Access to dashboards is controlled based on the stored role in Firestore.

---

## 🛠️ Technologies UsedcareHer/
│
├── index.html
├── login.html
├── create-profile.html
├── employer-register.html
├── employer-dashboard.html
├── jobseeker-dashboard.html
├── applications.html
├── jobs.html
├── report.html
├── firebase.js🚀 Future Improvements

Admin dashboard

Employer verification badge system

Real-time notifications

Resume upload feature

Profile editing functionality

Advanced job filtering and search

Improved mobile responsiveness

Security rule optimization

💡 Project Vision

careHer aims to build a safer digital employment ecosystem for women by combining privacy, security, and career growth into one accessible platform.

👩‍💻 Developed By

Parvathy R
Shanifa Nahla V M
Allied Minds

📜 License

This project is developed for educational and demonstration purposes.
├── style.css
└── README.md

- **Frontend:** HTML5, CSS3
- **Scripting:** JavaScript (ES6 Modules)
- **Backend Services:** Firebase Authentication
- **Database:** Firebase Firestore

---

## 📂 Project Structure
