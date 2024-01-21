export const FETCH_IMAGES_API_URL = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}`;

export const IMAGE_RESOLUTIONS = [
  { key: "small", resolution: "640x960", selected: true },
  { key: "medium", resolution: "1920x2660", selected: false },
  { key: "big", resolution: "2400x3600", selected: false },
  { key: "original", resolution: "3850x5640", selected: false },
];

export const WALLPAPERS = [
  {
    id: 1,
    image: `${process.env.PUBLIC_URL + "/assets/img1.jpg"}`,
  },
  {
    id: 2,
    image: `${process.env.PUBLIC_URL + "/assets/img2.jpg"}`,
  },
  {
    id: 3,
    image: `${process.env.PUBLIC_URL + "/assets/img3.jpg"}`,
  },
  {
    id: 4,
    image: `${process.env.PUBLIC_URL + "/assets/img4.jpg"}`,
  },
  {
    id: 5,
    image: `${process.env.PUBLIC_URL + "/assets/img5.jpg"}`,
  },
];
