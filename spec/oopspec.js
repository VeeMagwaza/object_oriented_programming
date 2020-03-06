let myTest = require ("../src/oopsrc")

describe ("function 'sayHello' in a class of Person", function(){
    let person = new myTest.Person("Ryan",
    30,
    "male",
    ["being a hardarse", "agile", "ssd hard drives"]); 
    let greeting = person.sayHello()
it("should return greeting", function(){
    expect(greeting).toEqual(`Hello, my name is Ryan and I am a 30 years old male, My interests are being a hardarse,agile,ssd hard drives`)
})

})
