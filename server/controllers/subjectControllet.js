

class subjectController {
    createSubject(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('create_subject')
        } catch(e) {
            res.json(e)
        }
    }
    removeSubject(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('remove_subject')
        } catch(e) {
            res.json(e)
        }
    }
    renameSubject(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('rename_subject')
        } catch(e) {
            res.json(e)
        }
    }
    subjectInfo(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('subject_info')
        } catch(e) {
            res.json(e)
        }
    }
    canSeeSubject(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('can_see_subject')
        } catch(e) {
            res.json(e)
        }
    }
}

export default new subjectController