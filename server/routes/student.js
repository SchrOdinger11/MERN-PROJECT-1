import express from 'express';


const router=express.Router();
//adding router 
router.get('/',(req,res)=>{
    res.send('Router is working')
});

export default router;