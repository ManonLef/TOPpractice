class Task {
  constructor(task) {
    this.task = task;
    const completed = false;
    const due = ""
  }

  get taskDescription() {
    return `task: ${this.task}`
  }

  set taskDescription(description) {
    return this.task = description
  }

  set dueDate(date) {
    return this.due = date
  }

  set complete(caseS) {
    return this.completed = caseS;
  }

  set random(randomField) {
    return this.rando = randomField;
  }
}
