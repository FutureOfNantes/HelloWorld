# Dases Lab #

Welcome in Dases Lab, we are building a Miminum Viable Product for Data Space of Education & Skills. You can find the latest version of Dases Lab on this [website](https://daseslab.on.fleek.co/).

DasesLab is a project from [Gaia-X Ecosystem](https://www.gaia-x.eu/), which is a project reportedly working on the development of a federation of data infrastructure and service providers for Europe with the objective of ensuring a European digital sovereignty.

DasesLab provides a toolkit for anynone who wants to build a dataspace Gaia-X specifications. You can read the technical documentation on this [website](lien site doc)

---

## Presentation of Blocks

Dases Lab is made up of several autonomous blocks:

- Identity Access Management
- Self-description Creation
- Visions connection
- Catalog

(Display a Tree)

## Building

#### Prerequisites
MetaMask is requested in your browser. The Network must be localhost if you use it locally or Rinkeby if you use it on the tesnet
##### Install nodejs
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
### Front End ###
We use ReactJS

For a stable relase you can click on the last one at the right of the page


Please clone the repository in your folder where you want to use it : git clone daes
go to the folder : cd daseslab
in /src/features/api.js comment the 3 first lines and uncomment the 3 last lines
install the dependencies : npm install
launch the server locally : npm start
go to localhost:3000

In parallel you need to launch the Back End for using the Portail

### Back End ###
Download the zip dases-proto.
Unzip it and go to the folder : cd dases-proto
install the dependencies :
launch the server locally : npm start
By default the server is launched on  localhost:5000



## Roadmap
Dases Lab is an on going project. We follow the latest advances and specifications updates of Gaia-X

- [X] implementation/magiclink
- [ ] implementation/FranceConnect