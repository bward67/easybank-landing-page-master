const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navDropdownMenu = document.querySelector(".nav-dropdown-menu");
const overlay = document.querySelector(".overlay");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const closeBtn = document.querySelector(".close-btn");

const twitter = document.querySelector(".twitter");
const twitterWhite = document.querySelector(".twitter-white");
const twitterColor = document.querySelector(".twitter-color");

twitter.addEventListener("mouseover", () => {
  twitterWhite.style.display = "none";
  twitterColor.style.display = "block";
});
twitter.addEventListener("mouseout", () => {
  twitterWhite.style.display = "block";
  twitterColor.style.display = "none";
});

const facebook = document.querySelector(".facebook");
const facebookWhite = document.querySelector(".facebook-white");
const facebookColor = document.querySelector(".facebook-color");

facebook.addEventListener("mouseover", () => {
  facebookWhite.style.display = "none";
  facebookColor.style.display = "block";
});
facebook.addEventListener("mouseout", () => {
  facebookWhite.style.display = "block";
  facebookColor.style.display = "none";
});

const youtube = document.querySelector(".youtube");
const youtubeWhite = document.querySelector(".youtube-white");
const youtubeColor = document.querySelector(".youtube-color");

youtube.addEventListener("mouseover", () => {
  youtubeWhite.style.display = "none";
  youtubeColor.style.display = "block";
});
youtube.addEventListener("mouseout", () => {
  youtubeWhite.style.display = "block";
  youtubeColor.style.display = "none";
});

const pinterest = document.querySelector(".pinterest");
const pinterestWhite = document.querySelector(".pinterest-white");
const pinterestColor = document.querySelector(".pinterest-color");

pinterest.addEventListener("mouseover", () => {
  pinterestWhite.style.display = "none";
  pinterestColor.style.display = "block";
});
pinterest.addEventListener("mouseout", () => {
  pinterestWhite.style.display = "block";
  pinterestColor.style.display = "none";
});

const instagram = document.querySelector(".instagram");
const instagramWhite = document.querySelector(".instagram-white");
const instagramColor = document.querySelector(".instagram-color");

instagram.addEventListener("mouseover", () => {
  instagramWhite.style.display = "none";
  instagramColor.style.display = "block";
});
instagram.addEventListener("mouseout", () => {
  instagramWhite.style.display = "block";
  instagramColor.style.display = "none";
});

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.style.display = "none";
  navDropdownMenu.style.display = "block";
  overlay.style.display = "block";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  navDropdownMenu.style.display = "none";
  overlay.style.display = "none";
  closeBtn.style.display = "none";
  hamburgerBtn.style.display = "block";
});

//why is classList.add("active") - not working for me here?

/*  I CAN'T GET IT TO WORK THIS WAY
mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active");
  navDropdownMenu.classList.toggle("active"); //this is not working??
  //navDropdownMenu.style.display = "block";
  overlay.classList.toggle("overlay");
  if (mobileMenuBtn.classList.contains("active")) {
    hamburgerIcon.src = "images/icon-hamburger.svg";
  } else {
    hamburgerIcon.src = "images/icon-close.svg";
  }
});
*/
