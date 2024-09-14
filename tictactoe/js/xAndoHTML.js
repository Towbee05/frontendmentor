export const xHTML = (card) => card.innerHTML = `
    <span class="to-be-removed">
        <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -1 37 35" class="grid place-items-center tablet:hidden laptop:hidden">
            <path d="M7.501 0.573 16 9.072 24.499 0.573a1.5 1.5 0 0 1 2.122 0l4.806 4.806a1.5 1.5 0 0 1 0 2.122L22.928 16l8.499 8.499a1.5 1.5 0 0 1 0 2.122l-4.806 4.806a1.5 1.5 0 0 1-2.122 0L16 22.928 7.501 31.427a1.5 1.5 0 0 1-2.122 0L0.573 26.62a1.5 1.5 0 0 1 0-2.122L9.072 16 0.573 7.501a1.5 1.5 0 0 1 0-2.122l4.806-4.806a1.5 1.5 0 0 1 2.122 0Z" fill-rule="evenodd" fill="#31C3BD"/>
        </svg>
        <!-- tablet and laptops x and o's  -->
        <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" class="hidden tablet:block laptop:block hover:stroke-custom-light-blue hover:fill-none group-hover:hidden">
            <path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#31C3BD" fill-rule="evenodd"/>
        </svg>
        <!-- tablet and laptops x and o hovers -->
        <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" class="hidden tablet:group-hover:block laptop:group-hover:block">
            <path d="M51.12 1.269c.511 0 1.023.195 1.414.586l9.611 9.611c.391.391.586.903.586 1.415s-.195 1.023-.586 1.414L44.441 32l17.704 17.705c.391.39.586.902.586 1.414 0 .512-.195 1.024-.586 1.415l-9.611 9.611c-.391.391-.903.586-1.415.586a1.994 1.994 0 0 1-1.414-.586L32 44.441 14.295 62.145c-.39.391-.902.586-1.414.586a1.994 1.994 0 0 1-1.415-.586l-9.611-9.611a1.994 1.994 0 0 1-.586-1.415c0-.512.195-1.023.586-1.414L19.559 32 1.855 14.295a1.994 1.994 0 0 1-.586-1.414c0-.512.195-1.024.586-1.415l9.611-9.611c.391-.391.903-.586 1.415-.586s1.023.195 1.414.586L32 19.559 49.705 1.855c.39-.391.902-.586 1.414-.586Z" stroke="#31C3BD" stroke-width="2" fill="none"/>
        </svg>
    </span>
`;

export const oHTML = (card) => card.innerHTML = `
    <!-- mobile x and o  -->
    <span class="to-be-removed">
        <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" fill="#F2B137" class=" tablet:hidden laptop:hidden group-hover:hidden">
            <path d="M20 0c11.2 0 20 9.2 20 20s-8.8 20-20 20S0 30.8 0 20 8.8 0 20 0Zm0 11.1c-4 0-7.5 3.5-7.5 7.5s3.5 7.5 7.5 7.5 7.5-3.5 7.5-7.5-3.5-7.5-7.5-7.5Z"/>
        </svg>

    <!-- tablet and laptops x and o's  -->
        <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" fill="#F2B137" class="hidden tablet:block laptop:block group-hover:hidden">
            <path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"/>
        </svg>
        <!-- tablet and laptops x and o hovers -->
        <svg width="66" height="66" xmlns="http://www.w3.org/2000/svg" class="hidden tablet:group-hover:block laptop:group-hover:block">
            <path d="M33 1c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C15.327 65 1 50.673 1 33 1 15.327 15.327 1 33 1Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" stroke ="#F2B137" stroke-width="2" fill="none"/>
        </svg>
    </span>
`;

