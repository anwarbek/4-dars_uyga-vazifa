const AuthorSchema = require("../schema/author.schema")

const getAllAuthors = async (req, res) => {
  try {
    const authors = await AuthorSchema.find()
    res.status(201).json(authors)
  } catch (error) {
    console.log(error.message);
  }
}

const addAuthor = async (req, res) => {
  try {
    const {
      full_name, date_of_birth, date_of_death, period, creativity, boi, photo
    } = req.body

    await AuthorSchema.create({ full_name, date_of_birth, date_of_death, period, creativity, boi, photo })
    res.status(201).json({
      message: "Added new author"
    })
  } catch (error) {
    console.log(error.message);
  }
}

const getOneAuthor = async (req, res) => {
  try {
    const { id } = req.params

    const foundedAuthor = await AuthorSchema.findById(id)

    if (!foundedAuthor) {
      return res.status(404).json({
        message: "Author not found"
      })
    }

    res.status(200).json(foundedAuthor)
  } catch (error) {
    console.log(error.message);
  }
}
const updateAuthor = async (req, res) => {
  try {
    const {
      full_name, date_of_birth, date_of_death, period, creativity, boi, photo
    } = req.body

    const { id } = req.params

    const foundedAuthor = await AuthorSchema.findById(id)

    if (!foundedAuthor) {
      return res.status(404).json({
        message: "Author not found"
      })
    }

    const newAuthor = await AuthorSchema.findByIdAndUpdate(id,
      { full_name, date_of_birth, date_of_death, period, creativity, boi, photo }, { new: true })

    return res.status(404).json({
      message: "Author updated",
      newAuthor
    })
  } catch (error) {
    console.log(error.message);
  }
}
const deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params

    const foundedAuthor = await AuthorSchema.findById(id)

    if (!foundedAuthor) {
      return res.status(404).json({
        message: "Author not found"
      })
    }

    await AuthorSchema.findByIdAndDelete(id)
    return res.status(404).json({
      message: "Author deleted",
    })
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  getAllAuthors,
  getOneAuthor,
  addAuthor,
  updateAuthor,
  deleteAuthor
}