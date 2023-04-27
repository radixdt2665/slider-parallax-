$(document).ready(function () {
    $(document).on("mousemove", function (event) {
        $("#GFG").text("Mouse Position (" 
        + event.pageX + ", " + event.pageY + ")");
    });
});