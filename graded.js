let paras_by_tag = document.getElementsByTagName("p");
console.log(paras_by_tag[0].innerText);

let paras_by_class = document.getElementsByClassName("special");
console.log(paras_by_class[0].innerHTML);

let paras_by_id = document.getElementById("first");
console.log(paras_by_id.innerHTML);

let special_by_select = document.querySelector("p.special");
console.log(special_by_select.innerHTML);

let special_by_selectAll = document.querySelectorAll("p.special");
for (let eachElement of special_by_selectAll){
    console.log(eachElement.innerHTML);
}

let h1_els = document.getElementsByTagName("h1");
h1_els[0].style.color = "blue";

let last_p = document.getElementById("last");
last_p.style.color = "yellow";