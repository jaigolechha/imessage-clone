import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setChat } from "./features/chatSlice";
import db from "./firebase";
import * as timeago from 'timeago.js'

function SidebarChat({id, chatName}) {
  const dispatch = useDispatch();
  const [chatinfo, setChatinfo] = useState([]);

  useEffect(()=>{
    db.collection('chats').doc(id).collection('messages').orderBy('timestamp', 'desc')
    .onSnapshot(snapshot=>{
      setChatinfo(snapshot.docs.map(doc=>doc.data()))
    })
  },[id])

  return (
    <div className="sidebarChat" onClick={()=>{
      dispatch(
        setChat({
          chatId: id,
          chatName: chatName,
        })
      )
    }}>
      <Avatar src={chatinfo[0]?.photo} />
      <div className="sidebarChat__info">
        <h3>{chatName}</h3>
        <p>{chatinfo[0]?.message}</p>
        <small>{timeago.format(new Date(chatinfo[0]?.timestamp?.toDate()))}</small>
      </div>
    </div>
  );
}

export default SidebarChat;
