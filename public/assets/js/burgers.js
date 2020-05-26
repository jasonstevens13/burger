// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

    $(".change-devoured").on("click", function (event) {
        let id = $(this).data("id");
        let newDevoured = $(this).data("newdevoured");

        let newDevouredState;

        // if statement 

        if (newDevoured === false) {
            newDevouredState = {
                devoured: 1
            }
        } else {
            newDevouredState = {
                devoured: 0
            }
        }


        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to", newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let newBurger = {
            burger_name: $("#bg").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });



});
