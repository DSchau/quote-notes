import mongoose from 'mongoose';

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const entriesSchema = new Schema({
  book: {
    type: ObjectId,
    ref: 'Book',
    required: true,
  },
  chapter: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  notes: String,
  owner: {
    type: ObjectId,
    ref: 'User',
    required: true,
  },
  page: Number,
  quote: String,
});

module.exports = mongoose.model('Entry', entriesSchema, 'entries');
