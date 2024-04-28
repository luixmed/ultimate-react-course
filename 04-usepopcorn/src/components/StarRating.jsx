import { useState } from "react";
import Star from "./Star";
import { Div } from "./StarRatingStyles";

function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  class_ = "",
  messagesArr = [],
  defaultRating = 0,
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }

  return (
    <Div color={color} size={size} class_={class_}>
      <div>
        {Array.from({ length: maxRating }, (_, idx) => (
          <Star
            key={idx}
            full={tempRating ? tempRating >= idx + 1 : rating >= idx + 1}
            onRate={() => handleRating(idx + 1)}
            onHoverIn={() => setTempRating(idx + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p>
        {messagesArr.length === maxRating
          ? messagesArr[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </Div>
  );
}

export default StarRating;
