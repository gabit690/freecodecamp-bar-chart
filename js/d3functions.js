export default {
    existsElement: (element = "") => {
        return d3.select(element)["_groups"][0][0] != null;
    },
    renderElement: (parent = "body", element = "") => {     
        return d3.select(parent).append(element);
    },
    setAttributes: (element = {}, attributes = {}) => {
        const elementProperties = Object.keys(element).length;
        const attributesProperties = Object.keys(attributes).length;
        if (elementProperties > 0 && attributesProperties > 0) {
            const keys = Object.keys(attributes);
            keys.forEach((key, index) => {
                element.style(keys[index], attributes[key]);
            });
            console.log("Attributes applied!");
        }
    },
    setStyles: (element = {}, styles = {}) => {
        const elementProperties = Object.keys(element).length;
        const stylesProperties = Object.keys(styles).length;
        if (elementProperties > 0 && stylesProperties > 0) {
            const keys = Object.keys(styles);
            keys.forEach((key, index) => {
                element.style(keys[index], styles[key]);
            });
            console.log("Styles applied!");
        }
    }
};