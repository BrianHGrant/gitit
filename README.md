# GitiT
#### Node.js, NPM (backend), Bower(frontend)
#### DESCRIPTION

This repository enables searching for a user in the Github website.

#### Contents

##### How to Use

1. Fork or clone directory
2. Open terminal and navigate to local directory
3. Update project name in package.json, bower.json, and title in index.html
4. Run: npm install
5. Run: bower install
6. Run: Gulp Serve, page should load in browser.
7. If you would like to make more then 50 requests a day signup for a Github Personal Access token. Create a file within local repo named ".env". File should contain the following lines:

apiKey = "{insert your token here}"
exports.apiKey

##### Packages

* NPM (backend)

    "bower-files": "^3.13.3",<br>
    "browser-sync": "^2.14.0",<br>
    "browserify": "^13.1.0",<br>
    "del": "^2.2.1",<br>
    "gulp": "^3.9.1",<br>
    "gulp-concat": "^2.6.0",<br>
    "gulp-jshint": "^2.0.1",<br>
    "gulp-sass": "^2.3.2",<br>
    "gulp-sourcemaps": "^1.6.0",<br>
    "gulp-uglify": "^1.5.4",<br>
    "gulp-util": "^3.0.7",<br>
    "jshint": "^2.9.2",<br>
    "vinyl-source-stream": "^1.1.0"<br>

* Bower (frontend)

    "jquery": "^3.1.0",<br>
    "bootstrap": "^3.3.7",<br>


##### Template
  Checkout the original template used to create this application here:
  <a href="https://github.com/BrianHGrant/node-template">node-template</a>

##### Licence

License Copyright (c) 2016 Brian Grant
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
