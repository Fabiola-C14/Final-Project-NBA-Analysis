let myScript = document.createElement("script");
myScript.setAttribute("src", "//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js");
document.body.appendChild(myScript);

let myScript2 = document.createElement("script");
myScript2.setAttribute("src", "//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js");
document.body.appendChild(myScript2);

let myScript3 = document.createElement("script");
myScript3.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/velocity/2.0.6/velocity.js");
document.body.appendChild(myScript3);

// http: //scrollmagic.io/docs/plugins_animation.velocity.js
myScript3.addEventListener("load", scriptLoaded, false);
myScript2.addEventListener("load", scriptLoaded, false);
myScript.addEventListener("load", scriptLoaded, false);



function scriptLoaded() {
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
            duration: "200%" // this works just fine with duration 0 as well
                // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
                // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
        }
    })
    console.log('test');
    // get all slides
    var slides = document.querySelectorAll("section.panel");

    // create scene for every slide
    for (var i = 0; i < slides.length; i++) {
        new ScrollMagic.Scene({
                triggerElement: slides[i]
            })
            .setPin(slides[i], { pushFollowers: false })
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
    };

    console.log("Script is ready to rock and roll!");

};







// var controller = new ScrollMagic.Controller({
//     globalSceneOptions: {
//         triggerHook: 'onLeave',
//         duration: "200%" // this works just fine with duration 0 as well
//             // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
//             // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
//     }
// });
// console.log('test');
// // get all slides
// var slides = document.querySelectorAll("section.panel");

// // create scene for every slide
// for (var i = 0; i < slides.length; i++) {
//     new ScrollMagic.Scene({
//             triggerElement: slides[i]
//         })
//         .setPin(slides[i], { pushFollowers: false })
//         .addIndicators() // add indicators (requires plugin)
//         .addTo(controller);
// };









// document.onload(function() { // wait for document ready
//     // init
//     var controller = new ScrollMagic.Controller({
//         globalSceneOptions: {
//             triggerHook: 'onLeave',
//             duration: "200%" // this works just fine with duration 0 as well
//                 // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
//                 // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
//         }
//     });

//     // get all slides
//     var slides = document.querySelectorAll("section.panel");

//     // create scene for every slide
//     for (var i = 0; i < slides.length; i++) {
//         new ScrollMagic.Scene({
//                 triggerElement: slides[i]
//             })
//             .setPin(slides[i], { pushFollowers: false })
//             .addIndicators() // add indicators (requires plugin)
//             .addTo(controller);
//     }
// });