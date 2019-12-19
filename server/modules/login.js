var user = require('../model/user');
var md5 = require('md5');

async function Login(ObjQuerry) {

    return new Promise((resolve, reject) => {
        var access = "access denied"
        var obj = {};
        obj.mobile = "";
        obj.password = "";
        if (ObjQuerry.mobile) {

            var obj = {"mobile":ObjQuerry.mobile,"login.password":ObjQuerry.password};

          
            console.log(obj); 
        }
        else
            resolve(access);
            
            console.log("going to findOne"); 

        user.findOne(obj).exec(function (err, doc) {
            console.log("in the findOne "+err+", "+doc); 

            if (err)
                {console.log(err)
                    reject(err);
                 console.log(doc)
                }
            var access = "access denied"
            if (doc) {
                if (obj.mobile)
                    if (doc.mobile == obj.mobile && doc.password == obj.password)
                        var access = "access granted"
                console.log(doc.mobile);
            }
            resolve(access);
        });
    })

}
module.exports = { 'Login': Login }
