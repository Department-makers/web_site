

class messageController {
    createMessage(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('create_message')
        } catch(e) {
            res.json(e)
        }
    }    
    removeMessage(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('remove_message')
        } catch(e) {
            res.json(e)
        }
    } 
    editMessage(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('edit_message')
        } catch(e) {
            res.json(e)
        }
    } 
    editMessageFile(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('edit_message_file')
        } catch(e) {
            res.json(e)
        }
    } 
    messageInfo(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('message_info')
        } catch(e) {
            res.json(e)
        }
    } 
    getMessagePerson(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('get_message_person')
        } catch(e) {
            res.json(e)
        }
    } 
    shareMessage(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('share_message')
        } catch(e) {
            res.json(e)
        }
    }    
}

export default new messageController