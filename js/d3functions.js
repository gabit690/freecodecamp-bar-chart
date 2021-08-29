export default {
    existsElement: (elementName = "") => {
        return d3.select(elementName)["_groups"][0][0] != null;
    },
    renderElement: (parentName = "body", elementName = "") => {     
        return d3.select(parentName).append(elementName);
    },
    setAttributes: (d3Element = {}, attributes = {}) => {
        const elementProperties = Object.keys(d3Element).length;
        const attributesProperties = Object.keys(attributes).length;
        if (elementProperties > 0 && attributesProperties > 0) {
            const keys = (Object.keys(attributes)).map(key => key.replace(/_/g, "-"));
            keys.forEach((key, index) => {
                d3Element.attr(keys[index], attributes[key]);
            });
        }
    },
    setStyles: (d3Element = {}, styles = {}) => {
        const elementProperties = Object.keys(d3Element).length;
        const stylesProperties = Object.keys(styles).length;
        if (elementProperties > 0 && stylesProperties > 0) {
            const keys = (Object.keys(styles)).map(key => key.replace(/_/g, "-"));;
            keys.forEach((key, index) => {
                d3Element.style(keys[index], styles[key]);
            });
        }
    },
    cartesianAxis: (axisType = "x", domain = [0, 0], range = [0, 0]) => {
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
    applyCartesianAxis: (d3Element = {}, cartesianAxis = null, displacement  = "0") => {
        if (cartesianAxis != null) {
            d3Element.append("g")
                .attr("transform", "translate(0, " + displacement + ")")
                .call(cartesianAxis);
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