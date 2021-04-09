## Specs

#### Describe: Pizza constructor PASSED
Test: "It should create an ovbject containing 4 key-value pairs:  size:"" top1:"" top2"" total""
code let newPizza = new Pizza();
Expected Output: newPizza (size:" " top1:" " top2" " "total:" ")

#### Describe: Pizza.protoype.sizeCost() PASSED
Test: "It should output the correct corrosponding price when the size of pizza is selected""
code newPizza(size:"large"), newPizza(size:"medium"), newPizza(size:"small")
Expected Output: newPizza(size:"large") = total: 15, newPizza(size:"medium") = total: 10, newPizza(size:"small")=total: 5

