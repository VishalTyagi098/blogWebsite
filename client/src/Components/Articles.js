import React from "react";
import ArticleCard from "./ArticleCard";

// importing article images
import articleImage1 from '../images/article-images/article-tech-1.jpg'
import articleImage2 from '../images/article-images/article-tech-2.png'
import articleImage3 from '../images/article-images/article-nature-1.jpg'
import articleImage4 from '../images/article-images/article-nature-2.jpg'
import articleImage5 from '../images/article-images/article-food-1.jpg'
import articleImage6 from '../images/article-images/article-food-2.jpg'


export default function Articles(props) {
  // Props (using object spread operator)

  const articleCardData1 ={
    image:articleImage1,
    title:"Ethical Hacking using Kali Linux — A Beginner’s Guide To Kali Linux",
    desc: "Kali Linux is a Debian-based Linux distribution. It is a meticulously crafted OS that specifically caters to the likes of network analysts & penetration testers.",
    auth:"Aryya Paul",
    link:"https://medium.com/edureka/ethical-hacking-using-kali-linux-fc140eff3300",
    tag:"Technology"
  }
  const articleCardData2 ={
    image:articleImage2,
    title:"Ubuntu - The Game Changer of my Life",
    desc: " In this article I will discuss with you about my experience with Ubuntu Linux for the past few months.",
    auth:"Sakthi",
    link:"https://medium.com/featurepreneur/ubuntu-the-game-changer-of-my-life-5476a8ddf5b3",
    tag:"Technology"
  }
  const articleCardData3 ={
    image:articleImage3,
    title:"All About Butterflies",
    desc: "Today, let’s enjoy those most beautiful, the most familiar of all insects: the butterflies.",
    auth:"Triggerfish Writing",
    link:"https://medium.com/swlh/all-about-butterflies-8fdf4d4724e3",
    tag:"Nature"
  }
  const articleCardData4 ={
    image:articleImage4,
    title:"A walk in the forest",
    desc: "I have been asked if I loved to travel quite a number of times in the recent past.",
    auth:"Sophia",
    link:"https://blessy-jebaraj.medium.com/a-walk-in-the-forest-f5aac423f297",
    tag:"Nature"
  }
  const articleCardData5 ={
    image:articleImage5,
    title:"How Pizza Could Save The World",
    desc: "Incredible article about the promise, power & possibilities of design, open platforms & community. All exemplified through the beauty of pizza. Favorite article right now.",
    auth:"Nathan Dodds",
    link:"https://medium.com/@nathanrandalldodds/how-pizza-could-save-the-world-129d7bc1e172",
    tag:"Food"
  }
  const articleCardData6 ={
    image:articleImage6,
    title:"The “Cheese Burger Bubble”. Time is an Illusion — use it to your advantage.",
    desc: "I’m sat in the local McDonalds watching a steady stream of people placing orders with less than enthusiastic waiting staff and after a few minutes consuming tasty cheese burgers.",
    auth:"Adam Temper",
    link:"https://medium.com/mechanized/the-cheese-burger-bubble-time-is-an-illusion-use-it-to-your-advantage-1aa44f1a6a82",
    tag:"Food"
  }

  function filterArticles(){
    // Getting all Article elements
    let t1=document.getElementById("tech1");
    let t2=document.getElementById("tech2");
    let n1=document.getElementById("nat1");
    let n2=document.getElementById("nat2");
    let f1=document.getElementById("foo1");
    let f2=document.getElementById("foo2");

    // Changing display property of articles according to their tags (which will be compared to filterValue)

    if (props.data==="technology"){
      t1.classList.remove("d-none");
      t2.classList.remove("d-none");
      n1.className+=" d-none";
      n2.className+=" d-none";
      f1.className+=" d-none";
      f2.className+=" d-none";
    }
    else if (props.data==="nature"){
      n1.classList.remove("d-none");
      n2.classList.remove("d-none");
      t1.className+=" d-none";
      t2.className+=" d-none";
      f1.className+=" d-none";
      f2.className+=" d-none";
    }
    else if (props.data==="food"){
      f1.classList.remove("d-none");
      f2.classList.remove("d-none");
      n1.className+=" d-none";
      n2.className+=" d-none";
      t1.className+=" d-none";
      t2.className+=" d-none";
    }
    else if (props.data==="all"){
      t1.classList.remove("d-none");
      t2.classList.remove("d-none");
      n1.classList.remove("d-none");
      n2.classList.remove("d-none");
      f1.classList.remove("d-none");
      f2.classList.remove("d-none");
      
    }
  }
  filterArticles();


  return (
    <div className="articles m-4">
      <h1 className="text-3xl font-bold my-4">Read more Articles</h1>
      <div className="container articles-container">
        <div className="row" id="tech1">
          <ArticleCard {...articleCardData1}/> 
        </div>
        <div className="row" id="tech2">
          <ArticleCard {...articleCardData2}/>
        </div>
        <div className="row" id="nat1">
          <ArticleCard {...articleCardData3}/>
        </div>
        <div className="row" id="nat2">
          <ArticleCard {...articleCardData4}/>
        </div>
        <div className="row" id="foo1">
          <ArticleCard {...articleCardData5}/>
        </div>
        <div className="row" id="foo2">
          <ArticleCard {...articleCardData6}/>
        </div>
      
      </div>
    </div>
  );
}


