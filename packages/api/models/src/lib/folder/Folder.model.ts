import mongoose from 'mongoose';

import { FileModel } from '../file';
import { UserDoc } from '../user/User.model';

interface FolderAttrs {
  user: UserDoc | string;
  name: string;
  parent: string;
}

export interface FolderDoc extends mongoose.Document {
  user: UserDoc | string;
  name: string;
  parent: string;
  createdAt: Date;
  lastModifiedAt?: Date;
}

interface FolderBase extends mongoose.Model<FolderDoc> {
  add(attrs: FolderAttrs): FolderDoc;
}

const schema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  parent: {
    type: String,
    required: true,
  },
  createdAt: {
    type: mongoose.Schema.Types.Date,
    required: true,
    default: Date.now,
  },
  lastModifiedAt: mongoose.Schema.Types.Date,
});

schema.statics.add = (attrs: FolderAttrs) => new FolderModel(attrs);

schema.pre(
  ['deleteOne', 'findOneAndDelete'],
  { document: false, query: true },
  async function (next) {
    const doc = await FolderModel.findOne(this.getQuery());

    await cascade(doc as FolderDoc);

    next();
  },
);

schema.pre('deleteMany', async function (next) {
  const docs = await FolderModel.find(this.getQuery());

  await cascadeMultiple(docs);

  next();
});

const cascade = async (doc: FolderDoc) => {
  if (!doc) {
    return;
  }

  await FolderModel.deleteMany({ parent: doc.name });

  await FileModel.deleteMany({ folder: doc.id });
};

const cascadeMultiple = async (docs: FolderDoc[]) => {
  if (!docs || !docs.length) {
    return;
  }

  await Promise.all(
    docs
      .filter((i) => i)
      .map(async ({ id, name }) => {
        await FolderModel.deleteMany({ parent: name });

        await FileModel.deleteMany({ folder: id });
      }),
  );
};

const FolderModel = mongoose.model<FolderDoc, FolderBase>('Folder', schema);

export { FolderModel };
