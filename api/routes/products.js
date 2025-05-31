const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
        res.status(200).json({
                message: 'Handling GET requests to /products'
        })
})

router.post('/', (req, res, next) => {
        res.status(200).json({
                message: 'Handling POST requests to /products'
        })
})

router.get('/:productId', (req, res, next) => {
        const id = req.params.productId;
        if(id === 'tao'){
                res.status(200).json({
                        message: 'Correct Id',
                        id: id
                })
                
        }
        else{
                res.status(200).json({
                        message: 'You passed this Id: ' + id
                })
        }
})

router.patch('/:productId', (req, res, next) => {
        const id = req.params.productId;
                res.status(200).json({
                        message: 'Updated product!'
                })
})

router.delete('/:productId', (req, res, next) => {
        const id = req.params.productId;
                res.status(200).json({
                        message: 'Deleted product!'
                })
})


module.exports = router