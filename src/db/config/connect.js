import mongoose from 'mongoose';

export default async function connectiondb(){
  mongoose.connect(process.env.DB_CONNECT);
  return mongoose.connection;

}