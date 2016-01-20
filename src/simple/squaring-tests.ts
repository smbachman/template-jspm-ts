import assertCheck from "../testing/assertCheck"
import {property, gen} from "testcheck";
import {expect} from "chai";
import {square} from "./squaring";

assertCheck(property([gen.int], function (x) {
    return square(x) === x * x;
}));

expect(square(4)).to.equal(16);