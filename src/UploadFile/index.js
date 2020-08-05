import React from 'react';
import style from './style.css'

function index(props) {
  return (
    <div className={"wrapper"}>
      <input
        id="uploadFile"
        type={"file"}
        accept={props.accept ? props.accept : ""}
        className={"input"}
        onChange={e => {
          // let file = e.target.files[0];
        }}
      />
      {/* <label htmlFor={"uploadFile"} className={"lable"} /> */}
      {props.children}
    </div>
  );
};

export default index;
