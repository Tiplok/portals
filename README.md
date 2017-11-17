Portals project

Useful links :
https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

# Files organization

## Back - This folder contains all files relative to server-side

It is an API that interact with DB and client.


## Front - This folder contains all files relative to client-side

It is an AngularJS application that call the API for data.

app folder contains all files relative to the application using AngularJS
    components folder contains all component used by the application

assets folder contains assets like styles files (css using sass), images, medias...
node_modules folder contains all librairies used by the application

index.html is the main page
package.json describe the client-side project and specify the needed librairies (managed by npm)


# To compile SCSS files

## You need to install SASS : http://sass-lang.com/install
    To do it, you need Ruby : https://rubyinstaller.org/downloads/
    Then, do : gem install sass or sudo gem install sass if needed
    You can check the installation doing : sass -v
    Then run it : sass --watch scss:css in front/assets/styles folder
