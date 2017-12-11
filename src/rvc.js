import Ractive from 'ractive';
import * as rcu from 'rcu';
import amdLoader from './utils/amd-loader';
import load from './load';
import build from './build';
import requireconfig from './utils/requirconfig'

let requireJsConfig = requireconfig();

if( requireJsConfig.ractiveDefaultsData) {
    Ractive.defaults.data = requireJsConfig.ractiveDefaultsData;
}

rcu.init( Ractive );

let rvc = amdLoader( 'rvc', 'html', ( name, source, req, callback, errback, config ) => {
	if ( config.isBuild ) {
		build( name, source, callback, errback );
	} else {
		load( name, req, source, callback, errback, config.versionSuffix );
	}
});

export default rvc;
