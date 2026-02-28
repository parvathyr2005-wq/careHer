### **Project Description – careHer**

**Project Name:** careHer – Caring HER through building a CAREER
### **Developed By**

Team : Allied Minds
* Parvathy R
* Shanifa Nahla V M


**Overview:**
careHer is a **web-based career platform** designed specifically to **empower women** by providing **safe, secure, and accessible employment opportunities**. The platform aims to bridge the gap between women seeking professional growth and employers committed to safe workplaces. Unlike traditional job portals, careHer emphasizes **user safety, privacy, and anonymity** while delivering career advancement tools.

**Problem Statement:**
Many women face challenges in finding secure work environments, limited career guidance, and lack of accessible platforms to report workplace harassment anonymously. Existing job portals do not provide role-based access, personalized job recommendations, or mechanisms for safety feedback.

careHer solves these problems by offering:

* A **dedicated job search platform for women**
* **Secure login and profile management**
* **Anonymous reporting of workplace issues**
* **Employer dashboards with applicant management**

---

### **Target Users**

1. **Job Seekers** – Women seeking secure career opportunities.
2. **Employers** – Companies posting verified jobs and managing applications.

Each user interacts with a **custom dashboard** tailored to their role.


### **Key Features**

#### **For Job Seekers**

* **Secure Career Profile:** Create and manage personal profiles with work experience, preferences, and safety settings.
* **Job Discovery:** View recommended job opportunities tailored to their profile and preferences.
* **Application Management:** Apply for jobs, track application status (Pending / Approved / Rejected), and delete applications.
* **Anonymous Reporting:** Submit workplace reports anonymously for harassment, safety, or policy violations.
* **Safety Preferences:** Set preferences such as remote work, flexible timings, or preferred industries to ensure personal comfort.

#### **For Employers**

* **Company Registration & Dashboard:** Register your company, log in securely, and manage job postings.
* **Job Posting:** Add new job listings with descriptions, requirements, and roles.
* **Applicant Management:** View applicants, manage applications, and update their status (Pending / Approved / Rejected).
* **Secure Communication:** Communicate with job seekers through the platform without exposing sensitive information.

#### **Authentication & Role-Based Access**

* Uses **Firebase Authentication** (email & password) for secure login.
* Roles (`jobseeker` / `employer`) stored in **Firebase Firestore** determine dashboard access and permissions.

### **Technologies Used**

* **Frontend:** HTML5, CSS3, JavaScript (ES6 Modules)
* **Backend / Database:** Firebase Authentication & Firestore
* **Optional UI Enhancements:** TailwindCSS / Bootstrap for responsive design
* **Version Control:** Git & GitHub

### **System Architecture**

1. **Client Side:** Responsive web interface with dashboards for job seekers and employers.
2. **Server Side / Backend:** Firebase handles authentication, role management, and database queries.
3. **Database:** Firestore stores user profiles, job postings, applications, and anonymous reports.

