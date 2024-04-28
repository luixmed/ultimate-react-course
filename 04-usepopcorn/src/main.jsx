import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import Test from "./eraser/Test.jsx";

// import StarRating from "./components/StarRating";
// import { css } from "styled-components";

// const test = css`
//   font-family: Arial;
//   background-color: aqua;
// `;

// const messages = ["Terrible", "Bad", "Okay", "Good", "Amazing"];

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rating {movieRating} stars</p>
//     </>
//   );
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <StarRating messagesArr={messages} class_={test} />
    <StarRating maxRating={10} size={24} color="red" defaultRating={3} />
    <Test /> */}
    {/* <Test>
      <>
        <p>This is another Div</p>
        <div>CHILDREN</div>
      </>
    </Test> */}
  </React.StrictMode>
);
