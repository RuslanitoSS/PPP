const readline = require('readline') 

// Определение поведения кряканья
class QuackBehavior {
    constructor(quackBehavior) {
        this.quackBehavior = quackBehavior;
    }

    quack() {
        console.log(this.quackBehavior);
    }
}

class LoudQuack extends QuackBehavior {
    constructor() {
        super("Я крякаю громко");
    }
}

class RareQuack extends QuackBehavior {
    constructor() {
        super("Я крякаю редко");
    }
}

class LongQuack extends QuackBehavior {
    constructor() {
        super("Я крякаю протяжно");
    }
}

class MuteQuack extends QuackBehavior {
    constructor() {
        super("Я не крякаю");
    }
}

// Определение поведения полёта
class FlyBehavior {
    constructor(flyBehavior) {
        this.flyBehavior = flyBehavior;
    }

    fly() {
        console.log(this.flyBehavior);
    }
}

class FlyWithWings extends FlyBehavior {
    constructor() {
        super("Я летаю на крыльях");
    }
}

class FlyWithRemoteControl extends FlyBehavior {
    constructor() {
        super("Я летаю на радиоуправлении");
    }
}

class FlyNoFly extends FlyBehavior {
    constructor() {
        super("Я не летаю");
    }
}

// Базовый класс Duck
class Duck {
    constructor(name, quackBehavior, flyBehavior) {
        this.name = name;
        this.quackBehavior = quackBehavior;
        this.flyBehavior = flyBehavior;
    }

    performQuack() {
        this.quackBehavior.quack();
    }

    performFly() {
        this.flyBehavior.fly();
    }

    setQuackBehavior(quackBehavior) {
        this.quackBehavior = quackBehavior;
    }

    setFlyBehavior(flyBehavior) {
        this.flyBehavior = flyBehavior;
    }

    changeQuackBehavior(newQuackBehavior) {
        this.setQuackBehavior(newQuackBehavior);
    }

    changeFlyBehavior(newFlyBehavior) {
        this.setFlyBehavior(newFlyBehavior);
    }

    display() {
        console.log(`${this.name}`);
        this.performQuack();
        this.performFly();
    }
}

// Класс для Саксонской утки
class SaxonDuck extends Duck {
    constructor() {
        super('Саксонская утка', new RareQuack(), new FlyWithWings());
    }
}

// Класс для Резиновой утки
class RubberDuck extends Duck {
    constructor() {
        super('Резиновая утка', new MuteQuack(), new FlyNoFly());
    }
}

// Класс для Утки-приманки
class DecoyDuck extends Duck {
    constructor() {
        super('Утка-приманка', new LoudQuack(), new FlyNoFly());
    }
}

// Класс для Красноголовой утки
class RedheadDuck extends Duck {
    constructor() {
        super('Красноголовая утка', new MuteQuack(), new FlyWithWings());
    }
}


const ducks = {
    1: new SaxonDuck(),
    2: new RubberDuck(),
    3: new DecoyDuck(),
    4: new RedheadDuck()
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Выберите утку для симуляции:");
console.log("1: Саксонская утка");
console.log("2: Резиновая утка");
console.log("3: Утка-приманка");
console.log("4: Красноголовая утка");

rl.question('Введите номер утки (1-4): ', (answer) => {
    const selectedDuck = ducks[answer];
    if (selectedDuck) {
        selectedDuck.display();
        if (answer === '3') { //пример изменения FlyBehavior
            selectedDuck.changeFlyBehavior(new FlyWithRemoteControl());
            selectedDuck.performFly();
        }
    } else {
        console.log('Bruh');
    }
    rl.close();
});
