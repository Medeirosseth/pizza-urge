function Pizza(size, top1, top2, total){
  this.size = size;
  this.topping1 = top1;
  this.topping2 = top2;
  this.total = 0;
}
let newPizza = new Pizza("","","")

Pizza.prototype.sizeCost=function(){
  if (newPizza.size === "large"){
    this.total = 15
  } else if (this.size === "medium"){
    this.total = 10
  } else if (this.size === "small")
    this.total = 5
  if (newPizza.topping1 === "cheese"){
    this.total += 1
  } else if (this.topping1 === "mushroom"){
    this.total += 2
  } else if (this.topping1 === "pineapple"){
    this.total += 3
  } 
  if (newPizza.topping2 === "black-olives"){
    this.total += 1
  } else if (this.topping2 === "sun-dried-tomatoes"){
    this.total += 2
  } else if (this.topping2 === "basil")
    this.total += 3
    return this.total;
    
   
}


$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();
    let size = $("select#size").val();
    newPizza.size = size  
    let toppingOne = $("select#topping1").val();
    newPizza.topping1 = toppingOne  
    let toppingTwo = $("select#topping2").val();
    newPizza.topping2 = toppingTwo 
    $("#displaySize").text(newPizza.size);
    $("#top1").text(newPizza.topping1);
    $("#top2").text(newPizza.topping2);
    $("#total").text(newPizza.sizeCost());
    $("#hiddenOrder").show();
    let orderIn = new Pizza(size, toppingOne, toppingTwo)
    
  });
});


// function moreOrders() {
//   this.orders = []
//   this.orderId = 0
// }

// moreOrders.prototype.addOrder=function(){
//   order.id = this.assignId();
//   this.orders.push(order);
// }

// moreOrders.prototype.assignId=function() {
//   this.orderId += 1;
//   return this.orderId;
// }
