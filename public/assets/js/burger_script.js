$("#InvalidInput").hide();
$("#addburger").on("submit", function (event) {
  event.preventDefault();
  var postobj = {
    newburger: $("#newburger").val().trim(),
  };
  $.ajax("/api/burger", {
    type: "POST",
    data: postobj,
  }).then(function (data) {
    if (data) {
      location.reload();
    } else {
      $("#InvalidInput").show();
    }
  });
});
$(".customer").on("click", function () {
  IdToDevour = $(this).data("id");
  DevouredBurger = $("#" + IdToDevour + "> p").text();
  $("#customerName").val("");
  $("#errMessage").hide();
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
    BurgerId: IdToDevour,
  };
  $.ajax("/api/burger/" + IdToDevour, {
    type: "PUT",
    data: toPostObj,
  }).then(function (res) {
    // if the response is false, means the the same person trying to eat the same burger
    if (!res) {
      $("#errMessage").show();
    } else {
      $("#" + IdToDevour).remove();
      $(".devourDiv").append(
        '<div><i class="fas fa-hamburger"></i>&nbsp<p style="display: inline-block;">' +
          DevouredBurger +
          "(Eaten by " +
          Nameof +
          ")</p></div>"
      );
      $(".modal").hide();
    }
  });
});

$(".remove").on("click", function () {
  var id = $(this).data("id");
  $.ajax("/api/burger/" + id, {
    type: "DELETE",
  }).then(function () {
    $("#" + id).remove();
  });
});
