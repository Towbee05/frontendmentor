const getElement = (selection) => document.querySelector(selection);
const container = getElement(".activities");
const timeContainer = getElement(".timeframe");
const btns = [...document.querySelectorAll(".btn")];

timeContainer.addEventListener ("click", (e) => {
    const time = e.target.dataset.time
    btns.forEach((btn) => {
        btn.classList.remove("text-white");
    });
    
    if (time){
        getData(time)
        e.target.classList.add("text-white");
    }
    else{
        return
    }
    // console.log(getCurrentTime("daily"));
})

const getData = (time) => {
    let hrs = "hrs"
    fetch('data.json').then((response) => response.json()).
    then((data) => {
        const allData = data.map((datum) => {
            const {title, iClass, timeframes: {daily, weekly, monthly} } = datum;
            if (time === "daily"){
                return `
                    <article class="${iClass} bg-no-repeat bg-image-position pt-7 rounded-2xl xs:pt-8">
                        <div class="bg-custom-dark-blue px-6 py-6 flex flex-col rounded-2xl space-y-6 ">
                            <article class="flex justify-between">
                                <p class="activity text-white font-medium">
                                    ${title}
                                </p>
                                <p>
                                    <img src="./assets/images/icon-ellipsis.svg" alt="ellipsis">
                                </p>
                            </article>
                            <article class="flex justify-between xs:flex-col">
                                <p class="time text-white text-custom-1 xs:text-custom-large-1 font-light">
                                    ${getTimeHour(daily.current)}
                                </p>
                                <p class="duration text-custom-pale-blue text-custom-2">
                                    Last Week - ${getTimeHour(daily.previous)}
                                </p>
                            </article>
                        </div>
                    </article>
                `
            }
            else if (time === "weekly"){
                return `
                    <article class="${iClass} bg-no-repeat bg-image-position pt-7 rounded-2xl xs:pt-8">
                        <div class="bg-custom-dark-blue px-6 py-6 flex flex-col rounded-2xl space-y-6 ">
                            <article class="flex justify-between">
                                <p class="activity text-white font-medium">
                                    ${title}
                                </p>
                                <p>
                                    <img src="./assets/images/icon-ellipsis.svg" alt="ellipsis">
                                </p>
                            </article>
                            <article class="flex justify-between xs:flex-col">
                                <p class="time text-white text-custom-1 xs:text-custom-large-1 font-light">
                                    ${getTimeHour(weekly.current)}
                                </p>
                                <p class="duration text-custom-pale-blue text-custom-2">
                                    Last Week - ${getTimeHour(weekly.previous)}
                                </p>
                            </article>
                        </div>
                    </article>
                `
            }
            else{
                return `
                    <article class="${iClass} bg-no-repeat bg-image-position pt-7 rounded-2xl xs:pt-8">
                        <div class="bg-custom-dark-blue px-6 py-6 flex flex-col rounded-2xl space-y-6 ">
                            <article class="flex justify-between">
                                <p class="activity text-white font-medium">
                                    ${title}
                                </p>
                                <p>
                                    <img src="./assets/images/icon-ellipsis.svg" alt="ellipsis">
                                </p>
                            </article>
                            <article class="flex justify-between xs:flex-col">
                                <p class="time text-white text-custom-1 xs:text-custom-large-1 font-light">
                                    ${getTimeHour(monthly.current)}
                                </p>
                                <p class="duration text-custom-pale-blue text-custom-2">
                                    Last Week - ${getTimeHour(monthly.previous)}
                                </p>
                            </article>
                        </div>
                    </article>
                `
            }
        });

        return container.innerHTML = allData.join("");
    }).
    catch((err) => console.log("An error occured!!"));
}

const getTimeHour = (hr) => {
    if (hr <= 1) {
        return `${hr}hr`;
    }
    else{
        return `${hr}hrs`;
    };
} 

addEventListener("DOMContentLoaded", (() => {
    getData("weekly");
    const weekly = getElement(".btn-weekly");
    weekly.classList.add("text-white")
}))