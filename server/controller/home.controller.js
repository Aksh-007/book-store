import bookSchema from "../model/book.schema.js"

export const home = async (req, res) => {
    res.send(`<h1>App is working </h1>`)
}

/******************************************************
 * @CREATE_Book
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

/******************************************************
 * @GET_ALL_BOOKS
 * @route http://localhost:3000/api/v1/getAllBooks
 * @description controller is used to get all books from database
 * @returns books object
 ******************************************************/
export const getAllBooks = async (req, res) => {
    try {

        const getAllBooks = await bookSchema.find();
        res.status(200).json({
            sucess: true,
            message: `All Books Retrived Sucesfully`,
            getAllBooks
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            sucess: false,
            message: error.message,
        })
    }
}


/******************************************************
 * @GET_BOOK_BY_ID
 * @route http://localhost:3000/api/v1/getBook/:id
 * @description Api is used to Retrieve a book by its ID.
 * @returns books object with single book
 ******************************************************/
export const getBookByID = async (req, res) => {
    try {
        const bookId = req.params.id;
        const book = await bookSchema.findOne({ _id: bookId });
        if (!book) {
            throw new Error("Book Not Found")
        }
        res.status(200).json({
            sucess: true,
            message: `Book Found Sucesfully`,
            book
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            sucess: false,
            message: error.message,
        })
    }
}


/******************************************************
 * @UPDATE_BOOK_BY_ID
 * @route http://localhost:3000/api/v1/updateBook/:id
 * @description Api is used to Update a book by its ID.
 * @returns books object 
 ******************************************************/
export const updateBook = async (req, res) => {
    try {
        const bookId = req.params.id
        const { title, author, publishYear } = req.body;


        // error Handling
        if (!bookId) throw new Error(`Please Enter Book ID`);

        if (!title) throw new Error(`Please Enter title`);
        if (!author) throw new Error(`Please Enter author`);
        if (!publishYear) throw new Error(`Please Enter publishYear`);

        // error handling if updated title already exist 
        const updatedBookTitleExist = await bookSchema.findOne({ title })
        if (updatedBookTitleExist) throw new Error(`This Title already exist `)

        const updatedBook = await bookSchema.findByIdAndUpdate(bookId, { title, author, publishYear });
        if (!updatedBook) throw new Error(`Book Not Updated`);

        // sent response to frontend
        res.status(200).json({
            sucess: true,
            message: `Book Updated succesfuly`,
            updateBook
        });
    } catch (error) {
        console.log(error)
        res.status(400).json({
            sucess: false,
            message: error.message
        })
    }
}


/******************************************************
 * @DELETE_BOOK_BY_ID
 * @route http://localhost:3000/api/v1/deleteBook/:id
 * @description Api is used to Delete a book by its ID.
 * @returns Dleted books object 
 ******************************************************/
export const deleteBook = async (req, res) => {
    try {
        const bookId = req.params.id
        if (!bookId) throw new Error(`Please Provide Id of book`);

        const deletedBook = await bookSchema.findByIdAndDelete(bookId);
        res.status(200).json({
            sucess: true,
            message: `Book with title "${deletedBook.title}" Deleted Sucessfully`,
            deleteBook
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            sucess: false,
            message: error.message,
        })
    }
}