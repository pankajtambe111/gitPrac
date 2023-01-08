//------------------ javascript clock-------------------------

/*
function gttime(){
var tday= new Date();
var hrs=tday.getHours();
var min=tday.getMinutes();
var sec= tday.getSeconds();
var mili= tday.getMilliseconds();

var theday= tday.getDay();
var days= ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"]


var prep=(hrs>=12)? "PM":"AM"
document.getElementById("disp").innerHTML=hrs + " : " + min + " : "+ sec + " : " + mili;

document.getElementById("disp2").innerHTML= days[theday];


//console.log(hrs + " "+ prep + " : " + min + " : "+ sec + " : " + mili);

}

setInterval(gttime, 1);


*/


/*
function animate_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}

*/
/*

//Rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.


	var element=document.getElementById("target");
	var txt= element.textContent;
	function movetxt(){	

	txt= txt[txt.length -1] + txt.substring(0, txt.length - 1);
	element.textContent=txt;
}


	setInterval(movetxt, 500);

*/


//-----------------------------------------------------------------------------------
//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar

/*
var inp= prompt("please enter the year");


if (inp % 4==0 && (inp%100 !=0|| inp % 400==0))
{
	document.getElementById("disp").innerHTML="Leap year";
}
else
{
	document.getElementById("disp").innerHTML="Not a Leap year";
}
*/



//-----------------------------------------------------------------------------------

//Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

/*
for (var year=2000; year<=2050; year++)
{
	var d= new Date(year, 0, 1);
	if (d.getDay()==0)
	{
		console.log("The year "+year+" has Sunday on 1st January");
	}

}
*/


//-----------------------------------------------------------------------------------

/*Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then 
prompted to input a guess number. If the user input matches with guess number, 
the program will display a message "Good Work" otherwise display a message "Not matched"*/

/*
var pBox= prompt("Enter any number between 1 to 10");

var rNum= Math.ceil(Math.random()*10);

var x= (pBox==rNum)? console.log("Match found! Good work") : console.log("Not Matched");
console.log("computer genereted: " +rNum+ " and "+ "Your Guess : "+ pBox);
*/
/*
function diff(n){

	if (n<=13)
	{
		return 13-n;
	}
	else
	{
		return n-13;
	}
}

console.log(diff(3));

*/
//-----------------------------------------------------------------------------------
//Calculate number of days left until next Christmas

/*

var today=new Date();
var cmas=new Date(today.getFullYear(), 11, 25);

if(today.getMonth()==11 && today.getDate()>25)
{
	cmas.setFullYear(cmas.getFullYear()+1);
}

var oneday= 1000*60*60*24;
console.log(Math.ceil((cmas.getTime()- today.getTime())/(oneday)))


*/

//-----------------------------------------------------------------------------------

// detect extension of file

/*

var d= "nap.php";
console.log(d.split(".").pop();

*/

//-----------------------------------------------------------------------------------

//Write a JavaScript program to create a new string adding "Py" in front of a given string. 
//If the given string begins with "Py" then return the original string.

/*
function chkString(str){

if ((str==null) || (str==undefined) || (str.substring(0,2)=="pi"))
	{
		return str;
	}
	else
	{

		return "pi"+str;
	}
	

}

console.log(chkString("rates of caribbean"));

*/

//-----------------------------------------------------------------------------------
//Remove a character at the specified position of a given string and return the new string
/*
function removeChar(str, pos){

	var str1= str.substring(0, pos);
	var str2= str.substring(pos+1, str.length);

	var newString= str1+str2;
	console.log(newString);
}

removeChar("pankaj", 2);

*/
//-----------------------------------------------------------------------------------
//Remove a word at the specified position of a given string and return the new string


