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
/*

const vm = new Vue({
  el: '#myID',
  data: {
  menu: [{name: burger1.name, stock: 2, gluten: 'Contains gluten', lactose: 'Contains lactose'}, {name: burger2.name, stock: 0, gluten: 'Contains gluten'}, {name: burger3.name, stock: 5, lactose: 'Contains lactose'}]
  }
})
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
