var xD = fetchName(burger1);
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
})
