//TRUTH TABLE - two inputs A, B = Output

//TRUTH TABLE FOR "OR" AKA || (0==FALSE, 1==TRUE)
// A B
// =======
// 0 0 = 0 // "OR" - ONLY FALSE IF BOTH ARE FALSE
// 0 1 = 1
// 1 0 = 1
// 1 1 = 1

//TRUTH TABLE FOR "AND" AKA && (0==FALSE, 1==TRUE)
// A B
// =======              
// 0 0 = 0
// 0 1 = 0
// 1 0 = 0
// 1 1 = 1 // "AND" - ONLY TRUE IF BOTH ARE TRUE



// IF/SWITCH DEMO - EAST OR WEST
// | pipe, vertical-bar, broken bar, || or
city = "TPA"

if(city == "ATL" || city == "TPA"){
    zone = "EAST";
} else if(city == "PDX" || city == "SFO"){
    zone = "WEST";
} else if(city == "CHI" || city == "MSD"){
    zone = "MID";
}else{
    zone = "UNKNOWN";
}
console.log(zone);

switch(city){
    case "ATL":
    case "TPA":
        zone = "EAST";   break;
    case "PDX":
    case "SFO":
        zone = "WEST";   break;
    case "CHi":
    case "MSD":
        zone = "MID";    break;
    default: zone = "UNKNOWN";
}
console.log(zone);
//CONSOLE? TERMINAL?

//PAGE 91 SECTION 3-13
//EXERCISE 1
//DISPLAY THE SMALLEST OF THREE NUMBERS
a = 13
b = 3
c = 42
if(a <= b && a <= c){
    console.log(a);
}else if(b <= a && b<= c){
    console.log(b)
}else if(c <= a && c <= b){
    console.log(c)
}else{
    console.log("I beg ya pardon?")
}