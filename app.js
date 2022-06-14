
// Question no# 01 
var a = prompt("Enter your First name ");
var b = prompt("Enter your Second name ");
var fullName = (a  + b);
document.write("Asalam-o-Alaikum " + fullName, "<br>");


// Question no# 02 
var mob = prompt("Enter your favorite mobile phone with model");
document.write("Your favorite phone is:" + mob, "<br>");
document.write("Length of String:" + mob.length, "<br>");

// Question no# 03 
var text = "Pakistani";
for (i = 1; i < text.length; i++){
    if (text.charAt(i) === "n"){
        document.write("String:" + text, "<br>");
        document.write("index of 'n': " + i, "<br>");
    }
}


// Question no# 04 
// var world = "Hello World";
// var lastWorld = world.charAt(world.length - 1);
// document.write(lastWorld);



// Question no# 05 
var index = "Pakistani";
var index2 = index.charAt(3);
document.write("String:" + index, "<br>")
document.write("Character at index 3:" + index2, "<br>");



// Question no# 06 
var firstName = "Uzair ";
var lastName = "Malik";
var fullName = firstName + lastName;
document.write(fullName + " FullName using string concat() method.", "<br>");



// Question no# 07 
var city = "Hyderabad";
var city2 = city.replace("Hyderabad", "Islamabad");
document.write("City: " + city, "<br>");
document.write("After replacement: " + city2, "<br>");



// Question no# 08 
var message = "Yahya and Yazan are best friends. They play cricket and football together.";
var message2 = message.replace(/and/g, "&");
document.write("Message: " + message, "<br>");
document.write("After replacement: " + message2, "<br>");




// Question no# 09 
// var no1 = "123";
// var no2 = parseInt(no1);
// document.write(no1.value(), "<br>");
// document.write(no1.type(), "<br>");
// document.write(no2.value(), "<br>");
// document.write(no2.type(), "<br>");



// Question no# 10 
var url = prompt("Enter eb url. e.g: www.google.com");
var url2 = "";
document.write(url2);



// Question no# 11 
var fruit = prompt("Enter your favorite Fruit name");
document.write("User input: " + fruit, "<br>");
var fruit2 = fruit.toUpperCase();
document.write("UpperCase: " + fruit2, "<br>");



// Question no# 12 
var dryFruit = prompt("Enter your favorite DryFruit name in UpperCase format");
document.write("User input: " + dryFruit, "<br>");
var dryFruit2 = dryFruit.toLowerCase();
document.write("LowerCase: " + dryFruit2, "<br>");




// Question no# 13 fnrom String Assignment
var inix = prompt("Write any Number");
var inix2 = parseInt(inix);
alert(inix2);



// Question no# 14 fnrom String Assignment
var number = 35.36;
var number2 = number.toString();
document.write("Number: " + number, "<br>");
document.write("Result: " + number2 * 100, "<br>");



// Question no# 15 fnrom String Assignment
var x = "4";
var y = "4";
var z = x + y;
document.write("x is " + x, "<br>");
document.write("y is " + y, "<br>");
document.write("x + y is " + z, "<br>");



// Question no# 16 fnrom String Assignment
var d = "9";
var e = "9";
var f = parseInt(d) - parseInt(e);
document.write("d is " + d, "<br>");
document.write("e is " + e, "<br>");
document.write("d - e is " + f, "<br>");











