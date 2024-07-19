const express = require('express');
const app = express();
app.use(express.json());

app.listen(3000, console.log('Server is running on port 3000'));

// Output List
const users = [
    { name: 'Akiko',  age: 15, id: 1 },
    { name: 'Noriko', age: 14, id: 2 },
    { name: 'Anri',   age: 15, id: 3 },
    { name: 'Hitomi', age: 15, id: 4 },
    { name: 'Ai',     age: 14, id: 5 },
]

app.get('/', (req, res) => {
    res.send('Sample REST API');
});

// Get all users(GET)
app.get('/users', (req, res) => {
    res.json(users);
});

// Get a user by id(GET)
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id === parseInt(id));
    res.json(user)
})

// Create a user(POST)
app.post('/users', (req, res) => {
    const user = {
        name: req.body.name,
        age: req.body.age,
        id: users.length + 1
    }
    users.push(user)
    res.send(users)
})

// Update a user(PUT)
app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id === parseInt(id));
    user.name = req.body.name;
    user.age = req.body.age;
    res.send(user)
})

// Delete a user(DELETE)
app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id === parseInt(id));
    const index = users.indexOf(user);
    users.splice(index, 1);
    res.send(users)
})