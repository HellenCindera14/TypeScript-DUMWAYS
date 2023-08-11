import API from "../lib/api";
import { useEffect, useState } from "react";
import Users from "../interface/users";

export function useFetchThread() {
  const [Users, setUsers] = useState<Users[]>([]);
  
  async function getUsers() {
    try {
      const Response = await API.get("/users");
      console.log("API data:", Response.data);
      setUsers(Response.data);
    } catch (eror) { 
      console.error("gagal ambil data", eror);
    
    }
  }

  useEffect(() => {
    getUsers();
    
}, [])
return {Users}
}