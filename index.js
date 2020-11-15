
const express = require('express')
const app = express()
const port = 3000

app.get('/recipes', (req, res) => {
  var data = readRecipes()
  res.send(data)
})

app.get('/cars/:model', (req, res) => {
  var mod = req.params.model
  var data = readCars(mod)
  res.send(data)
})

app.get('/sitesworld/:continent', (req, res) => {
  var data = readSitesWorld(req.params.continent)
  res.send(data)
})

app.get('/sitesworld', (req, res) => {
  var data = readSitesInWolrd()
  res.send(data)
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

/**
 * Reads the recipes.json file and save the data into a string variable
 * that is returned
 */
function readRecipes(){
  let json = require('./data/recipes.json')
  let jsonArray = json.recipes
  var dataRec = 'Recipe List :\n'
  for (let i = 0; i < jsonArray.length; i++) {
    dataRec+='Id: '+jsonArray[i].id+' Recipe Name: '+jsonArray[i].recipe_name
              +' Preparation Time: '+jsonArray[i].preparation_time+' Type: '
                  +jsonArray[i].preparation_time+((i<jsonArray.length-1)?'\n':'')
  }
  return dataRec;
}

function readCars(mod){
  let json = require('./data/cars.json')
  let jsonArray = json.cars
  var dataCars = 'Cars List :\n'
  for (let i = 0; i < jsonArray.length; i++) {
  if(mod == jsonArray[i].model){
    dataCars+='Id: '+jsonArray[i].id+' Brand: '+jsonArray[i].brand_name
              +' Line: '+jsonArray[i].line_name+' Model: '
                  +jsonArray[i].model+((i<jsonArray.length-1)?'\n':'')
   }
  }
  return dataCars;
}

function readSitesWorld(continent){
  let json = require('./data/sitesworld.json')
  let jsonArray = json.SitesWorld
  var sites = ' '
  var existContinent = false
  for (let j = 0; j < jsonArray.length; j++) {
    if(continent == jsonArray[j].Continent){
      existContinent = true
      break
    }
  }
  if(existContinent){
    sites += 'Sites in: ' + continent + '\n'
    for (let i = 0; i < jsonArray.length; i++) {
        if(continent == jsonArray[i].Continent){
          sites += 'Id_site: ' + jsonArray[i].id_site + ', Continent: ' + jsonArray[i].Continent + ', Country: ' + jsonArray[i].country
                    +', Capital: ' + jsonArray[i].Capital + '\n'
        }
    }
  }else{
    sites += 'there is no registration with the continent ' + continent
  }
  return sites;
}

function readSitesInWolrd(){
  let json = require('./data/sitesworld.json')
  let jsonArray = json.SitesWorld
  var sites = 'The sites in world are: ' + jsonArray.length + '\n' 
  for (let i = 0; i < jsonArray.length; i++) {
    sites += i+1 + '). Id_site: ' + jsonArray[i].id_site + ', Continent: ' + jsonArray[i].Continent + ', Country: ' + jsonArray[i].country
    +', Capital: ' + jsonArray[i].Capital + '\n'
  }
  return sites
}
