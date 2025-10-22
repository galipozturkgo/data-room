import { deleteObject } from '@dataroom/api-utils';
import mongoose from 'mongoose';

import { UserDoc } from '../user/User.model';

interface FileAttrs {
  user?: UserDoc | string;
  parent?: string;
  key: string;
  name: string;
  type: string;
  unbound?: boolean;
  deleted?: boolean;
}

export interface FileDoc extends mongoose.Document {
  user?: UserDoc | string;
  parent?: string;
  key: string;
  name: string;
  type: string;
  deleted?: boolean;
  deletedAt?: Date;
  createdAt: Date;
}

interface FileBase extends mongoose.Model<FileDoc> {
  add(attrs: FileAttrs): FileDoc;
}

const schema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  parent: String,
  key: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  deleted: Boolean,
  deletedAt: mongoose.Schema.Types.Date,
  createdAt: {
    type: mongoose.Schema.Types.Date,
    required: true,
    default: Date.now,
  },
});

schema.statics.add = (attrs: FileAttrs) => new FileModel(attrs);

schema.pre(
  ['deleteOne', 'findOneAndDelete'],
  { document: false, query: true },
  async function (next) {
    const doc = await FileModel.findOne(this.getQuery());

    await cascade(doc as FileDoc);

    next();
  },
);

schema.pre('deleteMany', async function (next) {
  const docs = await FileModel.find(this.getQuery());

  await cascadeMultiple(docs);

  next();
});

const cascade = async (doc: FileDoc) => {
  if (!doc || !doc.key) {
    return;
  }

  await deleteObject({ key: doc.key });
};

const cascadeMultiple = async (docs: FileDoc[]) => {
  if (!docs || !docs.length) {
    return;
  }

  await Promise.all(
    docs.filter((i) => i).map(async ({ key }) => await deleteObject({ key })),
  );
};

const FileModel = mongoose.model<FileDoc, FileBase>('File', schema);

export { FileModel };
