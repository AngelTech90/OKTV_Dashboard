#!/bin/bash

#!I recommend install better comments extension for read this

#* We define vars for users response:
response="pepe"
response2="jose"
response3="tato"


#?Optional:
echo "Have you clonned the repo yet?"
read response2

if [response2 -eq "no"] || [response2 -eq "NO"] || [response2 -eq "No"]; then
    git clone https://github.com/AngelTech90/OKTV_Dashboard
    cd OKTV_Dashboard
    git fetch

elif [response2 -eq "yes"] || [response2 -eq "YES"] || [response2 -eq "Yes"] ; then
    echo "Fine, let's keep running script"

fi

#*We define data structures
list_of_dependencies=("express" "axios" "bootstrap")


#* We question to user for see if they have node installed
echo "Have you node installed?"
read $response

#* If it isn't we install nodeJS
if [response -eq "no"] || [response -eq "No"] || [response -eq "No"]; then
    sudo apt update
    sudo apt install -y curl
    curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
    sudo apt-get install -y nodejs
    node -v
    npm -v
    echo "Node installed"

elif [response -eq "yes"] || [response -eq "YES"] || [response -eq "Yes"]; then
    echo "Good, let's keep setting enviroment"

fi

#* We install react and create project
cd ../../../
npm i -y
npm install vite@latest 
npm create vite@latest project-oktv


#* we init node js in project
cd "./project-oktv"
npm i -y

#* we install dependencies
for d in $list_of_dependencies; do
    npm i $d
done

#* Here we define the initial structure of components of projects
cd "./src"

mkdir general_components
mkdir main_components

cd main_components

#? Here create login component
mkdir login
cd login

#!here we define regions:
mkdir brand main_menu main_content footer

#* We set all files 
cd brand && touch Brand.jsx brand.css
cd ../main_menu && touch MainMenu.jsx mainMenu.css
cd ../footer && touch Footer.jsx footer.css
cd ../main_content && touch MainCotent.jsx mainCotent.css



#* we define regions of components 