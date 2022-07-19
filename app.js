const lookupBtn=document.querySelector(".lookup-btn");
const ipDisplay=document.querySelector(".ip-display");
const locationDisplay=document.querySelector(".location-display");
const loader=document.querySelector(".loader-container");
const details=document.querySelector(".details");
lookupBtn.addEventListener("click", ()=>{
    loader.style.display="flex";
    details.style.display="none";

    axios.get("https://ipapi.co/json/").then((response) => {
        loader.style.display="none";
        details.style.display="block";   
    ipDisplay.textContent=`Ip: ${response.data.ip}`;
        locationDisplay.textContent=`Location: ${response.data.city},${response.data.region},${response.data.country_name}`;
    });
});



