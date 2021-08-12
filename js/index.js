$(document).ready(function() {
    $("#accordion").accordion({
        collapsible: true,
        event: "click",
        heightStyle: "content"
    });
    {      $("#slider").bxSlider({
            auto: true,
            minSlides: 1,
            maxSlides: 1,
            slideWidth: 300,
            slideMargin: 10,
            startSlide: 0,
            shrinkItems: true,
            randomStart: true,
            pause: 2000,
            pager: true,
            pagerType: "short",
            pagerSelector: "#pager"
    });
    }});
