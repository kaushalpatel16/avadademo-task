

function toggle() {
    const sidebar = document.querySelector("#upbar");
    const open=document.querySelector(".manuopen");
    const close=document.querySelector(".manuclose");
    const rotate=document.querySelector(".menu-btn");
    rotate.classList.toggle("rotate");
    
    if (open.style.display === "none") {
      open.style.display = "block";
      close.style.display = "none";
      
  } else {
      open.style.display = "none";
      close.style.display = "block";

  }
  


    sidebar.classList.toggle("upbar-visible");
}

consoleText(['WordPress', 'Online Store', 'Creative','Portfolio'], 'text',['','','']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#212529'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

function showImage(listItem, index) {
  // Define the list of image URLs corresponding to the list items
  const imageUrls = [
    "https://avada.com/wp-content/uploads/2021/07/live-visual.jpg",
    "https://avada.com/wp-content/uploads/2021/07/layout-builder-4.jpg",
    "https://avada.com/wp-content/uploads/2021/07/header-builder-5.jpg",
    "https://avada.com/wp-content/uploads/2023/03/mega-menu-feature.jpg",
    "https://avada.com/wp-content/uploads/2021/07/footer-builder-5.jpg",
    "https://avada.com/wp-content/uploads/2021/07/form-builder.jpg",
    "https://avada.com/wp-content/uploads/2023/03/off-canvas-feature.jpg",
    "https://avada.com/wp-content/uploads/2023/03/setup-wizard-1.jpg"
  ];

  
  // Check if the screen size is less than 1000px
  const allImages = document.querySelectorAll(".section3liimg img");
  allImages.forEach((img) => img.remove());

  // Get the specific section3liimg div of the clicked list item
  const imageContainer = listItem.querySelector(".section3liimg");
  if (imageContainer) {
    // Create a new image element and set its attributes
    const img = document.createElement("img");
    img.src = imageUrls[index];
    img.alt = "Dynamic Image";
    img.className = "dynamic-image";

    // Append the image to the specific container
    imageContainer.appendChild(img);
  }

    // For larger screens, handle the logic for showing the image on the right side
    // Example: Update an image container
    const imgContainer = document.getElementById("section3realimg");
      imgContainer.src = imageUrls[index];
}




// Get the button element
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down 100px
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Scroll to top when the button is clicked
scrollToTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling
  });
};
