// let myScript = document.createElement("script");
// myScript.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/d3/5.5.0/d3.min.js");
// document.body.appendChild(myScript);
// myScript.addEventListener("load", scriptLoaded, false);

// async function scriptLoaded() {

//     d3.json(`/static/datasets/top_2020_yil_5.json`, function(d) {
//         console.log('test');
//         console.log(d);
//         var box1 = d3.select("div.player-list");
//         var tRow = box1.append("div").attr("class", "row");

//         var tData = tRow.append("div").attr("class", "col").attr("id", "");
//         tRow.html(`<span class=''>Player</span><p class=''> ${d[0]} </p><div class='small_details'>City:  </div>`);

//     });
// };

// Clean box1 before loading new data. If not cleaned, clean again-- info will overlap if not. 
function cleanBox() {
    var svgArea = d3.select("div.player-details").selectAll("*").remove();
    if (!svgArea.empty()) {
        svgArea.remove();
    };
    // console.log('cleaned.....')
};

// Clean box1 before loading new data. If not cleaned, clean again-- info will overlap if not. 
function cleanBoxRight() {
    var svgArea = d3.select("div.player-details-right").selectAll("*").remove();
    if (!svgArea.empty()) {
        svgArea.remove();
    };
    // console.log('cleaned.....')
};

function playerDetailsLeft(clicked_id) {
    // alert(clicked_id);
    cleanBox();
    d3.json(`api/predict`, function(d) {
        data = d['current'];
        // console.log(d, clicked_id);
        var clicked_id_ = clicked_id - 1;

        // console.log(clicked_id_);

        var box2 = d3.select("div.player-details");
        var tpDetails = box2.append("div").attr("class", "col").attr("id", "");
        tpDetails.html(`
                <div class='row prow-details-called '> <h3 class='player-stats-selected'>${data[clicked_id_]['PLAYER_NAME']}  <tr class='list-details'> <img src='${data[clicked_id_]['PHOTO']}' class="rounded-circle" alt="Player Picture" height="50">   </tr></h3></div>
                <div class='row prow-details-called '> <h3 class='player-stats-selected'> ${data[clicked_id_]['PER']} </h3>  <span class='stat-header'>PERFORMANCE EFFICIENCY RATING </span></div>
                <div class='row prow-details-called '> <h3 class='player-stats-selected'> ${data[clicked_id_]['INFLATION']}</h3>  <span class='stat-header'>  SALARY /ANNUAL </span></div>
                <div class='row prow-details-called '> <h3 class='player-stats-selected'> ${data[clicked_id_]['SAL_PRED']}</h3>  <span class='stat-header'>  SALARY PREDICTION BASED ON PERFORMANCE /ANNUAL </span></div>
                        `);
    });
};



function playerDetailsRight(clicked_id) {
    // alert(clicked_id);
    cleanBoxRight();
    d3.json(`api/predict`, function(d) {
        data = d['historic'];
        // console.log(d, clicked_id);
        var clicked_id_ = clicked_id - 1;

        // console.log(clicked_id_);

        var box2 = d3.select("div.player-details-right");
        var tpDetails = box2.append("div").attr("class", "col").attr("id", "");
        tpDetails.html(`
                <div class='row prow-details-called '><tr class='list-details'> <img src='${data[clicked_id_]['PHOTO']}' class="rounded-circle" alt="Player Picture" height="50">   </tr> <h3 class='player-stats-selected-right'>${data[clicked_id_]['PLAYER_NAME']}  </h3></div>
                <div class='row prow-details-called '> <h3 class='player-stats-selected-right'> ${data[clicked_id_]['PER']} </h3>  <span class='stat-header-right'>PERFORMANCE EFFICIENCY RATING </span></div>
                <div class='row prow-details-called '> <h3 class='player-stats-selected-right'> ${data[clicked_id_]['INFLATION']}</h3>  <span class='stat-header-right'>  SALARY /ANNUAL </span></div>
                <div class='row prow-details-called '> <h3 class='player-stats-selected-right'> ${data[clicked_id_]['SAL_PRED']}</h3>  <span class='stat-header-right'>  SALARY PREDICTION BASED ON PERFORMANCE /ANNUAL </span></div>
                        `);
    });
};



