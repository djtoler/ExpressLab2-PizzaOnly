import express from "express";
const home = express.Router();


home.get('/', (req, res) => {
    res.render('home')
})


home.get('/hotdogpizza', (req, res) => {
    res.render('hotdogpizza')
})

home.get('/liverpizza', (req, res) => {
    res.render('liverpizza')
})

home.get('/ramenpizza', (req, res) => {
    res.render('ramenpizza')
})

home.get('/public/pizzapic.jpg', (req, res) => {
    res.render('home')
})


export default home;