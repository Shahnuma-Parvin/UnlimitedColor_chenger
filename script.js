const start = document.getElementById('start');
const stop = document.getElementById('stop');
const h1 = document.querySelector('h1');

let intervalId;
start.addEventListener("click", () => {
    console.log("Start button clicked");
       
       intervalId = setInterval(() =>{
       const r = Math.floor(Math.random() * 256);
       const g = Math.floor(Math.random() * 256);
       const b = Math.floor(Math.random() * 256);
       document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
       h1.innerHTML = `rgb(${r}, ${g}, ${b})`;

    },1000); 
});

stop.addEventListener("click", function(event){
    console.log("Stop button clicked");
    clearInterval(intervalId);
});
