const badgeEl = document.querySelector(".badges");
const toTopEl = document.querySelector('#to-top');

window.addEventListener("scroll", _.throttle(function (){
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    //배지 숨기기
    // gsap.to(요소, 지속시간, 옵션-객체데이터);
    gsap.to(badgeEl, 0.4, {
      opacity: 0,
      display: "none"
    });
    //버튼 숨기기
    gsap.to(toTopEl, 0.2, {
      x: 0
    });
  } else {
    //배지 보이기
    gsap.to(badgeEl, 0.4, {
      opacity: 1,
      display: "block"
    });
    //버튼 숨기기
    gsap.to(toTopEl, 0.2, {
      x: 100
    });
  }
}, 300));
// _.throttle(함수, 시간)

toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    scrollTo: 0
  });
})
