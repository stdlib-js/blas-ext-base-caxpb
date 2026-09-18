<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# caxpb

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Multiply each element in a single-precision complex floating-point strided array by a scalar constant and add a scalar constant to each result.



<section class="usage">

## Usage

```javascript
import caxpb from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-caxpb@deno/mod.js';
```

#### caxpb( N, alpha, beta, x, strideX )

Multiplies each element in a single-precision complex floating-point strided array by a scalar constant and adds a scalar constant to each result.

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@deno/mod.js';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@deno/mod.js';

var x = new Complex64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

var alpha = new Complex64( 2.0, 0.0 );
var beta = new Complex64( 1.0, 0.0 );

caxpb( x.length, alpha, beta, x, 1 );
// x => <Complex64Array>[ -3.0, 2.0, 7.0, -10.0, 9.0, 0.0, -1.0, -6.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: first scalar constant.
-   **beta**: second scalar constant.
-   **x**: input [`Complex64Array`][@stdlib/array/complex64].
-   **strideX**: stride length.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to multiply every other element by `alpha` and add `beta`:

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@deno/mod.js';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@deno/mod.js';

var x = new Complex64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

var alpha = new Complex64( 2.0, 0.0 );
var beta = new Complex64( 1.0, 0.0 );

caxpb( 2, alpha, beta, x, 2 );
// x => <Complex64Array>[ -3.0, 2.0, 3.0, -5.0, 9.0, 0.0, -1.0, -3.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@deno/mod.js';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@deno/mod.js';

// Initial array:
var x0 = new Complex64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0, 7.0, -8.0 ] );

// Create an offset view:
var x1 = new Complex64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Define scalar constants:
var alpha = new Complex64( 2.0, 0.0 );
var beta = new Complex64( 1.0, 0.0 );

// Multiply every other element by alpha and add beta starting from the second element:
caxpb( 2, alpha, beta, x1, 2 );
// x0 => <Complex64Array>[ 1.0, -2.0, 7.0, -8.0, 5.0, -6.0, 15.0, -16.0 ]
```

#### caxpb.ndarray( N, alpha, beta, x, strideX, offsetX )

Multiplies each element in a single-precision complex floating-point strided array by a scalar constant and adds a scalar constant to each result using alternative indexing semantics.

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@deno/mod.js';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@deno/mod.js';

var x = new Complex64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

var alpha = new Complex64( 2.0, 0.0 );
var beta = new Complex64( 1.0, 0.0 );

caxpb.ndarray( x.length, alpha, beta, x, 1, 0 );
// x => <Complex64Array>[ -3.0, 2.0, 7.0, -10.0, 9.0, 0.0, -1.0, -6.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access only the last two elements of the strided array:

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@deno/mod.js';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@deno/mod.js';

var x = new Complex64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

var alpha = new Complex64( 2.0, 0.0 );
var beta = new Complex64( 1.0, 0.0 );

caxpb.ndarray( 2, alpha, beta, x, 1, 1 );
// x => <Complex64Array>[ 1.0, -2.0, 7.0, -8.0, 11.0, -12.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return the strided array unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@deno/mod.js';
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@deno/mod.js';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@deno/mod.js';
import logEach from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each@deno/mod.js';
import caxpb from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-caxpb@deno/mod.js';

var xbuf = discreteUniform( 20, -100, 100, {
    'dtype': 'float32'
});
var x = new Complex64Array( xbuf.buffer );
var alpha = new Complex64( 2.0, 1.0 );
var beta = new Complex64( 5.0, -3.0 );

caxpb( x.length, alpha, beta, x, 1 );
logEach( '%s', x );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

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

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-caxpb.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-caxpb

[test-image]: https://github.com/stdlib-js/blas-ext-base-caxpb/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-caxpb/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-caxpb/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-caxpb?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-caxpb.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-caxpb/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-caxpb/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-caxpb/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-caxpb/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-caxpb/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-caxpb/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-caxpb/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-caxpb/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-caxpb/main/LICENSE

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64/tree/deno

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