/*
function removePatch(sent, wordPos){

	var sentSplit= sent.split(" ");
	var part1=sentSplit.slice(0,wordPos);
	var part2=sentSplit.slice(wordPos+1, sentSplit.length)
	var combine= (part1.concat(part2)).toString();
	var result= combine.replace(/,/g, " "); // global match replace all "," by " ". coz replace method act on first occurence only
	console.log(result);


}

removePatch("this city is mumbai and i love this place", 3);

//-----------------------------------------------------------------------------------
*/
 //Write a JavaScript program to check if a string "Script" presents at 5th (index 4) position in a given string, 
 //if "Script" presents in the string return the string without "Script" otherwise return the original one.



/*
function splitter(sent){

var sp=sent.split(" ");

if (sp[4]=="string"){

	var part1= sp.slice(0,4);
	var part2= sp.slice(5, sp.length);

	var combine= (part1.concat(part2)).join(" ");
	//var res= combine.replace(/,/g, " ")

	console.log(combine + " (modified sentence)");
	}

	else
	{
		console.log(sent);
	}
}

splitter("This is example of string method");
splitter("This is not an example of string method");

*/

/*
//-----------------------------------------------------------------------------------

function greater(a, b, c){

	if ((a>b)&&(a>c))
	{
		console.log(a +" is greater.")
	}
	else if ((b>a)&&(b>c))
	{
	console.log(b +" is greater");
	}
	else
	{
		console.log(c +" is greater")
	}

}

greater(55,60,90);

*/
//-----------------------------------------------------------------------------------

// Write a JavaScript program to find a value which is nearest to 100 from two different given integer values. 

/*

function near100(a, b){


	if (Math.abs(100-a) == Math.abs(100-b))
	{
		console.log("Both are near to 100");
	}
	else if (Math.abs(100-a) < Math.abs(100-b))
	{
		console.log(a +" is near to 100");

	}
	else
	{
		console.log(b +" is near to 100");
	}


}

near100(201,-1);

*/
//-----------------------------------------------------------------------------------

//Write a JavaScript program to reverse a given string

/*
var str="pankaj Tambe"
var revstr= str.split("").reverse().join("")
console.log(revstr);

*/
//--------
//without using any array method

/*
function rev(str){

	var i= str.length;
	var newStr="";
	for (var j=i-1;j>=0;j--)
	{
		newStr=newStr+str.charAt(j);

	}
	console.log(newStr);
	
}

rev("pankaj")
*/
//-----------------------------------------------------------------------------------
//Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

/*

function LetterChanges(str) {

 var alpha = "abcdefghijklmnopqrstuvwxyz";
 var new_str = "";

  for (var i = 0; i < str.length; i++)
  {
    aindex = alpha.indexOf(str[i]);
    if (aindex === 25)
    {
      new_str = new_str + "a";
    } 
    else if (aindex === -1) 
    {
      new_str = new_str + str[i];
    } 
    else
    {          
      new_str = new_str + alpha[aindex + 1];
    }
  }
  
  return new_str;
}

console.log(LetterChanges("abcd"));
console.log(LetterChanges("w3resource"));

*/

//-----------------------------------------------------------------------------------
//Write a JavaScript program to capitalize the first letter of each word of a given string. 

/*
 function firstCapital(str){


	var sp= str.split(" "), res;
	for(var i=0; i<sp.length; i++)
	{
		sp[i]=sp[i][0].toUpperCase() + sp[i].substr(1);
		res=sp.join(" ");
		
	}
	console.log(res);

}
firstCapital("india is my country")

*/

//-----------------------------------------------------------------------------------
//Write a JavaScript program to convert a given number to hours and minutes. 

/*
function convertTime(t){

	var hrs= Math.round(t / 60);
	var mins= (t % 60);
	
	console.log("the time is "+ hrs +" Hours and " + mins +" Minutes");
}

convertTime(246);
*/

//-----------------------------------------------------------------------------------

//Write a JavaScript program to convert the letters of a given string in alphabetical order.

