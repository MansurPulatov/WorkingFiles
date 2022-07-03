const fs =require("fs")

fs.appendFile("test.txt", "6 января ", (err) => {
    if (err) throw err;


});