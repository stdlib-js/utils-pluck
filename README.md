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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Pluck

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Extract a property value from each element of an object array.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import pluck from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-pluck@deno/mod.js';
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
    import copy from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@deno/mod.js';

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
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@deno/mod.js';
import pluck from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-pluck@deno/mod.js';

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

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-deep-pluck`][@stdlib/utils/deep-pluck]</span><span class="delimiter">: </span><span class="description">extract a nested property value from each element of an object array.</span>
-   <span class="package-name">[`@stdlib/utils-pick`][@stdlib/utils/pick]</span><span class="delimiter">: </span><span class="description">return a partial object copy containing only specified keys.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-pluck.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-pluck

[test-image]: https://github.com/stdlib-js/utils-pluck/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-pluck/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-pluck/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-pluck?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-pluck.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-pluck/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-pluck/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-pluck/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-pluck/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-pluck/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-pluck/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-pluck/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-pluck/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-pluck/main/LICENSE

[@stdlib/utils/copy]: https://github.com/stdlib-js/utils-copy/tree/deno

<!-- <related-links> -->

[@stdlib/utils/deep-pluck]: https://github.com/stdlib-js/utils-deep-pluck/tree/deno

[@stdlib/utils/pick]: https://github.com/stdlib-js/utils-pick/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