/*
function alphaOrder(s){

	var uniformText=s.toLowerCase();
	var inOrder= uniformText.split("").sort().join("");
	console.log(inOrder);
}
 alphaOrder("Pankaj5613");

*/
//-----------------------------------------------------------------------------------

//Count the number of vowels of a given string
/*
function replacing(s){

 var cnt= s.replace(/[^aeiou]/g, "").length;
console.log(cnt)

}
replacing("india is");
*/

//-----------------------------------------------------------------------------------

//Write a JavaScript program to check if a given string contains equal number of p's and t's present.

/*
function equal_pt(str)
{ 
  var str_p = str.replace(/[^p]/gi, "");

  var str_s = str.replace(/[^s]/g, "");

  var p_num = str_p.length;
  var s_num = str_s.length;

  return p_num === s_num;
         
}
console.log(equal_pt("Ppaatpss"));

*/
//-----------------------------------------------------------------------------------

//Divide two positive numbers and return a string with formatted commas

/*
function division_string(n1, n2) {
  
  if (n1<=0 || n2<=0)
    return false;

    var div = Math.round(n1 / n2).toString(),
        result_array = div.split("");

    if (div >= 1000)
       {
        for (var i = div.length - 3; i > 0; i -= 3) 
        {
            result_array.splice(i, 0, ",");
        }
    }

console.log(division_string(1300000,2));
console.log(division_string(13000000,2));

*/

//-----------------------------------------------------------------------------------
//Create a new string of specified copies of a given string

/*
function string_copies (str, n) 
{
  if (n < 0)
    return false;
  else
  return str.repeat(n);
}
console.log(string_copies("abc", 5));
console.log(string_copies("abc", 0));
*/



//-----------------------------------------------------------------------------------
//Create a new string of 4 copies of the last 3 characters of a given original string

/*
function newstring(str)
{
  if (str.length >= 3) {
    result_str = str.substring(str.length - 3);
    return result_str.repeat(4);
  }
  else
    return false;
}
console.log(newstring("Python 3.0"));
*/

//-----------------------------------------------------------------------------------
/*Write a sum method which will work properly when invoked  using either syntax below. 
console.log(sum(2,3)); // Outputs 5 console.log(sum(2)(3)); // Outputs 5 */


/*

function sum(x, y) {
  if (y !== undefined) {
    return x + y;
  } else {
    return function(y) { return x + y; };
  }
}

*/

/*
function sum(a){
  function add(b){
    return a+b;
  }
  return add; // Return the function itself, not its return value.
}


console.log(sum(3)(2));


*/
//-----------------------------------------------------------------------------------

//Generates all combinations of a string

/*

function getCombi(text){

	var result= [];
	for (var i=0; i<text.length;i++)
	{
		var resLength= result.length;

		for(var j=0;j<resLength;j++)
		{
			result.push(text[i]+ result[j]);
		}
		result.push(text[i]);
	}
	return result;
}

console.log(getCombi("pan"))

*/

//-----------------------------------------------------------------------------------

//prototype inhertance

/*
let Car = function (color){
	this.color=color;
	this.getcolor= function(){
		return color;
	}
}

let blueCar= new Car("blue")
let redCar= Object.create(Car.prototype);
console.log(redCar.color);
console.log(blueCar.color);
console.dir(redCar);
console.dir(blueCar);

let ToyCar= function(){

}

ToyCar.prototype= Object.create(Car.prototype);

let legoCar= new ToyCar();

console.dir(legoCar);

console.dir(Object.prototype.isPrototypeOf(Car)) ;

*/

/*
let toyota={
	
	drive(){
		this.name="pankaj ";		
		return this.name + 'driving toyota';
	}
}

let fortuner={

	drive(){
		this.name="akash ";
		return 'driving fortuner';
	}
}

//Object.setPrototypeOf(fortuner, toyota)
console.dir(fortuner);
console.log(toyota.drive.call(fortuner));

*/

//-----------------------------------

//Fabonaci Series 

