/*
 * toBoolean.js
 * Test module for toBoolean function
 *
 * Copyright (c) 2015 Toni Ronkko
 * This file is part of js-test.  Js-test may be freely distributed
 * under the MIT license.  For all details and documentation, see
 * https://github.com/tronkko/js-test
 */

Test.module ('toBoolean', function () {
    this.test ('boolean-100.0', function () {
        return Test.toBoolean ('abc');
    });
    this.test ('boolean-101.0', function () {
        return !Test.toBoolean ('false');
    });
    this.test ('boolean-102.0', function () {
        return Test.toBoolean ([ 1, 2, 3 ]);
    });
    this.test ('boolean-103.0', function () {
        return !Test.toBoolean ([]);
    });
    this.test ('boolean-104.0', function () {
        return !Test.toBoolean ({});
    });
    this.test ('boolean-105.0', function () {
        return Test.toBoolean ({ a:3 });
    });
    this.test ('boolean-106.0', function () {
        return !Test.toBoolean (0);
    });
    this.test ('boolean-107.0', function () {
        return Test.toBoolean (1);
    });
    this.test ('boolean-108.0', function () {
        return !Test.toBoolean (1.0e-10);
    });
    this.test ('boolean-109.0', function () {
        return Test.toBoolean (1.0/3.0);
    });
});

