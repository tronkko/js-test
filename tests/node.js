/*
 * node.js
 * Sample test suite for Node.js
 *
 * Run the test suite from command line as:
 * node node.js
 */
var Test = require ('../js/test.js');
Test.suite ([
    'isArray',
    'isString',
    'toString',
    'toBoolean',
    'isEqual',
    'sanity',
    'async',
]);

