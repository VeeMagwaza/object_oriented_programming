let myTest = require("../src/oopsrc");

describe("function 'sayHello' in a class of Person", function() {
  let person = new myTest.Person("Ryan", 30, "male", [
    "being a hardarse",
    "agile",
    "ssd hard drives"
  ]);

  let name = "Ryan";
  it("should return name", () => {
    expect(name).toEqual("Ryan");
  });

  let age = 30;
  it("should return age", () => {
    expect(age).toEqual(30);
  });

  let gender = "male";
  it("should return the gender of Person", () => {
    expect(gender).toEqual("male");
  });

  let interest = ["being a hardarse", "agile", "ssd hard drives"];
  it("return interests of my Person", () => {
    expect(interest).toEqual(["being a hardarse", "agile", "ssd hard drives"]);
  });

  let greeting = person.sayHello();
  it("should return greeting", () => {
    expect(greeting).toEqual(
      `Hello, my name is Ryan and I am a 30 year old male, My interests are being a hardarse,agile,ssd hard drives`
    );
  });
});
