import React from "react";
import "@fontsource/alfa-slab-one";

const Testimonial:React.FC<any> = () => {
  return (
    <div
      style={{
        height: 1000,
        backgroundColor: "#01233C",
        backgroundImage: "url(https://res.cloudinary.com/dixi57x2b/image/upload/v1722065608/ddelcmowd2nwujhgweni.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "0px 160px",
        color: "white",
        position: "relative",
        zIndex: 1,
        // border: '2px solid red'
      }}
    >
      <div
        style={{
          flex: 1,
          marginRight: "20px",
          zIndex: 2,
          width: "400px",
          alignSelf: "center",
          justifySelf: "center",
          //   border: "2px solid red",
          marginTop: 10,
        }}
      >
        <h1
          style={{
            fontSize: "2.8em",
            fontWeight: "400",
            color: "#01233C",
            width: "500px",
            margin: "auto",
            marginBottom: "4px",
            fontFamily: "Alfa Slab One",
            // border: "2px solid red",
            textAlign: "center",
          }}
        >
          MISSION 1 CRORE HAPPY TRADERS
        </h1>
        <p
          style={{
            fontSize: "1.3em",
            color: "#344f63",
            fontWeight: 700,
            width: "440px",
            margin: "auto",
            marginBottom: "20px",
            lineHeight: 1.2,
            fontFamily: "Inter",
          }}
        >
          Master the art of selecting stocks with Stocktutor's financial experts
          simplifying all the strategies to maximize your profits and minimize
          your loss
        </p>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            color: "#161a1d",
            fontWeight: 700,
            display: "flex",
            margin: "auto",
            width: "600px",
            fontFamily: "Inter",
          }}
        >
          <div style={{ margin: "auto" }}>
            <li style={{ marginBottom: "10px", lineHeight: 1.2 }}>
              12k+ <br /> Students enrolled
            </li>
            <li style={{ marginBottom: "10px", lineHeight: 1.2 }}>
              12+ <br />
              Certified Courses
            </li>
          </div>
          <div style={{ margin: "auto" }}>
            <li style={{ marginBottom: "10px", lineHeight: 1.2 }}>
              28k+ <br />
              Trading Community
            </li>
            <li style={{ marginBottom: "10px", lineHeight: 1.2 }}>
              6+ <br />
              Expert Trainers
            </li>
          </div>
        </ul>
      </div>

      <div
        style={{
          flex: 1,
          position: "relative",
          height: "440px",
        }}
      >
        <iframe
          id="vimeoPlayer"
          src="https://player.vimeo.com/video/990465640?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479&loop=1"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            zIndex: "1",
            border: "none", // Remove any border
            boxSizing: "border-box", // Ensure no additional padding or border is applied
          }}
          title="Crash course video"
          // controls={false}
        ></iframe>
      </div>
    </div>
  );
};

export default Testimonial;
