//===========FOOD ASSIGNEMENT=============//



//https://www.themealdb.com/api/json/v1/1/search.php?s

let url;

async function getallmeals(url){
// 
  
  c=`<div class="loader m-auto"></div>`;
  document.getElementById("meals").innerHTML = c;
// 

  //const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s';
  const options = {
    method: 'GET'
  
  };
  const api = await fetch(url, options);
  const response = await api.json();


  console.log('food');
  console.log(response);
  console.log(response.meals[0].idMeal);
  console.log(response.meals.length);

  let meals ='';
  for( let i=0 ; i<response.meals.length; i++){
  
    meals+= `
    
       <div class="col-md-6 col-lg-3" onclick="displaymealdetails(${response.meals[i].idMeal})">
       
      <div class="container-fluid meal-pic">
        <div class=" text-start position-relative">
          <img src= ${response.meals[i].strMealThumb} class="w-100 rounded-2" alt="strMealThumb img">
           
          <div class=" rounded-2 position-absolute h-100 carpet d-flex flex-column justify-content-center">

            <div class="p-4 text-black">
              <h5>${response.meals[i].strMeal}</h5>
            </div>
               
          </div>
        </div>
      </div>

     

    </div>
    
    `

    ;
  }
  document.getElementById("meals").innerHTML = meals;

}

getallmeals('https://www.themealdb.com/api/json/v1/1/search.php?s');


// display details-------------------//

