<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Pluck

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Extract a property value from each element of an object array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-pluck
```

</section>

<section class="usage">

## Usage

```javascript
var pluck = require( '@stdlib/utils-pluck' );
```

#### pluck( arr, prop\[, options] )

Extracts a property value from each element of an object `array`.

<!-- eslint-disable object-curly-newline, object-property-newline -->

```javascript
var arr = [
    { 'a': 1, 'b': 2 },
    { 'a': 0.5, 'b': 3 }
];

var out = pluck( arr, 'a' );
// returns [ 1, 0.5 ]
```

The function accepts the following `options`:

-   **copy**: `boolean` indicating whether to return a new data structure. Default: `true`.

By default, the function returns a new data structure. To mutate the input data structure (e.g., when input values can be discarded or when optimizing memory usage), set the `copy` option to `false`.

<!-- eslint-disable object-curly-newline, object-property-newline -->

```javascript
var arr = [
    { 'a': 1, 'b': 2 },
    { 'a': 0.5, 'b': 3 }
];

var out = pluck( arr, 'a', { 'copy': false } );
// returns [ 1, 0.5 ]

var bool = ( arr[ 0 ] === out[ 0 ] );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function skips `null` and `undefined` array elements.

    <!-- eslint-disable object-curly-newline, object-property-newline -->

    ```javascript
    var arr = [
        { 'a': 1, 'b': 2 },
        null,
        void 0,
        { 'a': 0.5, 'b': 3 }
    ];

    var out = pluck( arr, 'a' );
    // returns [ 1, , , 0.5 ]
    ```

-   Extracted values are **not** cloned.

    <!-- eslint-disable object-curly-newline, object-curly-spacing -->

    ```javascript
    var arr = [
        { 'a': { 'b': 2 } },
        { 'a': { 'b': 3 } }
    ];

    var out = pluck( arr, 'a' );
    // returns [ { 'b': 2 }, { 'b': 3 } ]

    var bool = ( arr[ 0 ].a === out[ 0 ] );
    // returns true
    ```

    To prevent unintended mutation, use [copy][@stdlib/utils/copy].

    <!-- eslint-disable object-curly-newline, object-curly-spacing -->

    ```javascript
    var copy = require( '@stdlib/utils-copy' );

    var arr = [
        { 'a': { 'b': 2 } },
        { 'a': { 'b': 3 } }
    ];

    var out = pluck( arr, 'a' );
    // returns [ { 'b': 2 }, { 'b': 3 } ]

    // Perform a deep copy:
    out = copy( out );

    var bool = ( arr[ 0 ].a === out[ 0 ] );
    // returns false
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var pluck = require( '@stdlib/utils-pluck' );

var arr;
var tmp;
var out;
var i;
var j;

// Generate a 100x5 2d-array...
arr = new Array( 100 );
for ( i = 0; i < arr.length; i++ ) {
    tmp = new Array( 5 );
    for ( j = 0; j < tmp.length; j++ ) {
        tmp[ j ] = round( randu()*100.0*(j+1.0) );
    }
    arr[ i ] = tmp;
}
// Pluck the 3rd column:
out = pluck( arr, 2 );
console.log( out );
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-pluck.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-pluck

[test-image]: https://github.com/stdlib-js/utils-pluck/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/utils-pluck/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-pluck/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-pluck?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-pluck.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-pluck/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-pluck/main/LICENSE

[@stdlib/utils/copy]: https://github.com/stdlib-js/utils-copy

</section>

<!-- /.links -->
