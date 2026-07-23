import React from 'react'
import { fetchPhotos, fetchVideos } from './api/mediaApi'

const App = () => {

  return (
    <div className='h-screen bg-gray-950 text-amber-50'>
      <button onClick={async ()=>{   
   const data=await fetchPhotos("dog")
   console.log(data.results);  
      }
      }>Get photos</button>
           <button className='bg-red-500' onClick={async ()=>{   
   const data=await fetchVideos("cat")
   console.log(data.videos);  
      }
      }>Get photos</button>
    </div>
  )
}

export default App