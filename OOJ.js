// create a function that console logs any parameter/argument given
function display(content){
    console.log(content);
}

// create a function that takes a name/string as a parameter
// and returns "hi, my name is " parameter given
function name(name){
    return "hi, my name is " + name + ".";
}

// create 3 functions that describe the powers of a ninja
// that you'd like to create

function ninja1(stealth){
    return stealth + " means r/woosh";
}

function ninja2(weapon){
    return weapon + " is shuriken";
}

function ninja3(clothes){
    return clothes + " are all black baby";
}

// display(name("norto"));
// display(ninja1("stealth"));
// display(ninja2("weapon"));
// display(ninja3("clothes"));

// object oreiented programming
// --incapsulation
// --

// OOP incapsulation: grouping all behavior inside an object
const ninja = {
    name(name){
        return "hi, my name is " + name + ".";
    },

    ninja1(stealth){
        return stealth + " means r/woosh";
    },
    
    ninja2(weapon){
        return weapon + " is shuriken";
    },
    
    ninja3(clothes){
        return clothes + " are all black baby";
    },
}

// display(ninja.name("norto"));
// display(ninja.ninja1("stealth"));
// display(ninja.ninja2("weapon"));
// display(ninja.ninja3("clothes"));

// create a class for instantiating ninjas
// OOP abstraction: hiding complexity
class ninjaGod{
    constructor(name, stealth, weapon, clothes){
        this.nameInsideNinjaGod = name;
        this.stealth = stealth;
        this.weapon = weapon;
        this.clothes = clothes;
    }

    name(){
        return "hi, my name is " + this.nameInsideNinjaGod
    }

    ninja1(){
        return this.stealth + " means r/woosh";
    }

    ninja2(){
        return this.weapon + " is shuriken";
    }

    ninja3(){
        return this.clothes + " are all black baby";
    }
}
  
let sasuke = new ninjaGod("sasuke", "v high","rubber duck", "robes? nah, they")

display(sasuke.name());
display(sasuke.ninja1());
display(sasuke.ninja2());
display(sasuke.ninja3());