const updateTime = () =>{
    const utcTimeElement = document.getElementById("utcTime");
    setInterval(()=>{
    const now =new Date();
    const utcTimeString = now.toUTCString().split(" ") [4];
    utcTimeElement.textContent = utcTimeString;
}, 1000); 
}
updateTime();