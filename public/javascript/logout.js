// function to log out of session
async function logout() {
  // fetch request to logout of session
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

// event listener for button to logout
document.querySelector("#logout").addEventListener("click", logout);
