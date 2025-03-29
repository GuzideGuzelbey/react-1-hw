import Link from "next/link";

const SocialMediaItem = ({ url, title, Icon }) => {
  return (
    <li>
      <Link href={url}>
        <>
          <Icon style={{ marginRight: "8px", fontWeight: 600 }} />
          {title}
        </>
      </Link>
    </li>
  );
};

export default SocialMediaItem;