// 2020
function GetDataFromJson() {
    d3.json(`api/predict`, function(d) {
        // console.log(d);
        d = d['current'];
        d_historic = d['historic'];
        console.log(d);

        // 2020
        var box1 = d3.select("div.player-list");
        var tRow = box1.append("div").attr("class", "row");

        tRow.html(`
        <div class='row prow-details '><a id='select-player' onClick="playerDetailsLeft(1);" href="javascript:void();">  <span class='list-details'> ${d[0]['PLAYER_NAME']} </span>   <img src='${d[0]['PHOTO']}' class="rounded-circle" alt="Player Picture" height="50"></a></div>
        <div class='row prow-details '><a id='select-player' onClick="playerDetailsLeft(2);"  href="javascript:void();">  <span class='list-details'> ${d[1]['PLAYER_NAME']} </span>  <img src='${d[1]['PHOTO']}' class="rounded-circle" alt="Player Picture" height="50"></a></div>
        <div class='row prow-details '><a id='select-player' onClick="playerDetailsLeft(3);"  href="javascript:void();">  <span class='list-details'> ${d[2]['PLAYER_NAME']} </span>  <img src='${d[2]['PHOTO']}' class="rounded-circle" alt="Player Picture" height="50"></a></div>
        <div class='row prow-details '><a id='select-player' onClick="playerDetailsLeft(4);"  href="javascript:void();">  <span class='list-details'> ${d[3]['PLAYER_NAME']} </span>  <img src='${d[3]['PHOTO']}' class="rounded-circle" alt="Player Picture" height="50"></a></div>
        <div class='row prow-details '><a id='select-player' onClick="playerDetailsLeft(5);"  href="javascript:void();"> <span class='list-details'> ${d[4]['PLAYER_NAME']} </span>   <img src='${d[4]['PHOTO']}' class="rounded-circle" alt="Player Picture" height="50"></a></div>
        <div class='row prow-details '><a id='select-player' onClick="playerDetailsLeft(6);" href="javascript:void();"> <span class='list-details'> ${d[5]['PLAYER_NAME']} </span>   <img src='${d[5]['PHOTO']}' class="rounded-circle" alt="Player Picture" height="50"> </a></div>
        <div class='row prow-details '><a id='select-player' onClick="playerDetailsLeft(7);"  href="javascript:void();"> <span class='list-details'> ${d[6]['PLAYER_NAME']} </span>   <img src='${d[6]['PHOTO']}' class="rounded-circle" alt="Player Picture" height="50"></a></div>
        <div class='row prow-details '><a id='select-player' onClick="playerDetailsLeft(8);"  href="javascript:void();"> <span class='list-details'> ${d[7]['PLAYER_NAME']} </span>  <img src='${d[7]['PHOTO']}' class="rounded-circle" alt="Player Picture" height="50"> </a></div>
        <div class='row prow-details '><a id='select-player' onClick="playerDetailsLeft(9);"  href="javascript:void();"><span class='list-details'> ${d[8]['PLAYER_NAME']} </span>   <img src='${d[8]['PHOTO']}' class="rounded-circle" alt="Player Picture" height="50"> </a></div>
        <div class='row prow-details '><a id='select-player' onClick="playerDetailsLeft(10);"  href="javascript:void();"> <span class='list-details'> ${d[9]['PLAYER_NAME']} </span> <img src='${d[9]['PHOTO']}' class="rounded-circle" alt="Player Picture" height="50"> </a></div>

                `);

    });
    return;

};


