import express from "express";
const home = express.Router();


home.get('/', (req, res) => {
    res.render('home')
});


home.get('/hotdogpizza', (req, res) => {
    let specialPrice: string = req.query.price as string;
    let specialName: string = req.query.price as string;
    if (specialName && specialPrice) {
        console.log(req.query); 
    }
        res.render('hotdogpizza', {
            name: req.query.specialName,
            price: req.query.specialPrice
        })
});

home.get('/maccheesepizza', (req, res) => {
    let specialPrice: string = req.query.price as string;
    let specialName: string = req.query.price as string;
    if (specialName && specialPrice) {
        console.log(req.query); 
    }
        res.render('maccheesepizza', {
            name: req.query.specialName,
            price: req.query.specialPrice
        })
});

home.get('/ramenpizza', (req, res) => {
    let specialPrice: string = req.query.price as string;
    let specialName: string = req.query.price as string;
    if (specialName && specialPrice) {
        console.log(req.query); 
    }
        res.render('ramenpizza', {
            name: req.query.specialName,
            price: req.query.specialPrice
        })
});


export default home;