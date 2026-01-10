import fs from "fs";
import path from "path";
import { unstable_noStore as noStore } from "next/cache";

export interface ActivityItem {
  title: string;
  cover: string;
  images: string[];
  description: string;
}

export function getActivityData(): ActivityItem[] {
  noStore(); 

  const basePath = path.join(process.cwd(), "public", "activities");
  const folders = fs.readdirSync(basePath);

  return folders.map((folder) => {
    const folderPath = path.join(basePath, folder);
    const files = fs.readdirSync(folderPath);

    const images = files.filter((f) =>
      /\.(png|jpg|jpeg|webp)$/i.test(f)
    );

    const requirementsPath = path.join(folderPath, "requirements.txt");

    let description = "No description available.";

    if (fs.existsSync(requirementsPath)) {
      description = fs.readFileSync(requirementsPath, "utf-8").trim();
    }

    return {
      title: folder.replace(/-/g, " "),
      cover: `/activities/${folder}/${images[0]}`,
      images: images.map((img) => `/activities/${folder}/${img}`),
      description,
    };
  });
}
