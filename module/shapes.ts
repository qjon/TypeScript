interface IFigure {
    getSurfaceArea(): number;
}

export class Circle implements IFigure {
    private r: number;

    constructor(r: number) {
        this.r = r;
    }

    getSurfaceArea(): number {
        return Math.PI * Math.pow(this.r, 2);
    }
}

export class Square implements IFigure {
    constructor(private a: number) {
    }

    getSurfaceArea(): number {
        return Math.pow(this.a, 2);
    }
}

class Triangle implements IFigure {
    constructor(private a: number, private h: number) {
    }

    getSurfaceArea(): number {
        return this.a * this.h / 2;
    }
}