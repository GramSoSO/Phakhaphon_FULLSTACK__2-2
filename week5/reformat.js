const kvarray = [
    { key: 1, value: 20 },
    { key: 2, value: 30 }
];

const reformatted = kvarray.map(
    ({ key, value}) => ({ [value]: key })

);

console.log(reformatted)
