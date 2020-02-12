'use strict';
const socket = io();

const vdm = new Vue({
    el: '#myID',
    data: {
	food,
    },
});

const infod = new Vue({
    el: '#info',
    data: {
	currentOrders: {
	    details: {x:0, y:0}},
    orderInfo: {
    },
	orders: {},
	iterator: 0,
	food,
	func: '',
	checkednames: [],
	names: '',
	email: '',
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
	],	
	func: function() {
	    
	    if (infod.checkednames.length == 0){
		
		alert('you didnt order anything!')
	    }
	    else {
		infod.getNext();
		socket.emit('addOrder', {
		    
		    details: {
			x: infod.currentOrders.details.x,
			y: infod.currentOrders.details.y
		    },
		    orderItems: infod.checkednames,
		    orderId: infod.iterator,
			name: infod.names,
			emails: infod.email,
			gender: infod.picked,
			payment: infod.selected},
			   )}
	},
    },
    methods: {
	getNext: function() {
	    infod.iterator = infod.iterator + 1;
	    return infod.iterator;
	},
	
	
	displayOrder: function(event) {
	    let offset = {
		x: event.currentTarget.getBoundingClientRect().left,
		y: event.currentTarget.getBoundingClientRect().top,
	    };
	    infod.currentOrders = {
 		details: {
		 
		    x: event.clientX - 10 - offset.x,
		    y: event.clientY - 10 - offset.y,
		    
		},

	    };
	    
	}
    }

})
