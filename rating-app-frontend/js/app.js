const btns = [...document.querySelectorAll(".btn")];
const submitBTN = document.querySelector(".submit");
const sectionToReplace = document.querySelector(".section");

let currentValue = "";

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        btns.forEach((btn) => btn.classList.remove("onclick"));
        btn.classList.remove("hover:bg-custom-orange");
        btn.classList.add("onclick");
        currentValue = btn.innerHTML;
    });
});

submitBTN.addEventListener("click", () => {
    if (!currentValue) return
    sectionToReplace.innerHTML = `
        <article class="flex w-full justify-center items-center flex-col gap-6 laptop:mt-4"> 
            <img src="./assets/images/illustration-thank-you.svg" alt=" thank you image"/>
            <div class="px-3 py-2 leading-[22px] rounded-[999px] bg-custom-dark-blue text-custom-orange "> 
                <p> 
                    You selected ${currentValue} out of ${btns.length} 
                </p>
            </div> 
        </article>
        <article class= "text-center space-y-4 mt-6 laptop:mb-4"> 
            <p class="text-2xl font-bold"> 
                Thank you! 
            </p>
            <p class="text-custom-light-grey"> 
                We appreciate you taking the time to give a rating. If you ever need more support, 
                don’t hesitate to get in touch!
            </p>
        </article>
    `
})