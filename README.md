# Docker-ML-EFREI-2021

Aymérou BA Ousmane - Philemon Christopher

### How to launch :

- docker build -t ml-project .
- docker-compose up

### How to test :

In order to test, you only need to run the command 'npm test'.

Currently, 3 tests are available :
- testing if the server is running on localhost
- testing if the server return an html page
- testing if the server return the result while processing a text, in an html page

All tests are link with the code. For example, if you modify the application host in 'config.js' and change it from localhost to something else, the corresponding test will fail.
