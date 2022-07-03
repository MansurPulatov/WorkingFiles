const fs =require("fs")

fs.writeFile("test.txt", "Пулатов Мансур ", (err) => {
    if (err) throw err;


});