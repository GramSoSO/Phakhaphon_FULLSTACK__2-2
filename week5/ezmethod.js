const cat ={
    name: "pippy",
    age: 8,
    whatname: function(){
        return this.name
    }
}

const dog ={
    name: "buddy",
    age: 8,
    whatname: cat.whatname
}

console.log(cat.whatname());
console.log(dog.whatname())