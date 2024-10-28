import express from "express";
import { mongoose } from "mongoose";
import jwt from "jsonwebtoken"
import { MemberModel, EventModel, AdminModel, CoordinatorModel, ContactModel} from "./db.js"
import dotenv from "dotenv";
dotenv.config();
import cors from "cors"

const mongoosePassword = process.env.Mongoose_Password;
const JWT_SECRET = process.env.JWT_SECRET;
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: "https://nexus-asic.vercel.app/",
    credentials : true
}))

async function ConnectDb(){
    try {
        await mongoose.connect(mongoosePassword);
        console.log("connected to server!");
    }
    catch(error) {
        console.log("Error Connecting To Database!!");
        console.log(error)
    }
}
ConnectDb();

app.use(express.json());

app.get("/", (req, res)=>{
    res.json({
        message:"hello world"
    })
})

app.post("/api/login",async (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    let admin = null;
    try{
        admin = await AdminModel.findOne({
            "username":username,
            "password":password,
        })
    } catch(err){
        // console.log(err);
    }
    if (admin!=null){
        const token = jwt.sign({username:username}, JWT_SECRET);
        res.json({
            message:"verified",
            token:token
        })
    } else {
        res.json({
            message:"Invalid Creds",
            token:null
        })
    }
})

// COORDINATORS
app.get("/api/coordinators", async (req, res)=>{
    let data = null;
    let error = false;
    try{
        data = await CoordinatorModel.find({});
    } catch(err){
        error = true;
        // console.log(err);
    }
    if (!error && data!=null){
        res.json({
            message:"done",
            data:data,
        })
    } else {
        res.json({
            message:"notdone"
        })
    }
})
app.post("/api/coordinators/add",async (req, res)=>{
    const pfp = req.body.pfp;
    const name = req.body.name;
    const position = req.body.position;
    const about = req.body.about;
    let error = false;
    let newCoordinator = null;
    try{
        newCoordinator = new CoordinatorModel({pfp: pfp,teacherName:name, position:position, about:about })
        await newCoordinator.save();
    } catch(err){
        error = true;
        // console.log(err);
    }
    if (!error && newCoordinator!=null){
        res.json({
            message:"done"
        })
    } else{
        res.json({
            message:"notdone"
        })
    } 
})
app.post("/api/coordinators/update",async (req, res)=>{
    const pfp = req.body.pfp;
    const name = req.body.name;
    const position = req.body.position;
    const about = req.body.about;
    let user = null;
    let error = false;
    try{
        user = await CoordinatorModel.findOneAndUpdate({
            teacherName : name,
            position : position
        }, {
            pfp: pfp,
            teacherName: name,
            position: position,
            about: about
        })
    } catch(err){
        error = true;
        // console.log(err);
    }
    if (!error && user!=null){
        res.json({
            message:"done"
        })
    } else{
        res.json({
            message:"notdone"
        })
    } 
})
app.post("/api/coordinators/delete",async (req, res)=>{
    const name = req.body.name;
    const position = req.body.position;
    let user = null;
    let error = false;
    try{
        user = await CoordinatorModel.findOneAndDelete({
            teacherName : name,
            position : position
        })
    } catch(err){
        error = true;
        // console.log(err);
    }
    if (!error && user!=null){
        res.json({
            message:"done"
        })
    } else {
        res.json({
            message:"notdone"
        })
    }
})
// EVENTS
app.get("/api/events", async (req, res)=>{
    let data = null;
    let error = false;
    try{
        data = await EventModel.find({});
    } catch(err){
        error = true;
        // console.log(err);
    }
    if (!error && data!=null){
        res.json({
            message:"done",
            data:data,
        })
    } else {
        res.json({
            message:"notdone"
        })
    }
})
app.post("/api/events/add", async(req, res)=>{
    const poster = req.body.poster;
    const eventTitle = req.body.title;
    const eventDate = req.body.date;
    const aboutEvent = req.body.about;
    let error = false;
    let newEvent = null;
    try{
        newEvent = new EventModel({poster: poster,eventTitle:eventTitle, eventDate:eventDate, aboutEvent:aboutEvent })
        await newEvent.save();
    } catch(err){
        error = true;
        // console.log(err);
    }
    if (!error && newEvent!=null){
        res.json({
            message:"done"
        })
    } else{
        res.json({
            message:"notdone"
        })
    } 
})
app.post("/api/events/update",async (req, res)=>{
    const poster = req.body.poster;
    const eventTitle = req.body.title;
    const eventDate = req.body.date.toString().substring(0,4);
    const aboutEvent = req.body.about;
    let user = null;
    let error = false;
    try{
        user = await EventModel.findOneAndUpdate({
            eventTitle : eventTitle,
            eventDate : eventDate,
        }, {
            poster: poster,
            eventTitle: eventTitle,
            aboutEvent: aboutEvent,
            eventDate: eventDate,
        })
    } catch(err){
        error = true;
        // console.log(err);
    }
    if (!error && user!=null){
        res.json({
            message:"done"
        })
    } else{
        res.json({
            message:"notdone"
        })
    } 
})
app.post("/api/events/delete",async (req, res)=>{
    const eventTitle = req.body.title;
    const eventDate = req.body.date.toString().substring(0,4);
    let user = null;
    let error = false;
    try{
        user = await EventModel.findOneAndDelete({
            eventTitle : eventTitle,
            eventDate : eventDate
        })
    } catch(err){
        error = true;
        // console.log(err);
    }
    if (!error && user!=null){
        res.json({
            message:"done"
        })
    } else {
        res.json({
            message:"notdone"
        })
    }
})
// MEMBERS
app.get("/api/members", async (req, res)=>{
    let data = null;
    let error = false;
    const year = req.query.year;
    // console.log(year);
    try{
        data = await MemberModel.find({year:year});
    } catch(err){
        error = true;
        // console.log(err);
    }
    if (!error && data!=null){
        res.json({
            message:"done",
            data:data,
        })
    } else {
        res.json({
            message:"notdone"
        })
    }
})
app.post("/api/members/add", async(req, res)=>{
    const pfp = req.body.pfp;
    const about = req.body.about;
    const memberName = req.body.name;
    const branch = req.body.branch;
    const year = req.body.date.toString().substring(0,4);
    let error = false;
    let newEvent = null;
    try{
        newEvent = new MemberModel({pfp: pfp, memberName:memberName, branch:branch, year:year, about:about })
        await newEvent.save();
    } catch(err){
        error = true;
        // console.log(err);
    }
    if (!error && newEvent!=null){
        res.json({
            message:"done"
        })
    } else{
        res.json({
            message:"notdone"
        })
    } 
})
app.post("/api/events/update",async (req, res)=>{
    const pfp = req.body.pfp;
    const about = req.body.about;
    const memberName = req.body.name;
    const branch = req.body.branch;
    const year = req.body.date.toString().substring(0,4);
    let user = null;
    let error = false;
    try{
        user = await MemberModel.findOneAndUpdate({
            memberName : memberName,
            year : year,
            branch : branch,
        }, {
            pfp: pfp,
            about: about,
        })
    } catch(err){
        error = true;
        // console.log(err);
    }
    if (!error && user!=null){
        res.json({
            message:"done"
        })
    } else{
        res.json({
            message:"notdone"
        })
    } 
})
app.post("/api/events/delete",async (req, res)=>{
    const memberName = req.body.name;
    const branch = req.body.branch;
    const year = req.body.date.toString().substring(0,4);
    let user = null;
    let error = false;
    try{
        user = await MemberModel.findOneAndDelete({
            memberName : memberName,
            branch : branch,
            year : year
        })
    } catch(err){
        error = true;
    }
    if (!error && user!=null){
        res.json({
            message:"done"
        })
    } else {
        res.json({
            message:"notdone"
        })
    }
})

app.post("/api/contact", async (req, res)=>{
    const Email = req.body.email;
    const Username = req.body.username;
    const Message = req.body.message;
    let error = false;
    let newMessage = null;
    try{
        newMessage = new ContactModel({Email:Email, Username: Username, Message: Message});
        await newMessage.save();
    } catch(err){
        error = true;
        // console.log(err);
    }
    if (!error && newMessage!=null){
        res.json({
            message:"done"
        })
    } else{
        res.json({
            message:"notdone"
        })
    } 
});

app.listen(3000, ()=>{
    console.log("Server is up, guess what else is!")
})

export default app;