/*
 * sanity.js
 * Self-test module for Test class
 *
 * Copyright (c) 2015 Toni Ronkko
 * This file is part of js-test.  Js-test may be freely distributed
 * under the MIT license.  For all details and documentation, see
 * https://github.com/tronkko/js-test
 */

Test.module ('sanity', {
    initialize: function () {
        this.id = 5567;
    },
    run: function () {

        /* Test succeeds if the test function returns true */
        this.test ('sanity-100.0', function () {
            return true;
        });

        /* Test fails if the test function returns false */
        this.test ('sanity-101.1', function () {
            var p = this._test ('sanity-101.0', function () {
                return false;
            }).then (function (result) {
                /* Not working, got to success branch with false?!?! */
                return false;
            }).catch (function (error) {
                /* OK, got an error as expected */
                return true;
            });
            return p;
        });

        /* Function isTesting returns true when testing is under way */
        this.test ('sanity-110.0', function () {
            return Test.isTesting ();
        });

        /* Function initialize was called before testing started */
        this.test ('sanity-120.0', function () {
            return this.id;
        }, 5567);

    },
    cleanup: function () {
    },
    success: function () {
    },
    failure: function () {
    },
});



