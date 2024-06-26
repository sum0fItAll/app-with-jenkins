const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect('mongodb+srv://ahsanfaizan:ahsan3249@cluster-1.hxzonyf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-1')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String
});

// Model
const User = mongoose.model('users', UserSchema);

app.get("/",  (req,res)=> {
    res.json({"success": "app is running successfully"});
})
// Route to get user data
app.get('/api/user', async (req, res) => {
  try {
    const user = await User.findOne({email:"ahsan_faizan@outlook.com"}); // Retrieve the first user found
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
