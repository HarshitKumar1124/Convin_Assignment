import React from "react";
import "./Info.css";
import EmailIcon from '@material-ui/icons/Email';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import Loader from "../Loader/Loader"

import { useSelector } from "react-redux";

const Info = () => {

  const {loading,UserDetail} = useSelector(state=>state.userDetail)

  console.log(loading,UserDetail)

  return (
    <>
 
    {loading=="undefined"?<h1>Loading</h1>:<>



    {loading==true?<Loader/>:<>
    <div className="DetailBox">
        <div className="DisplayInfo">
          <div>
            <div>
            <FolderSharedIcon/>
            <input
            
            style={{color:"white"}}
              type="text"
              className="Glass"
              placeholder="FirstName"
              name="FirstName"
              value={UserDetail?UserDetail.data.data.first_name:""}
              readOnly
              disabled
            />
            </div>

           <div>
           <FormatAlignJustifyIcon/>
            <input
            
            style={{color:"white"}}
              type="text"
              className="Glass"
              placeholder="LastName"
              name="LastName"
              value={UserDetail?UserDetail.data.data.last_name:""}
              readOnly
              disabled
            />
           </div>
          </div>
          <div>
            <EmailIcon/>
          <input
          style={{color:"white",width:"85%"}}
        
            type="email"
            className="Glass"
            placeholder="Email"
            name="Email"
            value={UserDetail?UserDetail.data.data.email:""}
            readOnly
            disabled
          />
          </div>
        </div>
      </div>
    </>}




    </>}
    

    
      
    </>
  );
};

export default Info;
