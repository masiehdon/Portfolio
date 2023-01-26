"use strict";

const start = function () {
  $("#thats-me").hide(), $("#projects").hide(), $("#contact-page").hide();
};
start();

$(".link-to-projects").on("click", function (e) {
  e.preventDefault();
  start(), $("#projects").show(), $("#introduction").hide();
});

$(".contact").on("click", function (e) {
  e.preventDefault(),
    start(),
    $("#contact-page").show(),
    $("#introduction").hide();
});

$(".about-me").on("click", function (e) {
  e.preventDefault(), start(), $("#thats-me").show(), $("#introduction").hide();
});
