// CSC 337 — Show/Hide Password
// Student: Uzair Nauman Beg (Roll No: 051-23-138074)

// Wait for the HTML to be ready before accessing elements
window.addEventListener('DOMContentLoaded', () => {
  const passwordInput = document.getElementById('passwordInput');
  const togglePassword = document.getElementById('togglePassword');

  // Toggle the input type between password and text when the checkbox changes
  togglePassword.addEventListener('change', () => {
    const isChecked = togglePassword.checked;
    passwordInput.type = isChecked ? 'text' : 'password';
  });
});
