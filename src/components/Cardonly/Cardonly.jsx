import React from "react";
import "./Cardonly.scss";

const Cardonly = () => {
  const Data = [
    {
    img : "/card1.png",
    id:1,
    list:"eCommerce",
    date:" July 11, 2024",
    heading:"Strategies to Help You Choose the Perfect Niche for Your E-Commerce Business!",
    details: " Anything with even an ounce of value attached to it can be sold online with the right kind of marketing and the perfect website! Conducting e-commerce business can be tricky and challenging but with the right strategies.."
  },
    {
    img : "/3.png",
    id:2,
    list:"eCommerce",
    date:" July 11, 2024",
    heading:"Strategies to Help You Choose the Perfect Niche for Your E-Commerce Business!",
    details: " Anything with even an ounce of value attached to it can be sold online with the right kind of marketing and the perfect website! Conducting e-commerce business can be tricky and challenging but with the right strategies.."
  },
    {
    img : "/2.jpg",
    id:3,
    list:"eCommerce",
    date:" July 11, 2024",
    heading:"Strategies to Help You Choose the Perfect Niche for Your E-Commerce Business!",
    details: " Anything with even an ounce of value attached to it can be sold online with the right kind of marketing and the perfect website! Conducting e-commerce business can be tricky and challenging but with the right strategies.."
  }
]

console.log(Data.map((item)=>item.img),"dataaaa")
  return (
    <>
    {Data.map((item)=>(
    <div key={item?.id} className="card-body">
      <img src={item.img} />
      <div className="card-info">
        <div className="short-info">
          <ul>
            <li>{item.list}</li>
          </ul>
          <span>{item.date}</span>
        </div>
        <h2 className="heading">
          {item.heading}
        </h2>
        <p className="details">
          {item.details}
        </p>
      </div>
    </div>
    ))}
    </>
  );
};

export default Cardonly;
