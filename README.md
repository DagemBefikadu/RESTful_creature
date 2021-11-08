Start by opening the terminal 
cd into the folder where you want this file to be stored
Once your there make a folder "mkdir name ex(expressNotes)"
cd into (expressNotes)
"pwd" to double check folder location
Once your in expressNotes run 'git init -y(y means okay to all the questions git init asks)
ls to see if 'package jSon' is there
run npm install express 
Then open this folder with "code ." which is the extension for VSCODE 
open the "package.json" file to see if express is listed as dependice, if you see it means it installed successfully.
create a 'echo "node_modules" >> .gitignore' file
^^ we do this so we dont push our node_modules files to our repo
After you are inside of 'index.js' you will need import express from node
//
const express = require('express');
//now you need an instance of the express app by using 
const app = express();
//Once you have that you can create a Home route, what connects to the internet or router 

// app refers to the const we created above, req= request and res = send
app.get('/', (req, res) => {
    //sending the internet 'hello world
    res.send('Hello, World!');
});

//app is listening to port that it will use on the brower to open the above res
app.listen(8000);

// in the browers we will use localhost:8000 as our url
// We should see what we passed into res.send on the page which would be "Hello, World"

Now lets say you want to add more node packages like ejs or express layouts. 
 
Lets start with ejs 

You can use the terminal or the vscode terminal to install this package....
MAKE SURE YOU ARE IN THE CORRECT FOLDER 
Once you checked the folder you will 
npm i ejs
Once that finishes go back to your package.json file to see if ejs is listed under your dependcies
If you see it you have successful installed it
Now we have to bring it into our index.js file to use with
app.set('view engine', 'ejs');

Rename the .html files to .ejs files.
2. Replace your res.sendFile(<absolute path>) statements with res.render(<file name>) statements.
3. Ejs assumes a lot about the path to the template files, so as long as they are nested in a views folder and have .ejs extensions, you can simply pass the filename (no extension, though it wont break it if you include it) into res.render().

Now for layouts its a similar process 
MAKE SURE YOU ARE IN THE CORRECT FOLDER 
Once you checked the folder you will 
npm i express-ejs-layouts

Now we have to bring it into our index.js file to use with

const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.listen(3000)

In the root of the views folder, add a layout called layout.ejs. It must be called layout.ejs, as mandated by express-ejs-layouts.

<!DOCTYPE html>
<html>
<head>
  <title>Love It or Leave It</title>
</head>
<body>
  <%- body %> 

  This layout will be used by all pages, and the content will be filled in where the <%- body %> tag is placed. <%- body %> is a special tag used by express-ejs-layouts that cannot be renamed.
</body>
</html>

LIVE LINK

https://dagembefikadu.github.io/RESTful_creature/