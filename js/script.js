// DOM Elements
const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errMsg = document.getElementById("err-msg");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

// Functions
const validUrl = function (str) {
  // 1.) Regular expression pattern for URL validation
  const urlPattern = /^(https?:\/\/)?([^\s:@]+:[^\s:@]*@)?((([^\s\.:]+)?\.+[^\s\.:]+)|localhost)(:[0-9]+)?(\/[^\s]*)?(\?[^\s]*)?(#[^\s]*)?$/;

  // 2.) Test the URL against the pattern
  return urlPattern.test(str);
}

const formSubmit = function (e) {
  e.preventDefault();

  if (input.value === "") {
    // 1.) Add error message
    errMsg.innerHTML = "Please enter something";
    // 2.) Add red border on input
    input.classList.add("border-red");
  } else if (!validUrl(input.value)) {
    errMsg.innerHTML = "Please enter a valid URL";
    input.classList.add("border-red");
  } else {
    errMsg.innerHTML = "";
    input.classList.remove("border-red");
    alert("Success");
  }
}

const navToggle = () => {
  btn.classList.toggle("open");
  menu.classList.toggle("hidden");
}

// Event Listeners
linkForm.addEventListener("submit", formSubmit)
btn.addEventListener("click", navToggle);
