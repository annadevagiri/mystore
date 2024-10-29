
const mongoose = require('mongoose');

// const counterSchema = new mongoose.Schema({
//     _id: { type: String, required: true },
//     seq: { type: Number, default: 0 }
// });

// const Counter = mongoose.model('Counter', counterSchema);

const CupcakeSchema = mongoose.Schema(
    {
        id: {
            type: Number,
        },
        name: {
            type: String,
            required: [true]
        },
        description: {
            type: String,
        },
        price : {
            type: Number,
            required: [true]
        },
        ingredients: [
            {
                type: String
            }
        ]
    },
    {
        timestamps: true,
    }
);

// CupcakeSchema.pre('save', async function(next) {
//     const item = this;
//     if (!item.isModified()) return next();
//     const counter = await Counter.findByIdAndUpdate(
//         '_id',
//         { $inc: { seq: 1 } },
//         { new: true, upsert: true }
//     );
//     console.log("counter+_+_+_+_+_", counter);
//     this.id = counter.seq;
//     next();
// });

const CupcakeStore = mongoose.model('CupcakeStore', CupcakeSchema);

module.exports = CupcakeStore;