/*
function fab(d){
var a=0; var b=1,c=0;

while(b<=d){

	console.log(c);
	c=a+b;
	a=b;
	b=c;
}
}

fab(8)

*/

//---------------------------Prime Number------------

/*

var count=0;
for (var i=256; i<=628; i++)
{
	counter=0;

	for (var j=1;j<=i; j++)
	{
		if (i%j==0)
		{
			counter++;
		}
	}

	if (counter==2)
	{
		console.log(i);
	}
}

*/

// write a program if value entered is not equal to value in array then return false

/*
var arr=["()","{}","[]"];
var inp=prompt("enter 2 characters");
var x= inp.toString();

if (arr.indexOf(x)<0)
{
		console.log("invalid");
}
else
{
		console.log("valid");
}

*/

//longest pelindrome in given string

/*
function isPalindrome(s) {
  var rev = s.split("").reverse().join("");
  return s == rev;
}

function longestPalind(s){
  var maxp_length = 0,
	  maxp = '';
	
  for(var i=0; i < s.length; i++) {
	var subs = s.substr(i, s.length);
	  
	for(var j=subs.length; j>=0; j--) {
	  var sub_subs = subs.substr(0, j);
	  if (sub_subs.length <= 1)
		  continue;
		
      //console.log('checking: '+ sub_subs);
      if (isPalindrome(sub_subs)) {
		//console.log('palindrome: '+ sub_subs);
		if (sub_subs.length > maxp_length) {
			maxp_length = sub_subs.length;
			maxp = sub_subs;
		}
	  }
	}
  }
	
  //console.log(maxp_length, maxp);
  return maxp;
}

console.log(longestPalind("abcxyzyxabcdaaa"));


*/

//----------------------------------------------------------------------------------------------------

// Pollyfill for bind
/*
let person = {
    firstName: 'pankaj',
    lastname: 'tambe'
}


var printFn= function(city, state, country){
    console.log(this.firstName +" "+ this.lastname+" "+ city +" "+ state +" "+ country)
}


Function.prototype.customBind = function(...person){
    var funObj = this;
    otherParam = person.slice(1);
    return function(...args2){
        funObj.apply(person[0], [...otherParam, ...args2]);
    }
}


var printBindFn = printFn.customBind(person, 'mumbai', 'MH');
printBindFn('india');

*/
//----------------------------------------------------------------------------------------------

// Debouncer

/*
counter =0;
var logger = ()=>{
    console.log('typed..', counter++);
}
var debouncer = function (fn, wait){
    var timer;
    return function(){
        var context= this;
        args = arguments;
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(context, arguments)
        }, wait)
    }
}

var requiredFn = debouncer(logger, 500)

*/

//----------------------------------------------------------------------------------------------
// Throttling
/*
const loggerFunc = () => {
	console.count("Throttled Function");
  }
  
  const throttle = (fn, limit) => {
	let flag = true;
	return function(){
	  let context = this;
	  let args = arguments;
	  if(flag){
		fn.apply(context, args);
		flag = false;
		setTimeout(() => {
		  flag=true;
		}, limit);
	  }
	}
  }
  
  const betterLoggerFunction = throttle(loggerFunc, 1000);
  
  window.addEventListener("resize",betterLoggerFunction);


  */
  //-------- test ends with -----------

  /*
var p = 'Pankaj Tambe'
var res= p.endsWith('Tambe') 
console.log(res)

*/
//--------------------------------


/*
arr1=[2,3,5,6,8, -9, -75]


function revArr(arr){
	sum=[];
	badData=[];
	for(i=arr.length-1; i>=0; i--){	
		if(arr[i]>0)
		{
			sum.push(arr[i]);
		}else{
			badData.push(arr[i]);
		}
			
	}
	return [sum, badData];
}

*/

/*
var t= 'How to remove spaces  from    '
console.log(t.trim().split(" ").join(''))
*/
"use sctict"

function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

console.log(foo1());
console.log(foo2());

