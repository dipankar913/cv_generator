function addNewlanguage(){
    // console.log("Enter new language");

    let newNode = document.createElement("input");
    newNode.setAttribute("type",'text');
    newNode.setAttribute("placeholder",'Enter here');
    newNode.classList.add("form-control");
    newNode.classList.add("languageField");
    newNode.classList.add("mt-2");
   
   
 


    let languageObj = document.getElementById("language");
    let languageAddButtonObj = document.getElementById("languageAddButton");

    languageObj.insertBefore(newNode,languageAddButtonObj );
}


function addNewhobbies(){
    // console.log("Enter new language");

    let newNode = document.createElement("input");
    newNode.setAttribute("type",'text');
    newNode.setAttribute("placeholder",'Enter here');
    newNode.classList.add("form-control");
    newNode.classList.add("hobbiesField");
    newNode.classList.add("mt-2");
 


    let hobbiesObj = document.getElementById("hobbies");
    let hobbiesAddButtonObj = document.getElementById("hobbiesAddButton");

   hobbiesObj.insertBefore(newNode,hobbiesAddButtonObj );
}


function addNewacademic(){
    // console.log("Enter new language");

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("academicField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder",'Enter here');
 


    let academicObj = document.getElementById("academic");
    let academicAddButtonObj = document.getElementById("academicAddButton");

   academicObj.insertBefore(newNode,academicAddButtonObj );
}

function addNewcertification(){
    // console.log("Enter new language");

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("certificationField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder",'Enter here');
 


    let certificationObj = document.getElementById("certification");
    let certificationAddButtonObj = document.getElementById("certificationAddButton");

   certificationObj.insertBefore(newNode,certificationAddButtonObj );
}

function addNewwe(){
    // console.log("Enter new language");

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder",'Enter here');
 


    let weObj = document.getElementById("we");
    let weAddButtonObj = document.getElementById("weAddButton");

   weObj.insertBefore(newNode,weAddButtonObj );
}


// generating cv

function generateCV(){

    // name
    let nameField = document.getElementById("nameField").value;

    let CVTname = document.getElementById("CVT-name");

    CVTname.innerHTML = nameField;

    // Address
    document.getElementById("CVT-address").innerHTML = document.getElementById("addressField").value;

    // phone
    document.getElementById("CVT-phone").innerHTML = document.getElementById("phoneField").value;
    // email
    document.getElementById("CVT-email").innerHTML = document.getElementById("emailField").value;

    //Language

    let language = document.getElementsByClassName("languageField");
    let str = "";

    for(let e of language){
        str = str + `<li> ${e.value}</li>`;
        
    }

    document.getElementById("CVT-language").innerHTML= str;

    // hobbies
    let hobbies = document.getElementsByClassName("hobbiesField");
    let str1="";

    for(let e of hobbies){
        str1 = str1 + `<li> ${e.value}</li>`;
    }

    document.getElementById("CVT-hobbies").innerHTML= str1;

     // Links

    document.getElementById("CVT-fb").innerHTML = document.getElementById("fbField").value;
    document.getElementById("CVT-linkedIn").innerHTML = document.getElementById("linkedlnField").value;
    document.getElementById("CVT-insta").innerHTML = document.getElementById("instaField").value;


    //objective

    document.getElementById("CVT-objective").innerHTML = document.getElementById("objectiveField").value;

    // skill
    document.getElementById("CVT-skill").innerHTML = document.getElementById("skillField").value;

    //academic qualification
    let academic = document.getElementsByClassName("academicField");
    let str2="";

    for(let e of academic){
        str2 = str2 + `<li> ${e.value}</li>`;
    }

    document.getElementById("CVT-aq").innerHTML= str2;

     //certification
     let certification = document.getElementsByClassName("certificationField");
     let str3="";
 
     for(let e of certification){
         str3 = str3 + `<li> ${e.value}</li>`;
     }
 
     document.getElementById("CVT-certification").innerHTML= str3;

     //work experience

     let we = document.getElementsByClassName("weField");
     let str4="";
 
     for(let e of we){
         str4 = str4 + `<li> ${e.value}</li>`;
     }
 
     document.getElementById("CVT-we").innerHTML= str4;

       //image 
 
       let file = document.getElementById("imgField").files[0];
       console.log(file);

       let reader = new FileReader();
       reader.readAsDataURL(file);
       console.log(reader.result);

       //set image

       reader.onloadend = function(){
        document.getElementById("CVT-imag").src = reader.result;       
    };
 

     document.getElementById('CV-form').style.display='none';

     document.getElementById('CV-template').style.display='block';

   

     
}

function printCV(){
   
    
     window.print();

     
}