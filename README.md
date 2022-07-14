# Edited version of Fluidity - An accordion based startpage
This version has been edited for a 10ft user interface. 
I removed the image, increased the size of fonts, changed fonts, etc.. with the intent of making it easier to read while viewed on a TV from a couch. 

### Comparison
#### Original [Fluidity](https://github.com/PrettyCoffee/fluidity)
![Original](https://github.com/PrettyCoffee/fluidity/blob/main/docs/default-theme.png)
#### This version - [Demo](https://jeremytoler.github.io/HTPCStartPage/)
![This version](https://github.com/JeremyToler/HTPCStartPage/blob/main/Screenshot.png)


## Usage
You can apply startpages by using several methods. To keep it simple, I will only cover one (the easiest) here:
1. Download a New Tab Override Plugin (e.g. [Chrome](https://chrome.google.com/webstore/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna) | [Firefox](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/))
1. Open the Plugins Settings
1. Paste `https://jeremytoler.github.io/HTPCStartPage/` into the text field to set it up as your startpage

## Local Setup
If you do not want to rely on my github page, thats totally okay!
You can set it up locally yourself with the following steps:
1. Switch into the gh-pages branch
1. Download / Clone the repository files
1. Set it up like explained in [usage](#usage), but instead of the link use the filepath to the `/index.html` file.

If you have a github account you can of course also just fork the repo and create a github page yourself ;)

## Docker setup
If you are familiar with Docker, you can use the provided docker file which will build the app and deploy it with nginx.

You can use the following commands to deploy a container:

```bash
# build
$ docker build ./ -t fluidity

# run
$ docker run -d --name fluidity -p 8080:80 fluidity
```

It will be deployed on port 8080. (`http:\\localhost:8080`)

## Advanced: Changing the code
Since this project is programmed with React and TypeScript, you will first need to set it up:

0. (Download and install [nodejs](https://nodejs.org/en/) if you dont have it)
1. Clone the git repository, this time use the main branch
1. Open a terminal in the project folder (If you execute the command `ls` here, there should be a package.json)
1. Execute `npm i` to install all dependencies
1. Execute `npm run start` to validate that everything ids working. A browser tab with the URL `http://localhost:3000` and the startpage should open.
1. Now you can change the code, for example write your own default values into `/src/data/data.ts`
1. Compile the project by executing `npm run build` if everything is done
1. Your startpage is now located in the `/build/` folder
1. Optional: If you host it with github pages yourself, you can use the command `npm run deploy` to push a fresh build into the gh-pages branch

## Sources

* [Fluidity](https://github.com/PrettyCoffee/fluidity)
* [Icons - FontAwesome](https://fontawesome.com/icons)
* [Text Flicker - CodeMyUI](https://codemyui.com/crt-screen-text-flicker-animation-in-pure-css/)
* [Wave Animation - mburakerman](https://codepen.io/mburakerman/pen/eRZZEv)
