type Size = 10 | 12 | 14 | 16;
type DoughType = "normal" | "thin crust";

class PizzaBuilder {
    private _cheese: string = "";
    private _meat: string = "";
    private _doughType: DoughType = "normal";
    private _vegetable: string = "";
    private _size: Size

    constructor(size: Size) {
        this._size = size;
    }

    get cheese(): string {
        return this._cheese;
    }
    withCheese(cheese: string): PizzaBuilder {
        this._cheese = cheese;
        return this;
    }

    get meat(): string {
        return this._meat;
    }
    withMeat(meat: string): PizzaBuilder {
        this._meat = meat;
        return this;
    }

    get doughType(): DoughType {
        return this._doughType;
    }
    setDoughType(type: DoughType): PizzaBuilder {
        this._doughType = type;
        return this;
    }

    get vegetable(): string {
        return this._vegetable;
    }
    withVegetable(veg: string): PizzaBuilder {
        this._vegetable = veg;
        return this;
    }

    get size(): Size {
        return this._size;
    }

    build(): Pizza {
        return new Pizza(this);
    }
}

class Pizza {
    private _cheese: string;
    private _meat: string;
    private _doughType: DoughType;
    private _vegetable: string;
    private _size: Size;

    constructor(pizzaBuilder: PizzaBuilder) {
        this._cheese = pizzaBuilder.cheese;
        this._meat = pizzaBuilder.meat;
        this._doughType = pizzaBuilder.doughType;
        this._vegetable = pizzaBuilder.vegetable;
        this._size = pizzaBuilder.size;
    }

    get cheese(): string {
        return this._cheese;
    }
    get meat(): string {
        return this._meat;
    }
    get doughType(): DoughType {
        return this._doughType;
    }
    get vegetable(): string {
        return this._vegetable;
    }
    get size(): Size {
        return this._size;
    }
}

function runBuilderDemo(): void {
    let pepPizza: Pizza = new PizzaBuilder(12)
        .withCheese("mozzarella")
        .withMeat("pepperoni")
        .build();

    let cheesePizza: Pizza = new PizzaBuilder(16)
        .withCheese("mozzarella")
        .build();

    let comboPizza: Pizza = new PizzaBuilder(14)
        .withCheese("mozzarella")
        .withMeat("sausage")
        .withVegetable("onion")
        .setDoughType("thin crust")
        .build();

    [pepPizza, cheesePizza, comboPizza].forEach(pizza => {
        let toppings = [pizza.cheese, pizza.meat, pizza.vegetable].filter(
            topping => topping
        );

        console.log(
            `*** One ${pizza.size}" ${
                pizza.doughType === "thin crust" ? pizza.doughType + " " : ""
            }Pizza! ***`
        );
        console.log(`Toppings: ${toppings.join(", ")}`);
        console.log();
    });
}

runBuilderDemo();
