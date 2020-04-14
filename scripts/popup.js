function getYesterday() {
  return new Date((new Date()).valueOf() - (1000 * 3600 * 24));
}

function getTomorrow() {
  return new Date((new Date()).valueOf() + (1000 * 3600 * 24));
}

function popup() {
  // Check for the date.
  const yesterday = getYesterday();
  const expiry = localStorage.getItem("expiry");
  if (expiry && new Date(expiry) > getYesterday()) {
    return;
  }

  // Create a cookie.
  const tomorrow = getTomorrow();
  localStorage.setItem("expiry", tomorrow);

  // Get the modal element.
  const element = document.getElementById("modal-overlay");
  if (!element) {
    return;
  }

  // Show the modal element.
  element.style.display = "block";
  document.body.style.overflow = "hidden";
}

function hide() {
    // Get the modal element.
    const element = document.getElementById("modal-overlay");
    if (!element) {
      return;
    }
  
    // Hide the modal element.
    element.style.display = "none";
    document.body.style.overflow = "auto";
}

// Attempt to popup.
popup();