class Living {
  #details

  constructor(detail) {
   this.#details = detail
  }


  get dets() {
    return `this is a ${this.#details}`;
  }

  set dets(msg) {
     return this.#details = msg
  }
}

const human = new Living("human")
console.log(human.dets);
console.log(human)

