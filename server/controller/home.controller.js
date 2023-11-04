import bookSchema from "../model/book.schema.js"

export const home = async (req, res) => {
    res.send(`<h1>App is working </h1>`)
}

/******************************************************
 * @SAVE
 * @route http://localhost:3000/api/v1/create
 * @description save book
 * @returns book Object
 ******************************************************/
export const createBook = async (req, res) => {
    try {
        const { title, author, publishYear } = req.body;
        if (!title) throw new Error('Please enter title of book');
        if (!author) throw new Error('Please enter author of book');
        if (!publishYear) throw new Error('Please enter published year of book');

        // checking if title already exist in database
        const existingTitle = await bookSchema.findOne({ title });
        if (existingTitle) throw new Error('Book already exists')

        // creating new book 
        const newBook = await bookSchema.create({
            title,
            author,
            publishYear,
        })

        // sending Response to frontend
        res.status(200).json({
            sucess: true,
            message: `Book created Succesfully`,
            newBook
        })

    } catch (error) {
        console.log(error);
        // if error occurs please send it to backend
        res.status(400).json({
            sucess: false,
            message: error.message,
        })
    }
}


