function TinhTong() {
  var numberEl = document.getElementById("numberTag");
  var kqEl = document.getElementById("ketquaTag");

  if (isNaN(numberEl.value)) {
    alert("Please enter a number");
    return false;
  } else {
    numberEl = parseFloat(numberEl.value);
    var so_hang_dv = numberEl % 10;
    var so_hang_chuc = Math.floor(numberEl / 10);
    var tong = so_hang_dv + so_hang_chuc;
    kqEl.value = tong;
    return true;
  }
}
