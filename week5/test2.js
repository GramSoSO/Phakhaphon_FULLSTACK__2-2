let value1 = ["Apple", 1 , false]
let value2 = ["Fries", 2 ,true, 'Apple']
let value3 = ["Mars", 9 , "Apple"];

let result = []

for (let i = 0; i < value1.length; i++) {
    item = value1(i);
        if (value2.includes(item) && value3.includes(item)) {
            result.push(item)
    }
}
console.log(result)
