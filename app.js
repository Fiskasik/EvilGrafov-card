const slides = document.querySelectorAll(".slide");

for (let x of slides){
    x.addEventListener("click", () => {
        clearActiveClasses()

        x.classList.add("active")
    });
};

function clearActiveClasses(){
    for (x of slides){
        x.classList.remove("active")
    };
};