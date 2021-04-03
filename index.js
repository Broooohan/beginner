//read more button JS
$("#read_btn").on("click", readMore);
function readMore() {
  let x = $("h4#me").css("display");
  if (x == "block") {
    $("h4#me").css("display", "none");
    $("button#read_btn").html("Read More");
  } else {
    $("h4#me").css("display", "block");
    $("button#read_btn").html("Read Less");
  }
}

// hamburger menu button JS
// document.querySelector("div.burger").addEventListener("click" , ham);
// function ham() {
// document.querySelector("#navbar ul").classList.remove("hidden");
// }
$("div.burger").on("click", function () {
  $("#navbar ul").fadeToggle();
});