import { Regl, Texture2D } from "regl";

export const createTexture = (regl: Regl, file: any) => {
  const texture: Texture2D = regl.texture();

  const image = new Image();

  image.src = file.src;

  image.onload = () => {
    texture({
      data: image,
      flipY: true,
      min: "mipmap",
    });
  };

  return texture;
};
