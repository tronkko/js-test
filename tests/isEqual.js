/*
 * isEqual.js
 * Test module for isEqual function
 *
 * Copyright (c) 2015 Toni Ronkko
 * This file is part of js-test.  Js-test may be freely distributed
 * under the MIT license.  For all details and documentation, see
 * https://github.com/tronkko/js-test
 */

Test.module ('isEqual', function () {
    /* Compare true against other types */
    this.test ('equal-101.0', function () {
        return Test.isEqual (true, true);
    });
    this.test ('equal-102.0', function () {
        return !Test.isEqual (true, false);
    });
    this.test ('equal-103.0', function () {
        return Test.isEqual (true, 1);
    });
    this.test ('equal-104.0', function () {
        return Test.isEqual (true, -999);
    });
    this.test ('equal-105.0', function () {
        return !Test.isEqual (true, 0);
    });
    this.test ('equal-106.0', function () {
        return Test.isEqual (true, '1');
    });
    this.test ('equal-107.0', function () {
        return Test.isEqual (true, 'abc');
    });
    this.test ('equal-108.0', function () {
        return !Test.isEqual (true, '0');
    });
    this.test ('equal-109.0', function () {
        return !Test.isEqual (true, '');
    });
    this.test ('equal-110.0', function () {
        return !Test.isEqual (true, null);
    });
    this.test ('equal-111.0', function () {
        return !Test.isEqual (true, []);
    });
    this.test ('equal-112.0', function () {
        return Test.isEqual (true, [1]);
    });
    this.test ('equal-113.0', function () {
        return Test.isEqual (true, { a:3 });
    });

    /* Compare false against other types */
    this.test ('equal-121.0', function () {
        return !Test.isEqual (false, true);
    });
    this.test ('equal-122.0', function () {
        return Test.isEqual (false, false);
    });
    this.test ('equal-123.0', function () {
        return !Test.isEqual (false, 1);
    });
    this.test ('equal-124.0', function () {
        return !Test.isEqual (false, -999);
    });
    this.test ('equal-125.0', function () {
        return Test.isEqual (false, 0);
    });
    this.test ('equal-126.0', function () {
        return !Test.isEqual (false, '1');
    });
    this.test ('equal-127.0', function () {
        return !Test.isEqual (false, 'abc');
    });
    this.test ('equal-128.0', function () {
        return Test.isEqual (false, '0');
    });
    this.test ('equal-129.0', function () {
        return Test.isEqual (false, '');
    });
    this.test ('equal-130.0', function () {
        return Test.isEqual (false, null);
    });
    this.test ('equal-131.0', function () {
        return Test.isEqual (false, []);
    });
    this.test ('equal-132.0', function () {
        return !Test.isEqual (false, [1]);
    });
    this.test ('equal-133.0', function () {
        return !Test.isEqual (false, { a:3 });
    });

    /* Compare number 1 against other types */
    this.test ('equal-141.0', function () {
        return !Test.isEqual (1, true);
    });
    this.test ('equal-142.0', function () {
        return !Test.isEqual (1, false);
    });
    this.test ('equal-143.0', function () {
        return Test.isEqual (1, 1);
    });
    this.test ('equal-144.0', function () {
        return !Test.isEqual (1, -999);
    });
    this.test ('equal-145.0', function () {
        return !Test.isEqual (1, 0);
    });
    this.test ('equal-146.0', function () {
        return Test.isEqual (1, '1');
    });
    this.test ('equal-147.0', function () {
        return !Test.isEqual (1, 'abc');
    });
    this.test ('equal-148.0', function () {
        return !Test.isEqual (1, '0');
    });
    this.test ('equal-149.0', function () {
        return !Test.isEqual (1, '');
    });
    this.test ('equal-150.0', function () {
        return !Test.isEqual (1, null);
    });
    this.test ('equal-151.0', function () {
        return !Test.isEqual (1, []);
    });
    this.test ('equal-152.0', function () {
        return !Test.isEqual (1, [1]);
    });
    this.test ('equal-153.0', function () {
        return !Test.isEqual (1, { a:3 });
    });

    /* Compare number zero against other types */
    this.test ('equal-161.0', function () {
        return !Test.isEqual (0, true);
    });
    this.test ('equal-162.0', function () {
        return !Test.isEqual (0, false);
    });
    this.test ('equal-163.0', function () {
        return !Test.isEqual (0, 1);
    });
    this.test ('equal-164.0', function () {
        return !Test.isEqual (0, -999);
    });
    this.test ('equal-165.0', function () {
        return Test.isEqual (0, 0);
    });
    this.test ('equal-166.0', function () {
        return !Test.isEqual (0, '1');
    });
    this.test ('equal-167.0', function () {
        return !Test.isEqual (0, 'abc');
    });
    this.test ('equal-168.0', function () {
        return Test.isEqual (0, '0');
    });
    this.test ('equal-169.0', function () {
        return !Test.isEqual (0, '');
    });
    this.test ('equal-170.0', function () {
        return !Test.isEqual (0, null);
    });
    this.test ('equal-171.0', function () {
        return !Test.isEqual (0, []);
    });
    this.test ('equal-172.0', function () {
        return !Test.isEqual (0, [1]);
    });
    this.test ('equal-173.0', function () {
        return !Test.isEqual (0, { a:3 });
    });

    /* Compare string 1 against other types */
    this.test ('equal-181.0', function () {
        return !Test.isEqual ('1', true);
    });
    this.test ('equal-182.0', function () {
        return !Test.isEqual ('1', false);
    });
    this.test ('equal-183.0', function () {
        return Test.isEqual ('1', 1);
    });
    this.test ('equal-184.0', function () {
        return !Test.isEqual ('1', -999);
    });
    this.test ('equal-185.0', function () {
        return !Test.isEqual ('1', 0);
    });
    this.test ('equal-186.0', function () {
        return Test.isEqual ('1', '1');
    });
    this.test ('equal-187.0', function () {
        return !Test.isEqual ('1', 'abc');
    });
    this.test ('equal-188.0', function () {
        return !Test.isEqual ('1', '0');
    });
    this.test ('equal-189.0', function () {
        return !Test.isEqual ('1', '');
    });
    this.test ('equal-190.0', function () {
        return !Test.isEqual ('1', null);
    });
    this.test ('equal-191.0', function () {
        return !Test.isEqual ('1', []);
    });
    this.test ('equal-192.0', function () {
        return !Test.isEqual ('1', [1]);
    });
    this.test ('equal-193.0', function () {
        return !Test.isEqual ('1', { a:3 });
    });

    /* Compare string zero against other types */
    this.test ('equal-201.0', function () {
        return !Test.isEqual ('0', true);
    });
    this.test ('equal-202.0', function () {
        return !Test.isEqual ('0', false);
    });
    this.test ('equal-203.0', function () {
        return !Test.isEqual ('0', 1);
    });
    this.test ('equal-204.0', function () {
        return !Test.isEqual ('0', -999);
    });
    this.test ('equal-205.0', function () {
        return Test.isEqual ('0', 0);
    });
    this.test ('equal-206.0', function () {
        return !Test.isEqual ('0', '1');
    });
    this.test ('equal-207.0', function () {
        return !Test.isEqual ('0', 'abc');
    });
    this.test ('equal-208.0', function () {
        return Test.isEqual ('0', '0');
    });
    this.test ('equal-209.0', function () {
        return !Test.isEqual ('0', '');
    });
    this.test ('equal-210.0', function () {
        return !Test.isEqual ('0', null);
    });
    this.test ('equal-211.0', function () {
        return !Test.isEqual ('0', []);
    });
    this.test ('equal-212.0', function () {
        return !Test.isEqual ('0', [1]);
    });
    this.test ('equal-213.0', function () {
        return !Test.isEqual ('0', { a:3 });
    });

    /* Compare empty string against other types */
    this.test ('equal-221.0', function () {
        return !Test.isEqual ('', true);
    });
    this.test ('equal-222.0', function () {
        return !Test.isEqual ('', false);
    });
    this.test ('equal-223.0', function () {
        return !Test.isEqual ('', 1);
    });
    this.test ('equal-224.0', function () {
        return !Test.isEqual ('', -999);
    });
    this.test ('equal-225.0', function () {
        return !Test.isEqual ('', 0);
    });
    this.test ('equal-226.0', function () {
        return !Test.isEqual ('', '1');
    });
    this.test ('equal-227.0', function () {
        return !Test.isEqual ('', 'abc');
    });
    this.test ('equal-228.0', function () {
        return !Test.isEqual ('', '0');
    });
    this.test ('equal-229.0', function () {
        return Test.isEqual ('', '');
    });
    this.test ('equal-230.0', function () {
        return !Test.isEqual ('', null);
    });
    this.test ('equal-231.0', function () {
        return !Test.isEqual ('', []);
    });
    this.test ('equal-232.0', function () {
        return !Test.isEqual ('', [1]);
    });
    this.test ('equal-233.0', function () {
        return !Test.isEqual ('', { a:3 });
    });

    /* Compare null against other types */
    this.test ('equal-241.0', function () {
        return !Test.isEqual (null, true);
    });
    this.test ('equal-242.0', function () {
        return !Test.isEqual (null, false);
    });
    this.test ('equal-243.0', function () {
        return !Test.isEqual (null, 1);
    });
    this.test ('equal-244.0', function () {
        return !Test.isEqual (null, -999);
    });
    this.test ('equal-245.0', function () {
        return !Test.isEqual (null, 0);
    });
    this.test ('equal-246.0', function () {
        return !Test.isEqual (null, '1');
    });
    this.test ('equal-247.0', function () {
        return !Test.isEqual (null, 'abc');
    });
    this.test ('equal-248.0', function () {
        return !Test.isEqual (null, '0');
    });
    this.test ('equal-249.0', function () {
        return !Test.isEqual (null, '');
    });
    this.test ('equal-250.0', function () {
        return Test.isEqual (null, null);
    });
    this.test ('equal-251.0', function () {
        return !Test.isEqual (null, []);
    });
    this.test ('equal-252.0', function () {
        return !Test.isEqual (null, [1]);
    });
    this.test ('equal-253.0', function () {
        return !Test.isEqual (null, { a:3 });
    });

    /* Compare empty array against other types */
    this.test ('equal-261.0', function () {
        return !Test.isEqual ([], true);
    });
    this.test ('equal-262.0', function () {
        return !Test.isEqual ([], false);
    });
    this.test ('equal-263.0', function () {
        return !Test.isEqual ([], 1);
    });
    this.test ('equal-264.0', function () {
        return !Test.isEqual ([], -999);
    });
    this.test ('equal-265.0', function () {
        return !Test.isEqual ([], 0);
    });
    this.test ('equal-266.0', function () {
        return !Test.isEqual ([], '1');
    });
    this.test ('equal-267.0', function () {
        return !Test.isEqual ([], 'abc');
    });
    this.test ('equal-268.0', function () {
        return !Test.isEqual ([], '0');
    });
    this.test ('equal-269.0', function () {
        return !Test.isEqual ([], '');
    });
    this.test ('equal-270.0', function () {
        return !Test.isEqual ([], null);
    });
    this.test ('equal-271.0', function () {
        return Test.isEqual ([], []);
    });
    this.test ('equal-272.0', function () {
        return !Test.isEqual ([], [1]);
    });
    this.test ('equal-273.0', function () {
        return !Test.isEqual ([], { a:3 });
    });
    this.test ('equal-274.0', function () {
        return !Test.isEqual ([], {});
    });

    /* Compare arrays against arrays */
    this.test ('equal-280.0', function () {
        return Test.isEqual ([ 1, 2, 3 ], [ 1, 2, 3 ]);
    });
    this.test ('equal-281.0', function () {
        return !Test.isEqual ([ 1, 2, 3 ], [ 1, 3 ]);
    });
    this.test ('equal-282.0', function () {
        return !Test.isEqual ([ 1, 2, 3 ], [ 1, 2 ]);
    });
    this.test ('equal-283.0', function () {
        return !Test.isEqual ([ 2, 3 ], [ 1, 2, 3 ]);
    });
    this.test ('equal-284.0', function () {
        return !Test.isEqual ([], [ 1, 2, 3 ]);
    });
    this.test ('equal-285.0', function () {
        return !Test.isEqual ({}, [ 1, 2, 3 ]);
    });
    this.test ('equal-286.0', function () {
        return !Test.isEqual ({ a:3 }, [ 3 ]);
    });
    this.test ('equal-286.1', function () {
        return !Test.isEqual ({ a:3 }, { a:5 });
    });
    this.test ('equal-287.0', function () {
        return Test.isEqual ({ a:3 }, { a:3 });
    });
    this.test ('equal-288.0', function () {
        return !Test.isEqual ({ a:3 }, { a:3, b:35 });
    });
    this.test ('equal-288.1', function () {
        return Test.isEqual ({ b:35, a:3 }, { a:3, b:35 });
    });

    /* Equality of floating point numbers */
    this.test ('equal-290.0', function () {
        return Test.isEqual (1.0, 1.0);
    });
    this.test ('equal-291.0', function () {
        return Test.isEqual (1.0/3.0, 1.0/3.0);
    });
    this.test ('equal-292.0', function () {
        return Test.isEqual (0.0, 0.0);
    });
    this.test ('equal-293.0', function () {
        return Test.isEqual (1000000.0, 1000000.00001);
    });
    this.test ('equal-294.0', function () {
        return !Test.isEqual (-1.0, 1.0);
    });
    this.test ('equal-295.0', function () {
        return !Test.isEqual (0.0, 1.0e-4);
    });

    /* Equality of dates */
    this.test ('equal-300.0', function () {
        var a = new Date (2015, 1, 1);
        var b = new Date (1994, 12, 31);
        return !Test.isEqual (a, b);
    });
    this.test ('equal-301.0', function () {
        var a = new Date (2015, 1, 1);
        var b = new Date (2015, 1, 1);
        return Test.isEqual (a, b);
    });
    this.test ('equal-302.0', function () {
        var a = new Date (2015, 1, 1, 23, 59, 59);
        var b = new Date (2015, 1, 1, 23, 59, 33);
        return !Test.isEqual (a, b);
    });
    this.test ('equal-303.0', function () {
        var a = new Date (2015, 1, 1, 23, 59, 59);
        var b = new Date (2015, 1, 1, 23, 59, 59);
        return Test.isEqual (a, b);
    });
});

