/* Global Variables */
const apiKey = "4ef2d3191bcfeacc2f56140f8cf05f57";
const zipCodeUrl = "https://api.openweathermap.org/data/2.5/weather";
const feelingElement = document.getElementById("feelings");
const zipCode = document.querySelector("#zip");
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();
//methods
//send request to open weather map APIS
const getTempData = async () => {
    //fetch data with then , catch
    // let weatherAPIData={};
    // fetch(`${zipCodeUrl}?zip=${zipCode.value}&appid=${apiKey}`)
    // .then(res=>res.json())
    // .then(data=>weatherAPIData=data)
    // .catch(err=>console.log(err))
    //fetch data with async,await
    const res = await fetch(`${zipCodeUrl}?zip=${zipCode.value}&appid=${apiKey}`)
    const weatherAPIData = await res.json();
    return weatherAPIData;
}
//post data to server
const sendWeatherData = async (weatherAPIData) => {
    await fetch('/sendWeatherData', {
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
}
//method for view weather data in html
const viewData = (allData) => {
    document.getElementById("date").innerHTML = `Date is : ${allData.date}`;
    document.getElementById("temp").innerHTML = `Temp is : ${Math.round(allData.temp)} degrees`;
    document.getElementById("content").innerHTML = `Content is : ${allData.content}`;
}
//get all data from server
const getAllData = async () => {
    const streamData = await fetch('/all')
    const allData = await streamData.json();
    return allData;
}
//event when click generate
document.getElementById("generate").addEventListener("click", async () => {
    //get zip code data
    if (zipCode.value) {
        getTempData()
            .then(data=>sendWeatherData(data))
            .then(getAllData)
            .then(res=>viewData(res))
            .catch(err=>console.log(err))
    }



})