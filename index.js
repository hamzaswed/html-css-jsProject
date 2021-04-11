var pElement = document.getElementsByTagName("p"),// to get all p Elements
    color0 = "black",//for reel color
    shadow0 = "-3px 0 white, 0 3px white, 3px 0 white, 0 -3px white",//for reel shadow
    color1 = "#00ddc4",// for special color
    shadow1 = "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white"; // for special shadow

window.onload =  function test(){
        //the functions in the bellow will start ==> 
        setTimeout(firstP,0) //onload
        setTimeout(secoundP, 3000) //after 3 minutes
        setTimeout(lastP, 6000) //after 6 minutes
        //tis functions to restart paragraph colors again after 9 minutes
        setInterval(function(){setTimeout(firstP,0)},9000);
        setInterval(function(){setTimeout(secoundP, 3000)},9000);
        setInterval(function(){setTimeout(lastP, 6000)},9000)
    //first function for first paragraph
    function firstP(){
        pElement[2].style.color = color0;
        pElement[2].style.textShadow = shadow0;
        pElement[0].style.color = color1;
        pElement[0].style.textShadow = shadow1;
    }
    //secound function for secound paragraph
    function secoundP(){
        pElement[0].style.color = color0;
        pElement[0].style.textShadow = shadow0;
        pElement[1].style.color = color1;
        pElement[1].style.textShadow = shadow1;
    }
    //last function for last paragraph
    function lastP(){
        pElement[1].style.color = color0;
        pElement[1].style.textShadow = shadow0;
        pElement[2].style.color = color1;
        pElement[2].style.textShadow = shadow1;
    }
}
