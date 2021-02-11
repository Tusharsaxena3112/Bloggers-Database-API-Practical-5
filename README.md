# Bloggers-Database-API-Practical-5
This is the API for the practical-5 given for Full Stack-2. You can use it after clone the repository into your local system.


You can use this API by cloning this repository in your local system.


Prerequisites:

1.Node.js should be installed.


2.MongoDB should be installed.


3.You can use a tool "Postman" for sending requests to the API and managing Database.


Routes:


1.You can send a GET request to /blogs and get the details of all the blogs.


2.You can send a POST request to /blogs to insert a new blog details into the database.


It requires a json body for example: 


{


 "author":"Tushar",


 "age":20,


 "content":"Blog-Content",


 "rating":5,


 "published":true,


 blog_tags:{


  "1":"html",


  "2":"CSS",
 
 
   "3":"Javascript"
 
 
 }


}


3.You can a send patch request to /blogs/updateContent to update the content of author already present in your database.


It requires a json body for example:


{


  "author":"Tushar",


  "new":"New Updated Content"


}


4. You can a delete request to /blog/authorName to the blog belongs to {authorName}.



Happy Learning.. :)
