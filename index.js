
import express from 'express';

const app = express();
const port = 3000;


app.get('/', function (req, res) {
    res.send('get 요청')
});

app.post('/', function (req, res) {
    res.send('set 요청')
});

app.put('/', function (req, res) {
    res.send('put 요청')
});

app.delete('/', function (req, res) {
    res.send('delete 요청')
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
