const jsonwebtoken = require("jsonwebtoken")

async function validationToken(req, res, next){
    try {
        let token = req.headers["authorization"]
        const bearer = token.split(" ")
        const realToken = bearer[1]

        if(realToken){
            req.token = realToken
            jsonwebtoken.verify(req.token, process.env.jwt_key, (error, deco) => {
                if(error) return res.sendStatus(404)
                
                next()
            })
        }else {
            res.sendStatus(403)
        }
        
    } catch (error) {
        res.sendStatus(400)
    }
}

module.exports = validationToken