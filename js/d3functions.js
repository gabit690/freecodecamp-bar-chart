export default {
    // PUBLIC FUNCTIONS
    existsElement: (elementName = "") => {
        return d3.select(elementName)["_groups"][0][0] != null;
    },
    createElement: (parentName = "body", elementName = "") => {     
        return d3.select(parentName).append(elementName);
    },
    renderElement: (d3Element = {}, elementName = "") => { 
        return d3Element.append(elementName);
    },
    setTextContent: (d3Element = null, text = "TITLE") => {
        d3Element.text(text);
    },
    setAttributes: (d3Element, attributes = {}) => {
        const elementProperties = Object.keys(d3Element).length;
        const attributesProperties = Object.keys(attributes).length;
        if (elementProperties > 0 && attributesProperties > 0) {
            const keys = (Object.keys(attributes)).map(key => key.replace(/_/g, "-"));
            keys.forEach((key, index) => {
                d3Element.attr(keys[index], attributes[key.replace(/-/g, "_")]);
            });
        }
    },
    setStyles: (d3Element = {}, styles = {}) => {
        const elementProperties = Object.keys(d3Element).length;
        const stylesProperties = Object.keys(styles).length;
        if (elementProperties > 0 && stylesProperties > 0) {
            const keys = (Object.keys(styles)).map(key => key.replace(/_/g, "-"));
            keys.forEach((key, index) => {
                d3Element.style(keys[index], styles[key.replace(/-/g, "_")]);
                
            });
        }
    },
    // PRIVATE FUNCTIONS
    createCartesianAxis: (axisType = "x", domain = [0, 0], range = [0, 0]) => {
        if (/^[xy]$/i.test(axisType)) {
            const axisScale = d3.scaleLinear()
                                .domain(domain)
                                .range(range);
            return (axisType === "x") ? 
                        d3.axisBottom(axisScale)
                        :
                        d3.axisLeft(axisScale);
        }
    },
    applyCartesianAxis: (d3Element = {}, type = "x", cartesianAxis = null) => {
        if (cartesianAxis != null && /[xy]/i.test(type)) {
            let padding = d3Element.attr("width") / 10;
            let height = d3Element.attr("height");
            let axis = d3Element.append("g");
            axis.attr("id", (type == "x") ? "x-axis" : "y-axis");
            if (type == "x") {
                axis.attr("transform", "translate(0, " + (height - padding) + ")");
            } else if (type == "y") {
                axis.attr("transform", "translate(" + padding  + ", 0)")
            }
            axis.call(cartesianAxis);
        }
    },
    getCartesianDomain: (axisType = "x", dataset = []) => {
        const domainResult = [0, 0];
        if (/^[xy]$/i.test(axisType)) {
            switch (axisType) {
                case "x":
                    domainResult[1] = d3.max(dataset, (d) => d[0]);
                    break;
                case "y":
                    domainResult[1] = d3.max(dataset, (d) => d[1]);
                    break;
            }
        }
        return domainResult;
    }
};