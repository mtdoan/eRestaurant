import pathBuilder from "path";

export const HomePagePath = "/eRestaurant/";
export function buildPath(path) {
  return pathBuilder.join(HomePagePath, path);
}