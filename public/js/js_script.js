function menuItem(name, bloat, gluten, veg, lactose, kCal) {
    this.bloated = bloat;
    this.gluten = gluten;
    this.vegetarian = veg;
    this.lactose = lactose;
    this.name = name;
    this.kCal = kCal;  
}

var img1 = new Image();
img1.src = "https://cdn-rdb.arla.com/Files/arla-se/2409428905/01a6ac3d-4676-4781-8643-5cbf4387d9dd.jpeg?mode=crop&w=991&h=694&ak=f525e733&hm=00477476";
var img2 = new Image();
img2.src = "https://realfood.tesco.com/media/images/RFO-1400x919-Baked-bean-burger-ad8864a9-e82d-45f2-9b3e-0e1aaf16f539-0-1400x919.jpg";
var img3 = new Image();
img3.src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/RedDot_Burger.jpg";

function fetchName(name) {
    return name.name + ' ' + name.kCal + "kCal";
    
}

let burger1 = new menuItem('BOOMERS CHOICE', 'bloaty', 'gluten', 'vegetarian', 'lactose', '300');
console.log(fetchName(burger1));
let burger2 = new menuItem('Farmers bombastic bean patty', 'bloaty', 'gluten', 'vegetarian', 'lactose', '3000');
console.log(fetchName(burger2));
let burger3 = new menuItem('Double Mac Pac', 'bloaty', 'gluten', 'vegetarian', 'lactose', '2000');
console.log(fetchName(burger3));

var x = document.createElement("Div");
var t = document.createTextNode(fetchName(burger1));
x.appendChild(t);
document.body.appendChild(x);
var x1 = document.createElement("Div");
var t1 = document.createTextNode(fetchName(burger2))
x1.appendChild(t1);
document.body.appendChild(x1);
var x2 = document.createElement("Div");
var t2 = document.createTextNode(fetchName(burger3))
x2.appendChild(t2);
document.body.appendChild(x2);

