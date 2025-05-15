// scripts.js 파일 안에
function initLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      
      if (lat > 36 && lat < 37 && lon > 129 && lon < 130) {
        showMessageFromRegion("yeongdeok");
      } else {
        showMessageFromRegion("default");
      }
    });
  }
}

function showMessageFromRegion(region) {
  const messageBox = document.getElementById("messageBox");
  if (region === "yeongdeok") {
    messageBox.innerText = "영덕 바다는 오늘도 고요해요. 당신의 마음도, 잠시 쉬어가요.";
  } else {
    messageBox.innerText = "어느 곳이든, 우무사리는 네 편이야.";
  }
}