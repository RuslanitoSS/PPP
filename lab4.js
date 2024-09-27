class Beverage {
    constructor() {
        this.description = 'Unknown Beverage';
        this.volume = 0.4; // Базовый объем по умолчанию
    }

    getDescription() {
        return this.description;
    }

    cost() {
        throw new Error('Method "cost()" should be implemented');
    }

    setVolume(volume) {
        this.volume = volume;
    }

    getVolume() {
        return this.volume
    }

    getVolumeMultiplier() {
        return this.volume === 0.4 ? 1 : this.volume === 0.6 ? 1.5 : 2; // Множитель стоимости
    }
}

// Абстрактные фабрики напитков
class BeverageFactory {
    createBase() {
        throw new Error('Method "createBase()" should be implemented');
    }
    createMainIngredient() {
        throw new Error('Method "createMainIngredient()" should be implemented');
    }
    createTopper() {
        throw new Error('Method "createTopper()" should be implemented');
    }
}

// Конкретные фабрики напитков
class CoffeeFactory extends BeverageFactory {
    createBase() {
        return 'Water';
    }
    createMainIngredient() {
        return 'Coffee';
    }
    createTopper() {
        return 'Whipped Cream';
    }
}

class TeaFactory extends BeverageFactory {
    createBase() {
        return 'Water';
    }
    createMainIngredient() {
        return 'Tea';
    }
    createTopper() {
        return 'Lemon';
    }
}

class FreshFactory extends BeverageFactory {
    createBase() {
        return 'Juice';
    }
    createMainIngredient() {
        return 'Fruit';
    }
    createTopper() {
        return 'Syrup';
    }
}

class CocktailFactory extends BeverageFactory {
    createBase() {
        return 'Soda';
    }
    createMainIngredient() {
        return 'Fruit Syrup';
    }
    createTopper() {
        return 'Ice';
    }
}

// Конкретные напитки
class CustomBeverage extends Beverage {
    constructor(factory) {
        super();
        this.base = factory.createBase();
        this.mainIngredient = factory.createMainIngredient();
        this.topper = factory.createTopper();
        this.description = `${this.mainIngredient} with ${this.base} and ${this.topper}`;
    }

    cost() {
        return 2.00 * this.getVolumeMultiplier(); // Базовая стоимость напитка без добавок
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

class Mocha extends CondimentDecorator {
    getDescription() {
        return this.beverage.getDescription() + ', Mocha';
    }

    cost() {
        return this.beverage.cost() + 0.20;
    }
}

// Фабрики объемов
class SmallVolumeFactory {
    createVolume(beverage) {
        beverage.setVolume(0.4);
        beverage.description+=`, ${beverage.volume}L`
        return beverage;
    }
}

class MediumVolumeFactory {
    createVolume(beverage) {
        beverage.setVolume(0.6);
        beverage.description+=`, ${beverage.volume}L`
        return beverage;
    }
}

class LargeVolumeFactory {
    createVolume(beverage) {
        beverage.setVolume(0.8);
        beverage.description+=`, ${beverage.volume}L`
        return beverage;
    }
}

// Функция для создания заказа
function makeOrder() {
    const readline = require('readline-sync');

    console.log('Welcome to the Coffee Shop!');
    console.log('Choose your beverage type:');
    console.log('1: Coffee');
    console.log('2: Tea');
    console.log('3: Fresh');
    console.log('4: Cocktail');

    let beverageFactory;
    let choice = readline.question('Choose your beverage: ');
    switch (choice) {
        case '1':
            beverageFactory = new CoffeeFactory();
            break;
        case '2':
            beverageFactory = new TeaFactory();
            break;
        case '3':
            beverageFactory = new FreshFactory();
            break;
        case '4':
            beverageFactory = new CocktailFactory();
            break;
        default:
            console.log('Invalid choice!');
            return;
    }

    // Создаем напиток из фабрики
    let beverage = new CustomBeverage(beverageFactory);
    
    // Выбор объема
    console.log('Choose your volume:');
    console.log('1: 0.4L');
    console.log('2: 0.6L');
    console.log('3: 0.8L');
    let volumeChoice = readline.question('Choose your volume: ');
    switch (volumeChoice) {
        case '1':
            beverage = new SmallVolumeFactory().createVolume(beverage);
            break;
        case '2':
            beverage = new MediumVolumeFactory().createVolume(beverage);
            break;
        case '3':
            beverage = new LargeVolumeFactory().createVolume(beverage);
            break;
        default:
            console.log('Invalid volume choice!');
            return;
    }

    // Добавки
    if (readline.keyInYN('Would you like Milk?')) {
        beverage = new Milk(beverage);
        
    }
    if (readline.keyInYN('Would you like Mocha?')) {
        beverage = new Mocha(beverage);
        
    }

    console.log(`You ordered: ${beverage.getDescription()}`);
    console.log(`Total cost: $${beverage.cost().toFixed(2)}`);
}

// Запуск программы
makeOrder();
