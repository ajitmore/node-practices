"use strict";
exports.__esModule = true;
var StringPath = "./Package.json";
var ClassName = /** @class */ (function () {
    function ClassName(name) {
        this.name = name;
    }
    ClassName.prototype.loadn = function (filename) {
        return new Promise(function (resolve, reject) {
            var fs = require('fs');
            fs.readFile(filename, function (err, data) {
                if (err) {
                    console.log(err);
                    reject();
                    throw err;
                }
                var gg = JSON.parse(data);
                resolve(data);
            });
        });
    };
    return ClassName;
}());
exports.ClassName = ClassName;
var jsh = new ClassName("A string");
var test = jsh.loadn(StringPath).then(function (result) {
    console.log(result);
    //test = JSON.parse(result); // here happens the error
    //return JSON.parse(result); // the same error happens here to
});
