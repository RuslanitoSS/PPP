
// Абстрактный класс напитка
class Beverage {
    constructor() {
        this.description = 'Unknown Beverage';
    }

    getDescription() {
        return this.description;
    }

    cost() {
        throw new Error('Method "cost()" should be implemented');
    }
}

// Конкретные напитки
class Espresso extends Beverage {
    constructor() {
        super();
        this.description = 'Espresso';
    }

    cost() {
        return 1.99;
    }
}

class HouseBlend extends Beverage {
    constructor() {
        super();
        this.description = 'House Blend Coffee';
    }

    cost() {
        return 0.89;
    }
}

// Декораторы добавок
class CondimentDecorator extends Beverage {
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription() {
        return this.beverage.getDescription();
    }

    cost() {
        return this.beverage.cost();
    }
}

class Milk extends CondimentDecorator {
    getDescription() {
        return this.beverage.getDescription() + ', Milk';
    }

    cost() {
        return this.beverage.cost() + 0.10;
    }
}

class Soy extends CondimentDecorator {
    getDescription() {
        return this.beverage.getDescription() + ', Soy';
    }

    cost() {
        return this.beverage.cost() + 0.15;
    }
}

class Mocha extends CondimentDecorator {
    getDescription() {
        return this.beverage.getDescription() + ', Mocha';
    }

    cost() {
        return this.beverage.cost() + 0.20;
    }
}

class Whip extends CondimentDecorator {
    getDescription() {
        return this.beverage.getDescription() + ', Whip';
    }

    cost() {
        return this.beverage.cost() + 0.10;
    }
}

function makeOrder() {
    const readline = require('readline-sync');

    console.log('Welcome to the Coffee Shop!');
    console.log('1: Espresso');
    console.log('2: House Blend Coffee');
    
    let choice = readline.question('Choose your beverage: ');
    let beverage;

    if (choice === '1') {
        beverage = new Espresso();
    } else if (choice === '2') {
        beverage = new HouseBlend();
    } else {
        console.log('Invalid choice!');
        return;
    }

    //добавления
    if (readline.keyInYN('Would you like Milk?')) {
        beverage = new Milk(beverage);
    }
    if (readline.keyInYN('Would you like Soy?')) {
        beverage = new Soy(beverage);
    }
    if (readline.keyInYN('Would you like Mocha?')) {
        beverage = new Mocha(beverage);
    }
    if (readline.keyInYN('Would you like Whip?')) {
        beverage = new Whip(beverage);
    }

    console.log(`You ordered: ${beverage.getDescription()}`);
    console.log(`Total cost: $${beverage.cost()}`);
}

makeOrder();
