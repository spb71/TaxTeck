$(document).ready(function() {

    var website = "https://api.flickr.com/services/feeds/photos_public.gne?" +
        "id=188068619@N02&format=json&jsoncallback=?";

    $.getJSON(website, function (data) {
        var url = "";
        $.each(data.items, function (i, item) {
            url += "<a href='"+ item.media.m +"' data-lightbox='images' data-title='"+ item.title + "'>" +
                "<img src='" + item.media.m + "' alt=''></a>"
        });
        $("#classic_images").html(url);
    });
});
