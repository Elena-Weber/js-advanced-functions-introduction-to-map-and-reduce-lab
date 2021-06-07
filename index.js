function mapToNegativize(sourceArray) {
    let allNegative = sourceArray.map(num => num * -1);
    return allNegative;
}
function mapToNoChange(sourceArray) {
    let noChange = [];
    for (let num of sourceArray) {
        noChange.push(num);
    }
    return noChange;
}
function mapToDouble(sourceArray) {
    let multiplied = sourceArray.map(num => num * 2);
    return multiplied;
}
function mapToSquare(sourceArray) {
    let squared = [];
    for (let num of sourceArray) {
        squared.push(num * num);
    }
    return squared;
}
function reduceToTotal(sourceArray, startingPoint=0) {
    const reducer = (accumulator, item) => {
        return accumulator + item;
    };
    let total = sourceArray.reduce(reducer, startingPoint);
    return total;
}
function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (!sourceArray[i]) return false
    }
    return true
}
function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (sourceArray[i]) return true
    }
    return false
}