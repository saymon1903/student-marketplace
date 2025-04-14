// সাইন আপ ফর্মের ডেটা সংগ্রহ এবং প্রক্রিয়া করার জন্য ফাংশন
function processSignupForm(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const userType = formData.get('userType');
  const userData = {};

  formData.forEach((value, key) => {
    userData[key] = value;
  });

  // ইউজার ডেটা প্রক্রিয়া এবং সেভ করার কোড এখানে যুক্ত করুন

  alert(`${userType} হিসেবে সাইন আপ সফল হয়েছে!`);
}

// সাইন আপ ফর্মের সাবমিট ইভেন্ট লিসেনার
document.querySelector('form').addEventListener('submit', processSignupForm);
// script.js

document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    alert("This will take you to the signup page. Coming soon!");
  });
});