![WhatsApp Image 2026-02-28 at 8 21 28 AM](https://github.com/user-attachments/assets/c5d97a72-de1b-4167-8e49-f2b97987178d)

This is the system architecture of the project


**Flow:**

💻 careHer System Workflow
1️⃣ User Registration & Login

Job Seeker / Employer:

User opens index.html and clicks Sign Up or Login.
Firebase Authentication validates credentials:
If new user → account created
If existing user → credentials verified
User role (jobseeker or employer) is retrieved from Firestore.
Role-based redirection:
Job Seeker → jobseeker-dashboard.html
Employer → employer-dashboard.html

2️⃣ Job Seeker Workflow

Profile Creation / Update
Fill in personal info, skills, preferences.
Data stored in users collection.
View Jobs
Jobs fetched from jobs collection.
Dashboard dynamically displays recommended jobs based on preferences.
Apply for Jobs
Click Apply → new document added in applications collection.
Status initialized as Pending.
Track Application Status
Application status updated in real-time by employer.
Job seeker sees Pending / Approved / Rejected in dashboard.
Submit Anonymous Reports
Enter issue details → stored in reports collection with anonymous: true.
Employers/Admins can view reports without identifying reporter.

3️⃣ Employer Workflow

Post Job
Enter job title, description, category, duration, languages.
Data stored in jobs collection.
View Applicants
Employer selects job → fetches applicants from applications collection.
Update Application Status
Approve / Reject → Firestore updated → status reflected on Job Seeker dashboard.
Optional Reporting View (Future)
Employer can view workplace reports for jobs they posted.

4️⃣ Data Flow & Access Control

Frontend (HTML/CSS/JS) communicates directly with Firebase SDK.
Firestore collections:
users → profiles & roles
jobs → job postings
applications → job applications with status
reports → anonymous workplace reports
Role-Based Access:
Job Seeker: Can only access jobseeker-dashboard and relevant collections.
Employer: Can only access employer-dashboard and applicant/job data.
Real-Time Updates:
Firestore listeners update dashboards in real-time whenever data changes.

5️⃣ Optional / Future Workflow Enhancements

Admin Dashboard: Verify employers, manage reports, monitor platform activity.
Real-Time Notifications: Notify job seekers when status changes.
Resume Upload & Profile Editing: Allow richer applications.
Advanced Job Filtering: Filter jobs by location, skills, and preferences.

### **Future Improvements**

* **Admin Dashboard:** Monitor platform activity, verify employers, and manage reports.
* **Verification Badge System:** For trusted employers.
* **Resume Upload:** Enable job seekers to upload CVs.
* **Profile Editing:** Users can edit profile information anytime.
* **Real-Time Notifications:** For job alerts, status updates, and report responses.
* **Advanced Filtering & Search:** Filter jobs by location, category, or work type.
* **Mobile-First Design:** Ensure platform is fully responsive on phones and tablets.
* **Security Rule Optimization:** Enhance Firestore rules for privacy and data integrity.

### **Project Vision**

careHer aspires to create a **safer digital employment ecosystem for women**, combining:

* **Privacy** – Secure authentication and anonymous reporting
* **Safety** – Role-based access and workplace safety preferences
* **Career Growth** – Access to diverse job opportunities and skills

The platform aims to empower women to confidently pursue professional opportunities without fear, while giving employers a secure environment to hire and manage candidates.

## *🌟 Features of careHer – Safe Career Platform for Women*

### *1️⃣ Job Seeker Features*

1. *Secure Career Profile*

   * Users can create a personal profile including:
     * Name, contact information
     * Work experience
     * Education and skills
     * Safety & work preferences (e.g., remote work, preferred shifts)
   * Profiles are stored securely in *Firebase Firestore*.
   * Role-based access ensures only the user can edit their profile.

2. *View Recommended Job Opportunities*

   * Job seekers see a curated list of jobs matching their profile and preferences.
   * Jobs are fetched from Firestore and displayed dynamically on the dashboard.
   * Job cards include:

     * Title
     * Category
     * Duration
     * Languages offered
     * Number of learners/applicants

3. *Apply for Jobs*

   * Users can submit applications for multiple jobs.
   * Applications are saved in Firestore with status Pending.
   * Users can see all applied jobs in their *Applications page*.

4. *Track Application Status*

   * Application status is tracked in real-time:

     * *Pending* – Application submitted, waiting for employer review
     * *Approved* – Employer approved the application
     * *Rejected* – Employer rejected the application
   * Status updates appear on the dashboard dynamically.

5. *Delete Applications*

   * Users can withdraw job applications at any time.
   * Deleting an application updates Firestore and removes it from the dashboard.

6. *Submit Anonymous Workplace Reports*

   * Users can report unsafe work environments or harassment anonymously.
   * Reports are saved in a dedicated Firestore collection.
   * Employers and admins cannot identify the reporter.
   * Reports can include:

     * Description of the issue
     * Job ID (optional)
     * Optional evidence (like screenshots or files)

7. *Set Safety & Work Preferences*

   ** Users can select preferences like:
     * Remote / On-site work
     * Flexible working hours
     * Industry or sector preference
   * These preferences influence *job recommendations* on the dashboard.


### *2️⃣ Employer Features*

1. *Company Registration*

   * Employers can register using a secure form:

     * Company name
     * Email and password
     * Industry type
   * Registered companies get a dedicated dashboard.

2. *Secure Login*

   * Employers login via Firebase Authentication.
   * Only users with the *employer role* can access the employer dashboard.

3. *Post Job Listings*

   * Employers can create jobs with fields like:

     * Job title
     * Description and requirements
     * Category (e.g., Technology, Design)
     * Duration and language
   * Jobs are saved in Firestore under the jobs collection.

4. *View Applicants*

   * Employers can see a list of job seekers who applied for each job.
   * Applicant cards include:

     * Name
     * Email
     * Skills (from profile)
     * Application status

5. *Manage & Update Application Status*

   * Employers can approve or reject applications.
   * Status updates are reflected on the *Job Seeker dashboard in real-time*.

---

### *3️⃣ Authentication & Role-Based Access*

* *Firebase Authentication* for secure login and signup.
* *Roles (jobseeker / employer)* stored in Firestore.
* Role-based routing ensures:

  * Job seekers only access job and application pages.
  * Employers only access dashboard and applicant management.
* Prevents unauthorized access to sensitive pages.

---

### *4️⃣ Dashboard Features*

* *Job Seeker Dashboard*

  * Recommended jobs
  * Applied jobs and status
  * Submit reports
  * Profile and preferences management
* *Employer Dashboard*

  * Job posting form
  * Applicant list with status management
  * Reports overview (if admin features are added)

---

### *5️⃣ Video & Learning Support*

* Each course or training job posting can include *embedded video lectures*.
* Videos are displayed via <video> tag or embedded links.
* Supports multiple languages (e.g., English, Hindi, Bengali).

---

### *6️⃣ Future/Advanced Features*

* Admin dashboard to manage employers, jobs, and reports.
* Employer verification badges for trust and authenticity.
* Real-time notifications for application updates.
* Resume upload feature for job seekers.
* Advanced job filtering & search based on skills, location, and preferences.
* Mobile-first responsive design.
* Optimized Firebase security rules.

These features make *careHer a fully functional, safe, and user-friendly platform* for women seeking careers and employers posting jobs.

🛠 Technologies & Components Used
💻 Frontend Technologies

HTML5 – Structure and semantic layout of web pages
CSS3 – Styling, layout design, responsive UI
JavaScript (ES6 Modules) – Application logic, authentication handling, Firestore operations
Google Fonts (Poppins) – Typography styling

🔥 Backend & Cloud Services

Firebase Authentication – Secure email/password-based user login and registration
Firebase Firestore (NoSQL Database) – Real-time cloud database for storing:
User profiles
Roles (jobseeker / employer)
Job listings
Applications
Reports
Firebase Hosting – Deployment and HTTPS hosting

🧩 Core Application Components

👩‍💼 Job Seeker Module

Profile creation system
Role-based authentication
Job browsing interface
Application submission system
Application tracking (Pending / Approved / Rejected)
Application deletion feature
Safety preference management

🏢 Employer Module

Employer registration system
Role-based login validation
Job posting system
Applicant viewing dashboard
Application status management

🔐 Authentication & Authorization
Email & password authentication
Role validation from Firestore
Dashboard access control
Unauthorized access prevention

📂 Data Collections (Firestore Structure)

users

jobs

applications

reports (if implemented)

🏗 Architectural Components

Client-side rendering using JavaScript

Firebase SDK integration (modular v12)

Firestore document-based data model

Secure cloud-based hosting with HTTPS
// our Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4rZGL8ci1hSFnd_B8iCCOGDVqep1W420",
    authDomain: "careher-1d1a8.firebaseapp.com",
    projectId: "careher-1d1a8",
    storageBucket: "careher-1d1a8.firebasestorage.app",
    messagingSenderId: "797878461881",
    appId: "1:797878461881:web:7db0ef1b80aaf54fd00268",
    measurementId: "G-ZQTQQ7JTFF"
};

