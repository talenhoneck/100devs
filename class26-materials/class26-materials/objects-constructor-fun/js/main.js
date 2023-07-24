//Create a constructor with 4 properties and 3 methods
function MakePizza(size,sauce,cheese,toppings){
    this.size = size
    this.sauce = sauce,
    this.cheese = cheese
    this.toppings = toppings
    this.cookTime = function (){
        console.log('20 minutes')
    }
    this.deliveryTime = function(){
        console.log('Way too long')
    }
    this.toss = function(){
        console.log('You know you cant help it')
    }

}

let pizza = new MakePizza('large','marinara','mozzerella',['sausage','pepperoni'])