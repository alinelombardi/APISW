const express = require ('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/',function(req, res){
    apiController.mostrarPlanetas(req, res)
});

router.post('/',function(req, res){
    apiController.adicionarPlanetas(req, res)
});

router.get('/:id',function(req, res){
    apiController.buscarId(req, res)
});

router.delete('/delPlaneta/:id',function(req, res){
    apiController.deletePlaneta(req, res)
});   
router.get('/buscarNome/:name',function(req, res){
    apiController.buscarNome(req, res)
});  

module.exports = router;

