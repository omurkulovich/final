import { Card, Carousel } from "antd";
import React from "react";
const { Meta } = Card;

// const ProductCard = ({ item }) => {
//   return (
//     <Card>
//       <div className="products-ch">
//         <div className="img-ch">
//           <img className="img-prod" src={item.image1} />
//         </div>
//         <Meta
//           style={{ textAlign: "center", color: "rgb(221, 212, 212);" }}
//           title={
//             <>
//               <h4>{item.name}</h4>
//             </>
//           }
//           description={
//             <>
//               <h3>{"$" + item.price}</h3>
//             </>
//           }
//         />
//       </div>
//     </Card>
//   );
// };

const contentStyle = {
  width: "100%",
  // height: "540px",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};

const ProductCard = ({ item }) => {
  return (
    <Card
      hoverable
      style={{ width: "20vw", margin: "5px ", border: "none" }}
      cover={
        <div className="img-ch">
          <img style={contentStyle} src={item.image1} />
        </div>
      }
    >
      <Meta
        style={{ textAlign: "center", color: "rgb(221, 212, 212);" }}
        title={
          <>
            <h4>{item.name}</h4>
          </>
        }
        description={
          <>
            <h3>{"$" + item.price}</h3>
          </>
        }
      />
    </Card>
  );
};

export default ProductCard;
