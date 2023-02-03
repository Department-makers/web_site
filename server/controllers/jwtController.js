

class jwtController {
    getJwtByLogin(req, res) {
        try {
            const request = req.body
            //send api
            res.json('get_jwt_by_login')
        } catch(e) {            
            res.json(e)
        }
    }   
    checkJwt(req, res) {
        try {
            const request = req.body
            //send api
            res.json('check_jwt')
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