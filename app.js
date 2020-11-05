const express = require('express');
const app = express();
const bodyParser = require('body-parser')
urlEncodedParser= bodyParser.urlencoded({extended : false});
const path = require('path');






let values =[{toDoList:"General Cleaning"},{toDoList:"Assignments"}];

app.use('/static',express.static(path.join(__dirname,'Public'))); 

app.set('views',__dirname+'/views');
app.set('view engine','ejs');

app.get('/home', (req, res) => {
    res.send('Home Page')
}
)
app.get('/', (req, res) => {
    res.render('index',{title:"TO DO LIST",data:values})
}
)

//getting the values from the body
app.post('/post',urlEncodedParser,(req,res)=>{
    values.push(req.body)
    res.redirect('/')
})
//delete table data
app.post('/delete/:toDo',(req,res)=>{
    const doList=req.params.toDo
    values.splice(doList,1)
    res.redirect('/')
})
app.listen(3000,()=>console.log(3000));