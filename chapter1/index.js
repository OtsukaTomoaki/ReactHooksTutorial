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

function myPromise() {
    const promise = new Promise((resulve, reject) => {
        resulve()
    })
    const inCaseOfSuccess = () => {
        console.log("非同期の処理が成功し、resolveが通知された！")
    }
    const inCaseOfFailure = () => {
        console.log("非同期の処理が失敗し、rejectが通知された。。。")
    }
    //resoleve()で非同期処理が成功したという通知を受け取り、
    //then()で成功し場合の処理を実行
    promise
        .then(inCaseOfSuccess, inCaseOfFailure)
        .then(inCaseOfSuccess, inCaseOfFailure)
        .then(inCaseOfSuccess, inCaseOfFailure)
        .catch(inCaseOfFailure)
}
myPromise()
console.log(sampleVariable);
console.log(sampleFunc());
console.log(App())