"use strict";

(function () {
  var e = document.querySelectorAll("#sidenav a");
  e.forEach(function (t) {
    t.onclick = function () {
      setTimeout(function () {
        e.forEach(function (e) {
          return e.classList.remove("active");
        }), t.classList.add("active");
      }, 300);
    };
  }), window.onscroll = function () {
    document.querySelectorAll("#container section").forEach(function (t, c) {
      t.getBoundingClientRect().y < window.innerHeight - .8 * window.innerHeight && (e.forEach(function (e) {
        return e.classList.remove("active");
      }), e[c].classList.add("active"));
    });
  };
  var t = document.querySelectorAll(".usage"),
      c = document.querySelector("#copytext");
  t.forEach.call(document.querySelectorAll("a"), function (e) {
    e.addEventListener("click", function (e) {
      e.preventDefault(), c.value = this.text, c.select(), c.setSelectionRange(0, 99999), document.execCommand("copy");
    });
  });
})();