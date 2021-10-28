var i = 0; // start point
var images = [];
var time = 3000;
var imgDir = '../../images/';

//img list
images[0] = imgDir +'img1.jpg';
images[1] = imgDir +'img2.png';
images[2] = imgDir +'img3.png';

function ChangeImg()
{
    document.slide.src = images[i];
    
    if(i < images.length -1)
        i++;
    else
        i = 0;
    
    setTimeout("ChangeImg()",time);
}

function Redirecting(targetPage)
{
    document.location.replace(targetPage);
}

function TruncateText(str, str2)
{
    if(str.length > 250)
        str2.innerHTML = str.substr(0,250) + "...";
}

$(function()
{
    $("#navigation-bar").load("../../utilities/navigation-bar/navigation-bar.html");
    $("#slideshow-main").load("../../utilities/slideshow-main/slideshow-main.html");
    $("#latest-news").load("../../utilities/latest-news/latest-news.html");
    
});