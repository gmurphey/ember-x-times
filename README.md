# ember-x-times

An Ember addon that exposes a component to render a given block x number of times.

[![Build Status](https://travis-ci.org/gmurphey/ember-x-times.svg?branch=master)](https://travis-ci.org/gmurphey/ember-x-times)

## Usage

``` htmlbars
<ul>
  {{#x-times 5 as |index|}}
  <li>{{index}}</li>
  {{/x-times}}
</ul>
```

Will render as list of of integers `0` through `4`.

## Collaborating

Pull requests and issues are welcome.

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
