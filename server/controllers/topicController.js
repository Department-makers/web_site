

class topicController {
    getTopics(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('create_topic')
        } catch(e) {
            res.json(e)
        }
    }  
    createTopic(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('create_topic')
        } catch(e) {
            res.json(e)
        }
    }      
    removeTopic(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('remove_topic')
        } catch(e) {
            res.json(e)
        }
    }  
    renameTopic(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('rename_topic')
        } catch(e) {
            res.json(e)
        }
    }  
    canSeeTopic(req, res) {
        try {
            const user = req.params.id
            //отправить в api
            res.json('can_see_topic')
        } catch(e) {
            res.json(e)
        }
    }   
}

export default new topicController