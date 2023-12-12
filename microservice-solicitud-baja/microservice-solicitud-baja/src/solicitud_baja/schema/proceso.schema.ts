import * as mongoose from 'mongoose';

export const ProcesoSchema = new mongoose.Schema({
  name: { type: String, required: true },
});
