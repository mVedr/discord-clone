"use client"

import { useEffect, useState } from "react"
import { CreateServerModel } from "../modals/create-server-modal"
import { InviteModal } from "../modals/invite-modal"
import { EditServerModel } from "../modals/edit-server-modal" 
import { MembersModal } from "../modals/members-modal"
import { CreateChannelModal } from "../modals/create-channel-model"
import { LeaveServerModal } from "../modals/leave-server-modal"
import { DeleteServerModal } from "../modals/delete-server-modal"
import { DeleteChannelModal } from "../modals/delete-channel-modal"
import { EditChannelModal } from "../modals/edit-channel-modal"
import { MessageFileModal } from "../modals/message-file-modal"
import { DeleteMessageModal } from "../modals/delete-chat-model"

export const ModalProvider = () =>{
    
    const [isMounted,setIsMounted] = useState(false)
    
    useEffect(()=>{
        setIsMounted(true)
    },[])
    
    if(!isMounted) return null;

    return (
        <>
          <CreateServerModel/>
          <InviteModal/>
          <EditServerModel />
          <MembersModal/>
          <CreateChannelModal />
          <LeaveServerModal/>
          <DeleteServerModal />
          <DeleteChannelModal/>
          <EditChannelModal/>
          <MessageFileModal/>
          <DeleteMessageModal/>
        </>
    )
}