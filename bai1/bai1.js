function TinhLuong() {
  var numberEl = document.getElementById("numberTag");
  var payment = 100000;
  var tienluongEl = document.getElementById("tienluong");

  if (isNaN(numberEl.value)) {
    alert("Please enter a number");
    return false;
  } else {
    numberEl = parseFloat(numberEl.value);
    var tien = numberEl * payment;
    tienluongEl.value = tien;
    return true;
  }
}
