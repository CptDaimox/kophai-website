window.onload = function () {
  document.body.classList.remove("is-preload");
  const banner = document.getElementById("holidayBanner");
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const bg = document.getElementById("bg");

  if(currentMonth !== 12) {
    banner.style.display = "none";
  } else if (currentDay >= 15 && currentDay <= 31) {
    banner.style.display = "";
    bg.style.backgroundImage = "url('assets/css/images/xmas-bg.png')";
  }
};
window.ontouchmove = function () {
  return false;
};
