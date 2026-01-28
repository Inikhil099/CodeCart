const { getUser } = require("../services/auth");

function RestrictToLoggedInUserOnly(req,res,next) {
    try {
        const token = req.cookies.uid;
        if(!token){
            return res.status(400).send("Not authenticated")
        }
        const user = getUser(token)
    } catch (error) {
        
    }
}