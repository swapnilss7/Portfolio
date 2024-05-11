// menu animation

var menubtn = document.querySelector("#menubar")
var menupage = document.querySelector(".phone")
var flag = 0
menubtn.addEventListener("click", function(){
    if(flag == 0){
        menupage.style.top = 0
        flag = 1
    }else{
        menupage.style.top = "-100%"
        flag = 0
    }

})

   
   
   
   
   
   // cursor animation

function cursor (){
    var main = document.querySelector(".main");
    var cursor = document.querySelector(".cursor");
    
    
    main.addEventListener("mousemove", function(dets){
        gsap.to(cursor,{
            x:dets.x,
            y:dets.y,
        })
    })
}
cursor();





                                      // gsap animation //
                                      
function page1(){
    var tl = gsap.timeline()


tl.from(".left h2",{
    y:-80,
    opacity:0,
    duration:1,
    delay:.5,
    
})
tl.from(".right ul li a ",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.2,
})
tl.from(".left1 h1",{
    x:-50,
    opacity:0,
    duration:.3,  
})
tl.from(".hello h4",{
    x:-50,
    opacity:0,
    duration:.3,
    
})
tl.from(".hii",{
    x:-50,
    opacity:0,
    duration:.3,
    
})
tl.from(".left1 h5",{
    x:-50,
    opacity:0,
    duration:.3,
    
})
tl.from(".icons",{
    x:-50,
    opacity:0,
    duration:.3,
    
})
tl.from(".right1 ",{
    x:150,
    opacity:0,
    duration:.9,
    
}, "-=1.2")
}
page1();
function page2(){
gsap.from(".hero2 h1, .png",{
    y:-50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".hero2 h1",
        scroller:"body",
        scrub:3,
        start:"top 40%",
        
    }
})
}
page2();
function page3(){
    gsap.from(".hero3 h1",{
        y:-40,
        opacity:0,
        duration:1.5,
        scrollTrigger:{
            trigger:".hero3 h1",
            scroller:"body",
            scrub:3,
            start:"top 60%",
            
        }
}
)

gsap.from(".gym, .color",{
    x:-120,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        trigger:".gym",
        scroller:"body",
        start:"top 150%",
        scrub:2,
    }
}
)


gsap.from(".todo, .simon",{
    x:120,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        trigger:".todo",
        scroller:"body",
        start:"top 150%",
        scrub:2,
    }
}
)

}
page3();
function page4(){
    gsap.from(".left2 img",{
        x:-50,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:".left2 img",
            scroller:"body",
            start:"top 180%",
            scrub:2,
        }
    })

    gsap.from(".right2",{
        x:50,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:".right2",
            scroller:"body",
            start:"top 170%",
           scrub:2,
        }
    })

}
page4();
function page5(){
 gsap.from(".hero5 h3, h2",{
    y:-100,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        trigger:".hero5 h3, h2",
        scroller:"body",
        start:"top 40%",
        scrub:3,
    }
 })

 gsap.from(".hit",{
    x:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".hit",
        scroller:"body",
        start:"top 40%",
    }
 })


}
page5();



