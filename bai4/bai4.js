function Tinh() {
  var chieuDaiEl = document.getElementById("chieuDaiTag");
  var chieuRongEl = document.getElementById("chieuRongTag");
  var chuViEl = document.getElementById("chuViTag");
  var dienTichEl = document.getElementById("dienTichTag");

  if (isNaN(chieuDaiEl.value) || isNaN(chieuRongEl.value)) {
    alert("Please enter a number");
    return false;
  } else {
    chieuDaiEl = parseFloat(chieuDaiEl.value);
    chieuRongEl = parseFloat(chieuRongEl.value);
    var chuvi = chieuDaiEl + chieuRongEl;
    chuViEl.value = chuvi * 2;
    var dientich = chieuDaiEl * chieuRongEl;
    dienTichEl.value = dientich;
    return true;
  }
}
