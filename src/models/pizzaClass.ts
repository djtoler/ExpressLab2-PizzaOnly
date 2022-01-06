import Pizza from "./pizza";

class pizzaOrderClass implements Pizza {
    size: any[];
    toppings: any[];
    gluten: string;
    specialInstructions: string;
    constructor(size: any[], toppings: any[], gluten: string, specialInstructions: string) {
        this.size = size;
        this.toppings = toppings;
        this.gluten = gluten;
        this.specialInstructions = specialInstructions
    }
}

module.exports.PizzaOrderClass = pizzaOrderClass;