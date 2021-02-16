//Get the button
let topButton = document.getElementById("topButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
        topButton.style.display = "block";
    else 
        topButton.style.display = "none";
};

// When the user clicks on the button, scroll to the top of the document
goToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}