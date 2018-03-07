# TEST SUITE FOR JAVASCRIPT

Js-Test is a tool for Test Driven Development
[(TDD)](http://en.wikipedia.org/wiki/Test-driven_development)

In TDD, developer first creates an automated test case for the planned fix,
improvement or new feature.  Once the test case is ready, the developer runs
the test to make sure that the test case is indeed failing.  Only then will
the developer create a minimal change to the code that makes the test case
pass.  Finally, the developer refactors the code to facilitate further
changes, adds documentation and otherwise polishes the code.

TDD has several benefits over traditional software development model:

1. TDD requires developers to think in terms of small extensible units
   which in turn facilitates code re-use and can help development teams
   complete tasks faster

2. Frequent testing helps to catch bugs before they enter production systems
   which improves the overall quality of the product from users' perspective

3. Eliminating bugs early in the process helps to avoid debugging later which
   saves developers' time


## Building Test Cases In Js-Test

Test case excercises a feature from one angle and compares the result against
an expected value.  If the software is working as intended, then the computed
value will matched the expected value.  Conversely, if the test case does
not produce the same value as before, then you know that a change has caused
unintended consequences.

In Js-test, each test case consists of a unique name, test function and
expected result.  For example, a simple test case verifying that 1+1 is
still 2 might look like

    this.test ('sanity-101.0', function () {
        return 1 + 1;
    }, 2);

If a test case returns true or something convertible to true on success, then
you can leave out the expected value.  For example, the following test case
is interchangeable to test case 'sanity-101.0'.

    this.test ('sanity-102.0', function () {
        return 1 + 1 == 2;
    });

By default, test case will be considered a failure if it throws an exception.
If you wish to ensure that a feature WILL throw an exception, then catch the
exception as

    this.test ('user-22.0', function () {
        var ok = false;
        try {
            // Try to retrieve invalid user
            var user = server.getUser (-999);
        }
        catch (e) {
            if (e instanceof UserError) {
                // OK: got exception as expected
                ok = true;
            }
        }
        return ok;
    });


## Organizing Test Cases into Test Modules

Test module is a collection of test cases who excercise a feature from
multiple perspectives.  In Js-test, test modules are saved into distinct
JavaScript files.  A simple test module for class User might look like

    Test.module ('User', function () {

        // Make sure that new objects retain the user name
        this.test ('user-125.0', function () {
            var user = new User ('Teddy Tiger');
            return user.getName ();
        }, 'Teddy Tiger');

    });

For more complex tests, initialization and cleanup logic can be added as

    Test.module ('User', {

        // Called before any test cases are run
        initialize: function () {
            // Retrieve user id from server and save it to test object
            this.userid = server.createUser ('Teddy Tiger');
        },

        // Execute module test
        run: function () {
            // Load user by id and check name
            this.test ('user-125.0', function () {
                // Read user id from test object and query server
                var user = server.getUser (this.userid);
                return user.getName ();
            }, 'Teddy Tiger');
        },

        // Called after the last test case has been run
        cleanup: function () {
            // Release test user
            server.removeUser (this.userid)
        },

    });

Ideally, each test case would be independent of other test cases.  However,
in practice, the amount of initialization and cleanup logic can be greatly
reduced if you set up scenarios through series of test cases who gradually
build the environment.  For example, a test module with such interdependent
test cases might look like

    Test.module ('User', {
        initialize: function () {
            this.userid = null;
            this.user = null;
        },

        // Execute module test
        run: function () {

            // Create test user and check that we receive an id
            this.test ('user-100.0', function () {
                this.userid = server.createUser ('Teddy Tiger');
                return (this.userid > 0);
            });

            // Now that we have an id, try to load user from server
            this.test ('user-101.0', function () {
                this.user = server.getUser (this.userid);
                return this.user;
            });

            // Make sure that user name was saved properly to server
            this.test ('user-110.0', function () {
                return this.user.getName ();
            }, 'Teddy Tiger');

            // Now that user name is OK, try to change it
            this.test ('user-120.0', function () {
                return this.user.setName ('Bobby Tiger');
            });

            // Make sure that name changed in memory
            this.test ('user-130.0', function () {
                return this.user.getName ();
            }, 'Bobby Tiger');

            // Reload user and make sure that name changed on server too
            this.test ('user-140.0', function () {
                this.user = server.getUser (this.userid);
                return this.user.getName ();
            }, 'Bobby Tiger');

        },

        cleanup: function () {
            // Remove test user
            server.removeUser (this.userid)
        },
    });

Note that, due to the interdependent nature of the test cases, Js-test will
execute test cases within a module stricly in the order specified and up to
the first failure only.  That is, if the test case 'user-120.0' in the example
above fails, then test cases starting from 'user-130.0' will not be executed.


## Building Test Suites from Test Modules

Test suite is a collection of test modules who are run together.  For small
projects, a single test suite containing all the available test modules is
usually enough.

In Js-test, a test suite is saved to an HTML file.  The HTML file should load
the required JavaScript files first and then run the test modules using
Test.suite function.  For example, a simple test suite might contain:

    <body>
    <!-- Include necessary sub-modules here -->
    <script src="test.js"></script>

    <!-- Run test modules in files user.js and sanity.js -->
    <script type="text/javascript">
    Test.suite ([
        'user',
        'sanity'
    ]);
    </script>

Run a test suite by navigating to the HTML file by browser or double click the
HTML file in file explorer to open the file locally.  Once you have corrected
any errors, refresh the page to re-run the tests.  This can be done quickly by
pressing F5 or Control+R.  If you some tests fail, then check out the
JavaScript console for detailed error messages.


## Using Js-test in Your Own Projects

To use js-test in your own projects, create a directory for test modules and
copy the file `js/jest.js` to your own project.  For example, your project
might be laid out as follows:

  * `js` - You own Javascript classes and modules being tested
    - `js/user.js` - An example class
  * `tests` - Test modules
    - `tests/index.html` - Main test suite
    - `tests/user-load.js` - Test module for User.load function
    - `tests/user-save.js` - Test module for User.save function
    - `test/test.js` - Js-test source file copied from this repository

For an example, check out [Js-vector](https://github.com/tronkko/js-vector)

Js-test may be freely distributed under the MIT license.


## Using Js-Test with Rhino

Js-test can be used to test server-side JavaScript written for
[Rhino](https://developer.mozilla.org/en-US/docs/Rhino_documentation).
However, only synchronous code can be tested at the moment.

The same test modules are used for both browser and Rhino.  The test modules
in Rhino, however, are plain JavaScript.  For example, a simple test suite
`tests/all.js` might contain:

    /* Include necessary sub-modules here */
    load ('test.js');

    /* Run test modules */
    Test.suite ([
        'user',
        'sanity'
    ]);

Run the test suite from command line as:

    rhino -debug all.js


## Using Js-Test with Nodejs

Js-test can be used to test both client and server-side JavaScript written for
[Nodejs](https://nodejs.org/).  In order to use js-test, you will only need to
install promise library as

    npm install promise

The same test modules are used for both browser and Nodejs.  However, test
suites in Node.js are stored as plain JavaScript.  For example, a test
suite `tests/all.js` might contain:

    /* Include necessary sub-modules here */
    var Test = require ('test.js');

    /* Run test modules */
    Test.suite ([
        'user',
        'sanity'
    ]);

Run the test suite from command line as:

    node all.js


## Hints

When adding new modules to a test suite, consider adding new modules to the
beginning of the list.  This speeds up the edit-test-edit cycle as you can
start fixing errors on the very latest module without waiting for the older
modules to finish.  (You can move the test module to its proper position after
you are done editing.)

If a test suite takes several minutes to complete, then create additional test
suites with smaller number of test modules.  This allows you to choose which
tests to run.  For example, you might want to run a quick sub-system check
after each edit and run the complete test suite before committing changes to
version control.

