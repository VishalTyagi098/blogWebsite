import React from 'react'
import TrendingCard from './TrendingCard'

// importing images
import trendingArticleImage1 from '../images/treding-image1.jpg'
import trendingArticleImage2 from '../images/treding-image2.png'
import trendingArticleImage3 from '../images/treding-image3.png'


export default function Trending() {
  // Props (using object spread operator) 
  const trendingCardData1 ={
    image:trendingArticleImage1,
    title:"The Missing Introduction to React",
    desc: "Why React is the Top UI Framework in the World? Read this article further to find out the reason why react is considered as the top UI Framework in the frontend web development world.",
    auth:"Erin Elliot",
    link:"https://medium.com/javascript-scene/the-missing-introduction-to-react-62837cb2fd76"
  }
  const trendingCardData2 ={
    image:trendingArticleImage2,
    title:"Django Basics for a Beginner",
    desc: "Here I’ll mention some basic things to understand for a beginner before starting any web app development in django. Django is one of the best backend frameworks out there.",
    auth:"Dinesh",
    link:"https://medium.com/@humble_bee/django-basics-for-a-beginner-5d864e6aa084"
  }
  const trendingCardData3 ={
    image:trendingArticleImage3,
    title:"Top Node.js Frameworks to use in 2022",
    desc: "Node.js is one of the fastest server-side web application platforms as it provides app development companies the ease of building scalable single program language web applications.",
    auth:"Ronak Patel",
    link:"https://javascript.plainenglish.io/top-node-js-frameworks-to-use-in-2021-4951ee5940b8"
  }



  return (
    <div className='flex flex-col m-4'>
      <h1 className="text-3xl font-bold">
        Trending on blogWebsite
      </h1>
      <div className="grid grid-cols-3 gap-4 justify-items-center mt-4">
          <div className="w-11/12">
            <TrendingCard {...trendingCardData1}/>
          </div>
          <div className="w-11/12">
            <TrendingCard {...trendingCardData2}/>
          </div>
          <div className="w-11/12">
            <TrendingCard {...trendingCardData3}/>
          </div>      
      </div>
      
    </div>
  )
}
