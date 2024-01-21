import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FETCH_IMAGES_API_URL } from "../utils/constants";
import CardGallery from "./CardGallery";
import ShimmerUI from "./ShimmerUI";
import { updateImageGallery } from "../utils/Redux/cardGallerySlice";
import EmptyImageGallery from "./EmptyImageGallery";

const CardGalleryContainer = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.searchQuery?.searchQuery);
  const imageGallery = useSelector((state) => state.imageGallery?.imageGallery);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const fetchTheData = async () => {
    try {
      if (searchQuery !== null) {
        setLoading(true);

        const data = await fetch(FETCH_IMAGES_API_URL + "&q=" + searchQuery);
        const { hits } = await data.json();
        if (hits) {
          dispatch(updateImageGallery(hits));
        }
        setLoading(false);
      }
    } catch (error) {
      console.warn(error?.message);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTheData();
  }, [searchQuery]);

  if (error) {
    return <h1>Failed to load : {error}</h1>;
  }

  // if (imageGallery?.length <= 0 && searchQuery?.length > 0) {
  //   return <EmptyImageGallery />;
  // }

  return <div>{loading ? <ShimmerUI /> : <CardGallery />}</div>;
};

export default CardGalleryContainer;
