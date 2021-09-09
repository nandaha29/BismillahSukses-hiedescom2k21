$(document).ready(function () {
  $(".list").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "semua") {
      $(".itemBox").show("1000");
    } else {
      $(".itemBox")
        .not("." + value)
        .hide("1000");
      $(".itemBox")
        .filter("." + value)
        .show("1000");
    }
  });
});
