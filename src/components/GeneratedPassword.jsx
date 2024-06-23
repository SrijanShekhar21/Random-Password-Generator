import React, { useRef } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function GeneratedPassword(props) {
  const passwordRef = useRef(null);

  function copyPassword() {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(passwordRef.current.value);
  }

  return (
    <div className="generatedPasswordDiv">
      <div className="genContainer">
        <input
          type="text"
          className="password"
          value={props.password}
          readOnly
          ref={passwordRef}
        />
        <button className="copy" onClick={copyPassword}>
          <ContentCopyIcon />
        </button>
      </div>
    </div>
  );
}

export default GeneratedPassword;
