// https://api.github.com/users/203mcgee/repos
import { useState,useEffect } from "react";

export default function Fetch (url){
    const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
        try{
            const response = await fetch('https://api.github.com/users/203mcgee/repos');
            if(!response.ok){
                throw new Error('Failed to get the projects');
            }

            const projects = await response.json();

            setData(projects);


        }catch(err){
            setError(err.message);
        }finally{
            setIsLoading(false);
        }
    };
    fetchProjects();
  },[url]) 
  if (isLoading) {
    return <h2>Loading projects... ⏳</h2>;
  }

  if (error) {
    return <h2 className="error-text">❌ Error: {error}</h2>;
  }

  return { data, isLoading, error };
  
}