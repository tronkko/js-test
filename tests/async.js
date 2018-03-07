/*
 * async.js
 * Test module for isArray function
 *
 * Copyright (c) 2018 Toni Ronkko
 * This file is part of js-test.  Js-test may be freely distributed
 * under the MIT license.  For all details and documentation, see
 * https://github.com/tronkko/js-test
 */

Test.module ('async', function () {

    /* Simple asynchronous test */
    this.test ('async-100.0', function () {
        var p = new Promise (function (resolve, reject) {
            setTimeout (function () {
                resolve ('it works!');
            }, 1000);
        });
        return p;
    }, 'it works!');

    /* Assertions are available within asynchronous tests */
    this.test ('async-101.0', function () {
        Test.assert (true);
        return true;
    });

    /* Function isTesting returns true when testing is under way */
    this.test ('async-110.0', function () {
        Test.assert (Test.isTesting ());
        return new Promise (function (resolve, reject) {
            setTimeout (function () {
                /* Testing is still on after 10ms delay */
                Test.assert (Test.isTesting ());
                resolve (true);
            }, 10);
        });
    });

});


