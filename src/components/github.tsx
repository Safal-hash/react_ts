import React, { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom';

const Github = () => {
    interface GithubUser {

  followers: number;
  avatar_url: string;
}

const data = useLoaderData()
  return (
    <>
    <div className='text-center m-4 bg-red-300 text-amber-100 p-4 text-2xl'>
    Github Followers: {data?.followers}
    <img src={data?.avatar_url} alt="" className='w-30'/>
    </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/safal-hash')
    return  response.json()
}