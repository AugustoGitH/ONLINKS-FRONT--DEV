export const capitalizeName = (name: string) => {
  return name
    .trim()
    .split(" ")
    .map((word) => `${word[0].toUpperCase()}${word.substring(1)}`)
    .join(" ");
};
