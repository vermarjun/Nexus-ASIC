import mongoose from "mongoose";
import { Schema } from "mongoose";

const AdminSchema = new Schema({
    username: String,
    password: String,
})

const MemberSchema = new Schema({
    pfp: String,
    about: String,
    memberName: String,
    branch: String,
    year: Number
})

const CoordinatorSchema = new Schema({
    pfp: String,
    about: String,
    teacherName: String,
    position: String,
})

const EventSchema = new Schema({
    poster: String,
    eventTitle: String,
    aboutEvent: String,
    eventDate: String,
})

const ContactSchema = new Schema({
    Email : String,
    Username : String,
    Message : String,
})

const MemberModel = mongoose.model("members", MemberSchema);
const CoordinatorModel = mongoose.model("coordinators", CoordinatorSchema);
const EventModel = mongoose.model("events", EventSchema);
const AdminModel = mongoose.model("admins", AdminSchema);
const ContactModel = mongoose.model("contact", ContactSchema);

export {
    MemberModel,
    EventModel,
    AdminModel,
    CoordinatorModel,
    ContactModel,
}