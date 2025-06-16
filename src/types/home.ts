export interface HomeBannerImage {
  src: {
    desktop: string;
    mobile?: string;
  };
  altText?: string;
}

export interface CallToAction {
  description: string;
  goto: {
    link: string;
    text: string;
  };
}
