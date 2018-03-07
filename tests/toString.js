/*
 * toString.js
 * Test module for toString function
 *
 * Copyright (c) 2015 Toni Ronkko
 * This file is part of js-test.  Js-test may be freely distributed
 * under the MIT license.  For all details and documentation, see
 * https://github.com/tronkko/js-test
 */

Test.module ('toString', function () {
    /* String to string conversions */
    this.test ('tos-1.0', function () {
        return Test.toString ('abc\\ " % & \' <>');
    }, 'abc\\ " % & \' <>');
    this.test ('tos-2.0', function () {
        return Test.toString ('');
    }, '');
    this.test ('tos-3.0', function () {
        return Test.toString ('0001');
    }, '0001');

    /* Number to string */
    this.test ('tos-10.0', function () {
        return Test.toString (25);
    }, '25');
    this.test ('tos-11.0', function () {
        return Test.toString (-999);
    }, '-999');
    this.test ('tos-12.0', function () {
        return Test.toString (12.5);
    }, '12.5');

    /* Boolean to string */
    this.test ('tos-20.0', function () {
        return Test.toString (false);
    }, 'false');
    this.test ('tos-21.0', function () {
        return Test.toString (true);
    }, 'true');

    /* Indexed array to string */
    this.test ('tos-30.0', function () {
        return Test.toString ([]);
    }, '[]');
    this.test ('tos-31.0', function () {
        return Test.toString ([1]);
    }, '[ 1 ]');
    this.test ('tos-32.0', function () {
        return Test.toString ([1,2]);
    }, '[ 1, 2 ]');
    this.test ('tos-33.0', function () {
        return Test.toString ([ 'a' ]);
    }, '[ "a" ]');
    this.test ('tos-34.0', function () {
        var arr = [ 1, 2, 3 ];
        delete arr[1];
        return Test.toString (arr);
    }, '[ 1, undefined, 3 ]');

    /* Associative array to string */
    this.test ('tos-40.0', function () {
        return Test.toString ({});
    }, '{}');
    this.test ('tos-41.0', function () {
        return Test.toString ({ a:3 });
    }, '{ a:3 }');
    this.test ('tos-42.0', function () {
        return Test.toString ({ a:3, b:'jep' });
    }, '{ a:3, b:"jep" }');
    this.test ('tos-43.0', function () {
        return Test.toString ({ a:3, b:[1,2] });
    }, '{ a:3, b:[ 1, 2 ] }');

    /* Null to string */
    this.test ('tos-50.0', function () {
        return Test.toString (null);
    }, 'null');

    /* Date to string */
    this.test ('tos-60.0', function () {
        var t = new Date (2015, /*december*/12-1, 31, 23, 59, 59);
        return Test.toString (t);
    }, '2015-12-31 23:59:59');
    this.test ('tos-61.0', function () {
        var t = new Date (2000, /*january*/1-1, 2, 3, 4, 5);
        return Test.toString (t);
    }, '2000-01-02 03:04:05');
});

