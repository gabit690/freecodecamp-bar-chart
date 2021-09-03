import d3functions from './d3functions.js';

document.addEventListener('DOMContentLoaded', function(){

    // SVG Container
    const svg = d3functions.createElement("main", "svg");

    d3functions.setAttributes(svg, {
        id: "graph",
        width: 576,
        height: 376
    });

    d3functions.setStyles(svg, {
        display: "block",
        margin: "auto",
        outline: "grey solid 10px"
    });

    // Graph' Title

    const text = d3functions.createElement("svg", "text");
    let padding = svg.attr("width") / 10;
    
    d3functions.setAttributes(text, {
        id: "title",
        fill: "#000000", 
        x: (svg.attr("width") / 2) - 100,
        y: padding,
    });
    
    d3functions.setStyles(text, {
        font_size: "40px",
        font_family: "Verdana",
        text_decoration: "underline"
    });

    d3functions.setTextContent(text, "MAIN TITLE");
    
    // Get Data

    const req = new XMLHttpRequest();
    const url = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";
    req.open("GET", url, true);
    req.onload = () => {
        const data = JSON.parse(req.responseText);
        console.log(data);
        // Cartesian Axis
    };
    const datos = [
        [2, 5], 
        [1, 2], 
        [4, 1], 
        [7, 9], 
        [20, 2]
    ];
    const pad = svg.attr("width") / 10;
    const xAxis = d3functions.createCartesianAxis("x", [0, 20], [pad, svg.attr("width") - pad]);
    d3functions.applyCartesianAxis(svg, "x", xAxis);
    const yAxis = d3functions.createCartesianAxis("y", [0, 10], [svg.attr("height") - pad, pad]);
    d3functions.applyCartesianAxis(svg, "y", yAxis);
    // req.send();

    /*
    
    Scale linear function get Graph value

    (((GraphData - RangeMin) * (DomainMax - DomainMin)) / (RangeMax - RangeMin)) + DomainMin

    */

    // Add SVG
        // Get Data
        // Set Scale
        // Set Final Graph´s Style
});

// Visualize Data with a Bar Chart

// Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/GrZVaM.

// User Story #2: My chart should have a g element x-axis with a corresponding id="x-axis".

// User Story #3: My chart should have a g element y-axis with a corresponding id="y-axis".

// User Story #4: Both axes should contain multiple tick labels, each with a corresponding class="tick".

// User Story #5: My chart should have a rect element for each data point with a corresponding class="bar" displaying the data.

// User Story #6: Each bar should have the properties data-date and data-gdp containing date and GDP values.

// User Story #7: The bar elements' data-date properties should match the order of the provided data.

// User Story #8: The bar elements' data-gdp properties should match the order of the provided data.

// User Story #9: Each bar element's height should accurately represent the data's corresponding GDP.

// User Story #10: The data-date attribute and its corresponding bar element should align with the corresponding value on the x-axis.

// User Story #11: The data-gdp attribute and its corresponding bar element should align with the corresponding value on the y-axis.

// User Story #12: I can mouse over an area and see a tooltip with a corresponding id="tooltip" which displays more information about the area.

// User Story #13: My tooltip should have a data-date property that corresponds to the data-date of the active area.

// Here is the dataset you will need to complete this project: https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json