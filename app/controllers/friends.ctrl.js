var friends = require("../model/friends");

module.exports = {
    findFriend: (req, res) => {
        console.log(req.body);
        // steps needed to achieve finding a friend
        // compare users answers with friends array
        // find the most compatible friend
        // res.json compatible friend

        return res.json(friends);
    }
}
// axios.post user survey
// .then display model with friend data