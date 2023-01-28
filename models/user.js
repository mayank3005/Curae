const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    tokens: [{
        token: {
            type: String,
            require: true
        }
    }]
})

// gnerating token

userSchema.methods.generateAuthToken = async function () {
    try {
        let token = await jwt.sign({ _id: this._id }, 'thisisthesecretkey');
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) { console.log(err); }
}

// storing the message

userSchema.methods.addMessage = async function (user) {
    try {
        console.log('In User.js  --->    ' + user);
        this.messages = this.messages.concat(user);
        // await this.save();
        return this.messages;
    } catch (err) {
        console.log(err);
    }
}

const User = new mongoose.model('User', userSchema);

module.exports = User;
