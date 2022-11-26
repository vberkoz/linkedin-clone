import React from "react";
import { Avatar } from "@mui/material";

import "./Post.css";
import InputOption from "./InputOption";

import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import IosShareIcon from "@mui/icons-material/IosShare";
import SendIcon from "@mui/icons-material/Send";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2> Sangha</h2>
          <p>Description</p>
        </div>
      </div>

      <div className="post__body">
        <p>Message goes here</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
        <InputOption
          Icon={ChatBubbleOutlineIcon}
          title="Comment"
          color="gray"
        />
        <InputOption Icon={IosShareIcon} title="Share" color="gray" />
        <InputOption Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;
