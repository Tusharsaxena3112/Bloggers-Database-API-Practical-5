// import package
var mongoose = require("mongoose");

// 1. Create a Blogger's Database having schema with different Data Structures available. 
var url = "mongodb://127.0.0.1:27017/Bloggers";
mongoose.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true });
var db = mongoose.connection;
db.on("connected", () => {
  console.log("Connected");
});

// 2. Create a Model with Post collection to perform all CRUD Operations and validations in the Schema are maxLength , lowerCase and unique
const postSchema = new mongoose.Schema({
  author: { type: String, required: true, maxLength:20 , lowerCase:true , unique:true },
  age: { type: Number },
  content:{type:String,required:true},
  rating:{type: Number},
  published:{type:Boolean,required:true},
  blog_tags:{type:Object}
});
const Post = mongoose.model("Post", postSchema);


// 3. Insert multiple posts and read all.
Post.insertMany([
  {
    author: "Tushar Saxena",
    age: 20,
    content:"Blog-1 Content",
    rating:5,
    published:true,
    blog_tags:{
      "1":"html",
      "2":"Css",
      "3":"Javascript"
    }
  },
  {
    author: "Divyanshi",
    age: 20,
    content:"Blog-2 Content",
    rating:5,
    published:true,
    blog_tags:{
      "1":"html",
      "2":"Css",
      "3":"Javascript"
    }
  },
  {
    author: "Tanishq Saxena",
    age: 18,
    content:"Blog-3 Content",
    rating:5,
    published:true,
    blog_tags:{
      "1":"html",
      "2":"Css",
      "3":"Javascript"
    }
  },
  {
    author: "Happy",
    age: 20,
    content:"Blog-4 Content",
    rating:5,
    published:true,
    blog_tags:{
      "1":"html",
      "2":"Css",
      "3":"Javascript"
    }
  },{
    author: "John",
    age: 10,
    content:"Blog-5 Content",
    rating:1,
    published:false,
    blog_tags:{
      "1":"python",
      "2":"Css",
      "3":"Javascript"
    }
  },
  {
    author: "DB",
    age: 20,
    content:"Blog-5 Content",
    rating:5,
    published:true,
    blog_tags:{
      "1":"html",
      "2":"Css",
      "3":"Javascript"
    }
  }]
);

//For Checking the Validations
Post.insertMany([{
      author: "HappySAxena",
      age: 20,
      content:"Blog-4 Content",
      rating:5,
      published:true,
      blog_tags:{
        "1":"html",
        "2":"Css",
        "3":"Javascript"
      }
    }
  ]
  ).then(result=>{
    console.log(result);
  }).catch(err=>{
    console.log(err);
  })
// Read all the details.
Post.find()
  .exec()
  .then((result) => {
    console.log(result);
  });


// 4. Read, Update and Delete a record using Mongoose model.   
Post.findOne({
  author:"Tushar Saxena"
}).then(result=>{
  console.log(result);
})

Post.updateOne(
  {author:"John"},{$set:{content:"New Updated Content"}
}).then((result)=>{
  console.log(result);
});

Post.deleteOne({
  author:"John"
}).then((result)=>{
  console.log(result);
})

//Delete all the documents
Post.remove({}).then(()=>{
  console.log("All deleted");
})