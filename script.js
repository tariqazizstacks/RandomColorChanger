 
    let heading= document.querySelector("h1");
    let headingtwo= document.querySelector("h2");
    let image= document.querySelector("img");
    // btn.addEventListener("click",()=>{
    //     let red=Math.ceil(Math.random()*255);
    //     let green=Math.ceil(Math.random()*255);
    //     let blue=Math.ceil(Math.random()*255);
    //     document.body.style.backgroundColor=`rgb(${red} ${green} ${blue})`;
    // });

    //  btn.addEventListener("touchstart",()=>{
    //     let red=Math.ceil(Math.random()*255);
    //     let green=Math.ceil(Math.random()*255);
    //     let blue=Math.ceil(Math.random()*255);
    //     document.body.style.backgroundColor=`rgb(${red} ${green} ${blue})`;
    // });
    function changeColor(){
        let red=Math.ceil(Math.random()*255);
        let green=Math.ceil(Math.random()*255);
        let blue=Math.ceil(Math.random()*255);
        document.body.style.backgroundColor=`rgb(${red} ${green} ${blue})`;
    }
    image.addEventListener("click",changeColor);
    image.addEventListener("touchstart",changeColor);
 