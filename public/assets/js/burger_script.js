$("#addburger").on("submit", function (event) {
  event.preventDefault();
  var postobj = {
    newburger: $("#newburger").val().trim(),
  };
  $.ajax("/api/burger", {
    type: "POST",
    data: postobj,
  }).then(function (data) {
    location.reload();
  });
});
$(".customer").on("click", function () {
  IdToDevour = $(this).data("id");
  DevouredBurger = $("#" + IdToDevour + "> p").text();
  $("#customerName").val("");
  $(".modal").show();
});

$(".close").on("click", function () {
  $(".modal").hide();
});

$(".devour").on("click", function () {
  var Nameof = $("#customerName").val().trim();
  var toPostObj = {
    name: Nameof,
    burger_name: DevouredBurger,
  };
  $.ajax("/api/burger/" + IdToDevour, {
    type: "PUT",
    data: toPostObj,
  }).then(function () {
    console.log("updated");
    $("#" + IdToDevour).remove();
    $(".devourDiv").append(
      '<div><i class="fas fa-hamburger"></i>&nbsp<p style="display: inline-block;">' +
        DevouredBurger +
        "(Eaten by " +
        Nameof +
        ")</p></div>"
    );
    $(".modal").hide();
  });
});

$(".remove").on("click", function () {
  var id = $(this).data("id");
  $.ajax("/api/burger/" + id, {
    type: "DELETE",
  }).then(function () {
    console.log("Deleted");
    $("#" + id).remove();
  });
});
