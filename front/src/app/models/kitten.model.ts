import {defaultsDeep} from 'lodash';

export class Kitten {
    id: number;
    firstName: string;
    fur: string;
    race: string;
    age: number;
    imagepath: string;
    sex: string;

    constructor(kitten?: Partial<Kitten>) {
        defaultsDeep(this, kitten);
    }
}
