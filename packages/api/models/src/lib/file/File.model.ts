import { deleteObject } from '@dataroom/api-utils';
import mongoose from 'mongoose';

import { FolderDoc } from '../folder';
import { UserDoc } from '../user/User.model';

interface FileAttrs {
  user: UserDoc | string;
  folder: FolderDoc | string;
  key: string;
  name: string;
  type: string;
  size: number;
}

export interface FileDoc extends mongoose.Document {
  user: UserDoc | string;
  folder: FolderDoc | string;
  key: string;
  name: string;
  type: string;
  size: number;
  createdAt: Date;
}

interface FileBase extends mongoose.Model<FileDoc> {
  add(attrs: FileAttrs): FileDoc;
}

const schema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  folder: {
    type: mongoose.Types.ObjectId,
    ref: 'Folder',
    required: true,
  },
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
  size: Number,
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
