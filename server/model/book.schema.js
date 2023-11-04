import mongoose from "mongoose";


const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
        },
        author: {
            type: String,
            required: [true, "Author is Required"],
            trim: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

export default mongoose.model("bookSchema", bookSchema);