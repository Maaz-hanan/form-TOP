let input = document.querySelectorAll("input");

input.forEach(input =>{
    input.addEventListener("focus", ()=>{
        const labelColor = document.querySelector(`label[for="${input.id}"]`);

        if(labelColor) labelColor.style.color = "orange";
    });

    input.addEventListener("blur", ()=>{
        const label = document.querySelector(`label[for="${input.id}"]`);
        if(label) label.style.color = "";
    });
});
