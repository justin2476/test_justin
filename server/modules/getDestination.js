var destination = require('../model/destination');
async function getDestination(apiData) {
    return new Promise((resolve, reject) => {
        var query = {};
        if (apiData.name)
            query.name = apiData.name;
        if (apiData.mainLocation) {
            query.mainLocation = apiData.mainLocation;
        } if (apiData.type) {
            query.type = apiData.type;
        }
        console.log(query)

        var pageNo = parseInt(apiData.pageNo)
        if (apiData.size)
            var size = parseInt(apiData.size)
        else
            var size = 5
        var skipLimit = {}
        if (pageNo > 0 && pageNo != 0 && pageNo) {
            skipLimit.skip = size * (pageNo - 1)
        }
        skipLimit.limit = size
        skipLimit.sort = {
            _id: -1 //Sort by Date Added DESC
        }
        //schema.find(query,projection,skip limit,callback function)
        destination.find(query, {}, skipLimit, function (err, doc) {
            if (err)
                reject(err);
            resolve(doc);
        });
    })

}
module.exports = { 'getDestination': getDestination }
