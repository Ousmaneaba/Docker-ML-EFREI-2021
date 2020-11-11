# Docker-ML-EFREI-2021

Aymérou BA Ousmane - Philemon Christopher

### How to launch :

- docker build -t ml-project .
- docker-compose up

### How to test :

In order to test, you only need to run the command 'npm test' if you modified the application.
To run test through your docker container, you have to use "docker exe -it <container_name> npm test". <container_name> is, if you cloned the repository and are in the Docker-ML-EFREI-2021 'docker-ml-efrei-2021_app_1'. 
NB : you can check your container name by using "docker ps -a".

Currently, 3 tests are available :
- testing if the server is running on localhost
- testing if the server return an html page
- testing if the server return the result while processing a text, in an html page

All tests are link with the code. For example, if you modify the application host in 'config.js' and change it from localhost to something else, the corresponding test will fail.


NB : While using the web application, be aware of the white loading next to the " Send And Analyse " button.
