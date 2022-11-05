require('dotenv').config();

const { response } = require('express');
const express = require('express');
const app = express();

app.get('/calc/:num1/:num2', (req, res) => {
  // console.log(req.params.num1, req.params.num2)

  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  const operation = req.query.operation;

  if(operation === 'add') {
    res.send(`The sum is ${num1 + num2}`)
  } else if (operation === "subtract") {
    res.send(`the subtracted value is ${num1 - num2}`);
  } else if (operation === "multiply") {
    res.send(`the multiply value is ${num1 * num2}`);
  } else if (operation === "divide") {
    res.send(`the divide value is ${num1 / num2}`);
  } else if (operation === "exponent") {
    res.send(`the exponent value is ${num1 ** num2}`);
  } else {
    res.send('No Operation')
  }
});



app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`)
})

