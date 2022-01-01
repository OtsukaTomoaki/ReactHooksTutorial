import { sampleVariable, sampleFunc } from "./modules/namedExportModule.js"
import App from "./modules/defaultExportModule.js"

function myReduce() {
    const sampleArrayForReduce = [0, 1, 2, 3];
    const initialValue = 0;

    const sampleArrayForReduceResult = sampleArrayForReduce.reduce((accumulater, currentValue) => {
        console.log("accumulater: ", accumulater, "currentValue", currentValue);
        return accumulater + currentValue;
    }, initialValue)
}
myReduce();

console.log(sampleVariable);
console.log(sampleFunc());
console.log(App())