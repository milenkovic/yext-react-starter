import * as React from "react";
import { Image } from "@yext/pages/components"

type Thumbnail = {
  height: number;
  width: number;
  url: string;
};

type Image = {
  image: {
    height?: number;
    width?: number;
    url: string;
    thumbnails?: Thumbnail[];
  }
};

type PhotoGallery = {
  photoGallery: any[];
};

const PhotoGallery = (props: PhotoGallery) => {
  const { photoGallery } = props;
  return (
    <div>
      {photoGallery.map((imageData, index) => (
        <Image image={imageData} key={index} />
      ))}
    </div>
  );
};

export default PhotoGallery;
