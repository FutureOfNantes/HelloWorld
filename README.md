# Dases Lab #

Welcome in Dases Lab, we are building a Miminum Viable Product for Data Space of Education & Skills. You can find the latest version of Dases Lab on this [website](https://daseslab.on.fleek.co/).

DasesLab is a project from [Gaia-X Ecosystem](https://www.gaia-x.eu/), which is a project reportedly working on the development of a federation of data infrastructure and service providers for Europe with the objective of ensuring a European digital sovereignty.

DasesLab provides a toolkit for anyone who wants to build a dataspace with Gaia-X specifications. You can read more info about this dataspace on this [wiki](https://dataspace.prometheus-x.org/).

---

## Presentation of Blocks

Dases Lab is made up of several autonomous blocks:

- Identity Access Management
- Self-description Creation
- Visions connection
- Catalog

## Building

#### Prerequisites
##### Metamask
MetaMask is requested in your browser: https://metamask.io/ 
The Network must be localhost if you use it locally or Rinkeby if you use it on the testnet
##### Nodejs
Daseslab uses Nodejs. You can install it by following these steps:

1. Install cURL if you don't have it:
```bash
sudo apt install curl
```

2. Create APT sources list for Nodesource Nodejs 16 repo:
``` bash
cd ~
curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -
```
3. Install Nodejs 16
``` bash
sudo apt -y install nodejs
```

4. Test installation using
```bash
$ node -v
$ npm version
```
##### Clone the project
Clone the repository on your local machine
```bash
$ git clone https://github.com/pgrandne/daseslab.git
```

### Front End ###
We use React. The Front End scripts are in "client" folder.
If you want to launch the Front End locally:

1. Go to "client" folder
```bash
$ cd client
```

2. Install the dependencies
```bash
$ npm install
```

3. Update API URL
In src/features/api.js comment the second line and uncomment the fifth line:  
`line 2 => // const environment = 'https://dases-proto.herokuapp.com'`  
`line 5 => const environment = 'http://localhost:5000'`  

4. Launch the server locally
```bash
$ npm start
```

5. Open your browser and go to `http://localhost:3000`
The backend server must be launched to display and interact with the catalog
Please follow next section for installing and deploying backend server


### Back End ###
We use Node.js

1. Go to "backend" folder
```bash
$ cd backend
```

2. Install the dependencies
```bash
$ npm install
```

3. Create an .env file
Copy the file env.example and rename it .env
For the 3 env variables, replace string in quotes by your key  
For `MONGODB_APP_CONNECT` you need an account on MongoDB, and copy paste the URL provided by MongoDB  
`MONGODB_APP_CONNECT = "THE CONNECTION STRING PROVIDED BY MONGODB"`

For  `PUBLIC_KEY`, you need an Ethereum Public Key. You can get one on Metamask  
`PUBLIC_KEY = "PUBLIC KEY OF VERIFIABLE CREDENTIAL SIGNER => TRUST ANCHOR"`

For `PRIVATE_KEY`, you need the Private key associated to the previous Public Key  
`PRIVATE_KEY = "PRIVATE KEY OF VERIFIABLE CREDENTIAL SIGNER => TRUST ANCHOR"`

4. Launch the server locally
```bash
$ npm start
```
The server is launched on localhost:5000 by default

## Roadmap
Dases Lab is an on going project. We follow the latest advances and specifications updates of Gaia-X.  
The project is on stand-by since July 2022.