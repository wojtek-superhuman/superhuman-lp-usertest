/* Notetaker download config + OS detection. Shared by index.html and install.html.
   To ship a new build, change only the two paths below. They can be relative
   (served from this repo) or absolute (e.g. a GitHub Release asset URL). */
window.NOTETAKER_DOWNLOADS = {
  mac: "https://github.com/wojtek-superhuman/superhuman-lp-usertest/releases/download/stuff/Notetaker-0.6.0-nightly.20261005085353.b70db6a4-arm64.dmg",
  win: "https://github.com/wojtek-superhuman/superhuman-lp-usertest/releases/download/stuff/Notetaker-0.6.0-nightly.20261006042018.1a1afccb-x64.exe"
};

window.notetakerOS = function () {
  var p = "";
  try {
    p = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || navigator.userAgent || "";
  } catch (e) { p = navigator.userAgent || ""; }
  if (/win/i.test(p)) return "win";
  return "mac"; /* macOS and anything else get the Mac build */
};

window.notetakerDownload = function (os) {
  var url = window.NOTETAKER_DOWNLOADS[os] || window.NOTETAKER_DOWNLOADS.mac;
  var a = document.createElement("a");
  a.href = url;
  a.setAttribute("download", url.split("/").pop());
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  setTimeout(function () { a.remove(); }, 1000);
};
