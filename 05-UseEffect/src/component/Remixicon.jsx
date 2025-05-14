import React from 'react'

import { RiHeartFill } from "@remixicon/react";

const Remixicon = () => {
  return (
    <div>
      <h1>I love Remix Icons!</h1>
      <RiHeartFill
        size={36}        // Width and height in pixels
        color="red"      // Fill color
        className="my-icon" // Optional custom class
      />
    </div>
  )
}

export default Remixicon