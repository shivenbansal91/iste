document.addEventListener("DOMContentLoaded", () => {
    const destinations = document.querySelectorAll(".destination");

    destinations.forEach(destination => {
        destination.addEventListener("click", () => {
            const destinationName = destination.querySelector("h3").innerText;
            const destinationInfo = destination.querySelector("p")?.innerText || "An amazing place to visit!";
            alert(`${destinationName}: ${destinationInfo}`);
        });
    });
});
