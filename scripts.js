const locationMessages = [
  {
    region: "경상북도 울진군",
    message: "울진의 파도처럼 잔잔한 하루가 되길 바라요 🌊"
  },
  {
    region: "서울특별시",
    message: "복잡한 도시 속에서도 당신의 마음엔 여유가 필요해요 🏙️"
  },
  {
    region: "부산광역시",
    message: "부산처럼 뜨거운 열정, 오늘도 충분해요 🔥"
  },
  {
    region: "제주특별자치도",
    message: "제주의 바람처럼 기분 좋은 하루가 되길! 🍊"
  },
  {
    region: "default",
    message: "지금 있는 그곳에서도 우무사리는 당신을 응원해요 💕"
  }
];
window.onload = function () {
  const messageEl = document.getElementById("message");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
        );
        const data = await response.json();
        const region = data.address.state || data.address.city || "default";

        const match = locationMessages.find(loc => region.includes(loc.region)) || locationMessages.find(loc => loc.region === "default");

        messageEl.innerText = match.message;

      } catch (error) {
        messageEl.innerText = "위치 정보를 불러올 수 없어요. 다시 시도해 주세요.";
      }
    }, function () {
      messageEl.innerText = "위치 접근이 거부되었어요.";
    });
  } else {
    messageEl.innerText = "이 기기에서는 위치 정보를 사용할 수 없어요.";
  }
};
