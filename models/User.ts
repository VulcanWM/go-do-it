import mongoose, {Schema} from 'mongoose'

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  created: Date,
  banned: Schema.Types.Mixed,
  categories: {String: {
    points: [Number],
    streak: Number,
    compTasks: [String],
    opTasks: [String]
  }},
  badges: [String]
})

export default mongoose.models.User || mongoose.model('User', UserSchema);