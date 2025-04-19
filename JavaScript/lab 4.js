class Figure {
     #x;
     #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    square() {
        return undefined;
    }


}

class Circle extends Figure {
    #r;

    constructor(x, y, r) {
        super(x, y);
        this.#r = r;
    }


    square() {
        return Math.PI * this.#r ** 2;
    }
}

class Rectangle extends Figure {
     #h;
     #w;

    constructor(x, y, h, w) {
        super(x, y);
        this.#h = h;
        this.#w = w;
    }


    square() {
        return this.#h * this.#w;
    }
}


const circle = new Circle(5, 10, 3);
console.log(Circle area: ${circle.square().toFixed(2)});


const rectangle = new Rectangle(0, 0, 4, 6);
console.log(Rectangle area: ${rectangle.square()});

const figure = new Figure(1, 2);
console.log(Figure area: ${figure.square()});