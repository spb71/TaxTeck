$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "../json/credentials.json",
        beforeSend: function() {
            console.log("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $.each(data, function () {
                $.each(this, function (key, value) {
                    $("#calendar").append(
                        "<h2>"+ value.full_name + "</h2>" +
                        "<h3>" + value.title + "</h3>" +
                        "<p>" + value.tag_line + "</p>" +
                        "<p>" + value.bio + "</p>"


                    )
                })

            })

        }
    });
});
