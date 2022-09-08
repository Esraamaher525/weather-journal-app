/* Global Variables */
const apiKey = "4ef2d3191bcfeacc2f56140f8cf05f57";
const zipCodeUrl = "https://api.openweathermap.org/data/2.5/weather";
const feelingElement = document.getElementById("feelings");
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();

//event when click generate
document.getElementById("generate").addEventListener("click", async () => {
    //get zip code data
    let zipCodeData = document.querySelector("#zip").value;
    if (zipCodeData) {
        //fetch data with then , catch
        // let weatherAPIData={};
        // fetch(`${zipCodeUrl}?zip=${zipCodeData}&appid=${apiKey}`)
        // .then(res=>res.json())
        // .then(data=>weatherAPIData=data)
        // .catch(err=>console.log(err))
        //fetch data with async,await
        const res = await fetch(`${zipCodeUrl}?zip=${zipCodeData}&appid=${apiKey}`)
        const weatherAPIData = await res.json();
        //post data to server
        fetch('/sendWeatherData', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                date: newDate,
                content: feelingElement.value,
                temp: weatherAPIData.main.temp
            })
        })

        //get all data from server
        const streamData = await fetch('/all')
        const allData = await streamData.json();
        console.log(allData)
        //set values to elements
        document.getElementById("date").innerHTML=`Date is : ${allData.date}`;
        document.getElementById("temp").innerHTML=`Temp is : ${Math.round(allData.temp)} degrees`;
        document.getElementById("content").innerHTML=`Content is : ${allData.content}`;
    }

})