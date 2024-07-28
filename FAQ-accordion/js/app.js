const openBTN = document.querySelectorAll(".open-tab");

openBTN.forEach((btn) => {
    btn.addEventListener("click", (e) => displayParagraph(e, btn));
});

const displayParagraph = (event, btn) => {
    try{
        const closeBtn = event.target.nextElementSibling || event.target.parentElement.nextElementSibling; 
        let paragraph = event.target.parentElement.parentElement.parentElement.nextElementSibling;

        if (!paragraph.classList.contains("paragraph")) paragraph = event.target.parentElement.parentElement.nextElementSibling
        
        closeBtn.classList.remove("hidden");
        btn.classList.add("hidden");
        paragraph.classList.remove("hidden");
        
        closeBtn.addEventListener("click", () => {
            closeBtn.classList.add("hidden");
            btn.classList.remove("hidden");
            paragraph.classList.add("hidden");
        });
    }
    catch {};
} 
