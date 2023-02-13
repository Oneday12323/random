/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 2.0

/* tslint:disable:max-line-length */
/* tslint:disable:max-file-line-count */

import arcsine = require( './../../../strided/arcsine' );
import beta = require( './../../../strided/beta' );
import discreteUniform = require( './../../../strided/discrete-uniform' );
import exponential = require( './../../../strided/exponential' );
import lognormal = require( './../../../strided/lognormal' );
import normal = require( './../../../strided/normal' );
import randu = require( './../../../strided/randu' );
import uniform = require( './../../../strided/uniform' );

/**
* Interface describing the `strided` namespace.
*/
interface Namespace {
	/**
	* Fills a strided array with pseudorandom numbers drawn from an arcsine distribution.
	*
	* @param N - number of indexed elements
	* @param a - minimum support
	* @param sa - `a` stride length
	* @param b - maximum support
	* @param sb - `b` stride length
	* @param out - output array
	* @param so - `out` stride length
	* @param options - function options
	* @throws minimum support must be less than maximum support
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.arcsine( out.length, [ 2.0 ], 0, [ 5.0 ], 0, out, 1 );
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.arcsine.ndarray( out.length, [ 2.0 ], 0, 0, [ 5.0 ], 0, 0, out, 1, 0 );
	*/
	arcsine: typeof arcsine;

	/**
	* Fills a strided array with pseudorandom numbers drawn from a beta distribution.
	*
	* @param N - number of indexed elements
	* @param alpha - first shape parameter
	* @param sa - `alpha` stride length
	* @param beta - second shape parameter
	* @param sb - `beta` stride length
	* @param out - output array
	* @param so - `out` stride length
	* @param options - function options
	* @throws must provide valid distribution parameters
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.beta( out.length, [ 2.0 ], 0, [ 5.0 ], 0, out, 1 );
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.beta.ndarray( out.length, [ 2.0 ], 0, 0, [ 5.0 ], 0, 0, out, 1, 0 );
	*/
	beta: typeof beta;

	/**
	* Fills a strided array with pseudorandom numbers drawn from a discrete uniform distribution.
	*
	* @param N - number of indexed elements
	* @param a - minimum support
	* @param sa - `a` stride length
	* @param b - maximum support
	* @param sb - `b` stride length
	* @param out - output array
	* @param so - `out` stride length
	* @param options - function options
	* @throws minimum support must be less than or equal to maximum support
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.discreteUniform( out.length, [ -10 ], 0, [ 10 ], 0, out, 1 );
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.discreteUniform.ndarray( out.length, [ -10 ], 0, 0, [ 10 ], 0, 0, out, 1, 0 );
	*/
	discreteUniform: typeof discreteUniform;

	/**
	* Fills a strided array with pseudorandom numbers drawn from an exponential distribution.
	*
	* @param N - number of indexed elements
	* @param lambda - rate parameter
	* @param sl - `lambda` strided length
	* @param out - output array
	* @param so - `out` stride length
	* @param options - function options
	* @throws must provide valid distribution parameters
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.exponential( out.length, [ 2.0 ], 0, out, 1 );
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.exponential.ndarray( out.length, [ 2.0 ], 0, 0, out, 1, 0 );
	*/
	exponential: typeof exponential;

	/**
	* Fills a strided array with pseudorandom numbers drawn from a lognormal distribution.
	*
	* @param N - number of indexed elements
	* @param mu - location parameter
	* @param sm - `mu` stride length
	* @param sigma - scale parameter
	* @param ss - `sigma` stride length
	* @param out - output array
	* @param so - `out` stride length
	* @param options - function options
	* @throws must provide valid distribution parameters
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.lognormal( out.length, [ 2.0 ], 0, [ 5.0 ], 0, out, 1 );
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.lognormal.ndarray( out.length, [ 2.0 ], 0, 0, [ 5.0 ], 0, 0, out, 1, 0 );
	*/
	lognormal: typeof lognormal;

	/**
	* Fills a strided array with pseudorandom numbers drawn from a normal distribution.
	*
	* @param N - number of indexed elements
	* @param mu - mean
	* @param sm - `mu` stride length
	* @param sigma - standard deviation
	* @param ss - `sigma` stride length
	* @param out - output array
	* @param so - `out` stride length
	* @param options - function options
	* @throws must provide valid distribution parameters
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.normal( out.length, [ 2.0 ], 0, [ 5.0 ], 0, out, 1 );
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.normal.ndarray( out.length, [ 2.0 ], 0, 0, [ 5.0 ], 0, 0, out, 1, 0 );
	*/
	normal: typeof normal;

	/**
	* Fills a strided array with uniformly distributed pseudorandom numbers between `0` and `1`.
	*
	* @param N - number of indexed elements
	* @param out - output array
	* @param so - `out` stride length
	* @param options - function options
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.randu( out.length, out, 1 );
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.randu.ndarray( out.length, out, 1, 0 );
	*/
	randu: typeof randu;

	/**
	* Fills a strided array with pseudorandom numbers drawn from a continuous uniform distribution.
	*
	* @param N - number of indexed elements
	* @param a - minimum support
	* @param sa - `a` stride length
	* @param b - maximum support
	* @param sb - `b` stride length
	* @param out - output array
	* @param so - `out` stride length
	* @param options - function options
	* @throws minimum support must be less than maximum support
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.uniform( out.length, [ 2.0 ], 0, [ 5.0 ], 0, out, 1 );
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* ns.uniform.ndarray( out.length, [ 2.0 ], 0, 0, [ 5.0 ], 0, 0, out, 1, 0 );
	*/
	uniform: typeof uniform;
}

/**
* Pseudorandom number generator strided array functions.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
