/*
Course List
Filter
Search for courses
pagination to courses
create course as admin
purchase course - add to cart and cart page
modules for navbar
let newURL = 'https://myapp-25758-default-rtdb.firebaseio.com/courses.json';
*/



let courses = [];

function fetchCourses() {
  let newURL = 'https://myapp-25758-default-rtdb.firebaseio.com/courses.json';
  fetch(newURL)
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch courses");
      return res.json();
    })
    .then((data) => {
      courses = Object.entries(data);
      displayCourse(courses);
    })
    .catch((error) => console.error(error));
}

fetchCourses();

// Display courses
function displayCourse(courseList) {
  const container = document.querySelector('.container');
  container.innerHTML = '';
  courseList.forEach((course) => {
    let courseId = course[0];
    let {
      bestseller,
      instructor,
      lectures,
      level,
      price,
      rating,
      reviews,
      title,
      total_hours,
    } = course[1];

    container.innerHTML += `
      <div class="course-card">
        <div class="course-header">
          <h2>${title}</h2>
        </div>
        <div class="course-body">
          <p><strong>Instructor:</strong> ${instructor}</p>
          <p><strong>Total Lectures:</strong> ${lectures}</p>
          <p><strong>Level:</strong> ${level}</p>
          <p class="price"><strong>Price:</strong> ₹${price}</p>
          <p><strong>Total Hours:</strong> ${total_hours} hours</p>
          <p class="best">${bestseller ? 'BestSeller' : 'GoodSeller'}</p>
        </div>
        <div class="course-footer">
          <span class="rating">★ ${rating}</span>
          <span class="reviews">${reviews} reviews</span>
        </div>
   <button id="cart-button">Add to Cart</button>
      </div>
    `;
  });
}

// Filtering by level
document.querySelector("select").addEventListener("change", filterByLevel);

function filterByLevel() {
  let selectedLevel = document.querySelector("select").value;
  let filteredCourses = courses.filter((course) => {
    return selectedLevel === "" || course[1].level === selectedLevel;
  });

  displayCourse(filteredCourses);
}

function searchByTitle() {
  let searchText = document.querySelector('input').value.toLowerCase();
  let searchResult = courses.filter((course) => {
    return course[1].title.toLowerCase().includes(searchText);
  });
  displayCourse(searchResult);
}


function addToCart(cartData) {
  console.log(cartData);
  fetch('https://myapp-25758-default-rtdb.firebaseio.com/cart.json', {
    method: 'POST',
    body: JSON.stringify(cartData),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to add item to cart");
      return res.json();
    })
    .then((data) => {
      console.log("Item added to cart successfully:", data);
      alert("Item added to cart!");
    })
    .catch((error) => {
      console.error('Error:', error);
      alert("There was an error adding the item to the cart.");
    });
}
