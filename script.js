window.onload=()=>{
    let grains = document.getElementById("grains")
    for (let i=0; i<30 ; i++) {
        let grain = document.createElement("div")
        grain.classList.add("grain")
        grains.appendChild(grain)
    }
}