'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json({ extended: false }));
app.use(cors());
app.get('/', (req, res) => {
  return res.send('API Running');
});
app.use('/api/forkUsers', require('./routes/api/users'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server Started Sucessfully at port ' + PORT);
});
