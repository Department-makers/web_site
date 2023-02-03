

class teacherController {
    teacherSubject(req, res) {
        try {
            const request = req.body
            //send api
            res.json('teacher_subject')
        } catch(e) {
            res.json(e)
        }
    }
    teacherAssign(req, res) {
        try {
            const request = req.body
            //send api
            res.json('teacher_assign')            
        } catch(e) {            
            res.json(e)
        }
    }
    teacherRemove(req, res) {
        try {
            const request = req.body
            //send api
            res.json('teacher_remove')
        } catch(e) {            
            res.json(e)
        }
    }
    whoseHead(req, res) {
        try {
            const request = req.body
            //send api
            res.json('whose_head')
        } catch(e) {            
            res.json(e)
        }
    }
    makeHead(req, res) {
        try {
            const request = req.body
            //send api
            res.json('make_head')
        } catch(e) {            
            res.json(e)
        }
    }
}


export default new teacherController