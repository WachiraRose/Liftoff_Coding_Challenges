/* Older than Me
    Create a method in the Person class which returns how another person's age compares. 
    Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:
            {other person name} is {older than / younger than / the same age as} me.*/


class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  // method to answer question
    compareAge(otherPerson) {
      if (otherPerson.age > this.age) {
        return `${otherPerson.name} is older than me.`;
      } else if (otherPerson.age < this.age) {
        return `${otherPerson.name} is younger than me.`;
      } else {
        return `${otherPerson.name} is the same age as me.`;
      }
    }
  }

  // Using the example given

  const p1 = new Person("Samuel", 24);
  const p2 = new Person("Joel", 36);
  const p3 = new Person("Lily", 24);
  
  console.log(p1.compareAge(p2)); // Output: "Joel is older than me."
  console.log(p2.compareAge(p1)); // Output: "Samuel is younger than me."
  console.log(p1.compareAge(p3)); // Output: "Lily is the same age as me." 
  