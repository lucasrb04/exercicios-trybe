const greaterThan = (firstNumber) => (secondNumber) => secondNumber > firstNumber;

const greaterThan10 = greaterThan(10);
console.log(greaterThan(10)(15));
// true
const wakeUp = () => console.log("Acordando!!");
const cofeeBreak = () => console.log("Bora tomar café!!");
const goSleep = () => console.log("Partiu dormir!!");
const doingThings = (func) => func();
doingThings(goSleep);