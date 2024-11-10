# EducVeda App

EducVeda is a simple e-learning web app that allows users to browse, filter, search, and purchase courses. Built with HTML, CSS, and JavaScript, this app leverages Firebase for data storage and authentication.

## Table of Contents
- [Features](#features)
- [Setup](#setup)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Features

1. **Courses Display**: Courses are fetched from Firebase and displayed as cards with information like title, description, price, and category.

2. **Filtering**: Users can filter courses by category or level.

3. **Search**: A search bar lets users find courses by keywords in titles or descriptions.

4. **Pagination**: Courses are displayed in a paginated format for easy browsing.

5. **Admin Course Creation**: An admin can add new courses with details such as title, description, category, and price.

6. **Add to Cart**: Users can add courses to a cart and manage their selections before checkout.

7. **Checkout**: A checkout page allows users to complete the purchase of selected courses.

---

## Setup

### Prerequisites
- A Firebase account with Firestore and Authentication enabled.

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/EducVeda.git
    cd EducVeda-app
    ```

2. **Firebase Setup**:
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Enable Firestore Database and Authentication.
   - Add your Firebase configuration to a JavaScript file (e.g., `firebase-config.js`):

   ```javascript
   // firebase-config.js
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-auth-domain",
     projectId: "your-project-id",
     storageBucket: "your-storage-bucket",
     messagingSenderId: "your-messaging-sender-id",
     appId: "your-app-id"
   };

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
