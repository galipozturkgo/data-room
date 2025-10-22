import { Password } from '@dataroom/api-utils';
import mongoose from 'mongoose';

import { FileModel } from '../file/File.model';

interface EmailUserAttrs {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface UserDoc extends mongoose.Document {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  createdAt: Date;
  lastLoginAt?: Date;
}

interface UserBase extends mongoose.Model<UserDoc> {
  addEmailUser(attrs: EmailUserAttrs): UserDoc;
}

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: String,
  createdAt: {
    type: mongoose.Schema.Types.Date,
    required: true,
    default: Date.now,
  },
  lastLoginAt: mongoose.Schema.Types.Date,
});

schema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const password = this.get('password');

    if (password) {
      const hashed = await Password.toHash(password);
      this.set('password', hashed);
    }
  }

  done();
});

schema.pre('updateOne', async function (done) {
  const update = this.getUpdate();

  if (update && 'password' in update) {
    this.set('password', await Password.toHash(update.password));
  }

  done();
});

schema.statics.addEmailUser = (attrs: EmailUserAttrs) => new UserModel(attrs);

schema.pre(
  ['deleteOne', 'findOneAndDelete'],
  { document: false, query: true },
  async function (next) {
    const doc = await UserModel.findOne(this.getQuery());

    if (doc) {
      await cascade(doc);
    }

    next();
  },
);

const cascade = async (user: UserDoc) => {
  await FileModel.deleteMany({ user });
};

const UserModel = mongoose.model<UserDoc, UserBase>('User', schema);

export { UserModel };
