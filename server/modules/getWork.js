var workPage = require('../model/workPage');
async function getWork(apiData) {
    return new Promise((resolve, reject) => {
        var query = {};
        console.log(apiData)
        if (apiData.medId)
            query.medId = apiData.medId;
        if (apiData.userId) {
            query.userId = apiData.userId;
        } if (apiData.type) {
            query.type = apiData.type;
        }
        //console.log(query)

        var pageNo = parseInt(apiData.pageNo)
        if (apiData.size)
            var size = parseInt(apiData.size)
        else
            var size = 5
        var skipLimit = {}
        // if (pageNo > 0 && pageNo != 0 && pageNo) {
        //     skipLimit.skip = size * (pageNo - 1)
        // }
        // skipLimit.limit = size
        // skipLimit.sort = {
        //     _id: -1 //Sort by Date Added DESC
        // }
        //schema.find(query,projection,skip limit,callback function)
        workPage.find(query, {}, skipLimit, function (err, doc) {
            if (err)
                reject(err);
            resolve(doc);
        });
    })

}
module.exports = { 'getWork': getWork }
