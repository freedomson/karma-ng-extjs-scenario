karma-ng-extjs-scenario
=======================

Frontend UI Integration Testing Scenario for Ext JS (based on karma-ng-scenario)

We will use [Karma](http://karma-runner.github.io) for automated browser testing, [Jasmine](http://jasmine.github.io/) as the unit testing framework and [karma-ng-extjs-scenario](https://github.com/freedomson/karma-ng-extjs-scenario)
which is basically a fork from [karma-ng-scenario](https://github.com/karma-runner/karma-ng-scenario) for E2E testing.


### 1 - Prerequisites

Install [Node.js](http://nodejs.org/download/) and [Node package manager - npm](https://www.npmjs.org/).

### 2 - Install required Node modules

|  | Package |
|:-------------:|:----------- |
| 1 | npm install karma |
| 2 | npm install karma-chrome-launcher |
| 3 | npm install karma-jasmine |
| 4 | npm install karma-ng-extjs-scenario |


### 3 - Setup a Karma configuration file

More info on what is a [Karma configuration file](http://karma-runner.github.io/0.12/config/configuration-file.html).

[Karma configuration file example](https://github.com/freedomson/karma-ng-extjs-scenario/blob/master/examples/karma.conf.js)


### 4 - Build a Jasmine Behavior-Driven JavaScript suite test.

[Jasmine unit test file example](https://github.com/freedomson/karma-ng-extjs-scenario/blob/master/examples/testMain.spec.js)

### 5 - Run automated test suite.
```javascript
karma start karma.conf.js
```
