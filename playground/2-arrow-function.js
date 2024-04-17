// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(2))

const eventParty = {
  name: "Birthday party",
  guestList: ["Person 1", "Person 2", "Person 3"],
  //   printGuestList: function () {
  //     console.log("Guest List for " + this.name);
  //   },
  printGuestList() {
    console.log("Guest List for " + this.name);
    this.guestList.forEach((guest) => {
      console.log(guest + " is attending " + this.name);
    });
  },
};
eventParty.printGuestList();
