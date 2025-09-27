export const productDetails = [
  {
    "productName": "Picture Frames",
    "products": [
      {
        "imageURL":"assets/image/picture-frames/picture_frame-1.jpg",
        "imageName":"image 1"
      }, 
      {
        "imageURL":"assets/image/picture-frames/picture_frame-2.jpg",
        "imageName":"image 2"
      },
      {
        "imageURL":"assets/image/picture-frames/picture_frame-3.jpg",
        "imageName":"image 3"
      },
      {
        "imageURL":"assets/image/picture-frames/picture_frame-4.jpg",
        "imageName":"image 4"
      },
      {
        "imageURL":"assets/image/picture-frames/picture_frame-5.jpg",
        "imageName":"image 5"
      },
      {
        "imageURL":"assets/image/picture-frames/picture_frame-6.jpg",
        "imageName":"image 6"
      },
      {
        "imageURL":"assets/image/picture-frames/picture_frame-7.jpg",
        "imageName":"image 7"
      },
      {
        "imageURL":"assets/image/picture-frames/picture_frame-8.jpg",
        "imageName":"image 8"
      }
    ]
  },
  {
    "productName": "Cup",
    "products": [
      {
        "imageURL":"assets/image/picture-frames/picture_frame-1.jpg",
        "imageName":"image 1"
      }, 
      {
        "imageURL":"assets/image/picture-frames/picture_frame-2.jpg",
        "imageName":"image 2"
      },
      {
        "imageURL":"assets/image/picture-frames/picture_frame-3.jpg",
        "imageName":"image 3"
      },
      {
        "imageURL":"assets/image/picture-frames/picture_frame-4.jpg",
        "imageName":"image 4"
      },
      {
        "imageURL":"assets/image/picture-frames/picture_frame-5.jpg",
        "imageName":"image 5"
      },
      {
        "imageURL":"assets/image/picture-frames/picture_frame-6.jpg",
        "imageName":"image 6"
      },
      {
        "imageURL":"assets/image/picture-frames/picture_frame-7.jpg",
        "imageName":"image 7"
      },
      {
        "imageURL":"assets/image/picture-frames/picture_frame-8.jpg",
        "imageName":"image 8"
      }
    ]
  }
];

export interface ProductDetail {
  productName: string;
  products: Product[];
}
export interface Product {
  imageURL: string;
  imageName: string;
}