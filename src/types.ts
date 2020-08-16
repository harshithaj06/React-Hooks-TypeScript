export interface MyProps {
}
export interface CounterState {
    value: number;
}


interface A {
    valueA: number;
    valueB: string;
}

type B = {
    valueA: number;
    valueB: string;
}
// interface A {
//     valueC: string
// }
// type B = {
//     valueC: string
// }
class C {
    valueA: number = 0; //bydefault it is public
    valueB: string = '';

    public static  methodA() : C | null | undefined
    { 
        const a: number = 0;
        let b: number = 1;

        const cObject: C = {valueA : 0, valueB: 'b'};
        cObject.valueA = 12;
 
        // typescript - null vs undefined?
        // how come we don't specify access modifiers
         return null;
    }

    private static methodC() {
        // how come this is valid? why are there no errors?
        // what should we do to have the errors flagged in this code?
        if (true)
            return 0;
        else
            return 'noooo';
    }
}

const a: A = {valueA: 0, valueB: ''};
const b: B = {valueA: 0, valueB: ''};
const c: C = {valueA: 0, valueB: ''};