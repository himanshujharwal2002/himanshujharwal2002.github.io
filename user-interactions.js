// You can add interactivity using JavaScript here, if needed.
document.addEventListener("DOMContentLoaded", () => {
    // Example: Changing the background color of header on hover
    const header = document.querySelector("header");
    header.addEventListener("mouseover", () => {
        header.style.backgroundColor = "#444";
    });
    header.addEventListener("mouseout", () => {
        header.style.backgroundColor = "#333";
    });
});
