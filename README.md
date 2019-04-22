# django-react-boilerplate
A quick setup for a django react project

# Details
- Django serves as an api server for a REST API and will use Django Rest Framework to create serializers, veiwsets, and endpoints
- oauth toolkit serves as a abstract package to handle authentication, in this setup logging in users is already up and running, but you will handle the signing up process
  - one additional step is to go to localhost/admin and create a user then head over to localhost/auth/applications/ and create an application
  - django will also server as the authentication server and the resource server and will handle logging in users through the Resource Owner Password Credentials authentication flow
  - more details about the basics of oauth can be found in this blog: https://medium.com/google-cloud/understanding-oauth2-and-building-a-basic-authorization-server-of-your-own-a-beginners-guide-cf7451a16f66
- In development you will be running two seperate servers, one for the api and one for the client
- In production, django will be serving the client, this is done for you, your only consideration will be which routes will be served the client
  - I recommend using a catch all system, tutorials can be found online
- The database has been configured to use Postgres, but you can change that to be any kind of databse, the models are based on SQL databases, so a NoSQL config will require updating the models
- The Django Base User has been replaced with a custom User class incase you wanted to add any extra fields to the model
  
  # Initial steps
  1. create virtual environment
  2. run pip install -r requirments.txt
  3. cd into the client folder and run npm install
  4. change the name of the project by renaming the root folder <boilerplate/> and the folder with the same name within the rootfolder <boilerplate/boilerplate>
  5. find and replace any instances of "boilerplate" in settings.py, wsgi.py, and manage.py to <myapp>
  6. Your .env file should have the following fields:
    DB_NAME
    DB_USER
    DB_PASSWORD
    SECRET_KEY
    APP_OAUTH_CLIENT_ID(get this after creating in application, refer to details)
    APP_OAUTH_CLIENT_SECRET(get this after creating in application, refer to details)
    API_DOMAIN(only in development)
