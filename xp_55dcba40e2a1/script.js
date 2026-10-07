(function () {
  var m = /[?&]src=([^&#]*)/.exec(location.search);
  var el = document.getElementById("src");
  if (m && el) {
    try { el.value = decodeURIComponent(m[1]).slice(0, 40); } catch (e) { el.value = ""; }
  }
  function showThanks() {
    if (location.hash === "#thanks") {
      var t = document.getElementById("thanks");
      if (t) { t.hidden = false; t.focus(); }
    }
  }
  showThanks();
  window.addEventListener("hashchange", showThanks);
})();
