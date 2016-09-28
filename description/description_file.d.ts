declare class Mathematic {
    static PI: number;
    new(): Mathematic;

    add(a: number, b:number): number;
    sub(a: number, b:number): number;
}

interface IConfig {
    game?: string;
    length?: number;
}

declare function complexFunction(name: string, config?: IConfig);