
var firstName="barham";
var lastName="islm";
var firstNameLen=firstName.length;
var lastNameLen=lastName.length;
sqare1(firstNameLen * lastNameLen);    

function sqare1(num)
{
    var main3 = document.getElementById("main3");
    var arr = "";

    arr += '<section onmouseover="mouseOnTheFirstLetter()" onmouseout="mouseOffTheFirstLetter()"></section>';
    for (i=1; i < num; i++)
        arr += '<section></section>';

    main3.innerHTML = arr;
}

var main3 = document.getElementById("main3");
var arr = main3.getElementsByTagName("section");

function change()
{
    for (i = 0; i < firstNameLen; i++) 
        arr[i].style.backgroundColor = "black";  
}
function Back()
{
    for (i = 0; i < firstNameLen; i++) 
        arr[i].style.backgroundColor = "white";  
}

var section = main3.getElementsByTagName("section")[0];

function mouseOnTheFirstLetter()
{
    section.style.backgroundImage = "url('images/i.png')";
}

function mouseOffTheFirstLetter()
{  
    section.style.backgroundImage = "none";
}
