

class departamentController {
    createDepartament(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('create_departament')
        } catch(e) {
            res.json(e)
        }
    }   
    removeDepartament(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('remove_departament')
        } catch(e) {
            res.json(e)
        }
    }    
    departamentInfo(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('departament_info')
        } catch(e) {
            res.json(e)
        }
    }    
    renameDepartament(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('rename_departament')
        } catch(e) {
            res.json(e)
        }
    }    
    getDepartamentVerifyList(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('get_departament_verify_kist')
        } catch(e) {
            res.json(e)
        }
    }    
    canSeeDepartament(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('can_see_departament')
        } catch(e) {
            res.json(e)
        }
    }    
    getDepartamentGroup(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('get_departament_group')
        } catch(e) {
            res.json(e)
        }
    }    
    getDepartamentSubject(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('get_departament_subject')
        } catch(e) {
            res.json(e)
        }
    }     
}

export default new departamentController