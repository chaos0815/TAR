/**
 * Races Route Module
 */

exports.findAll = function(req, res) {
    res.send([{name:'race1'}, {name:'race2'}, {name:'race3'}]);
};

exports.findById = function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
};