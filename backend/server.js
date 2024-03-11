const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Body parser middleware
app.use(bodyParser.json());

app.use(cors());
// MongoDB connection
mongoose.connect('mongodb+srv://virenderdigitalshakha:GZt77GAPTt0Trqha@cluster0.fqlolrh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a mongoose schema for the form data
const FormDataSchema = new mongoose.Schema({
  subject: String,
  name: String,
  email: String,
  phone: String,
  budget: String,
  description: String,
});

// Create a mongoose model based on the schema
const FormData = mongoose.model('FormData', FormDataSchema);

// Route to handle form submissions
app.post('/submit-form', async (req, res) => {
  try {
    // Extract form data from the request body
    const { subject, name, email, phone, budget, description } = req.body;

    // Create a new FormData document
    const formData = new FormData({
      subject,
      name,
      email,
      phone,
      budget,
      description,
    });

    // Save the form data to the database
    await formData.save();

    // Respond with a success message
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    // If an error occurs, respond with an error message
    console.error('Form submission failed:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
