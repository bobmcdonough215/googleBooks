import React from "react";

function Card({icon, title, children}) {
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h2><i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
</h2>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;