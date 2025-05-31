function handleResponse(response) {
  // Store user response in localStorage
  localStorage.setItem("userResponse", response);
  window.location.href = "response.html";
}
