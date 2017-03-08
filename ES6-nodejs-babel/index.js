// let type = 'grizzly'
//
// while(true) {
//   let type = 'polar'
//   console.log(type)
//   break
// }
// console.log(type)

// const PI = Math.PI
// PI = 342

// class Bear {
//   constructor () {
//     this.type = 'bear'
//   }
//
//   says(say) {
//     console.log(this.type + ' says ' + say)
//   }
// }
//
// class Grizzly extends Bear {
//   constructor () {
//     super()
//     this.type = 'Grizzly'
//   }
// }
//
// let bear = new Grizzly()
// bear.says('growl')

// let bears = ['polar', 'koala'].filter((bear) => {
// return bear !== "koala"
// })
// console.log(bears)

// class Bear {
//   constructor () {
//     this.type = 'bear'
//   }
//   says(say) {
//     setTimeout(() => {
//       console.log(this.type + ' says ' + say)
//     }, 1000)
//   }
// }
// var bear = new Bear()
// bear.says()

// let bears = `
// polar
// grizzly
// `
// console.log(bears)

// let bear = 'grizzly'
// let says = 'growl'
// console.log(`The ${bear} says ${says}`)

// let bear = 'grizzly'
// let says = 'growl'
// let zoo = { bear, says} // Creating object { bear:"grizzly", says:"growl"}
// console.log(zoo)

// let grizzly = { type: 'grizzly', many: 2}
// let {type, many} = grizzly
// console.log(many, type)

// function Bear(type='Grizzly') {
//   console.log(type)
// }
// Bear()

function Bears(...types) {
  console.log(types)
}
Bears('polar', 'grizzly', 'brown')

var bob = {
  _name: "Bob",
  _friends: ['John', 'Kevin', 'Jack'],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};
bob.printFriends()
