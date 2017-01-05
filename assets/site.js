$(function() {
    $("span.dropdown-toggle").parent(".page-link").hover(function() {
        $("ul#" + $(this).children(".dropdown-toggle").data("toggle")).show(200);
    }, function() {
        $("ul#" + $(this).children(".dropdown-toggle").data("toggle")).hide(200);
    });
});