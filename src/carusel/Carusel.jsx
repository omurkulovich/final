import { Carousel } from "antd";
import React from "react";

const Carusel = () => {
  const contentStyle = {
    height: "450px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div>
      <Carousel className="carusel" style={{ width: "60%" }} autoplay>
        <div>
          <h3 style={contentStyle}>
            <img
              style={{ width: "100%" }}
              src="https://www.heavenofhorror.dk/wp-content/uploads/2021/01/morbius-2022-marvel.jpg"
              alt=""
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              style={{ width: "100%" }}
              src="https://avatars.mds.yandex.net/get-kinopoisk-post-img/1362954/8c42c6eda888f12755f737b14dcc3f98/960x540"
              alt=""
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://filmdaily.co/wp-content/uploads/2022/03/Lost-lede.jpeg"
              alt=""
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://images.thedirect.com/media/article_full/the-batman-dc.jpg"
              alt=""
            />
          </h3>
        </div>
      </Carousel>
      <div></div>
    </div>
  );
};

export default Carusel;
