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

// Create scatter plot

//Setup chart
const top_n = 12;
const height = 600;
const width = 1000;

const margin = {
    top: 80,
    right: 50,
    bottom: 5,
    left: 50
};

let barPadding = (height - (margin.bottom + margin.top)) / (top_n * 5);

//Create svg wrapper to append into to hold chart  
const svg = d3.selectAll("#content")
    .attr("width", 1000)
    .attr("height", 200);

function makeplot() {
    Plotly.d3.csv('./static/datasets/all_stars_yes.csv', function(data) {
        Plotly.d3.csv('./static/datasets/all_stars_no.csv', function(data2) {
            console.log('test');
            var x1 = [],
                y1 = [],
                m1 = [],
                p1 = [];
            var x2 = [],
                y2 = [],
                m2 = [],
                p2 = [];

            for (var i = 0; i < data.length; i++) {
                row = data[i];
                x1.push(row['Year']);
                y1.push(row['Inflation']);
                m1.push(row['Selected?']);
                p1.push(row['Player']);
                // n1.push( row['Prior ASG Appearances'] );
            }

            for (var i = 0; i < data2.length; i++) {
                row = data2[i];
                x2.push(row['Year']);
                y2.push(row['Inflation']);
                m2.push(row['Selected?']);
                p2.push(row['Player']);
                // n2.push( row['Prior ASG Appearances'] );
            }

            var trace1 = [{
                x: x1,
                y: y1,
                name: "All Stars",
                mode: 'markers',
                type: 'scatter',
                hovertemplate: 'Player: %{text}' +
                    '<br>Salary: $%{y}<br>',
                text: p1,
                marker: {
                    color: '#ffbe26',
                    size: 8,
                    line: {
                        color: '#0a1b29',
                        width: 1
                    },
                }

            }];

            var trace2 = [{
                x: x2,
                y: y2,
                name: "Not All Stars",
                mode: 'markers',
                type: 'scatter',
                hovertemplate: 'Player: %{text}' +
                    '<br>Salary: $%{y}<br>',
                text: p2,
                marker: {
                    color: '#157a79',
                    size: 5,
                    line: {
                        color: '#0a1b29',
                        width: 1
                    }
                }

            }];

            var layout = {
                title: 'All Stars vs Salary',
                hovermode: 'closest'
            };

            var AllData = [trace1[0], trace2[0]];
            Plotly.newPlot('content', AllData, layout);

        });
    });
};

makeplot();