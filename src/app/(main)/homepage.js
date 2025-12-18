'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import Uppernav from './nav/uppernav';

export default function Homepage() {

  const [isMounted, setIsMounted] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [fetchData, setFetchData] = useState(null);

  useEffect(()=>{
    setIsMounted(true);
    const fetchDetails = async ()=>{
      const res = await fetch('http://localhost:8080/api/homepage',{
        method: 'GET',
        headers:{
          'token': localStorage.getItem("token")
        }
      });
      const data = await res.json();
      if(data?.response === 'valid'){
        setIsLogin(true);
      }
    }
    fetchDetails();
  },[]);

  if(!isMounted){
    return <div>Loading</div>
  }

  return (
    <div className="h-screen overflow-x-hidden overflow-y-hidden flex-1">
      <Uppernav fetchData={fetchData} isLogin={isLogin}/>
    </div>
  )
}
