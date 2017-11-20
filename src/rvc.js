import Ractive from 'ractive';
import * as rcu from 'rcu';
import amdLoader from './utils/amd-loader';
import load from './load';
import build from './build';

if(requirejs && nestedPropertyExists(requirejs, ['s','contexts','_','config','ractiveDefaultsData'])) {
    Ractive.defaults.data = requirejs.s.contexts._.config.ractiveDefaultsData;
}

rcu.init( Ractive );

let rvc = amdLoader( 'rvc', 'html', ( name, source, req, callback, errback, config ) => {
	if ( config.isBuild ) {
		build( name, source, callback, errback );
	} else {
		load( name, req, source, callback, errback );
	}
});

function nestedPropertyExists(obj, props) {
    var prop = props.shift();
    return prop === undefined
        ? true
        : obj.hasOwnProperty(prop) ? nestedPropertyExists(obj[prop], props) : false;
}

export default rvc;
