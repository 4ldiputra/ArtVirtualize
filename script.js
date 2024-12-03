// Handle "Forgot Password?" button click
document.getElementById("forgotPassword")?.addEventListener("click", function () {
  alert("Forgot Password functionality is not implemented yet.");
});

// Handle login form submission
document.querySelector(".login-form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    alert(`Logged in as ${username}`);
    // Redirect ke halaman home setelah login berhasil
    window.location.href = "home.html"; // Ganti dengan URL halaman home Anda
  } else {
    alert("Please fill out both fields.");
  }
});

// Handle sign-up form submission
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Mencegah pengiriman formulir secara default

        // Simulasi validasi atau proses pendaftaran
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const country = document.getElementById('country').value;

        if (username && email && password && country) {
            alert('Sign Up successful! Redirecting to login page...');
            window.location.href = 'login.html'; // Arahkan ke halaman login
        } else {
            alert('Please fill out all fields.');
        }
    });
});

const scriptURL = "https://script.google.com/macros/s/AKfycbywnNKTvrl-UgJFC10C94L5-UzwOXUzgNpWeDA-X6DkYpaVV1FIt0QhJ5xc05m7VNb08w/exec";
//     const form = document.forms["art"];


//     const btnKirim = document.querySelector(".btn-kirim");
//     const btnLoading = document.querySelector(".btn-loading");
//     const myAlert = document.querySelector(".my-alert");

//     form.addEventListener("submit", (e) => {
//         e.preventDefault();
//         // ketika tombol submit di klik
//         // tampilkan tombol loading, hilangkan tombol kirim
//         btnLoading.classList.toggle("d-none");
//         btnKirim.classList.toggle("d-none");
//         fetch(scriptURL, { method: "POST", body: new FormData(form) })
//             .then((response) => {
//                 //tampilkan tombol kirim, hilangkan tombol

//                 btnLoading.classList.toggle("d-none");
//                 btnKirim.classList.toggle("d-none");
//                 //tampilkan alert
//                 myAlert.classList.toggle("d-none");
//                 //reset formnya
//                 form.reset();
//                 console.log("Success!", response);
//             })
//             .catch((error) => console.error("Error!", error.message));
//     });



