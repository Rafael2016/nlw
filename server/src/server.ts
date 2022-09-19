import express from "express";

const app = express()
 
app.get('/ads',(request,response)=>{
    return response.json([
        {'1':'Rafael'},
        {'2':'Amanda'},
        {'3':'Teste'},
        {'4':'Teste'}
    ])
})

app.listen(333)