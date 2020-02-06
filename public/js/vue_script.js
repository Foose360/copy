/*var xD = fetchName(burger1);
var xD1 = fetchName(burger2);
var xD2 = fetchName(burger3);

const vm = new Vue({
  el: '#myID',
  data: {
  	 items: [
     { message: xD},,
     { message: xD1 },
     { message: xD2}
     ]
  }
}
		  )

*/
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


const vm = new Vue({
  el: '#myID',
  data: {
      food
  }
})
/*
<ol id="myID">
     <li v-for="burger in menu" v-if="burger.stock > 0">
        {{ burger.name }}
     
     <ol v-if="burger.lactose || burger.gluten">
       <li v-if="burger.lactose">
         {{burger.lactose}}
       </li>
       <li v-if="burger.gluten"> {{burger.gluten}}
       </li>
         </ol>
       </li>
</ol>

*/


