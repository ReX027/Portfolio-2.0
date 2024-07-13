import mongoose, {Schema, Document} from "mongoose" //Document is for Typescript

//Defining data type using interface datatype
export interface User extends Document{
    name: string,
    email: string,
    message: string
}

const UserSchema: Schema<User> = new Schema({
    name:{
        type:String,
        required: [true, "Name is required"]
    },
    email:{
        type: String,
        required: [true,"E-mail is required"],
        match: [/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,"Invalid email address"]
    },
    message:{
        type: String,
        required:true
    }
})

//Exporting mongoose model doesnot work as in express ,Here in nextjs we have to tell whether it is already initiliazed or first time.

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User",UserSchema)
//1st syntax already intialized in mongodb and 2nd syntax is when first time creating in mongodb
export default UserModel;

