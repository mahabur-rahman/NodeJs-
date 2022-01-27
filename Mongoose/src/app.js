const mongoose = require("mongoose");
// connect with database
mongoose
  .connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection is successfully done"))
  .catch((err) => console.log(err));

// Schema
const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now(),
  },
});

// collection creation
const Playlist = new mongoose.model("Playlist", playlistSchema);

// document create

const createDocument = async () => {
  try {
    const reactPlayList = new Playlist({
      name: "Node Js",
      ctype: "Back End",
      videos: 150,
      author: "John Doe",
      active: false,
    });

    const result = await reactPlayList.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// call func
createDocument();
