import mongoose from 'mongoose';

export const AuthorSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  name: {type: String, required: true},
  nationality: {type: String, required: false}
});

const Author = mongoose.model('Authors', AuthorSchema);
export default Author;