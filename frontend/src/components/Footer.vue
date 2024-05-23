<template>
  <footer>
    <div class="footer-content-main">시나브로팀</div>
    <div class="footer-content-second">캡스톤 디자인 : 실시간 좌석 안내 시스템</div>
    <div class="footer-content-final"><br>&copy; 2024 Sinabro. All rights reserved.</div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style scoped>
@font-face {
  font-family: 'Bold';
  src :url("../../public/fonts/GmarketSansTTFBold.ttf") ;
}
@font-face {
  font-family: 'Light';
  src: url("../../public/fonts/GmarketSansTTFLight.ttf");
}
footer {
  background-image: url("../assets/foot.png");
  color: white;
  text-align: center;
  padding: 20px 0;
}
.footer-content-main {
  font-size: 25px;
  font-family: "Light";
  margin: 5px;
}
.footer-content-second {
  font-size: 15px;
  font-family: "Light";
  margin: 5px;
}
.footer-content-final {
  font-size: 10px;
  font-family: "Light";
  margin: 5px;
}
</style>
