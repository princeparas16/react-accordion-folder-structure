import React, { useState } from 'react';

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);

  if (!explorer.isFolder) {
    return (
      <span>
        {explorer.name}
        <br />
      </span>
    );
  }
  return (
    <div>
      <span onClick={() => setExpand((prev) => !prev)}>
        {explorer.name}
        <br />
      </span>
      <div style={{ display: expand ? 'block' : 'none', paddingLeft: '15px' }}>
        {explorer?.items.map((el) => (
          <Folder explorer={el} />
        ))}
      </div>
    </div>
  );
};

export default Folder;
