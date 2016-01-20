import {check, property, Generator, Options} from 'testcheck';

export default function assertCheck(property: Generator<boolean>, options?: Options) {
    let result = check(property, options);
    if (!result.result) {
        throw new Error("test failed: " + JSON.stringify(result, null, 2));
    }
    return result;
}