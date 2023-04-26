//creating DOM

document.body.innerHTML=`
<div class="container-fluid">
<h1>The Nationality Of The Name</h1><br>
<h6>code by yokesh</h6>
<input type="text" id="searchtext" placeholder=" Enter the name" size="30">
<input type="button" value="Search" id="btn" class="btn btn-primary">
<input type="button" value="Reset" id="resetbtn" class="btn btn-danger">
</div><br><br>
<div class=" container-fluid result">
<h4> Name Related Top Two Countries And Their Probabilities Are</h4><br>
<h4 id=result></h4><br><br>
</div>`

let search_text=document.querySelector("#searchtext");
let result_data=document.querySelector("#result");
let search_btn=document.querySelector("#btn");
 let reset_btn=document.querySelector("#resetbtn");

search_btn.addEventListener("click", async ()=>{
    let value=document.getElementById("searchtext").value;
    document.querySelector('.result').style.display="block"
    
    if(value.length==0||value.includes(" ")){
         alert("Please enter the valid name without any spaces");

    }
    else {
      
        try{
           let data=await fetch(`https://api.nationalize.io/?name=${value}`);
           let result= await data.json();
           console.log(result);
           result_data.innerHTML="";
           
           for(let i=0;i<2;i++){
          result_data.innerHTML+=
             `
             <div class="container">
               <div class="card">
                 <div class="card-header">
                  <div class="card-title">TOP-${i+1}</div>
                  
                 </div>
                 <div class="card-body">

                 Country_id:${result.country[i].country_id}<br>
                 Probability :${result.country[i].probability}<br><br>

                 </div>
               </div>
             </div>
               `
           }
           
        }
        catch{
            console.log(error);
        }
        
    }
});

var container_data = document.querySelector('.card');
reset_btn.addEventListener("click",()=>{
document.querySelector('.result').style.display="none";
search_text.value="";
result_data.innerHTML=" ";

});