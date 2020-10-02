// var a="78lohith";
// var b="Bhargav";
// document.write(parseInt(a)+parseInt(b));
// console.log("Hello");


//creating Objects


var details={
	name:"D. Lohith",
	email:"dlohithbhargav28@gmail.com",
	experience:"1 yr in Rpa",
	courses:["Java","Rpa","Servlet","HTML","CSS"]
}


//for loop for object

for(var i=0;i<details.courses.length;i++){
	document.write(details.courses[i]+"<br>")
}
document.write(details.name,"<br>");

//for-in loop

var a="Apssdc React";
for(var i in a){
	document.writeln(a[i]+"<br>");
}


for(var i in details){
	document.write(details[i]+"<br>")
}


//for of loop we use can only string, arrays not the object

	for(var i of details.courses){
		document.writeln(i);
	}

var s="123456";

for(var i of s){
	document.write(i);
}

//user defined functions

function add(){
	var details={
		name:"D.Lohith",
		email:"dlohithbhargav28@gmail.com",
		experience:"1 yr in RPA",
		courses:["Java","Rpa","Servlet"]
	}

	for(var i in details){
		document.write(details[i]+"<br>")
	}
}
add();
add();

function Change(){
	var b=document.getElementById("para");
	b.textContent="hello";
}


// Arrow function

// function sai(a,b){
// 	alert(a+b);
// }
// sai(99,1);

// var sai=(a,b)=>{
// 	alert(a-b);
// }
// sai(40,5);

//if function without params
// ()=>{}

//difference between var,let,const

var r1=10;
var r1=40; //reAssign
document.write(r1,"<br>");
{
	var r1=20;
	document.write(r1,"<br>");
}
document.write(r1,"<br>");

let r=10;
{
	let r=20;
	document.write(r,"<br>");
}
document.write(r,"<br>");

const r2=10;
{
	const r2=20;
	document.write(r2,"<br>");
}
document.write(r2,"<br>");

// example for class
class Square{
	super();
	constructor(height,width){
		this.h=height;
		this.w=width;
	}
}
var a=new Square("40cm","40cm")
document.write(a.h);


// Rest and Spread (..paaram name)

// Rest paremeter(...paramname)

// function addition(p1,p2,...s){
// 	document.write(p1+p2,"<br>")
// 	document.write(s[5]);
// }
// addition(1,2,3,4,5,6,7,8,9);


//spread parameter(...paramname)

// const array1=[1,2,3];
// const array2=[...array1];
// array2.push(4,5,6,7);
// document.write(array2);


// var n=["a","b","c","c"];
// var[name1,name2,name3]=n;
// document.write(name3);

//interpolation
var n=1;
var n=[4.5,5,6,7,897];
var n="i have the number";
var m=`i have the number ${n}`;
document.write(m);

var n=~i am 

good boy~;
document.write(n);