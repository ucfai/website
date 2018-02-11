function hideme() {
    var btns = {};
    btns.yt = document.getElementsByClassName("btn-youtube");
    btns.fb = document.getElementsByClassName("btn-facebook");

    btns.yt.forEach(function(yt) {
        yt.style.visibility = (yt.href === document.URL) ? "hidden" : "visibile";
    });

    btns.fb.forEach(function(fb) {
        fb.style.visibility = (fb.href === document.URL) ? "hidden" : "visibile";
    });
}, false);