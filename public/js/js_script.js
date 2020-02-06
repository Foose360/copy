
function menuItem(name, bloat, gluten, veg, lactose, kCal, stock) {
  this.bloated = bloat;
  this.gluten = gluten;
  this.vegetarian = veg;
  this.lactose = lactose;
  this.name = name;
  this.kCal = kCal;
  this.stock = stock;
}

function fetchName(name) {
  return name.name + ' ' + name.kCal + "kCal";

}

var img1 = new Image();
img1.src = "https://cdn-rdb.arla.com/Files/arla-se/2409428905/01a6ac3d-4676-4781-8643-5cbf4387d9dd.jpeg?mode=crop&w=991&h=694&ak=f525e733&hm=00477476";
var img2 = new Image();
img2.src = "https://realfood.tesco.com/media/images/RFO-1400x919-Baked-bean-burger-ad8864a9-e82d-45f2-9b3e-0e1aaf16f539-0-1400x919.jpg";
var img3 = new Image();
img3.src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/RedDot_Burger.jpg";
img3.height = 300;
img2.height = 300;
img1.height = 300;

let burger1 = new menuItem('BOOMERS CHOICE', 'bloaty', '1', 'vegetarian', '1', '300', '10');
let burger2 = new menuItem('Farmers bombastic bean patty', 'bloaty', '1', 'vegetarian', '1', '3000', '10');
let burger3 = new menuItem('Double Mac Pac', 'bloaty', 'gluten', 'vegetarian', '1', '2000', '10');

burger1.img = img1;
burger2.img = img2;
burger3.img = img3;

*

/*
let menu = [burger1, burger2, burger3];
let myElement = document.getElementById("myID");
for (let burger of menu) {
    if (burger.stock > 0) {
	let listItem = document.createElement("li");
	let listValue = document.createTextNode(burger.name);
	let newOL = document.createElement("Div");
	if (burger.gluten > 0 || burger.lactose > 0){
	    if (burger.gluten > 0 && burger.lactose > 0) {
		let gluten = document.createTextNode("Contains gluten");
		let lactose = document.createTextNode("Contains lactose");
		let newItem = document.createElement("li");
		newItem.appendChild(gluten);
		listItem.appendChild(lactose);
		newOL.appendChild(listItem);
		newOL.appendChild(newItem);
	    } else if (burger.gluten > 0) {
		let gluten = document.createTextNode("Contains gluten")
		listItem.appendChild(lactose);
		newOL.appendChild(listItem);
	    } else {
		let lactose = document.createTextNode("Contains lactose")
		listItem.appendChild(lactose);
	    }
	    newOL.appendChild(listItem);
	    
	}
	
	let newDiv = document.createElement("Div");
	newDiv.appendChild(listValue);
	newDiv.appendChild(burger.img);
	newDiv.appendChild(newOL);
	myElement.appendChild(newDiv);
	
    }
}
