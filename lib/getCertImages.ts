import fs from "fs";
import path from "path";

export function getCertImages(folder: string) {
  const dirPath = path.join(process.cwd(), "public", "certs", folder);

  // Read all files in the folder
  const files = fs.readdirSync(dirPath);

  // Return full public URLs
  return files
    .filter((f) => /\.(png|jpg|jpeg|webp)$/i.test(f))
    .map((f) => `/certs/${folder}/${f}`);
}
