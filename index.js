const fs = require ('fs');
const mongoose = require ('mongoose');
const os = require ('os');
const express = require ('express');
const add = require ('./app');
const path = require ('path');
const EventEmitter = require ('events');
const e = require('express');
const ev = new EventEmitter();

mongoose.connect("mongodb://127.0.0.1:27017/freshdatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{console.log('Connected to MongoDB')})

const Datasc = new mongoose.Schema({
    name: {type:String,required:true},

    age: Number,
    email: String,
    password: String,
      date: {type: Date, default: Date.now}
});

const Playlsit = new mongoose.model('Playlist', Datasc);

const data =[
    {
    
        name: "emranhasmi",
    
        age: 19,
        email: "fake2@gmail.com",
        password: "ahn*2",
         
    
    }, {
    
        name: "khaladsaab",
    
        age: 98,
        email: "7@gmail.com",
        password: "ahn*3",
         
    
    },
    {
    
        name: "newname",
    
        age: 9,
        email: "fakeemail3@gmail.com",
        password: "ahn*34",
         
    
    }

];


Playlsit.insertMany(data).then(()=>{
    console.log('Data inserted');
})
    



















