import { useParams } from "next/navigation";
import { useMemo } from "react";

const useConversation = () =>{
    const params = useParams();
    const ConversationId = useMemo(() => {
        if(!params?.ConversationId){
            return '';
        }

        return params.ConversationId as string
    },[params?.ConversationId]);

     const isOpen =useMemo(()=> !!ConversationId ,[ConversationId]);

     return useMemo(()=> ({
        isOpen,
        ConversationId
     }),[isOpen,ConversationId]);
}

export default useConversation