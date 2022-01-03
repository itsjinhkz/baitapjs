function DoiTien() {
  var moneyEl = document.getElementById("moneyTag");
  var dollarEl = 23000;
  var TongTienEl = document.getElementById("tongTienTag");

  if (isNaN(moneyEl.value)) {
    alert("Please enter a number");
    return false;
  } else {
    moneyEl = parseFloat(moneyEl.value);
    var tien = moneyEl * dollarEl;
    TongTienEl.value = tien;
    return true;
  }
}
