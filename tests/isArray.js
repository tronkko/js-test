/*
 * isArray.js
 * Test module for isArray function
 *
 * Copyright (c) 2015 Toni Ronkko
 * This file is part of js-test.  Js-test may be freely distributed
 * under the MIT license.  For all details and documentation, see
 * https://github.com/tronkko/js-test
 */

Test.module ('isArray', {
    initialize: function () {
    },
    run: function () {
        this.test ('array-100.0', function () {
            return !Test.isArray (null);
        });
        this.test ('array-101.0', function () {
            return !Test.isArray ('');
        });
        this.test ('array-102.0', function () {
            return !Test.isArray ({});
        });
        this.test ('array-103.0', function () {
            return Test.isArray ([]);
        });
        this.test ('array-104.0', function () {
            return Test.isArray ([ 1 ]);
        });
        this.test ('array-105.0', function () {
            return Test.isArray ([ 1, 2 ]);
        });
        this.test ('array-106.0', function () {
            return !Test.isArray ({ a:3 });
        });
        this.test ('array-107.0', function () {
            /* Create mixed array with indexed and associative items */
            var arr = [ 1 ];
            arr.x = 3;

            /* Mixed array is not indexed array in strict sense */
            return !Test.isArray (arr);
        });
        this.test ('array-108.0', function () {
            /* Create indexed array with three items */
            var arr = [];
            arr[0] = 1;
            arr[1] = 2;
            arr[2] = 3;

            /* Delete first item */
            delete arr[0];

            /* Array is still indexed */
            return Test.isArray (arr);
        });
    },
    cleanup: function () {
    },
});


