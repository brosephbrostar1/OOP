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

function stealth(stealth){
    return stealth + " means r/woosh";
}

function weapon(weapon){
    return weapon + " is shuriken";
}

function clothes(clothes){
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

    stealth(stealth){
        return stealth + " means r/woosh";
    },
    
    weapon(weapon){
        return weapon + " is shuriken";
    },
    
    clothes(clothes){
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

    stealth(){
        return this.stealth + " means r/woosh";
    }

    weapon(){
        return this.weapon + " is shuriken";
    }

    clothes(){
        return this.clothes + " are all black baby";
    }
}
// OOP inheritance objects inheriting properties and methods from the classes
// they were instantiated from
// let sasuke = new ninjaGod("sasuke", "v high","rubber duck", "robes? nah, they")

// display(sasuke.name());
// display(sasuke.ninja1());
// display(sasuke.ninja2());
// display(sasuke.ninja3());

// OOP Polymorphism: overrides shared behaviors from the parent/what its inheriting from

class UchihaGod extends ninjaGod {
    constructor(name, stealth, weapon, clothes){
        super(name, stealth, weapon, clothes)
        this.village = "Hidden Leaf";
    }

    combo(){
        return "activate: " + super.weapon() + " combo with " + super.stealth()
    }
};

let sasuke = new UchihaGod("sasuke", "v high","rubber duck", "robes? nah, they")

