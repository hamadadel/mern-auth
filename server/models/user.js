const mongoose = require('mongoose');
const crypto = require('node:crypto');
// User Schema
const userSchema = new mongoose.mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      max: 60,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      max: 100,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'subscriber',
    },
    resetPasswordToken: {
      data: String,
      default: '',
    },
  },
  { timestamps: true }
);

// Virtual Fields
userSchema
  .virtual('password')
  .set(function (password) {
    console.log(password);
    this._password = password;
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

// Methods
userSchema.methods = {
  verifyPassword: function (plainPassword) {
    return this.encryptPassword(plainPassword) === this.hashedPassword;
  },
  encryptPassword: function (password) {
    if (!password) return '';
    try {
      return crypto
        .createHmac('sha1', 'MERN@2024_APP')
        .update(password)
        .digest('hex');
    } catch (error) {
      return error;
    }
  },
};

module.exports = mongoose.model('User', userSchema);
