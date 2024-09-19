// 动态加载图片
export async function loadImage(path) {
  const image = await import(`~/assets/images/${path}.png`)
  return image.default
}