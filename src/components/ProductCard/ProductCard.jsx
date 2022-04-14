import { Card } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contextsMovie } from "../../context/contextsMovie";
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
  const { deleteMovie } = useContext(contextsMovie);
  return (
    <div className="card-tt">
      <Card
        hoverable
        style={{
          width: "20vw",
          margin: "5px ",
          border: "none",
          background: "black",
        }}
        cover={
          <div className="img-ch">
            <img className="img-ch" style={contentStyle} src={item.image1} />
          </div>
        }
      >
        {" "}
        <div className="desc-t">
          <Link to={`/edit/${item.id}`}>
            <button>Edit</button>
          </Link>
          <button onClick={() => deleteMovie(item.id)}>Delete</button>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
