function omikujishow(){
  var omikuji = ["大吉","中吉","小吉"];
  var number1 = Math.random();
  var number2 = number1 * 3;
  var number3 = Math.floor(number2);
  var message = (omikuji[number3]);
  var object = document .getElementById("omikuji");
  object.innerText = message;
}
