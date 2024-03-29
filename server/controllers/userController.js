

class userController {
    createUser(req, res) {
        try {
            res.json('create_user ' + req.headers['auth'])
        } catch(e) {
            res.json(e)
        }
    }
    removeUser(req, res) {
        try {
        const user = req.body.user_id
        //отправить в api
        res.json('remove_user')
        } catch(e) {
            res.json(e)
        }
    }
    updateUser(req, res) {
        try {
            const user = req.body
            //отправить в api
            res.json('update_user')
            } catch(e) {
                res.json(e)
            }
    }
    updateUserPhoto(req, res) {
        try {
            const user = req.body
            //отправить в api
            res.json('update_user_photo')
            } catch(e) {
                res.json(e)
            }
    }
    updatePassword(req, res) {
        try {
            const user = req.body
            //отправить в api
            res.json('update_password')
            } catch(e) {
                res.json(e)
            }
    }
    updateEmail(req, res) {
        try {
            const user = req.body
            //отправить в api
            res.json('update_email')
            } catch(e) {
                res.json(e)
            }
    }
    setRole(req, res) {
        try {
            const user = req.body
            //отправить в api
            res.json('set_role')
            } catch(e) {
                res.json(e)
            }
    }
    userInfo(req, res) {
        try {
            const user = req.params.id
            //отправить в apI
            const r = {first_name: "Егор", second_name: "Максимов", role_id: 1, email: "eg@gmail.com"}
            res.send(r)
        } catch(e) {
            res.json(e)
        }
    }
    
}

export default new userController