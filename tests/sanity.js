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
    },
    run: function () {
        /* Test fails if it raises an exception */
        this.test ('sanity-100.0', function () {
            var ok = false;
            try {

                /* Failing test */
                this.test ('sanity-100.1', function () {
                    throw new Error ('Test error');
                });
                
            }
            catch (e) {
                ok = true;
            }
            return ok;
        });

        /* Function isTesting returns true when testing is under way */
        this.test ('sanity-110.0', function () {
            return Test.isTesting ();
        });

        /* Function isTesting returns false outside tests */
        Test.assert (!Test.isTesting ());
    },
    cleanup: function () {
    },
    success: function () {
    },
    failure: function () {
    },
});



