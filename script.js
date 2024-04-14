var tl= gsap.timeline()
tl.from("#left h1,#left p,#left h4 , #left h5",{
    y:30,
    opacity: 0,
    duration:0.4,
    delay:0.3,
    stagger: 0.2
})
tl.to("#left h1,#left p,#left h4 , #left h5",{
    y:-25,
    opacity:1,
})
tl.from("#page1 h2",{
    opacity:0,
    delay:0.2
})
tl.from("#shape img",{
    x:100,
    opacity:0,
    duration:0.3
})
tl.to("#shape img",{
    scale:1.4
})
tl.from("#shape #shape1,#shape #shape2,#shape #shape3,#shape #shape4,#shape #shape5",{
    opacity:0, 
    scale:0,
    delay:0.1,
    stagger:0.1
})
tl.from("#nav2 h3,#nav2 h4",{
    y:-80,
    opacity:0,
    duration:0.5,
    stagger:0.3
})
tl.from("#page2 #bar,#bar left,#bar #right",{
    y:40,
    opacity:0,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#page2 #bar",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 100%",
        scrub: 5,
        pin: true
    }
})
tl.from("#page2 #bottom, #bottom #left1,#bottom #right1",{
    y:50,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page2 #bottom",
        scroller:"body",
        // markers:true,
        start:"top 85%",
        end: "top 100%",
        scrub:5,
        pin:true
    }
})
tl.from("#left2 h5,#left2 h1,#left2 p, #page3 #right2",{
    x:60,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#left2 h5,#left2 h1,#left2 p, #page3 #right2",
        scroller:"body",
        // markers:true,
        start:"top 85%",
        end:"top 100%",
        scrub:4
    }
})

tl.from("#bot-nav .bot-logos",{
    y:20,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#bot-nav .bot-logos",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 100%",
        scrub:5,
        pin:true
    }
})
tl.from("#subscribe h1,#subscribe h4",{
    y:70,
    opacity:0,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#subscribe h1,#subscribe h4",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 100%",
        scrub:5,
    }
})
tl.from("#end .end-left,#end .end-right",{
    opacity:0,
    delay:0.4,
    scrollTrigger:{
        trigger:"#end .end-left,#end .end-right",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 100%",
        scrub:5,
        pin:true
    }
})
