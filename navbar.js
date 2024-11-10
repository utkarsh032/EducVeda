export default function loadNavbar() {
  document.querySelector('nav').innerHTML = `
    <div class="logo">
      <!-- <img src="logo.png" alt="EduVeda Logo" /> -->
      <h1>Educ<span>Veda.</span></h1>
    </div>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="create.html">Create Course</a></li>
      <li><a href="favourites.html">My Favourite Courses</a></li>
      <li><a href="user.html">User</a></li>
      <li><a href="chat.html">Chat</a></li>
      <li><a href="support.html">Support</a></li>
      <li><a href="#cart">Cart</a></li>
    </ul>
    <div class="hamburger" onclick="toggleMenu()">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;
}

export function toggleMenu() {
  const navbarLinks = document.querySelector('.nav-links');
  navbarLinks.classList.toggle('open');
}
