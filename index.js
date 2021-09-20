// calculator operation
let screen = document.getElementById("screen");
let screenValue = "";
const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
  button.addEventListener("click", function (event) {
    var buttonText = event.target.innerText;
    if (buttonText == "X") {
      buttonText = "*";
      screenValue = screenValue + buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else {
      screenValue = screenValue + buttonText;
      screen.value = screenValue;
    }
  });
}
