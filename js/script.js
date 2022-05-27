var iggy = 23;
var james = 25;
var calvin = 30;
var dax = 40;
var hector = 25;
var cera = 20;
var monolink = 25;
var sulta = 50;
var anfisa = 28;

var fest_day1 = 0;
var fest_day2 = 0;
var fest_day3 = 0;

fest_day1 = iggy + dax + monolink;
fest_day2 = james + hector + sulta;
fest_day3 = calvin + cera + anfisa;

console.log("On the first day of the festival, I was lucky to watch Iggy, DaxJ and Monolink.");
console.log("Then I watched the bands James Arthur, Hector Oaks, Denis Sulta on the second day and it cost me " + fest_day2 + " € in total that day.");

var total = fest_day1 + fest_day2 + fest_day3;
console.log("I was a bit tired on the third day but it was so much worth it to watch the bands Calvin Harris, Cera and Anfisa and I spent " + total + "€ for the three days of the festival.");

var discount = total * 0.7;
var saved = total * 0.3;
console.log("If I had booked the concert with enough time in advance, it would have cost me a total of " + discount + "€ and I would have saved " + saved + "€.");