var title = document.querySelector("#title"); //type assertion
// A as B : A는 B의 요소로 간주해주세요
// if (title instanceof Element) {
if ((title === null || title === void 0 ? void 0 : title.innerHTML) !== undefined) {
    title.innerHTML = "반가워요";
}
//narrowing 하기. (if title이 null이 아닐 때)
//instanceof연산자
var link = document.querySelectorAll(".naver");
link.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = "http://kakao.com";
    }
});
// if (link instanceof HTMLAnchorElement) {
//   link.href = "https://kakao.com";
// }
var button = document.querySelector("#button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    if (img instanceof HTMLImageElement) {
        img.src = "react.png";
    }
});
var img = document.querySelector("#image");
