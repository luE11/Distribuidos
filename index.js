
const express = require('express')
const app = express()
const port = 3000

app.get('/recipes', (req, res) => {
  var data = readRecipes()
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
  var dataRec = 'Recipe List :)</br>'
  for (let i = 0; i < jsonArray.length; i++) {
    dataRec+='Id: '+jsonArray[i].id+' Recipe Name: '+jsonArray[i].recipe_name
              +' Preparation Time: '+jsonArray[i].preparation_time+' Type: '
                  +jsonArray[i].preparation_time+((i<jsonArray.length-1)?'</br>':'')
  }
  return dataRec;
}