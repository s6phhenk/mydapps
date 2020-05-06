var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var Web3JS = require("web3");
    var web3 = new Web3JS(new
Web3JS.providers.HttpProvider("ropsten.infura.io/v3/0603447dc3d1485ca4e39fd39b024bfa"));
    web3.eth.getBlockNumber().then(function(blocknumber){
        res.render('index', { title: 'Hello World', block : blocknumber });
    })
.catch(function(error){
    res.render('index', { title: 'Hello World', block : 'konnte Block nicht laden'});
    });
    
module.exports = router;