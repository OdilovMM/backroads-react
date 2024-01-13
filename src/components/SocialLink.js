const SocialLink = ({ href, icon, itemClass }) => {
  return (
    <li>
      <a href={href} rel="noreferrer" className={itemClass}>
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
