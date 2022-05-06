window.addEventListener("load", init);
function init(){
if(typeof(Storage)!=="undefined"){
display();
var button=document.getElementById("AddMovies");
button.addEventListener("click",addInfo);
var button=document.getElementById("displayMovies");
button.addEventListener("click",display);
}
else{
}
}
        
function addInfo(){
var movieName=document.getElementById("title").value;
var movieRating=document.getElementById("rating").value;
localStorage.setItem("movieName",movieName);
localStorage.setItem("userRating", movieRating);
display();
}
 
function display(){
    var rightBox=document.getElementById("userfooter");
    var theMovie=localStorage.getItem("movieName");
    var theRating = localStorage.getItem("userRating");
    if (theRating==undefined){
    rightBox.innerHTML = "";
    }
    else {
        rightBox.innerHTML = "<br /> Movies with rating <footer <br />" + theMovie + " " + theRating;
        }
        }


    
