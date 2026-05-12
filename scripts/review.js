// scripts/review.js

// Get current review count from localStorage
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

// Increase count
reviewCount++;

// Store updated count
localStorage.setItem("reviewCount", reviewCount);

// Display count
document.querySelector("#reviewCount").textContent = reviewCount;

// Footer last modified
document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;