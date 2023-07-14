//alert("Loading");
function addNewWEField() {
    //console.log("Adding New Field");

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter Here");

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQButton() {
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter Here");

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb)
}

function addNewSbutton() {
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("sField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter Here");

    let sOb=document.getElementById("s");
    let sAddButtonOb=document.getElementById("sAddButton");

    sOb.insertBefore(newNode,sAddButtonOb)
}

function addNewPPbutton() {
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("ppField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter Here");

    let ppOb=document.getElementById("pp");
    let ppAddButtonOb=document.getElementById("ppAddButton");

    ppOb.insertBefore(newNode,ppAddButtonOb)
}

function addNewCbutton() {
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("cField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter Here");

    let cOb=document.getElementById("c");
    let cAddButtonOb=document.getElementById("cAddButton");

    cOb.insertBefore(newNode,cAddButtonOb)
}
//generating CV
 function generateCV()
 {
    
    let namefield=document.getElementById("namefield").value;

    let nameT1=document.getElementById("nameT1");

    nameT1.innerHTML=namefield;

    document.getElementById("nameT2").innerHTML=namefield;
    //contact
    document.getElementById("contactT").innerHTML=document.getElementById(
        "contactfield"
        ).value;
    //address
    document.getElementById("addressT").innerHTML=document.getElementById(
        "addressfield"
        ).value;
        document.getElementById("fbT").innerHTML=document.getElementById(
        "fbField"
        ).value;
        document.getElementById("instaT").innerHTML=document.getElementById(
        "instaField"
        ).value;
        document.getElementById("linkedT").innerHTML=document.getElementById(
        "linkedField"
        ).value;

    //objective
    document.getElementById("objectiveT").innerHTML=document.getElementById(
    "objectiveField"
    ).value;

    //work experience
    let wes=document.getElementsByClassName("weField");

    let str="";

    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML=str;

    //Academic Qualifications
    let aqs=document.getElementsByClassName("eqField");

    let str1="";

    for (let e of aqs){
        str1+=`<li> ${e.value} </li>`;
    }
    
    document.getElementById("aqT").innerHTML=str1;

    //Skills
    let ss=document.getElementsByClassName("sField");

    let str2="";

    for (let e of ss){
        str2+=`<li> ${e.value} </li>`;
    }
    
    document.getElementById("sT").innerHTML=str2;

    //Projects
    let pps=document.getElementsByClassName("ppField");

    let str3="";

    for (let e of pps){
        str3+=`<li> ${e.value} </li>`;
    }
    
    document.getElementById("ppT").innerHTML=str3;

    //certificates
    let cs=document.getElementsByClassName("cField");

    let str4="";

    for (let e of cs){
        str4+=`<li> ${e.value} </li>`;
    }
    
    document.getElementById("cT").innerHTML=str4;

    //picture

    let file=document.getElementById("imgField").files[0];

    console.log(file);
    let reader=new FileReader()

    reader.readAsDataURL(file);
    console.log(reader.result);


    reader.onloadend=function() {
        document.getElementById("imgTemplate").src=reader.result;
    };

    document.getElementById("cv-form").style.display='none';
    document.getElementById("cv-template").style.display='block';

 }

 function printCV(){
    window.print();
 }