import path from "path";

export const storagePath = (filePath: string) => path.join(__dirname, "/../storage/", filePath);
