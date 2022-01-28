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
    const jsPlaylist = new Playlist({
      name: "JavaScript",
      ctype: "Back End & Front End",
      videos: 150,
      author: "John Doe",
      active: false,
    });

    const nodePlaylist = new Playlist({
      name: "Node Js",
      ctype: "Back End",
      videos: 50,
      author: "Michale",
      active: true,
    });

    const mongoPlaylist = new Playlist({
      name: "MongodDB",
      ctype: "Database",
      videos: 30,
      author: "Nichole",
      active: true,
    });

    // const result = await reactPlayList.save();
    const result = await Playlist.insertMany([
      jsPlaylist,
      nodePlaylist,
      mongoPlaylist,
    ]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// call func
createDocument();
