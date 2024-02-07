const getLoc=document.getElementById("getLocation");
getLoc.addEventListener("click",event=>{
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(pos=>{
            let latitude=pos.coords.latitude;
            let longitude=pos.coords.longitude;
            alert(`latitude:${latitude} longitude:${longitude}`);
        },error=>{
            console.log("Denied by user",error.code)
        })

    }
    else{
        console.log("geolaction not supported");
    }
})