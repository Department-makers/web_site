

class jwtController {
    getJwtByLogin(req, res) {
        try {
            const request = req.body
            //send api
            res.send({access_token: "eeee", refresh_token: "ddwwd"})
        } catch(e) {            
            res.json(e)
        }
    }   
    checkJwt(req, res) {
        try {
            const request = req.body
            //send api
            res.send({user_id: 0})
        } catch(e) {            
            res.json(e)
        }
    }   
    getPassswordHash(req, res) {
        try {
            const request = req.body
            //send api
            res.json('get_password_hash')
        } catch(e) {            
            res.json(e)
        }
    }       
}

export default new jwtController