# Js-test
Test suite for JavaScript

Js-test facilitates [Test Driven Development (TDD)](http://en.wikipedia.org/wiki/Test-driven_development) approach on JavaScript.  In TDD, developer first creates an automated test case for the planned fix, improvement or new feature.  Once the test case is ready, the developer then runs the test to see that the test case is indeed failing.  Only then will the developer create a minimal change to the code that makes the test case pass.  Finally, the developer refactors the code to facilitate further changes, adds documentation and otherwise polishes the code.

TDD has several benefits:
  1. requires developers to think in terms of small extensible units which in turn facilitates code re-use and can help development teams complete tasks faster
  2. frequent testing helps to catch bugs before they enter production systems which improves the overall quality of the product from users' perspective
  3. eliminating bugs early in the process helps to avoid debugging later which saves developers' time


# Using Js-test in Your Own Projects

Js-test is contained completely in the `js/jest.js` file.  To use js-test in your own projects, copy the file to your project and create a folder for the tests.

The following examples assume that your project is laid out as follows:
  * `js` - Javascript files
    - `js/test.js`
  * `tests` - Test files
    - `tests/index.html` - Main test suite
    - `tests/user.js` - Test module for feature A
    - `tests/sanity.js` - Test module for feature B


## Test Case
Test case excercises a feature of the system and compares the result against an expected value.  Test case will pass if only the computed result matches the expected value.

In Js-test, each test case consists of a unique name, test function and expected result.  For example, a simple test case verifying that 1+1 is still 2 might look like
```
this.test ('sanity-101.0', function () {
    return 1 + 1;
}, 2);
```

If a test case returns true or something convertible to true on success, then you can leave out the expected value.  For example, the following test case is interchangeable to test case 'sanity-101.0'.
```
this.test ('sanity-102.0', function () {
    return 1 + 1 == 2;
});
```

By default, test case will be considered a failure if it throws an exception.  If you wish to ensure that a feature WILL throw an exception, then you will need to catch the exception as
```
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
```


## Test Module
Test module is a collection of test cases who excercise a module from multiple perspectives.  Test modules are saved into separate js files.

A simple test module `tests/user.js` for class User might contain
```
Test.module ('User', function () {

    // Make sure that new objects retain the user name
    this.test ('user-125.0', function () {
        var user = new User ('Teddy Tiger');
        return user.getName ();
    }, 'Teddy Tiger');
    
});
```

For more complex tests, initialization and cleanup logic can be added as
```
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
```

Ideally, each test case would be independent of other test cases.  However, in practice, it is often easier to set up the environment through series of test cases than to build the environment separately for each test case.  Should you choose to do so, Js-test allows you to write dependent test cases where one test case modifies the enviroment for the next test case.

A test module with interdependent test cases might contain
```
Test.module ('User', {
    initialize: function () {
        // Create test user
        this.userid = server.createUser ('Teddy Tiger');
        this.user = server.getUser (this.userid);
    },

    // Execute module test
    run: function () {

        // Retrieve user's name
        this.test ('user-110.0', function () {
            return this.user.getName ();
        }, 'Teddy Tiger');

        // Change user name
        this.test ('user-120.0', function () {
            return this.user.setName ('Bobby Tiger');
        });

        // Make sure that name changed
        this.test ('user-130.0', function () {
            return this.user.getName ();
        }, 'Bobby Tiger');

    },

    cleanup: function () {
        // Remove test user
        server.removeUser (this.userid)
    },
});
```

Note that, due to the dependent nature of the test cases, Js-test will execute test cases within a module stricly in the order specified and up to the first failure only.  That is, if the test 'user-120.0' in the example above fails, then the test 'user-130.0' will not be executed.


## Test Suite
Test suite is a collection of test modules that are run together.  For small projects, a single test suite containing all the available test modules is usually enough.

Test suite is saved to an HTML file.  This file loads the dependent JavaScript files first and then runs the test modules using Test.suite function.  For example, a simple test suite in file `tests/index.html` might contain
```
<body>
<!-- Include necessary sub-modules here -->
<script src="../js/test.js"></script>

<!-- Run test modules in files user.js and sanity.js -->
<script type="text/javascript">
Test.suite ([
    'user',
    'sanity'
]);
</script>
```

Run a test suite by navigating to the HTML file by browser or double click the HTML file in file explorer to open the file locally.  Once you have corrected any errors, refresh the page to re-run the tests.  This can be done quickly by pressing F5 or Control+R.


## Hints

When adding new modules to a test suite, consider adding new modules to the *beginning* of the list.  This speeds up the edit-test-edit cycle as you can start fixing errors on the very latest module without waiting for the older modules to finish.  (You can move the test module to its proper position after you are done editing, if you wish to organize test modules in some way.)

If a test suite takes several minutes to complete, then create additional test suites with smaller number of test modules.  This allows you to choose which tests to run.  For example, you might want to run a quick sub-system check after each edit and run the complete test suite before committing changes to version control.



# Rhino
Js-test can be used to test server-side JavaScript written for [Rhino](https://developer.mozilla.org/en-US/docs/Rhino_documentation).

The same test modules can be used for browser as well as Rhino.  However, test suites for Rhino are stored as plain JavaScript.  For example, a simple test suite `tests/all.js` might contain:
```
/* Include necessary sub-modules here */
load ('../js/test.js');

/* Run test modules */
Test.suite ([
    'user',
    'sanity'
]);
```

Run the test suite from command line as `rhino -debug all.js`.


# Node.js
Js-test can be used to test server-side JavaScript written for [Node.js](https://nodejs.org/).

The same test modules can be used for browser and Node.js.  However, test suites in Node.js are stored as plain JavaScript.  For example, a test suite `tests/all.js` might contain
```
/* Include necessary sub-modules here */
require ('../js/test.js');

/* Run test modules */
Test.suite ([
    'user',
    'sanity'
]);
```

Run the test suite from command line as `node all.js`.




