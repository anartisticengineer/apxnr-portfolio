export interface GalleryContent {
  identifier: string;
  title: string;
  description: string;
  images: GalleryContentImage[];
}

export class EmptyGalleryContent implements GalleryContent {
  identifier = "";
  title = "";
  description = "";
  images: GalleryContentImage[] = [];
}

export interface GalleryContentImage {
  image: string;
  altText: string;
}