Implementation

The careHer platform is implemented as a client-side web application integrated with Firebase services.

🔐 Authentication Flow

Users register using Firebase Authentication (Email/Password).

Upon registration, user role (jobseeker or employer) is stored in Firestore.

During login, the system validates:

User authentication

Role from Firestore

Based on role, users are redirected to the appropriate dashboard.

🗄 Database Structure (Firestore)

Collections used:

users → Stores profile and role information

jobs → Stores job listings created by employers

applications → Stores job applications submitted by jobseekers

reports → Stores anonymous reports (if implemented)

🌐 Hosting

The project is deployed using Firebase Hosting, which provides:

HTTPS secure hosting

Fast global content delivery

Seamless integration with Firebase services

FIGMA DESIGN 
<img width="1077" height="782" alt="image" src="https://github.com/user-attachments/assets/2f82b32c-29e0-4d3b-8446-1a6a92049ac8" />

ACTUAL WEBSITE
<img width="1918" height="931" alt="image" src="https://github.com/user-attachments/assets/a33b5c7f-085a-4c89-b486-96b323240fc7" /> 
Home page
<img width="1872" height="867" alt="image" src="https://github.com/user-attachments/assets/7c25d684-f9c9-4f54-8fe6-d4096a3d0a06" /> 
Jobs page
<img width="1898" height="902" alt="image" src="https://github.com/user-attachments/assets/0ab9c949-1144-4fc4-b88a-35f953468044" /> 
Login Page
<img width="1912" height="867" alt="image" src="https://github.com/user-attachments/assets/e1f8ad02-de5a-4fb3-8127-93f77ff1ddac" /> 
Login by an Employer
<img width="1830" height="883" alt="image" src="https://github.com/user-attachments/assets/fb6422df-4786-4758-8477-4833951edbd6" />
Course page(video courses)
<img width="1815" height="881" alt="image" src="https://github.com/user-attachments/assets/b95dea60-27e6-46b8-b710-6f9a43729579" />
Create New Profile
<img width="1805" height="873" alt="image" src="https://github.com/user-attachments/assets/4cdc2c5b-6b37-42a6-ab02-d2445e868bc6" />
About Page 
These are some of the web pages of careHer

DEPLOYMENT LINK

https://care-her-five.vercel.app

LIVE LINK WORK(VIDEO)

https://drive.google.com/file/d/1xdHPceTWSil94vTW6vUMEJcFQ_pRvhAf/view?usp=drivesdk


**License:**
This project is for **educational and demonstration purposes**.
