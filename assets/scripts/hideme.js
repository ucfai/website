function hideme() {
    var btns = {};
    btns.yt = document.getElementsByClassName("btn-youtube");
    btns.fb = document.getElementsByClassName("btn-facebook");

    for (var yt of btns.yt) {
        yt.style.visibility = (yt.href === document.URL) ? "hidden" : "visibile";
    }
    for (var fb of btns.fb) {
        fb.style.visibility = (fb.href === document.URL) ? "hidden" : "visibile";
  }
}
