/**
 * Created by Nealyang on 17/3/29.
 */
export default app=>{
    app.get('/loadAuth',(req,res)=>{
        res.json(req.session.user || null)
    })
}
