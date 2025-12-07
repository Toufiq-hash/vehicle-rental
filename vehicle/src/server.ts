import app from "./app";
import initializeDatabase from "./config/db";

let dbInitialized = false;

export default async function handler(req: any, res: any) {
  if (!dbInitialized) {
    await initializeDatabase();
    dbInitialized = true;
  }

  
  return (app as any)(req, res);
}
