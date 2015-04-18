# Js-test
Test suite for JavaScript

Js-test is a tool that facilitates [Test Driven Development (TDD)](http://en.wikipedia.org/wiki/Test-driven_development) for JavaScript.  In TDD, developer first creates an automated test case for the planned fix, improvement or new feature.  Once the test case is ready (and failing), the developer then creates a minimal change to the code that makes the test case pass.  Finally, the developer refactors the code to facilitate further changes, adds documentation and otherwise polishes the code.  Test cases are run in each turn to highlight changes that potentionally break the existing functionality.


# Using Js-test in Your Own Programs

## Include Test.js File
Js-test is contained completely in the `js/jest.js` file.  To use js-test in your own programs, copy the file to your project and create a folder for test cases.


## Create a Module Test
Module test is a collection of individual test cases that excercise a module.  Module test is often saved into a distinct JavaScript file.  For example, a simple module test `tests/user.js` for class User might contain
```
Test.module ('User', function () {

    // Make sure that user name is preserved
    this.test ('user-125.0', function () {
        var user = new User ('Teddy Tiger');
        return user.getName ();
    }, 'Teddy Tiger');
    
    // Add another test case here
    
});
```

For more complex tests, initialization and cleanup logic can be added as
```
Test.module ('User', {

    // Called before any test cases are run
    initialize: function () {
        // Retrieve user id from server
        this.userid = server.createUser ('Teddy Tiger');
    },

    // Execute module test
    run: function () {
        // Load user by id
        this.test ('user-125.0', function () {
            var user = server.getUser (this.userid);
            return user.getName ();
        }, 'Teddy Tiger');
    
        // Add another test case here
    },

    // Called after the last test case has been run
    cleanup: function () {
        // Release test user
        server.removeUser (this.userid)
    },

});
```


## Create a Test Suite
Test suite is a collection of module tests that are run together.  For small projects, a single test suite containing all the available tests is usually enough.

Test suite is saved to an HTML file that first loads the dependent JavaScript files and then runs the test modules using Test.suite function.  For example, a simple test suite `tests/index.html` might contain
```
<body>
<!-- Include necessary sub-modules here -->
<script src="../js/test.js"></script>

<!-- Run test modules -->
<script type="text/javascript">
Test.suite ([
    'user',
    'sanity'
]);
</script>
```

Execute a test suite by navigating to the HTML file by browser or double click the HTML file in file explorer to open the file locally.  Re-run the test by refreshing the page in your browser - this can be done quickly by pressing F5 or Control+R.



# Rhino
Js-test can be used to test server-side JavaScript written for [Rhino](https://developer.mozilla.org/en-US/docs/Rhino_documentation).

The same test modules can be used for browser as well as Rhino.  However, test suites for Rhinoe are stored as plain JavaScript.  For example, a simple test suite `tests/all.js` might contain:
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




