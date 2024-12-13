// import React from "react";
// import { useParams } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import image1 from "../Assets/Rectangle 11.png";
// import image2 from "../Assets/Rectangle 12.png";
// import image3 from "../Assets/Rectangle 13.png";
// import image4 from "../Assets/Rectangle 14.png";
// import image5 from "../Assets/Rectangle 15.png";
// import image6 from "../Assets/Rectangle 16.png";
// import image7 from "../Assets/Rectangle 17 (2).png";
// import image8 from "../Assets/Rectangle 18.png";
// import image9 from "../Assets/Rectangle 19.png";
// import image10 from "../Assets/Rectangle 20.png";
// import image11 from "../Assets/Rectangle 21.png";
// import image12 from "../Assets/Rectangle 22.png";
// import image13 from "../Assets/Rectangle 23.png";
// import image14 from "../Assets/Rectangle 24.png";
// import image15 from "../Assets/Rectangle 25.png";
// import image16 from "../Assets/Rectangle 26.png";
// import image17 from "../Assets/Rectangle 27.png";
// import image18 from "../Assets/Rectangle 28.png";
// import image19 from "../Assets/Rectangle 29.png";
// import image20 from "../Assets/Rectangle 30.png";
// import { FaSearchPlus } from "react-icons/fa";
// import { CiLink } from "react-icons/ci";
// import { Link } from "react-router-dom";

// const portfolios = [
//     { id: 1, category: "Web Design", src: image1, alt: "Rectangle 11.png" },
//     { id: 2, category: "Web Design", src: image2, alt: "Rectangle 12.png" },
//     { id: 3, category: "Web Design", src: image3, alt: "Rectangle 13.png" },
//     { id: 4, category: "Web Design", src: image4, alt: "Rectangle 14.png" },
//     { id: 5, category: "App Design", src: image5, alt: "Rectangle 15.png" },
//     { id: 6, category: "App Design", src: image6, alt: "Rectangle 16.png" },
//     { id: 7, category: "App Design", src: image7, alt: "Rectangle 17 (2).png" },
//     { id: 8, category: "App Design", src: image8, alt: "Rectangle 18.png" },
//     { id: 9, category: "Graphic Design", src: image9, alt: "Rectangle 19.png" },
//     { id: 10, category: "Graphic Design", src: image10, alt: "Rectangle 20.png" },
//     { id: 11, category: "Graphic Design", src: image11, alt: "Rectangle 21.png" },
//     { id: 12, category: "Graphic Design", src: image12, alt: "Rectangle 22.png" },
//     { id: 13, category: "Web Development", src: image13, alt: "Rectangle 23.png" },
//     { id: 14, category: "Web Development", src: image14, alt: "Rectangle 24.png" },
//     { id: 15, category: "Web Development", src: image15, alt: "Rectangle 25.png" },
//     { id: 16, category: "Web Development", src: image16, alt: "Rectangle 26.png" },
//     { id: 17, category: "App Development", src: image17, alt: "Rectangle 27.png" },
//     { id: 18, category: "App Development", src: image18, alt: "Rectangle 28.png" },
//     { id: 19, category: "App Development", src: image19, alt: "Rectangle 29.png" },
//     { id: 20, category: "App Development", src: image20, alt: "Rectangle 30.png" },
//   ];

// const Portfolioview = () => {
//   const { portfolioid } = useParams(); // Extract 'portfolioid' and 'des'
//   console.log(portfolioid);

//   const portfolioData = portfolios[portfolioid];

//   if (!portfolioData) {
//     return <div>No portfolio found for "{portfolioid}"</div>;
//   }

//   return (
//     <>
//       <div className="container">
//         <h2 className="mt-4">{portfolioid} Portfolio</h2>
//         <div className="row">
//           {portfolioData.map((item) => (
//             <div key={item.id} className="col-md-3 mb-4">
//               <div className="card">
//                 <img
//                   src={item.src}
//                   className="card-img-top"
//                   alt={item.alt}
//                   style={{ height: "150px", objectFit: "cover" }}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{item.discri}</h5>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Portfolioview;
import React from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../Assets/Rectangle 11.png";
import image2 from "../Assets/Rectangle 12.png";
import image3 from "../Assets/Rectangle 13.png";
import image4 from "../Assets/Rectangle 14.png";
import image5 from "../Assets/Rectangle 15.png";
import image6 from "../Assets/Rectangle 16.png";
import image7 from "../Assets/Rectangle 17 (2).png";
import image8 from "../Assets/Rectangle 18.png";
import image9 from "../Assets/Rectangle 19.png";
import image10 from "../Assets/Rectangle 20.png";
import image11 from "../Assets/Rectangle 21.png";
import image12 from "../Assets/Rectangle 22.png";
import image13 from "../Assets/Rectangle 23.png";
import image14 from "../Assets/Rectangle 24.png";
import image15 from "../Assets/Rectangle 25.png";
import image16 from "../Assets/Rectangle 26.png";
import image17 from "../Assets/Rectangle 27.png";
import image18 from "../Assets/Rectangle 28.png";
import image19 from "../Assets/Rectangle 29.png";
import image20 from "../Assets/Rectangle 30.png";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";

