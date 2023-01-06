import React, { useEffect } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import HK from "../../Images/HK.png";
import "./Loader.css"

const Loader = () => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    handleToggle();
  }, []);

  return (
    <>
      <div id="Backdropdiv" style={{ height: "100vh" }}></div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        {/* border:"2px solid orange", */}
          <p style={{fontSize:"2vmax"}}>Project By -</p>

          <img
            src={HK}
            alt="Project By Harshit Kumar"
            title="Project By Harshit Kumar"
            style={{ width: "60%", margin: "1vmax"}}
            id="LoaderImage"
          />

          <CircularProgress size="5rem" color="inherit" />
        </div>
      </Backdrop>
    </>
  );
};

export default Loader;
