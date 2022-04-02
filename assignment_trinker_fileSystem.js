const fs = require("fs");

// input=[]

async function handlingFileInput(input) {
    for (i = 0; i < input.length; i++) {
        let temp = input[i];
        let response= await isPresent(temp);
        if (response) {
            console.log("in present if")
            console.log(temp.indexOf("("))
            if (temp.indexOf("(") >= 0) {
                console.log("version found")
                let start_index = temp.indexOf("(");
                let last_index = temp.indexOf(")");
                let version = +(temp.slice(start_index, last_index));
                console.log(version)
            }
            else {
                console.log("version not available")
                temp = temp + "(1)"
                fs.appendFile("./file.txt", "\n"+temp, () => {
                    console.log("its done");
                });
            }

        } else {
            console.log("not present")
            fs.appendFile("./file.txt", temp, () => {
                console.log("its done");
            });
        }
    }

    return;
}

function isPresent(temp) {
    return new Promise((resolve, reject) => {
        let answer;
        fs.readFile("./file.txt", { encoding: "utf8" ,flag:"r"}, (err, data) => {
            if (err) {
                reject(err);
            }
            data = data.split("\n");
            let result = data.filter((data) => {
                return data === temp;
            });
            console.log(result.length)
            if (result.length > 0) {
                resolve(true);
            } else {
                resolve(false);
            }
        });
    })

}

handlingFileInput(["kapish"])
// isPresent("kapish");
