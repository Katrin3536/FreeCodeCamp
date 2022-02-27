function nextInLine(arr, item) {
    arr.push(item);
    let p = arr.shift(item);

    return p;