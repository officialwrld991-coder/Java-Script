function  purchase () {

const order = {

"id" : "1",

"status" : "processing",

};

order.status = "Delivered";

return order;

}

console.log(purchase())
