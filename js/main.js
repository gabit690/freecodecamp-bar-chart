import d3functions from './d3functions.js';

document.addEventListener('DOMContentLoaded', function(){

    // SVG Container
    const svg = d3functions.createElement("main", "svg");

    d3functions.setAttributes(svg, {
        id: "graph",
        width: 940,
        height: 600
    });

    d3functions.setStyles(svg, {
        display: "block",
        margin: "auto",
        outline: "grey solid 10px"
    });

    // Graph' Title
    const text = d3functions.createElement("svg", "text");
    
    d3functions.setAttributes(text, {
        id: "title",
        fill: "#000000", 
        x: 0,
        y: (svg.attr("width") / 10) - 25
    });
    
    d3functions.setStyles(text, {
        font_size: "40px",
        font_family: "Verdana",
        text_decoration: "underline",
        transform: "translate(30%, 0%)"
    });

    d3functions.setTextContent(text, "United States GDP");
    
    // Get Data
    const req = new XMLHttpRequest();
    const url = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";
    req.open("GET", url, true);
    req.onload = () => {
        const responseData = JSON.parse(req.responseText);
        d3functions.renderBarChart(svg, responseData.data);
    };
    req.send();

    /*
    
    Scale linear function get Graph value

    (((GraphData - RangeMin) * (DomainMax - DomainMin)) / (RangeMax - RangeMin)) + DomainMin

    */

});

// Visualize Data with a Bar Chart

// Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/GrZVaM.

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