import Image from "next/image";
import styles from "../styles/components.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <a
        className={styles.link}
        href="https://www.instagram.com/seth.chohan/"
        target="_blank"
      >
        Instagram <LinkIcon />
      </a>
      <a
        className={styles.link}
        href="https://soundcloud.com/seth-chohan"
        target="_blank"
      >
        Soundcloud <LinkIcon />
      </a>
      <a
        className={styles.link}
        href="https://open.spotify.com/artist/5xE8yjKCcbCBxjqOWfuuHz?si=-v8VCi3pTGCiz0wCwAPuIg&nd=1&dlsi=a9eb4a6cc25642e6"
        target="_blank"
      >
        Spotify <LinkIcon />
      </a>
    </div>
  );
}

const LinkIcon = () => (
  <Image
    width="10"
    height="10"
    src="seth-chohan-dj/externalLink.svg"
    alt="External link icon"
  />
);
