$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var opened = false;

  function triggerOpen() {
    if (opened) return;
    opened = true;
    envelope.addClass("open").removeClass("close");
    btn_open.prop("disabled", true).addClass("disabled");
    envelope.off("click");
  }

  envelope.on("click", triggerOpen);
  btn_open.on("click", triggerOpen);
});
