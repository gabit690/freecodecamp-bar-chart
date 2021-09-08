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
        outline: "5px solid black",
        box_shadow: "-5px 10px 20px 3px"
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
});