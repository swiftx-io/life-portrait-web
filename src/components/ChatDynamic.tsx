"use client";

import dynamic from "next/dynamic";

// Dynamically import the Chat component
const Chat = dynamic(() => import("./Chat"), {
  ssr: false, // Disable server-side rendering for this component
});

export default Chat;
