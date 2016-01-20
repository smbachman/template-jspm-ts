import assertCheck from "../testing/assertCheck"
import {property, gen} from "testcheck";
import {square} from "./squaring";

assertCheck(property([gen.int], function (x) {
    return square(x) === x * x;
}));