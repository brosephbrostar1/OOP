// create a function that console logs any parameter/argument given
function display(content){
    console.log(content);
}

// create a function that takes a name/string as a parameter
// and returns "hi, my name is " parameter given
function name(name){
    return "hi, my name is " + name + ".";
}


display(name("john"));


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

display(name("norto"));
display(ninja1("stealth"));
display(ninja2("weapon"));
display(ninja3("clothes"));


