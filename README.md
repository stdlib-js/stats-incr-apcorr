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

# incrapcorr

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Compute a sample absolute [Pearson product-moment correlation coefficient][pearson-correlation] incrementally.

<section class="intro">

The [Pearson product-moment correlation coefficient][pearson-correlation] between random variables `X` and `Y` is defined as

<!-- <equation class="equation" label="eq:pearson_correlation_coefficient" align="center" raw="\rho_{X,Y} = \frac{\operatorname{cov}(X,Y)}{\sigma_X \sigma_Y}" alt="Equation for the Pearson product-moment correlation coefficient."> -->

<div class="equation" align="center" data-raw-text="\rho_{X,Y} = \frac{\operatorname{cov}(X,Y)}{\sigma_X \sigma_Y}" data-equation="eq:pearson_correlation_coefficient">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/80f96253bf726f33bc71d8eb68037ab203ae4cf9/lib/node_modules/@stdlib/stats/incr/apcorr/docs/img/equation_pearson_correlation_coefficient.svg" alt="Equation for the Pearson product-moment correlation coefficient.">
    <br>
</div>

<!-- </equation> -->

where the numerator is the [covariance][covariance] and the denominator is the product of the respective standard deviations.

For a sample of size `n`, the sample [Pearson product-moment correlation coefficient][pearson-correlation] is defined as

<!-- <equation class="equation" label="eq:sample_pearson_correlation_coefficient" align="center" raw="r = \frac{\sum_{i=0}^{n-1} (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=0}^{n-1} (x_i - \bar{x})^2} \sqrt{\sum_{i=0}^{n-1} (y_i - \bar{y})^2}}" alt="Equation for the sample Pearson product-moment correlation coefficient."> -->

<div class="equation" align="center" data-raw-text="r = \frac{\sum_{i=0}^{n-1} (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=0}^{n-1} (x_i - \bar{x})^2} \sqrt{\sum_{i=0}^{n-1} (y_i - \bar{y})^2}}" data-equation="eq:sample_pearson_correlation_coefficient">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/80f96253bf726f33bc71d8eb68037ab203ae4cf9/lib/node_modules/@stdlib/stats/incr/apcorr/docs/img/equation_sample_pearson_correlation_coefficient.svg" alt="Equation for the sample Pearson product-moment correlation coefficient.">
    <br>
</div>

<!-- </equation> -->

The sample **absolute** [Pearson product-moment correlation coefficient][pearson-correlation] is thus defined as the absolute value of the sample [Pearson product-moment correlation coefficient][pearson-correlation].

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-incr-apcorr
```

</section>

<section class="usage">

## Usage

```javascript
var incrapcorr = require( '@stdlib/stats-incr-apcorr' );
```

#### incrapcorr( \[mx, my] )

Returns an accumulator `function` which incrementally computes a sample absolute [Pearson product-moment correlation coefficient][pearson-correlation].

```javascript
var accumulator = incrapcorr();
```

If the means are already known, provide `mx` and `my` arguments.

```javascript
var accumulator = incrapcorr( 3.0, -5.5 );
```

#### accumulator( \[x, y] )

If provided input value `x` and `y`, the accumulator function returns an updated accumulated value. If not provided input values `x` and `y`, the accumulator function returns the current accumulated value.

```javascript
var accumulator = incrapcorr();

var v = accumulator( 2.0, 1.0 );
// returns 0.0

v = accumulator( 1.0, -5.0 );
// returns 1.0

v = accumulator( 3.0, 3.14 );
// returns ~0.965

v = accumulator();
// returns ~0.965
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **all** future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   In comparison to the sample [Pearson product-moment correlation coefficient][pearson-correlation], the sample absolute [Pearson product-moment correlation coefficient][pearson-correlation] is useful when only concerned with the strength of the correlation and not the direction.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var incrapcorr = require( '@stdlib/stats-incr-apcorr' );

var accumulator;
var x;
var y;
var i;

// Initialize an accumulator:
accumulator = incrapcorr();

// For each simulated datum, update the sample absolute correlation coefficient...
for ( i = 0; i < 100; i++ ) {
    x = randu() * 100.0;
    y = randu() * 100.0;
    accumulator( x, y );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-apcorr.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-apcorr

[test-image]: https://github.com/stdlib-js/stats-incr-apcorr/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-incr-apcorr/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-apcorr/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-apcorr?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-apcorr
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-apcorr/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-apcorr/main/LICENSE

[pearson-correlation]: https://en.wikipedia.org/wiki/Pearson_correlation_coefficient

[covariance]: https://en.wikipedia.org/wiki/Covariance

</section>

<!-- /.links -->
