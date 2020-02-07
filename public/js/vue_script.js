

const vm = new Vue({
    el: '#myID',
     data: {
      food
     }
})

new Vue({
    el: '#info',
    data: {
	food,
	checkednames: [],
	    names: '',
	    email: '',
	    street: '',
	    house: '',
	    selected: 'Master Card',
	    options1: [
		{ text: 'Visa', value: 'Visa' },
		{ text: 'Master Card', value: 'Master Card' },
		{ text: 'Swish', value: 'Swish' },
		{ text: 'PayPal', value: 'PayPal'}
	    ],
            picked: '',
	    options: [
		{ text: 'Male', value: 'Male'},
		{ text: 'Female', value: 'Female'},
		{ text: 'Other', value: 'Other'}
	    ]
    
    } })

new Vue ({
    el: '#button',
    methods: {
	func: function(message) {
	    if (message != null) {
		alert('you purchased' + message + '!');
	    }
	}
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


