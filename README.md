# Image tagger

Web app for generating a bounding box pixel coordinate from images passed in
the purpose of this web application is to allow the team to sort though a list of 
taken images and generate a Json object that specifies the url location of the file
and the coordinates of the bounding box around the feature of interest.

This allows us to parse this file into our neural network model for either for training purposes or testing.

## Development

### Requirements 

To get started you'll have to have  the following dependencies installed on your development machine

- [Node.Js](https://nodejs.org/en/download/package-manager/)

```bash
// Installing NodeJs will also install the node package manager.

$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

- [Bower package manager](https://bower.io/) 
```bash
// You will need to install bower first before you can install the polymer-cli

$ npm install -g bower
```
- [Polymer-cli](https://www.polymer-project.org/2.0/start/install-2-0#use-cli)

```bash
npm install -g polymer-cli
```

## Installing project dependencies

The next step is installing the following the each sub modules dependencies
```
// Folder structure
app
- imagetagger-backend
  - models
  - routes
  - app.js
  - package.json
- imagetagger-frontend
  - images
  - **
  - **
  - src
    - my-app.html
    - my-view1.html
    - my-view2.html
    - my-view3.html
    - my-view404.html
    - shared-styles.html
scripts
- install.sh
- serve.sh
```

<!-- You'll need to install the dependencies for the each module to get started. if you want you can cd into the modules and run the install the dependencies for each module sepertelly for `imagetagger-backend` you'll run `npm install` which will install the node_modules dependencies. for `imagetagger-frontend` you'll run `bower install` which installes the web-apps dependencies
  -->

  ### Installing dependencies
  You should cd into the `scripts` dir and execute the following command
  ``` bash
  $ sh install.sh
  ```

  ## Serving project
  This will start the server at port 8081
  ```bash
  $ sh serve.sh
  ```