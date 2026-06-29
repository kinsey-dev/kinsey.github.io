const myImage =
document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc =
myImage.getAttribute("src");
    if (mySrc === "images/Rabbit-Sample.jpg"){
        myImage.setAttribute("src", "images/hitsuji-image.jpg");
    } else {
        myImage.setAttribute("src", "images/Rabbit-Sample.jpg");
    }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName(){
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}
if (!localStorage.getItem("name")){
    setUserName();
} else {
    const storedname =
localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedname}`;
}
myButton.addEventListener("click", () =>
{
    setUserName();
});
