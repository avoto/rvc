export default function () {

    if(requirejs && nestedPropertyExists(requirejs, ['s','contexts','_','config'])) {
        return requirejs.s.contexts._.config;
    }
    return {};

}

function nestedPropertyExists(obj, props) {
    let prop = props.shift();
    return prop === undefined
        ? true
        : obj.hasOwnProperty(prop) ? nestedPropertyExists(obj[prop], props) : false;
}