//call method example

let obj1 = {
    name : 'name1',
    printName: function() {
        console.log(this.name);
    }
}

let newObj = {
    name : 'name2'
}

console.log(obj1.printName.call(newObj));

//apply method example

let obj2 = {
    name: "name1",
    printName: function (...lastname) {
      console.log(this.name + lastname);
    },
  };
  
  console.log(obj2.printName.apply(newObj, ["kamal"]));


  // bind method example
  // Unlike Call and apply , the bind method creates a copy of the function which can be called later. 
  // Call and apply invke the function immediately

  let printName = function(lastname){
    console.log(this.name + lastname)
  };

  let printFullName = printName.bind(newObj, 'kamal');
  console.log(printFullName); // Returns a function 
  console.log(printFullName()); // Prints the name