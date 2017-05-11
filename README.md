# OAuth 2 with Passportjs and Express4 as middleware

Test application for OAuth2 authentification using PassportJs framework and Express4 as middleware

### pre-requiresites ###

* **[Node.js 5.5.0](https://nodejs.org/en/)** :white_check_mark:
* **[Express.js 4.13.1](http://expressjs.com/pt-br/)** :white_check_mark:

### Installation ###

**The following instructions were tested in the Windows 7 enviroument.**

1. After the application clone, run the following command in PS to set the dependencies:
  - cd path_to_clone 
  - **npm install**
  - **NOTE: Manually install dependencies that are not installed by the above command.** :white_check_mark:

2. Start on server and browser access
  - path_do_arquivo_clonado$ **npm start**
  - Access in browser http://localhost:3000

## Application life cycle ##

1. The web application performs a request to authenticate via oauth through the oauth2 protocol and receives among other user information a token, and this token can be used to identify the device in an API.
2. Only after being authenticated can the login page be displayed.

## Routes ##

|   Action                                          | Method    | URL                                               
| --------------------------------------------------|-----------|----------------------------------------------------- 
|   Index Page                          						|  `GET`    | /
|   Login Page                            					|  `GET`    | /login
|   Connect by outh2                                |  `GET`    | /oauth2
|   Receive callback from oauth2                    |  `GET`   	| /oauth2/callback

## Comments ##

Created By **[Alexey Kuznetsov](https://github.com/WolfHeart-II)**