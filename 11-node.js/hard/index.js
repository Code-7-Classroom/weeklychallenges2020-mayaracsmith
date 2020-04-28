let express = require("express");

let app = express();

let data = require("./public/employees.json");

app.use(express.json());
app.get("/test", function (req, res) {
});

app.get("/employees", (req, res) => {
  if (!data) {
    res.status(404).send(`Couldnt find the employees`);
  }
  res.send(data);
});

app.get("/employees/:id", function (req, res) {
  const eData = data.employees.find(function (employee) {
    return parseInt(req.params.id) === employee.id;
  });
  if (!eData) {
    res.status(404).send(`Couldnt find the employee id`);
  }
  res.send(eData);
});

// .env is used for security purposes
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});