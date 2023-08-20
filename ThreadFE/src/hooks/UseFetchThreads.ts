import { API } from "../lib/api";
import { useEffect, useState } from "react";
import ThreadCardProps from "../interface/threads";

export function useFetchThread() {
  const [threads, setThreads] = useState<ThreadCardProps[]>([]);
  
  async function getThreads() {
    try {
      const Response = await API.get("/threads");
      console.log("API data:", Response.data);
      setThreads(Response.data);
    } catch (eror) { 
      console.error("gagal ambil data", eror);
    
    }
  }

  useEffect(() => {
    getThreads();
    
}, [])
return {threads}
}


