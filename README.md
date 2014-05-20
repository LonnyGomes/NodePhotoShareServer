# Node Photo Share Server

This web app is meant to act as a public facing frontend to the Node Photobooth server. The photobooth server will typically function in a standalone state or in a lowbandwidth scenario. The photo share server receives images from the photobooth server and then presents them in a slideshow format. The idea is for the photo share server to sit on a public facing server with decent bandwith so photobooth participants could access the site from their mobile devices.

## Prerequisites

* nodejs _(npm must be in path)_
* imagemagick
* mongodb _(must be installed on local machine)_
* yeoman
* bower
* grunt

## Usage

If you already don't have bower installed globally, enter the following:

```
npm install -g bower
```

You also must install yeoman globally if you already haven't done so

```
npm install -g yeoman
```

Lastly, if grunt isn't installed globally, you can install it as follows:

```
npm install -g grunt
```

Next clone the repository, cd into sub directory and enter the following

```
npm install
bower install
cd server
npm install
```

## Running the server

Open up a dedicated terminal window and cd to the base directory of the cloned repository. You can then run the server with the following commands:

```
cd server
./bin/www
```

The server should be accessable at _http://localhost:3000/_

## Building the client

The client is built with requirejs and handlebars templates. To build, run grunt

```
grunt
```


To deploy the client to the nodejs server you must use grunt:

```
grunt deploy
```

