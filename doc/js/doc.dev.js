"use strict";

var menuSection = document.querySelectorAll('#sidenav a');
menuSection.forEach(function (v) {
  v.onclick = function () {
    setTimeout(function () {
      menuSection.forEach(function (j) {
        return j.classList.remove('active');
      });
      v.classList.add('active');
    }, 300);
  };
});

window.onscroll = function () {
  var mainSection = document.querySelectorAll('#container section');
  mainSection.forEach(function (v, i) {
    var rect = v.getBoundingClientRect().y;

    if (rect < window.innerHeight - window.innerHeight * .8) {
      menuSection.forEach(function (v) {
        return v.classList.remove('active');
      });
      menuSection[i].classList.add('active');
    }
  });
};

var usages = document.querySelectorAll('.usage');
var inputcopy = document.querySelector('#copytext');
usages.forEach.call(document.querySelectorAll('a'), function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    inputcopy.value = this.text;
    inputcopy.select();
    inputcopy.setSelectionRange(0, 99999);
    document.execCommand("copy");
  });
});