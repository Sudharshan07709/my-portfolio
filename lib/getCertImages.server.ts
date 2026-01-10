import fs from "fs";
import path from "path";
import type { CertItem } from "./types";

export function getCertImages(folder: string): CertItem[] {
  const dirPath = path.join(process.cwd(), "public", "certs", folder);
  const files = fs.readdirSync(dirPath);

  return files
    .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .map((f) => {
      const title = f.replace(/\.(jpg|jpeg|png|webp)$/i, "").replace(/-/g, " ");
      return {
        src: `/certs/${folder}/${f}`,
        title,
      };
    });
}
