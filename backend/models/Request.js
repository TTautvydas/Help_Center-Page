import mongoose from "mongoose";

const requestSchema = mongoose.Schema({
  clientName: {
    type: String,
    minLength: 2,
    maxLength: 80,
    require: true,
  },
  clientEmail: {
    type: String,
    minLength: 8,
    maxLength: 50,
    require: true,
  },
  orderId: {
    type: String,
    maxLength: 10,
    require: true,
  },
  description: {
    type: String,
    minLength: 3,
    maxLength: 350,
    require: true,
  },
});

export default mongoose.model("Request", requestSchema);
