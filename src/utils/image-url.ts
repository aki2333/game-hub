import noImage from "../assets/no_image.png";
export default function getCroppedImageUrl(url: string) {
  if (!url) return noImage;

  // Rawg 返回的 URL 可能是这种：
  // https://media.rawg.io/media/games/123/123abc456.jpg
  // 只需要在 /media 之后加上 /crop/WIDTH/HEIGHT
  const target = "media/";
  const index = url.indexOf(target) + target.length;

  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}
