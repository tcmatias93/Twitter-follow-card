/* eslint-disable react/prop-types */
import { useState } from "react";

export function TwitterFollowCard({ formatUserName, userName, name }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="Avatar de la persona"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-info-user">
            {formatUserName(userName)}
          </span>
        </div>
      </header>
      <aside>
        <button onClick={handleClick} className={buttonClassName}>
          {text}
        </button>
      </aside>
    </article>
  );
}