let meal ;
async function displaymealdetails(meal){

  
  console.log(meal);
  htmlcomp=`<div class="loader m-auto"></div>`;
  document.getElementById("afternav").innerHTML = htmlcomp;


  console.log(meal);

     

  const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+meal;
  const options = {
    method: 'GET'
  
  };
  const api = await fetch(url, options);
  const response = await api.json();


  console.log(response);
  console.log(response.meals[0].strMealThumb);
  let tags;

  if(response.meals[0].strTags==null){
   
    tags=`
     <div></div>
    `;}
  
    else{
      tags=`<div class="bg-light text-primary rounded-2 m-2 px-2 d-inline-block">${response.meals[0].strTags}</div>` ;
    }

  

  htmlcomp=`
   <div class="row my-5 g-3" id="meals">
<div id="afternav">
  <div class="container p-4">
    <div class="d-flex justify-content-between">
      <div class="text-white"> </div>
      <div class="" onclick="location.reload();" > <i class="fa fa-close" style="font-size:25px;color:white"></i> </div>
    </div>
  </div>

  <div class="container p-4">

    <div class="row">
       <div class="col-md-4 text-white">
        <img src= ${response.meals[0].strMealThumb}  class="w-100" alt="game img">
        <h3> ${response.meals[0].strMeal}</h3>
       </div>

       <div class="col-md-8 text-white">
        <h2>Instructions</h2>
        <div>
        <p>
        ${response.meals[0].strInstructions}
        </p>
        </div>

        <div>
         <h3> Area : ${response.meals[0].strArea}  </h3>
        </div>

        <div>
         <h3> Category : ${response.meals[0].strCategory}  </h3>
        </div>
           <div >
               <h3>Recipes :</h3>
        </div>
        <div> 
        
          <div class="bg-light text-primary rounded-2 m-2 px-2 d-inline-block">${response.meals[0].strMeasure1} ${response.meals[0].strIngredient1}</div>
          <div class="bg-light text-primary rounded-2 m-2 px-2 d-inline-block">${response.meals[0].strMeasure2} ${response.meals[0].strIngredient2} </div>
          <div class="bg-light text-primary rounded-2 m-2 px-2 d-inline-block">${response.meals[0].strMeasure3} ${response.meals[0].strIngredient3} </div>
          <div class="bg-light text-primary rounded-2 m-2 px-2 d-inline-block">${response.meals[0].strMeasure4} ${response.meals[0].strIngredient4} </div>
          <div class="bg-light text-primary rounded-2 m-2 px-2 d-inline-block">${response.meals[0].strMeasure5} ${response.meals[0].strIngredient5} </div>
          <div class="bg-light text-primary rounded-2 m-2 px-2 d-inline-block">${response.meals[0].strMeasure6} ${response.meals[0].strIngredient6}</div>
          <div class="bg-light text-primary rounded-2 m-2 px-2 d-inline-block">${response.meals[0].strMeasure7} ${response.meals[0].strIngredient7}</div>
          <div class="bg-light text-primary rounded-2 m-2 px-2 d-inline-block">${response.meals[0].strMeasure8} ${response.meals[0].strIngredient8}</div>
          <div class="bg-light text-primary rounded-2 m-2 px-2 d-inline-block">${response.meals[0].strMeasure9} ${response.meals[0].strIngredient9}</div>
          <div class="bg-light text-primary rounded-2 m-2 px-2 d-inline-block">${response.meals[0].strMeasure10} ${response.meals[0].strIngredient10}</div>
          <div class="bg-light text-primary rounded-2 m-2 px-2 d-inline-block">${response.meals[0].strMeasure11} ${response.meals[0].strIngredient11}</div>
          <div class="bg-light text-primary rounded-2 m-2 px-2 d-inline-block">${response.meals[0].strMeasure12} ${response.meals[0].strIngredient12}</div>
          <div class="bg-light text-primary rounded-2 m-2 px-2 d-inline-block">${response.meals[0].strMeasure13} ${response.meals[0].strIngredient13}</div>
          <div class="bg-light text-primary rounded-2 m-2 px-2 d-inline-block">${response.meals[0].strMeasure14} ${response.meals[0].strIngredient14}</div>
          <div class="bg-light text-primary rounded-2 m-2 px-2 d-inline-block">${response.meals[0].strMeasure15} ${response.meals[0].strIngredient15}</div>
          <div class="bg-light text-primary rounded-2 m-2 px-2 d-inline-block">${response.meals[0].strMeasure16} ${response.meals[0].strIngredient16}</div>
          <div class="bg-light text-primary rounded-2 m-2 px-2 d-inline-block">${response.meals[0].strMeasure17} ${response.meals[0].strIngredient17}</div>
          <div class="bg-light text-primary rounded-2 m-2 px-2 d-inline-block">${response.meals[0].strMeasure18} ${response.meals[0].strIngredient18}</div>
          <div class="bg-light text-primary rounded-2 m-2 px-2 d-inline-block">${response.meals[0].strMeasure19} ${response.meals[0].strIngredient19}</div>
          <div class="bg-light text-primary rounded-2 m-2 px-2 d-inline-block">${response.meals[0].strMeasure20} ${response.meals[0].strIngredient20}</div>
          </div>

           <div>
            <h3>Tags :</h3>
           </div>
            `+
            tags
             +
            `
           
       
          <div> 
        <a  href= ${response.meals[0].strSource} class="btn btn-success text-white" role="button" target="blank"> Source </a>
         <a  href= ${response.meals[0].strYoutube} class="btn btn-danger text-white" role="button" target="blank"> YouTube </a>
        </div>



       </div>
    </div>
  
 
 




</div>

</div>
</div>
  ` ;

  document.getElementById("afternav").innerHTML = htmlcomp;
}

//===== get category===============//


async function getallcategories(){
  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const options = {
    method: 'GET'
  
  };
  const api = await fetch(url, options);
  const response = await api.json();


  console.log('cat');
  console.log(response);
  console.log(response.categories[0]);
  console.log(response.categories[0].strCategoryThumb);
  console.log(response.categories.length);

  let meals ='';
  for( let i=0 ;i< response.categories.length; i++){
 
  
    meals+= `
    
       <div class="col-md-6 col-lg-3" onclick="getallmeals('https://www.themealdb.com/api/json/v1/1/filter.php?c=${response.categories[i].strCategory}')">
       
      <div class="container-fluid meal-pic">
        <div class=" text-start position-relative">
          <img src= ${response.categories[i].strCategoryThumb} class="w-100 rounded-2" alt="strMealThumb img">
           
          <div class=" rounded-2 position-absolute h-100 carpet ">

            <div class="p-4 text-black">
              <h3>${response.categories[i].strCategory}</h3>
              <p>${response.categories[i].strCategoryDescription} </P>
             
            </div>
               
          </div>
        </div>
      </div>

     

    </div>

    
    
    `

    ;
  }
  document.getElementById("meals").innerHTML = meals;

}//

