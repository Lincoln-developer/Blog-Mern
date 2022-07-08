const unKnownEndPoint = (req,res) => {
    res.status(400).send({error:'unknown endpoint'})
};
export default unKnownEndPoint