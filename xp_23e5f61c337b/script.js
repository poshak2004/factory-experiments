(function () {
  var p = new URLSearchParams(location.search);
  var s = p.get("src");
  if (s && /^[a-z0-9_-]{1,20}$/i.test(s)) {
    document.getElementById("source").value = s;
  }
  if (p.get("submitted") === "1") {
    var t = document.getElementById("thanks");
    t.hidden = false;
    t.focus();
  }
})();
