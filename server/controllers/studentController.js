

class studentController {
    verify(req, res) {
        try {
        const user = req.body
        //отправить в api
        res.json("verify")
        } catch(e) {
            res.json(e)
        }
    }
    
    reject(req, res) {
        try {
        const user = req.body
        //отправить в api
        res.json("reject")
        } catch(e) {
            res.json(e)
        }
    }
    
    isVerifyed(req, res) {
        try {
        const user = req.body
        //отправить в api
        res.json("is_verifyed")
        } catch(e) {
            res.json(e)
        }
    }
}

export default new studentController