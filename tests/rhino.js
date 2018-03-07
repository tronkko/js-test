/*
 * rhino.js
 * Sample test suite for Rhino
 *
 * Run the test suite from command line as:
 * rhino -debug rhino.js
 */
load ('../js/test.js');
Test.suite ([
    'isArray',
    'isString',
    'toString',
    'toBoolean',
    'isEqual',
    'sanity',
    'async',
]);

