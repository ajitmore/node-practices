const StringPath:string = "./Package.json";

export class ClassName
{   
    name:string;
    constructor(name:string) {
        this.name = name;
    }
    loadn(filename:string) 
    {
        return new Promise((resolve, reject) => {
            let fs = require('fs');
                fs.readFile(filename, function (err:Error, data:any) 
                {
                    if (err) 
                    {
                        console.log(err);
                        reject();
                        throw err;   
                    }
                    let gg = JSON.parse(data);
                    resolve(data);
                });
            });
    }
}
let jsh = new ClassName("A string");
let  test = jsh.loadn(StringPath).then((result) => {
    console.log(result);
    //test = JSON.parse(result); // here happens the error
    //return JSON.parse(result); // the same error happens here to
});