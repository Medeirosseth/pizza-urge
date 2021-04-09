
#### :pizza: Pizza Urge :pizza: 

#### By _**:neckbeard:Seth Medeiros**_

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _Jquery_
* _Github_

## Description:memo:

_Pizza landing page used to demonstrate understanding of constuctors and prototypes by "ordering" diffrent sizes and toppings returning the sum of corresponding totals_

## Setup/Installation Requirements :open_file_folder:

* _Go to https://github.com/Medeirosseth/pizza-urge_
* _Click the green Code button and retrieve git_
* _Open your terminal and run Git Clone (followed by the URL)_
* _Open the cloned repository with your file manager and run index.html_
* _[Click Here](https://github.com/Medeirosseth/pizza-urge)_

## Known Bugs

* _None known_

## License

Copyright <2021> <Seth Medeiros>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Specs

#### Describe: Pizza constructor PASSED
:white_check_mark:Test: "It should create an ovbject containing 4 key-value pairs:  size:"" top1:"" top2"" total""
code let newPizza = new Pizza();
Expected Output: newPizza (size:" " top1:" " top2" " "total:" ")

#### Describe: Pizza.protoype.sizeCost() PASSED
:white_check_mark:Test: "It should output the correct corrosponding price when the size of pizza is selected""
code: newPizza.size(size:"large"), newPizza(size:"medium"), newPizza(size:"small")
Expected Output: newPizza(size:"large") = total: 15, newPizza(size:"medium") = total: 10, newPizza(size:"small")=total: 5

:white_check_mark:Test: "It should output the correct corrosponding price when the first topping is selceted""
code: newPizza.topping1("" top1:"three cheese blend") newPizza.topping1("" top1:"mushrooms")newPizza.topping1("" top1:"pineapple")
Expected Output:newPizza.topping1("" top1:"three cheese blend") +=1 newPizza.topping1("" top1:"mushrooms") += 2 newPizza.topping1("" top1:"pineapple") +=3

:white_check_mark:Test: "It should output the correct corrosponding price when the first topping is selceted""
code: newPizza.topping2("" top2:"black-olives") newPizza.topping2("sun-dried-tomatoes" top2:"")newPizza.topping1("" top1:"basil")
Expected Output:code: newPizza.topping2("" top2:"black-olives") newPizza.topping2("sun-dried-tomatoes" top2:"") += 1 newPizza.topping1 += 2("" top1:"basil") +=3