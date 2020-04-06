let app = require('express')();
let https = require('https');
let fs = require('fs');
let Keycloak = require('keycloak-connect');

let hskey = fs.readFileSync('darshan-key.pem');
let hscert = fs.readFileSync('darshan-cert.pem');

const keycloak = new Keycloak({});

app.use(keycloak.middleware());

let options = {
  key: hskey,
  cert: hscert
};

let server = https.createServer(options, app);
server.listen(5000, function () {
  console.log('HTTP Express server is up!');
});

app.get('/', keycloak.protect(), (req,res)=>{
  res.send("hello world.");
  res.status(200);
})