const portfolios = [
  {
    id: 1,
    category: "Web Design",
    src: image1,
    alt: "Rectangle 11.png",
    discri: "Web Design",
    title: "Web Design 1",
    dis1: "Description 1",
    dis2: "Description 2",
  },
  {
    id: 2,
    category: "Web Design",
    src: image2,
    alt: "Rectangle 12.png",
    discri: "Web Design",
    title: "Web Design 2",
    dis1: "Description 1",
    dis2: "Description 2",
  },
  {
    id: 3,
    category: "Web Design",
    src: image3,
    alt: "Rectangle 13.png",
    discri: "Web Design",
    title: "Web Design 3",
    dis1: "Description 1",
    dis2: "Description 2",
  },
  {
    id: 4,
    category: "Web Design",
    src: image4,
    alt: "Rectangle 14.png",
    discri: "Web Design",
    title: "Web Design 4",
    dis1: "Description 1",
    dis2: "Description 2",
  },
  {
    id: 5,
    category: "App Design",
    src: image5,
    alt: "Rectangle 15.png",
    discri: "App Design",
    title: "App Design 5",
    dis1: "Description 1",
    dis2: "Description 2",
  },
  {
    id: 6,
    category: "App Design",
    src: image6,
    alt: "Rectangle 16.png",
    discri: "App Design",
    title: "App Design 6",
    dis1: "Description 1",
    dis2: "Description 2",
  },
  {
    id: 7,
    category: "App Design",
    src: image7,
    alt: "Rectangle 17 (2).png",
    discri: "App Design",
    title: "App Design 7",
    dis1: "Description 1",
    dis2: "Description 2",
  },
  {
    id: 8,
    category: "App Design",
    src: image8,
    alt: "Rectangle 18.png",
    discri: "App Design",
    title: "App Design 8",
    dis1: "Description 1",
    dis2: "Description 2",
  },
  {
    id: 9,
    category: "Graphic Design",
    src: image9,
    alt: "Rectangle 19.png",
    discri: "Graphic Design",
    title: "Graphic Design 9",
    dis1: "Description 1",
    dis2: "Description 2",
  },
  {
    id: 10,
    category: "Graphic Design",
    src: image10,
    alt: "Rectangle 20.png",
    discri: "Graphic Design",
    title: "Graphic Design 10",
    dis1: "Description 1",
    dis2: "Description 2",
  },
  {
    id: 11,
    category: "Graphic Design",
    src: image11,
    alt: "Rectangle 21.png",
    discri: "Graphic Design",
    title: "Graphic Design 11",
    dis1: "Description 1",
    dis2: "Description 2",
  },
  {
    id: 12,
    category: "Graphic Design",
    src: image12,
    alt: "Rectangle 22.png",
    discri: "Graphic Design",
    title: "Graphic Design 12",
    dis1: "Description 1",
    dis2: "Description 2",
  },
  {
    id: 13,
    category: "Web Development",
    src: image13,
    alt: "Rectangle 23.png",
    discri: "Web Development",
    title: "Web Development 13",
    dis1: "Description 1",
    dis2: "Description 2",
  },
  {
    id: 14,
    category: "Web Development",
    src: image14,
    alt: "Rectangle 24.png",
    discri: "Web Development",
    title: "Web Development 14",
    dis1: "Description 1",
    dis2: "Description 2",
  },
  {
    id: 15,
    category: "Web Development",
    src: image15,
    alt: "Rectangle 25.png",
    discri: "Web Development",
    title: "Web Development 15",
    dis1: "Description 1",
    dis2: "Description 2",
  },
  {
    id: 16,
    category: "Web Development",
    src: image16,
    alt: "Rectangle 26.png",
    discri: "Web Development",
    title: "Web Development 16",
    dis1: "Description 1",
    dis2: "Description 2",
  },
  {
    id: 17,
    category: "App Development",
    src: image17,
    alt: "Rectangle 27.png",
    discri: "App Development",
    title: "App Development 17",
    dis1: "Description 1",
    dis2: "Description 2",
  },
  {
    id: 18,
    category: "App Development",
    src: image18,
    alt: "Rectangle 28.png",
    discri: "App Development",
    title: "App Development 18",
    dis1: "Description 1",
    dis2: "Description 2",
  },
  {
    id: 19,
    category: "App Development",
    src: image19,
    alt: "Rectangle 29.png",
    discri: "App Development",
    title: "App Development 19",
    dis1: "Description 1",
    dis2: "Description 2",
  },
  {
    id: 20,
    category: "App Development",
    src: image20,
    alt: "Rectangle 30.png",
    discri: "App Development",
    title: "App Development 20",
    dis1: "Description 1",
    dis2: "Description 2",
  },
];

const Portfolioview = () => {
  const { portfolioid } = useParams(); // Extract 'portfolioid'
  console.log(portfolioid);

  // Convert portfolioid to an integer and find the corresponding portfolio data
  const portfolioData = portfolios.find(
    (item) => item.id === parseInt(portfolioid)
  );

  if (!portfolioData) {
    return <div>No portfolio found for "{portfolioid}"</div>;
  }

  return (
    <>
      <section className="py-50">
        <div className="container ">
          {/* <h2 className="mt-4">{portfolioData.category} Portfolio</h2> */}
          <div className="row justify-content-center">
            <div>
              <div className="mb-4">
                <img
                  src={portfolioData.src}
                  className="PortfolioImage "
                  alt={portfolioData.alt}
                />
                {/* <div className="card">
                <img
                  src={portfolioData.src}
                  className="card-img-top"
                  alt={portfolioData.alt}
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{portfolioData.discri}</h5>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolioview;
