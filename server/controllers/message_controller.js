var messages = [];
var id = 0;

module.exports = {
    create:(req, res)=>{
        const {text, time} = req.body
        messages.push({id, text, time})
        id+=1
        res.status(200).send(messages)
    },

    read:(req, res)=>{
        res.status(200).send(messages);        
    },

    update:(req, res)=>{
        id = req.params.id
        const {text, time} = req.body
        message[id] = {id, text, time}
        res.status(200).send(messages)
    },

    delete:(req, res)=>{
        id = req.params.id
        message.splice(id, 1)
        res.status(200).send(messages)
    }


}