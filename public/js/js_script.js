
function fetchName(name) {
  return name.name + ' ' + name.kCal + "kCal";

}

function fetchName(name) {
  return name.name + ' ' + name.kCal + "kCal";

}

function clicked() {
    console.log("clicked!")
    
    
}

function readValues() {
    let nameTextbox = document.getElementById("nameTextbox");
    let streetTextbox = document.getElementById();
    let emailTextbox = document.getElementById();
    let houseTextbox = document.getElementById();
    let myRadio = document.getElementById("radio");
    let myPayment = document.getElementById("payment");
    var read = [nameTextbox.value, streetTextbox.value, emailTextbox.value, houseTextbox.value, myRadio.value, myPayment.value];
    console.log(myRadio);
    return read;
}

let myButton = document.getElementById("button");
myButton.onclick = readValues;
myButton.onclick = clicked();


