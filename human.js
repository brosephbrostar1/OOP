function display(content){
    console.log(content)
}



// define functions
class amataLover{
    constructor(name, age, color){
    this.myName = name;
    this.myAge = age;
    this.favColor = color;
    }
    name(){
        return "My name is " + this.myName + ".";
    }
    age(){
        return "My age is " + this.myAge + ".";
    }
    color(){
        return "My favorite color is " + this.favColor + ".";
    }
}

// define parent class
class amataIndifferent extends amataLover {
    constructor(name, age, color){
        super(name, age, color);
        this.favActivity = "drawing";
    }
    activity(){
        return "My favorite activity is " + this.favActivity + "!"
    }
};


// child class
// instantiate yourself from the child class

let paityn = new amataIndifferent("Paityn", "16", "purple")

display(paityn.name());
display(paityn.age());
display(paityn.color());
display(paityn.activity());