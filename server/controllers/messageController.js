const messages_id = [ //захардкодил сообщения
    {
    message_id: 0,
    user_id:0,
    text:"AAAAAAAAAAAAAAAA0",
    sent:"4/2/2023 3:44",
    file:" .... jpg " // url
    },
    {
    message_id: 1,
    user_id:1,
    text:"ГГ",
    sent:"4/2/2023 4:15",
    file:" .... jpg " // url
    },
    {
    message_id: 2,
    user_id:2,
    text:"AAAAAAAAAAAAAAAA2",
    sent:"4/2/2023 4:44",
    file:" .... jpg " // url
    },
];

class messageController {
    createMessage(req, res) {
        try {
            console.log("sss")
            messages_id.push({
                message_id: messages_id.length+1,
                user_id: req.body.user_id,
                text: req.body.text,
                sent: req.body.sent,
                file: req.body.file,
            })
            res.send()
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
            let messages = {
                "code":0,
                "messages_id": messages_id
            }
            res.send(messages)
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