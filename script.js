let input = document.querySelectorAll("input");

input.forEach(input =>{
    input.addEventListener("focus", ()=>{
        const labelColor = document.querySelector(`label[for="${input.id}"]`);

        if(labelColor) labelColor.style.color = "var(--hover-color)";
    });

    input.addEventListener("blur", ()=>{
        const label = document.querySelector(`label[for="${input.id}"]`);
        if(label) label.style.color = "";
    });
});

let themeChange = document.querySelector(".themeChange");
themeChange.addEventListener("click", ()=>{
    document.body.classList.toggle("lightmode");
    // const video = document.querySelector(".video");
    // video.style.filter = "brightness(1.2)";
})