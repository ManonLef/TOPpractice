class Habits {
  constructor(nom) {
    this.nom = nom
  }

}

class Hygiene extends Habits {

  category() {
    console.log(`General > ${this.nom}`)
  }

  constructor(subcat) {
    this.subcat = subcat
  }

  category() {
    
  }
}

const brushTeeth = new Hygiene("Brush Teeth");
brushTeeth.category();
// class Habits {
//   description;
//   notes;
//   category = "General";
//   subCategory;

//   get description() {
//     return `Description: ${this.description}`;
//   }
//   set description(description) {
//     this.description = description;
//   }

//   get category() {
//     return this.category;
//   }

//   get subCategory() {
//     return this.subCategory;
//   }
// }

// class Hygiene extends Habits {
//   constructor(hygieneHabit) {
//     super();
//     hygieneHabit;
//     this.goal;
//     this.subCategory = "Health";
//   }

//   get habit() {
//     return `Habit: ${hygieneHabit}`;
//   }
//   set habit(habit) {
//     hygieneHabit = habit;
//   }

//   get subCategory() {
//     return `${subCategory}`;
//   }

//   get hierarchy() {
//     return this.category + " > " + this.subCategory;
//   }
// }

// const brushTeeth = new Hygiene("brush teeth");
