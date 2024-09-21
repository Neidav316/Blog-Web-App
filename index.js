import express from "express"
import bodyParser from "body-parser"

const app = express();
const port = 3000;

var posts = [];
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.render("index.ejs",{
        posts: posts
    });
});
app.get("/new_post",(req,res)=>{
    res.render("post.ejs");
})
app.post("/new_post/submit",(req,res)=>{
    posts.push({
        subject: req.body["subject"],
        postContent: req.body["post_content"]});
    res.redirect("/");
});


app.listen(port, ()=>{
    console.log("Server Started at port "+port);
});