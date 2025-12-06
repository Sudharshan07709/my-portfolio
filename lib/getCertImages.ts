import fs from "fs";
import path from "path";

export function getCertImages(folder: string) {
  const dirPath = path.join(process.cwd(), "public", "certs", folder);

  if (!fs.existsSync(dirPath)) return [];

  const files = fs.readdirSync(dirPath);

  return files
    .filter((f) => /\.(png|jpg|jpeg|webp)$/i.test(f))
    .map((f) => {
      const cleanTitle = f
        .replace(/\.(jpg|jpeg|png|webp)$/i, "")
        .replace(/-/g, " ")
        .trim();

      return {
        src: `/certs/${folder}/${f}`,
        title: cleanTitle.charAt(0).toUpperCase() + cleanTitle.slice(1),
      };
    });
}
