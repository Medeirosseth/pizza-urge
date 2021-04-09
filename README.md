## Specs

#### Describe: Pizza constructor PASSED
Test: "It should create an ovbject containing 4 key-value pairs:  size:"" top1:"" top2"" total""
code let newPizza = new Pizza();
Expected Output: newPizza (size:" " top1:" " top2" " "total:" ")

#### Describe: Pizza.protoype.sizeCost() PASSED
Test: "It should output the correct corrosponding price when the size of pizza is selected""
code: newPizza.size(size:"large"), newPizza(size:"medium"), newPizza(size:"small")
Expected Output: newPizza(size:"large") = total: 15, newPizza(size:"medium") = total: 10, newPizza(size:"small")=total: 5

Test: "It should output the correct corrosponding price when the first topping is selceted""
code: newPizza.topping1("" top1:"three cheese blend") newPizza.topping1("" top1:"mushrooms")newPizza.topping1("" top1:"pineapple")
Expected Output:newPizza.topping1("" top1:"three cheese blend") +=1 newPizza.topping1("" top1:"mushrooms") += 2 newPizza.topping1("" top1:"pineapple") +=3

Test: "It should output the correct corrosponding price when the first topping is selceted""
code: newPizza.topping2("" top2:"black-olives") newPizza.topping2("sun-dried-tomatoes" top2:"")newPizza.topping1("" top1:"basil")
Expected Output:code: newPizza.topping2("" top2:"black-olives") newPizza.topping2("sun-dried-tomatoes" top2:"") += 1 newPizza.topping1 += 2("" top1:"basil") +=3