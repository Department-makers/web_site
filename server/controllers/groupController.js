

class groupController {
    createGroup(req, res) {
        try {
        const user = req.body
        //отправить в api
        //res.json({auth, first_name, second_name, role, email, password})
        res.json("create_group")
        } catch(e) {
            res.json(e)
        }
    }
    removeGroup(req, res) {
        try {
        const user = req.body.user_id
        //отправить в api
        res.json('remove_group')
        } catch(e) {
            res.json(e)
        }
    }
    changeGroup(req, res) {
        try {
            const user = req.body
            //отправить в api
            res.json('change_group')
            } catch(e) {
                res.json(e)
            }
    }
    getGroup(req, res) {
        try {
            const user = req.body
            //отправить в api
            res.json('get_group')
            } catch(e) {
                res.json(e)
            }
    }
    groupInfo(req, res) {
        try {
            const user = req.body
            //отправить в api
            res.json('group_info')
            } catch(e) {
                res.json(e)
            }
    }
    groupStudents(req, res) {
        try {
            const user = req.body
            //отправить в api
            res.json('group_students')
            } catch(e) {
                res.json(e)
            }
    }
    groupSubject(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('group_subject')
        } catch(e) {
            res.json(e)
        }
    }
    canSeeGroup(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('can_see_group')
        } catch(e) {
            res.json(e)
        }
    }
    addGroupSubject(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('add_group_subject')
        } catch(e) {
            res.json(e)
        }
    }
    removeGroupSubject(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('remove_group_subject')
        } catch(e) {
            res.json(e)
        }
    }
}

export default new groupController