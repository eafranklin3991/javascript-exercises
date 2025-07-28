const sumAll = function(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result.reduce((total, currentItem) => {
        return total + currentItem;
    }, 0);
};

// Do not edit below this line
module.exports = sumAll;
