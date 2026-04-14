class vehicle {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    move() {
        console.log("ame chola chol korta pari");
    }
}

class bus extends vehicle {
    constructor(name, price, seat) {
        super(name, price);
        this.seat = seat;
    }
    route() {
        console.log("Jamalpur to Dhaka");
    }
}

class train extends vehicle {
    constructor(name, price, travel) {
        super(name, price);
        this.travel = travel;
    }
    gontobo() {
        console.log("station to station");

    }
}


const redBus = new bus("red bus", "500", 60);
console.log(redBus);
redBus.move()


const grayTrain = new train ("agnibina", "govt property", "station");
console.log(grayTrain);
grayTrain.gontobo();