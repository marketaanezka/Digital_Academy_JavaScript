//--------------------PES-------------------
const dog = {
  name: "Balto",
  furColor: "black",
  furLengthCm: 5,
  bark() { console.log("Wuf wuf") },
  growl() { console.log("Grrrrrr") },
  tear() { console.log("dfkghdfl") }
}

//----------------------SEZNAMKA-------------------

const profil = {
  name: "Marketa",
  age: 26,
  hobby: "play the piano",
  eyeColor: "green",
  hairColor: "dark",
  favouritDrink: "Daiquiri",
  introduction() {
    return `Hi, my name is ${this.name} I am ${this.age} yo, \n I have ${this.eyeColor} eyes, ${this.hairColor} hair. \n I like to ${this.hobby} \n and my favourite drink is ${this.favouritDrink}`
  },
}

//----------------POZEMKY -----------------------
/*
const Estate = {
  area: function () {
    return this.width * this.height
  },
  border: function () {
    return (this.width + this.height) * 2
  },
  price: function () {
    return this.area() * this.m2Price;
  }
}

const estate1 = {
  width: 120,
  height: 50,
  m2Price: 2500,
  __proto__: Estate,

};

const estate2 = {
  width: 5,
  height: 2,
  m2Price: 40,
  __proto__: Estate,
};
*/

//----------------------HODINY----------------------

const Clock = {
  hourUp: function () {
    this.hours += 1;
    if (this.hours === 24) {
      this.hours = 0;
    };
    console.log(this.hours);
  },
  hourDown: function () {
    this.hours -= 1;
    if (this.hours === -1) {
      this.hours = 23
    };
    console.log(this.hours);
  },
  minuteUp: function () {
    this.minutes += 1;
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours += 1;
    }
    if (this.hours === 24) {
      this.hours = 0;
    };
    console.log(this.minutes);
  },
  minuteDown: function () {
    this.minutes -= 1;
    if (this.minutes === -1) {
      this.minutes = 59;
      this.hours -= 1
    }
    if (this.hours === -1) {
      this.hours = 23;
    };
    console.log(this.minutes);
  },
  
  show: function () {
    if (this.minutes < 10) {
    this.minutes = this.minutes.toString().padStart(2, '0');}
    console.log(`Current time is: ${this.hours}:${this.minutes}`)
  }
}

const currentTime = {
  hours: 5,
  minutes: 00,
  __proto__: Clock,
} 
const midnight = {
  hours: 0,
  minutes: 0,
  __proto__: Clock,
} 
const minuteToMidnight = {
  hours: 23,
  minutes: 59,
  __proto__: Clock,
} 



//------------------KONSTRUKCE OBJEKTU------------------

const Estate = {
  constructor: function (width, height, m2Price) {
    this.width = width;
    this.height = height;
    this.m2Price = m2Price;
  },
  area: function () {
    return this.width * this.height
  },
  border: function () {
    return (this.width + this.height) * 2
  },
  price: function () {
    return this.area() * this.m2Price;
  }
}

const estate1 = Object.create(Estate);
estate1.constructor(150,200,4500);


const estate2 = Object.create(Estate);
estate2.constructor(5, 3, 3);


// ------------------ HODINY 2 ---------------------