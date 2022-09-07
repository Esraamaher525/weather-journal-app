/* Global Variables */
const apiKey="4ef2d3191bcfeacc2f56140f8cf05f57";
const zipCodeUrl="https://api.openweathermap.org/data/2.5/weather";
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//event when click generate
document.getElementById("generate").addEventListener("click",async ()=>{
    debugger
    //get zip code data
    let zipCodeData=document.querySelector("#zip").value;
    if(zipCodeData){
    //fetch data with then , catch
        // let weatherAPIData={};
        // fetch(`${zipCodeUrl}?zip=${zipCodeData}&appid=${apiKey}`)
        // .then(res=>res.json())
        // .then(data=>weatherAPIData=data)
        // .catch(err=>console.log(err))
    //fetch data with async,await
        const res =await fetch(`${zipCodeUrl}?zip=${zipCodeData}&appid=${apiKey}`)
        const weatherAPIData=await res.json();
        
    }
  
})