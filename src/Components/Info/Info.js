import React from "react";
import "./Info.css";
import EmailIcon from '@material-ui/icons/Email';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';

const Info = () => {
  return (
    <>
      <div className="DetailBox">
        <div className="DisplayInfo">
          <div>
            <FolderSharedIcon/>
            <input
            
              type="text"
              className="Glass"
              placeholder="FirstName"
              name="FirstName"
              readOnly
              disabled
            />

            <FormatAlignJustifyIcon/>
            <input
            
              type="text"
              className="Glass"
              placeholder="LastName"
              name="LastName"
              readOnly
              disabled
            />
          </div>
          <div>
            <EmailIcon/>
          <input
          style={{width:"85%"}}
            type="email"
            className="Glass"
            placeholder="Email"
            name="Email"
            readOnly
            disabled
          />
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
