// $(document).ready(function() {
//   setTimeout(function() {
//     $("#main").removeClass("animLoad");
//   }, 100)
// });

document.querySelector(".container").addEventListener("click", function () {
  this.className =
    this.className === "container night" ? "container" : "container night";
});
