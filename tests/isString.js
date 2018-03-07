/*
 * isString.js
 * Test module for isString function
 *
 * Copyright (c) 2015 Toni Ronkko
 * This file is part of js-test.  Js-test may be freely distributed
 * under the MIT license.  For all details and documentation, see
 * https://github.com/tronkko/js-test
 */

Test.module ('isString', function () {
    this.test ('string-100.0', function () {
        return Test.isString ('');
    });
    this.test ('string-101.0', function () {
        return !Test.isString (null);
    });
    this.test ('string-102.0', function () {
        return !Test.isString (0);
    });
    this.test ('string-103.0', function () {
        return !Test.isString (false);
    });
    this.test ('string-104.0', function () {
        return Test.isString ('avx');
    });
    this.test ('string-105.0', function () {
        return !Test.isString ([]);
    });
    this.test ('string-106.0', function () {
        return !Test.isString (new Date ());
    });
});


