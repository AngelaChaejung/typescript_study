let title = document.querySelector("#title") as Element; //type assertion
// A as B : A는 B의 요소로 간주해주세요
// if (title instanceof Element) {
if (title?.innerHTML !== undefined) {
  title.innerHTML = "반가워요";
}
//narrowing 하기. (if title이 null이 아닐 때)
//instanceof연산자

let link = document.querySelectorAll(".naver");
link.forEach((a) => {
  if (a instanceof HTMLAnchorElement) {
    a.href = "http://kakao.com";
  }
});
// if (link instanceof HTMLAnchorElement) {
//   link.href = "https://kakao.com";
// }

let button = document.querySelector("#button");
button?.addEventListener("click", function () {
  if (img instanceof HTMLImageElement) {
    img.src = "react.png";
  }
});

let img = document.querySelector("#image") as HTMLElement;
