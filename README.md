[![Build Status](https://travis-ci.org/DataShepherd/number-formatter.svg?branch=master)](https://travis-ci.org/DataShepherd/number-formatter) [![Coverage Status](https://coveralls.io/repos/github/DataShepherd/number-formatter/badge.svg?branch=master)](https://coveralls.io/github/DataShepherd/number-formatter?branch=master)

Number Formatter
================

A small library that adds commas to numbers following @jdaudier's tute.

## Installation

  `npm install @DataShepherd/number-formatter`

## Usage

    var numFormatter = require('@DataShepherd/number-formatter');

    var formattedNum = numFormatter(35666);

  Output should be `35,666`


## Tests

  `npm test`

## Contributing

  In lieu of a formal style guide, take care to maintain the existing coding
  style. Add unit tests for any new or changed functionality.  Lint and test
  your code.
