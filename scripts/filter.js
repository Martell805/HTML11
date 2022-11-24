function filterArray(arr, a, b) {
    return arr.filter((x) => {
        return x >= a || x === b;
    })
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(filterArray(arr, 4, 2));