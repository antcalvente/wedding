function toggleGifts() {
  const gifts = document.getElementById("Gift__info");
  if (gifts.style.display !== "flex") {
    gifts.style.display = "flex";
  } else {
    gifts.style.display = "none";
  }
}
