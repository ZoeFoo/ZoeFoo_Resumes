const Mongoose = require("mongoose");

const UserSchema = new Mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: Object,
        required: true
    },
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,
    },
    isAdmin: {
        type: Boolean,
        default: "false",
        required: true,
    },
    isDelete: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

const User = Mongoose.model("user", UserSchema);
module.exports = User;