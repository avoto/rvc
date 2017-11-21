import * as rcu from 'rcu';
import requireconfig from './utils/requirconfig';

export default function load ( base, req, source, callback, errback ) {

	rcu.make( source, {
		url: `${base}.html`,
		loadImport ( name, path, baseUrl, callback ) {
			path = rcu.resolve( path, base );
            let requireJsConfig = requireconfig();
            if(path.charAt( 0 ) === '/' && requireJsConfig.rvcRootPath) {
				path = requireJsConfig.rvcRootPath + path;
			}
			req([ 'rvc!' + path.replace( /\.html$/, '' ) ], callback );
		},
		loadModule ( name, path, baseUrl, callback ) {
			req([ path ], callback );
		},
		require ( name ) {
			return req( name );
		}
	}, callback, errback );
}


