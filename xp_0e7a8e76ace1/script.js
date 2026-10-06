(function () {
  var p = new URLSearchParams(window.location.search);
  var s = p.get("utm_source") || p.get("src") || "";
  var f = document.getElementById("source");
  if (f) { f.value = s.slice(0, 60); }
})();
