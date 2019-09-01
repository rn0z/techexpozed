//Animations
export const restartAnimation = (element) => { // Restart animation
    element.style.animation = 'none';
    setTimeout(function () {
        element.style.animation = '';
    }, 10);
}
export const enterAnimation = (element) => { //entering the element 
    element.classList.remove("fade-in");
    element.classList.add("fade-out-right");
}
export const exitAnimation = (element) => { //exiting the element 
    element.classList.remove("fade-out-right");
    element.classList.add("fade-in");
    element.style.opacity = "0";
}