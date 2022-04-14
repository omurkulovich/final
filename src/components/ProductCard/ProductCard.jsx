import { ShoppingOutlined, HeartOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React, { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";
import { favoritesContext } from "../../context/favoritesContext";
const { Meta } = Card;

const contentStyle = {
  width: "100%",
  // height: "540px",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};

const ProductCard = ({ item }) => {
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const [checkItem, setCheckItem] = useState(checkItemInCart(item.id));
  const { addProductToFavorite, checkItemInFavorite } =
    useContext(favoritesContext);
  const [checkItem2, setCheckItem2] = useState(checkItemInFavorite(item.id));
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
      <HeartOutlined
        onClick={() => {
          addProductToFavorite(item);
          setCheckItem2(checkItemInFavorite(item.id));
        }}
        style={{
          margin: "10px",
          fontSize: "25px",
          color: checkItem2 ? "black" : "grey",
        }}
      />
      <ShoppingOutlined
        onClick={() => {
          addProductToCart(item);
          setCheckItem(checkItemInCart(item.id));
        }}
        style={{
          margin: "10px",
          fontSize: "25px",
          color: checkItem ? "black" : "grey",
        }}
      />
    </Card>
  );
};

export default ProductCard;
