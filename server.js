const path = require("path");//Es una ruta que nos permite trabajar con directorios sin importar el OS. Es decir, no importa si usamos windows o linux.
const express = require("express");// El framework
//const bodyParser = require("body-parser"); //Obsoleto

const app = express();//Creamos la constante para guardar el framework

app.use(express.json());//Analiza el texto como un tipo Json y el objeto resultante lo coloca en un request.body.

app.get("/", (req, res) => { //Definimos la ruta y le damos su función.
    res.sendFile(path.join(__dirname, "index.html")); //con el .sendFile enviamos un archivo de cualquier tipo. El path.join nos une los directorios, __dirname nos da la dirección donde está el archivo.
});

//Method post:
app.post("/add", (req, res) => {
    const { a, b } = req.body;
    res.send({
        result: parseInt(a) + parseInt(b)
    });
    //console.log(result)
});

app.listen(5000, () => {
    console.log(`Server is running on port 5000.`);
});