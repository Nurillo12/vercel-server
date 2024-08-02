const mongoose = require('mongoose')

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    throw err
  }
}


const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },

  username: {
    type: String,
    required: true,
    unique: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },

  user_posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'mahsulotlar'}]
});

const postSchema = new mongoose.Schema({
  mahsulot: {
    type: String,
    required: true
  },

  tavsif: {
    type: String,
    required: true
  },

  rasm: {
    type: String,
    required: true
  },

  narx: {
    type: Number,
    required: true
  }
},
{timestamps: true}
)

const userModel = mongoose.model('users', userSchema)
const postModel = mongoose.model('mahsulotlar', postSchema)

module.exports = {
  connectDB,
  userModel,
  postModel
}
