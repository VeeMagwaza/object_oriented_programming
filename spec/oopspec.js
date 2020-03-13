let myTest = require("../src/oopsrc");

let person = new myTest.Person("Ryan", 30, "male", [
  "being a hardarse",
  "agile",
  "ssd hard drives"
]);

describe("properties in a constructor of a class of Person", () => {
  it("should return name", () => {
    expect(person.name).toEqual("Ryan");
  });

  it("should return age", () => {
    expect(person.age).toEqual(30);
  });

  it("should return the gender of Person", () => {
    expect(person.gender).toEqual("male");
  });

  it("return interests of my Person", () => {
    expect(person.interests).toEqual([
      "being a hardarse",
      "agile",
      "ssd hard drives"
    ]);
  });

  describe("function 'sayHello' in a class of Person", () => {
    let greeting = person.sayHello();

    it("should return greeting", () => {
      expect(greeting).toEqual(
        `Hello, my name is Ryan and I am a 30 year old male, My interests are being a hardarse,agile,ssd hard drives`
      );
    });
  });
});
