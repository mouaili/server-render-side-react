import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom/server';
const express = require('express');
const path = require('path');
const fs = require('fs');
const port = 3001;
import App from '../src/App';



const app = express();


const handleRequest = (req, res) => {

    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        if(err) {
            console.log(err);
            return res.status(500).send('Some Error Was happened');
        }else {
            return res.send(
              data.replace(
                `<div id='root'></div>`,
                `<div id='root'>${ReactDOMServer.renderToString(
                    <StaticRouter location={req.url}>
                        <App />
                    </StaticRouter>
                )}</div>`
              )
            );  
        }
    })

}


app.get('/home', handleRequest) 
app.get('/contact', handleRequest) 
app.use(express.static(path.resolve('./build')));
app.use(express.static(path.resolve(__dirname,'build')));



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)

    
})



