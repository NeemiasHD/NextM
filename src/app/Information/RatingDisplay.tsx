"use client";

import React from "react";
import { Rating } from "react-simple-star-rating";

interface RatingDisplayProps {
  rating: number;
}

const RatingDisplay: React.FC<RatingDisplayProps> = ({ rating }) => {
  return (
    <>
      <Rating
        initialValue={rating / 2}
        readonly
        allowFraction={true}
        size={20}
      />
    </>
  );
};

export default RatingDisplay;
