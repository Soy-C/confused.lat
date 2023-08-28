const app = require('./routes/index');
const path = require("path");

let port = process.env.port || 3000;


app.get('/', async(req, res) => {
    const filePath = path.resolve(__dirname + '/views/index.html');
    res.sendFile(filePath);
})

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(port, () => {
    console.log('Started!!');
})