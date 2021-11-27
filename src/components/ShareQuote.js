import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { useRandomColor } from "../context/RandomColorContext";

import styles from "../styles/ShareQuote.module.scss";

function ShareButton({ children, ...props }) {
  const color = useRandomColor();
  return (
    <a
      {...props}
      target="_blank"
      className={styles.shareLink}
      style={{ backgroundColor: color }}
    >
      {children}
    </a>
  );
}

function ShareQuote({ text, author, ...props }) {
  return (
    <div>
      <ShareButton
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text="${text}"${author}&hashtags=quote`}
      >
        Tweet it <FontAwesomeIcon icon={faTwitter} />
      </ShareButton>
    </div>
  );
}

export default ShareQuote;
