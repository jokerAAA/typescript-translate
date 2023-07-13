type Somefn = (a: string) => void;

type Somefn2 = {
  des: string;
  (a: string): void;
};

function test(fn: (a: string) => void) {}

test((a) => console.log(a.toLocaleLowerCase()));

let str: string;

const b = "test string";

str = b;

let strArr: string[];
let strAr2: Array<string>;

interface Person {
  name: string;
  age: number;
}

type PersonAble<T> = {
  [key in keyof T as `get${Capitalize<string & key>}`]: () => T[key];
};
type P<T> = {
  [key in keyof T as `get${Capitalize<string & key>}`]: T[key];
};

type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<
    string & Property
  >}`]: () => Type[Property];
};

enum Direction {
  left,
  right,
  up,
  down,
}
type key = keyof typeof Direction;

interface SomIn {
  a: string;
  b: (s: string) => void;
}

class SomeInternal implements SomIn {
  a = "string";

  b(s: string) {
    console.log(s);
  }
}
