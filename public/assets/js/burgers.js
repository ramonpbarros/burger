$(() => {
  $(".create-form").on("submit", (event) => {
    event.preventDefault();

    const newBurger = {
      burger_name: $("#inputBurger").val().trim(),
      devoured: 0,
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(() => {
      location.reload();
    });
  });

  $(".devourBtn").on("click", function () {
    const id = $(this).data("burgerid");
    const newDevoured = { devoured: 1 };

    $.ajax(`/api/burgers/${id}`, {
      type: "PUT",
      data: newDevoured,
    }).then(() => {
      location.reload();
    });
  });
});