// // Historic logs
// 2020
function historicData() {
    d3.json(`api/predict`, function(d) {
        // console.log(d);
        d_historic = d['historic'];
        console.log(d_historic);


        //  Historic
        var box2 = d3.select("div.player-list-right");
        var tRow2 = box2.append("div").attr("class", "row");

        tRow2.html(`
        <div class='row prow-details-right '><a id='select-player' onClick="playerDetailsRight(1);" href="javascript:void();">   <img src='${d_historic[0]['PHOTO']}' class="rounded-circle" alt="Player Picture" height="50">  <span class='list-details'> ${d_historic[0]['PLAYER_NAME']} </span>   </a></div>
        <div class='row prow-details-right '><a id='select-player' onClick="playerDetailsRight(2);"  href="javascript:void();">  <img src='${d_historic[1]['PHOTO']}' class="rounded-circle" alt="Player Picture" height="50">  <span class='list-details'> ${d_historic[1]['PLAYER_NAME']} </span> </a></div>
        <div class='row prow-details-right '><a id='select-player' onClick="playerDetailsRight(3);"  href="javascript:void();">  <img src='${d_historic[2]['PHOTO']}' class="rounded-circle" alt="Player Picture" height="50">  <span class='list-details'> ${d_historic[2]['PLAYER_NAME']} </span>  </a></div>
        <div class='row prow-details-right '><a id='select-player' onClick="playerDetailsRight(4);"  href="javascript:void();">  <img src='${d_historic[3]['PHOTO']}' class="rounded-circle" alt="Player Picture" height="50">  <span class='list-details'> ${d_historic[3]['PLAYER_NAME']} </span> </a></div>
        <div class='row prow-details-right '><a id='select-player' onClick="playerDetailsRight(5);"  href="javascript:void();">  <img src='${d_historic[4]['PHOTO']}' class="rounded-circle" alt="Player Picture" height="50">  <span class='list-details'> ${d_historic[4]['PLAYER_NAME']} </span>  </a></div>
        <div class='row prow-details-right '><a id='select-player' onClick="playerDetailsRight(6);" href="javascript:void();">   <img src='${d_historic[5]['PHOTO']}' class="rounded-circle" alt="Player Picture" height="50">  <span class='list-details'> ${d_historic[5]['PLAYER_NAME']} </span>  </a></div>
        <div class='row prow-details-right '><a id='select-player' onClick="playerDetailsRight(7);"  href="javascript:void();">  <img src='${d_historic[6]['PHOTO']}' class="rounded-circle" alt="Player Picture" height="50">  <span class='list-details'> ${d_historic[6]['PLAYER_NAME']} </span> </a></div>
        <div class='row prow-details-right '><a id='select-player' onClick="playerDetailsRight(8);"  href="javascript:void();">  <img src='${d_historic[7]['PHOTO']}' class="rounded-circle" alt="Player Picture" height="50">  <span class='list-details'> ${d_historic[7]['PLAYER_NAME']} </span> </a></div>
        <div class='row prow-details-right '><a id='select-player' onClick="playerDetailsRight(9);"  href="javascript:void();">  <img src='${d_historic[8]['PHOTO']}' class="rounded-circle" alt="Player Picture" height="50">  <span class='list-details'> ${d_historic[8]['PLAYER_NAME']} </span>  </a></div>
        <div class='row prow-details-right '><a id='select-player' onClick="playerDetailsRight(10);"  href="javascript:void();"> <img src='${d_historic[9]['PHOTO']}' class="rounded-circle" alt="Player Picture" height="50">  <span class='list-details'> ${d_historic[9]['PLAYER_NAME']} </span>  </a></div>

                `);
    });
    return;

};









GetDataFromJson(function(result) {
    console.log(result);
    console.log('works');
});


historicData(function(result) {
    console.log(result);
    console.log('works');
});

// console.log('works')












































// let myScript = document.createElement("script");
// myScript.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/d3/5.5.0/d3.min.js");
// document.body.appendChild(myScript);




// let myScript = document.createElement("script");
// myScript.setAttribute("src", "//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js");
// document.body.appendChild(myScript);

// let myScript2 = document.createElement("script");
// myScript2.setAttribute("src", "//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js");
// document.body.appendChild(myScript2);

// let myScript3 = document.createElement("script");
// myScript3.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/velocity/2.0.6/velocity.js");
// document.body.appendChild(myScript3);

// // http: //scrollmagic.io/docs/plugins_animation.velocity.js
// myScript3.addEventListener("load", scriptLoaded, false);
// myScript2.addEventListener("load", scriptLoaded, false);
// myScript.addEventListener("load", scriptLoaded, false);



// function scriptLoaded() {
//     var controller = new ScrollMagic.Controller({
//         globalSceneOptions: {
//             triggerHook: 'onLeave',
//             duration: "200%" // this works just fine with duration 0 as well
//                 // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
//                 // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
//         }
//     })
//     console.log('test');
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
//     };

//     console.log("Script is ready to rock and roll!");

// };







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