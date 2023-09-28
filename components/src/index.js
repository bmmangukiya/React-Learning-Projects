import React from "react";
import { createRoot } from "react-dom/client";
import CommentDetail from "./CommentDetail";
import faker from "@faker-js/faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!!</h4>
          Are You Sure?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="BANSI"
          timeAgo="Today at 4:45PM"
          content="Nice Pic!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Anup"
          timeAgo="Today at 2:00PM"
          content="Amazing🎆"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Rohit"
          timeAgo="Yesterday at 5:55PM"
          content="Fabulous!!"
        />
      </ApprovalCard>
    </div>
  );
};

createRoot(document.querySelector("#root")).render(<App />);