//get by areas



async function getbyarea(){
  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
  const options = {
    method: 'GET'
  
  };
  const api = await fetch(url, options);
  const response = await api.json();


 

  let meals ='';
  for( let i=0 ;i< response.meals.length; i++){
 
    console.log("www.themealdb.com/api/json/v1/1/filter.php?a="+response.meals[i].strArea);
  
    meals+= `
    
       <div class="col-md-6 col-lg-3" onclick="getallmeals('https://www.themealdb.com/api/json/v1/1/filter.php?a=${response.meals[i].strArea}')">
       
      <div>
       <i class="fa-solid fa-house-laptop fa-4x text-white"></i>
      </div>
      <div>
           <h3> ${response.meals[i].strArea} </h3>
      </div>

     

    </div>

    
    
    `

    ;
  }
  document.getElementById("meals").innerHTML = meals;
}

//// get by gredient


async function getbygredient(){
  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  const options = {
    method: 'GET'
  
  };
  const api = await fetch(url, options);
  const response = await api.json();

 console.log(response.meals);

 

  let meals ='';
  let description ='';
  for( let i=0 ;i < response.meals.length; i++){
 
    if(response.meals[i].strDescription==null){
        
    description ='';
    }

    else{
      description = response.meals[i].strDescription.substr(1,200);
    }
   
  
    meals+= `
    
       <div class="col-md-6 col-lg-3" onclick="getallmeals('https://www.themealdb.com/api/json/v1/1/filter.php?i=${response.meals[i].strIngredient}')">
       
      <div>
      <i class="fa-solid fa-drumstick-bite fa-4x"></i>
      </div>
      <div>
           <h3> ${response.meals[i].strIngredient} </h3>
           <p>${description} </p>
      </div>

     

    </div>

    
    
    `

    ;
  }
  document.getElementById("meals").innerHTML = meals;
}

//==== show search input===//

function showsearchinput(){

  htmlcomp =
  `
      <div class="container m-3 row g-2 justify-content-end ">
    <div class="col-md-5 ">
      <input id="searchname" onkeyup="searchbyName()" class="border-0 text-white form-control form-control-lg bg-black" type="text" placeholder="Search by Name" >
    </div>
    <div class="col-md-5">
      <input id="searchletter" onkeyup="searchbyfirstletter()" class="border-0 text-white form-control form-control-lg bg-black" type="text" placeholder="Search by First letter" maxlength="1"   >
    </div>
    </div>
  <div class="row my-5 g-3" id="meals"></div>
  `


 
  document.getElementById("afternav").innerHTML = htmlcomp;
}

function searchbyfirstletter(){
  var term = document.getElementById("searchletter").value;
    console.log(term);
    url = "https://www.themealdb.com/api/json/v1/1/search.php?f="+term;

    getallmeals(url);

}

function searchbyName(){

  var term = document.getElementById("searchname").value;
  console.log(term);
  url = "https://www.themealdb.com/api/json/v1/1/search.php?s="+term;

  getallmeals(url);
  
}

///////input section

function showcontact(){

  htmlcomp = `

   <div class="container row g-2  m-auto justify-content-end  ">
    <div class="col-md-5 ">
      <input id="name" onkeyup="validatename(); enableSubmit();" class="border-0 text-black form-control form-control-lg bg-light" type="text" placeholder="Enter Your Name" >
      <div id="vname"></div>   
      </div>
    
    <div class="col-md-5">
      <input id="mail" onkeyup="validatemail(); enableSubmit();" class="border-0 text-black form-control form-control-lg bg-light" type="email" placeholder="Enter Your E-mail" >
    <div id="vmail"></div> 
      </div>
    <div class="col-md-5 ">
      <input id="phone" onkeyup="validatephone(); enableSubmit();" class="border-0 text-black form-control form-control-lg bg-light" type="number" placeholder="Enter Your phone" >
    <div id="vphone"></div> 
      </div>
    <div class="col-md-5">
      <input id="age" onkeyup="validateage(); enableSubmit();" class="border-0 text-black form-control form-control-lg bg-light" type="number" placeholder="Enter Your age" >
     <div id="vage"></div> 
      </div>
    <div class="col-md-5 ">
      <input id="pass" onkeyup="validatepass(); enableSubmit();" class="border-0 text-black form-control form-control-lg bg-light" type="password" placeholder="Enter Your password" >
    <div id="vpass"></div> 
      </div>
    <div class="col-md-5">
      <input id="pass2" onkeyup="validatepass2(); enableSubmit();" class="border-0 text-black form-control form-control-lg bg-light" type="password" placeholder="Repassword" >
    <div id="vpass2"></div> 
      </div>

    </div>
     <div class="container row my-4" id="submit">
      <a  href="https://google.com" class="btn btn-outline-danger w-auto m-auto disabled" role="button" type="button" disabled >Submit</a> 
     </div>
  `
 


  document.getElementById("meals").innerHTML = htmlcomp;
}

