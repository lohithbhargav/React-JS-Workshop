// XMLHttpRequest(AJAX Call)

// var getJson=(file,callback)=>{
// var xhr_req = new XMLHttpRequest();
// xhr_req.overrideMimeType("application/json");
// xhr_req.open("GET",file,true);
// xhr_req.onreadystatechange=/*function*/()=>{
// 	if(xhr_req.readyState===4 && xhr_req.status===200){
// 		callback(xhr_req.responseText);
// 	}
// }
// xhr_req.send();
// }

// passing data to function

// getJson("./Data/dynamicdata.json",/*function*/(text)=>{
// var d=JSON.parse(text);
// console.log(d);
// t_details(d.details);
// d_trainers(d.trainers);
// d_trainees(d.trainees);
// })

// fetch and promises api
var getJson=(file)=>{
	return new Promise((resolve,reject)=>{
		return fetch(file).then(reponse=>{
			if(reponse.ok){
				resolve(reponse.json());
			}else{
				reject(new Error("error"))
			}
		})
	})
}


getJson("./Data/dynamicdata.json").then(d=>{
	console.log(d);
	t_details(d.details);
	d_trainers(d.trainers);
	d_trainees(d.trainees);
})

var main=document.querySelector("#parent-div");
var child=document.createElement("div");

child.classList.add("child");

// child.textContent="Details of Training Program";




var h1=document.createElement("h1");
h1.textContent="Details of Training Program";
child.appendChild(h1);
main.appendChild(child);
var t_details=(SDC)=>{

	var image=document.createElement("img");
	image.src=SDC.image;
	image.alt="apssdc-image";
	child.appendChild(image);

	var n=document.createElement("h1");
	n.textContent=SDC.name;
	n.setAttribute("id","name");
	child.appendChild(n);

	var n1=document.createElement("h1");
	n1.textContent=SDC.attendedcount;
	n1.setAttribute("id","attendedcount");
	child.appendChild(n1);

	var h2=document.createElement("h1");
	h2.textContent="Content of Training Program";
	child.appendChild(h2);
	h2.appendChild(document.createElement("hr"));

	var ul=document.createElement("ol");
	for (var i = 0; i < SDC.content.length; i++) {
		var li=document.createElement("li");
		li.textContent=SDC.content[i];
		ul.appendChild(li);
	}
	child.appendChild(ul);
}


var d_trainers=(t)=>{
	var child=document.createElement("div");
	child.classList.add("child");
	var h1=document.createElement("h1");
	h1.textContent="Details of Trainers";
	child.appendChild(h1);

	main.appendChild(child);
	h1.appendChild(document.createElement("hr"));
	for (var i in t) {
		var h1=document.createElement("h1");
		h1.textContent=t[i].name;
		child.appendChild(h1);
		var p=document.createElement("p");
		p.textContent=t[i].email;
		child.appendChild(p);
		var ul=document.createElement("ul");
		for (var j in t[i].courses) {
			var li=document.createElement("li");
			li.textContent=t[i].courses[j];
			ul.appendChild(li);
		}
		child.appendChild(ul);
	}
}


var d_trainees=(clg)=>{
	var child=document.createElement("div");
	child.classList.add("child");
	var h1=document.createElement("h1");
	h1.textContent="Details of Trainees";
	h1.appendChild(document.createElement("hr"));
	child.appendChild(h1);
	main.appendChild(child);
	
	var table=document.createElement("table");
	var row="";
	for(var i in clg){
		row +="<tr><td>"+clg[i].college+"</td><td>"+clg[i].count+"</td><td>"+clg[i].district+"</td><td>"+clg[i].grade+"</td></tr>";
	}
	table.innerHTML=row;
	child.appendChild(table);
}
