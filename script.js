const start = document.getElementById('start');
const h1 = document.querySelector('h1');

start.addEventListener("click", () => {
    setInterval(() =>{
       const r = Math.floor(Math.random() * 256);
       const g = Math.floor(Math.random() * 256);
       const b = Math.floor(Math.random() * 256);
       document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
       h1.innerHTML = `rgb(${r}, ${g}, ${b})`;

    },1000); 
});