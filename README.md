<h1 align="center">
  <a href="https://agri-mitra-client.vercel.app/">Agri-Mitra<img src="![image](https://github.com/user-attachments/assets/d42732a8-e47f-4136-b5b6-90c92b4cebbc)"></a>
</h1>
<p align="center">
<strong><i>Tech Stack : MongoDB-atlas, ExpressJS, ReactJS, NodeJS, Python, Flask, TailwindCSS</i></strong>
</p>

<p align="center">
   <a href="https://github.com/Avinashs7/Agri-Mitra/blob/main/LICENSE">
      <img src="https://img.shields.io/badge/License-GNU-green.svg" />
   </a>
</p>

> Agri-Mitra is designed to monitor and restore soil fertility by providing tailored recommendations leveraging machine learning and actionable insights for sustainable crop management.

> Sensors are integrated to measure key factors affecting soil fertility, including NPK levels, humidity, temperature, pH, and rainfall, and provide crucial input data.

> The app also fosters a community culture among farmers, enabling them to collaborate, share solutions, and address farm-related challenges collectively.

<a href="https://agri-mitra-client.vercel.app">Deployment Link</a>


## Clone or Download
```terminal
$ git clone https://github.com/Avinashs7/Agri-Mitra
$ npm i
```

## project structure
```terminal
LICENSE
package.json
server/
  package.json
  .env (to create .env, refer [.env.sample])
client/
  package.json
ml model/
...
```

# Usage (run fullstack app on your machine)

## Prerequisites
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^20.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 5174)
```terminal
$ cd client            // go to client folder
$ npm i               // npm install packages
$ npm run dev         // run it locally

// deployment for client app
$ npm run build   // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start   // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

## Server-side usage(PORT: 8000)

### Prepare your secret

run the script at the first level:

(You need to add a .env to connect to MongoDB and setup SECRET's for JWT)

```terminal
// in the root level
$ cd server
$ echo "JWT_SECRET=YOUR_JWT_SECRET" >> src/.env
```
### Start

```terminal
$ cd server   // go to server folder
$ npm i       // npm install packages
$ npm run dev // run it locally
$ npm run build // this will build the server code to es5 js codes and generate a dist file
```
## BUGs or comments

[Create new Issues](https://github.com/Avinashs7/Agri-Mitra/issues) (preferred)

### Email Us:
<ul>
  <li>
    <a href='mailto:dilip23062003@gmail.com'>dilip23062003@gmail.com</a>
  </li>
  <li>
    <a href='mailto:07avinash.s@gmail.com'>07avinash.s@gmail.com</a> 
  </li>
</ul>

## Author
  ### Connect with us on LinkedIn to explore collaboration opportunities for projects and work
 - [Dilip M](https://www.linkedin.com/in/dilip--m)
 - [Avinash S](https://www.linkedin.com/in/avinash-s007)
