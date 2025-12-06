import fs from "fs";
import path from "path";

export interface ActivityItem {
  title: string;
  description: string;
  cover: string;
  images: string[];
}

export function getActivityData(): ActivityItem[] {
  const basePath = path.join(process.cwd(), "public", "activities");

  const folders = fs.readdirSync(basePath);

  return folders.map((folder) => {
    const folderPath = path.join(basePath, folder);
    const files = fs.readdirSync(folderPath);

    const images = files.filter((f) => /\.(png|jpg|jpeg|webp)$/i.test(f));

    return {
      title: folder.replace(/-/g, " "),
      description: "Description about " + folder,
      cover: `/activities/${folder}/${images[0]}`,
      images: images.map((f) => `/activities/${folder}/${f}`),
    };
  });
}
