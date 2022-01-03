function TinhTong() {
  var number1El = document.getElementById("number1Tag");
  var number2El = document.getElementById("number2Tag");
  var number3El = document.getElementById("number3Tag");
  var number4El = document.getElementById("number4Tag");
  var number5El = document.getElementById("number5Tag");
  var kqEl = document.getElementById("ketquaTag");

  if (
    isNaN(number1El.value) ||
    isNaN(number2El.value) ||
    isNaN(number3El.value) ||
    isNaN(number4El.value) ||
    isNaN(number5El.value)
  ) {
    alert("Please enter a number");
    return false;
  } else {
    number1El = parseFloat(number1El.value);
    number2El = parseFloat(number2El.value);
    number3El = parseFloat(number3El.value);
    number4El = parseFloat(number4El.value);
    number5El = parseFloat(number5El.value);
    var sothuc = number1El + number2El + number3El + number4El + number5El;
    kq = sothuc / 5;
    kqEl.value = kq;
    return true;
  }
}