// validate name:
function validatename(){
  let verror = ``;
  let name = document.getElementById("name").value;
  //console.log(name);
  let re=/^[a-zA-Z ]+$/;

  if(re.test(name)){
    verror = `<div class="text-success">passed</div>`
    document.getElementById("vname").innerHTML = verror;
    return true;
  }
else{
   verror = `<div class="text-white">Please enter valid name</div>`
   document.getElementById("vname").innerHTML = verror;
}
}

// validate mail

function validatemail(){
  // let tt=validatename();
  // console.log(tt);
  let verror = ``;
  let mail = document.getElementById("mail").value;
  //console.log(mail);
  let re=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(re.test(mail)){
    verror = `<div class="text-success">passed</div>`
    document.getElementById("vmail").innerHTML = verror;
    return true;
  }
else{
   verror = `<div class="text-white">Please enter valid mail</div>`
   document.getElementById("vmail").innerHTML = verror;
}
}

// validate phone number

function validateage(){
  let verror = ``;
  let age = document.getElementById("age").value;
  console.log(age);
 let re = /^([1-9]|[1-9][0-9])$/ ;

  if(re.test(age)){
    verror = `<div class="text-success">passed</div>`
    document.getElementById("vage").innerHTML = verror;
    return true;
  }
else{
   verror = `<div class="text-white">Please enter valid age</div>`
   document.getElementById("vage").innerHTML = verror;
}
}

function validatephone(){
  let verror = ``;
  let phone = document.getElementById("phone").value;
 // console.log(phone);
 let re = /^(\+\d{1,3}[- ]?)?\d{11}$/ ;

  if(re.test(phone)){
    verror = `<div class="text-success">passed</div>`
    document.getElementById("vphone").innerHTML = verror;
    return true;
  }
else{
   verror = `<div class="text-white">Please enter valid number</div>`
   document.getElementById("vphone").innerHTML = verror;
}
}
//validate password

function validatepass(){
  let verror = ``;
  let pass = document.getElementById("pass").value;
 // console.log(pass);
 let re = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/ ;

  if(re.test(pass)){
    verror = `<div class="text-success">passed</div>`
    document.getElementById("vpass").innerHTML = verror;
    return true;
  }
else{
   verror = `<div class="text-white">Please enter valid password that contains at least 8 char and must contains number and letter</div>`
   document.getElementById("vpass").innerHTML = verror;
}
}

function validatepass2(){
  let verror = ``;
  let pass = document.getElementById("pass").value;
  let pass2 = document.getElementById("pass2").value;
 // console.log(pass);
 

  if(pass2==pass){
    verror = `<div class="text-success">passed</div>`
    document.getElementById("vpass2").innerHTML = verror;
    return true;
  }
else{
   verror = `<div class="text-white">passwords not match</div>`
   document.getElementById("vpass2").innerHTML = verror;
}
}
//// enable Submit

function enableSubmit(){
if(validatepass2()&&validatepass()&&validatephone()&&validateage()&&validatename()&&validatemail()==true){
 let go = `<a onclick="sucess()"  class="btn btn-outline-danger w-auto m-auto" role="button" type="button" disabled >Submit</a> `
  document.getElementById("submit").innerHTML = go;
}

}

function sucess(){
let done = `<div><h2> Your request submitted sucessfully</h2>
        <h3> Refresh to return to home page</h3>
</div>`;
  document.getElementById("submit").innerHTML = done;

}