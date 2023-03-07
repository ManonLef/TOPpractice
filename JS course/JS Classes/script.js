/*
Me just playing around thinking of a way to organize habits into classes
- Create a habit which can be anything
- habits can go into different areas like:
  - hygiene
    - brush teeth 2x a day
    - brush teeth 3x a day
    - shower each day
  - food
    - eat veggies
    - eat greens
    - no takeout
  -health
    - walk for 30 minutes
    - workout
    - meditate
  - hobbies
    - draw daily


1. Habits:
  - description get and set

*/

class Habits {
  description;
  notes;
  category = "General";

  get description() {
    return `Description: ${this.description}`;
  }
  set description(description) {
    this.description = description;
  }

  get category() {
    return this.category;
  }

  constructor(generalHabit) {
    this.name = generalHabit;
  }
}

class Hygiene extends Habits {
  constructor(hygieneHabit) {
    super();
    this.subCategory = "Health";
    this.habit = hygieneHabit;
    this.goal
  }



  get hierarchy() {
    return super.category + " > " + this.subCategory;
  }
}

const brushTeeth = new Hygiene("brush teeth");
