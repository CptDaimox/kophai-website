window.onload = function () {
  document.body.classList.remove("is-preload");
  const banner = document.getElementById("holidayBanner");
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const bg = document.getElementById("bg");
  const isHoliday = currentMonth === 12 || (currentMonth === 1 && currentDay === 1)
  if(!isHoliday) {
    banner.style.display = "none";
  } else {
    banner.style.display = "";
    bg.style.backgroundImage = "url('assets/css/images/xmas-bg.png')";
  }
};
window.ontouchmove = function () {
  return false;
};

document.getElementById("closeBanner").addEventListener("click", function () {
  document.getElementById("holidayBanner").style.display = "none";
});
