import React from 'react';
import classes from './Modal.module.css';
import  ReactDOM  from 'react-dom';
const BackDrop=props=>{
  return (
      <div className={classes.backdrop}>

      </div>
  )
}

const ModalOverLay=props=>{
     const {children}=props;
    return (
        <div className={classes.modal}>
         <div className={classes.content}>
             {children}
         </div>
        </div>
    )

}
const accessDom=document.getElementById("overLay")
const Modal = (props) => {
    const {children}=props
    return (
        <>
        {ReactDOM.createPortal(<BackDrop/>,accessDom)}
        {ReactDOM.createPortal(<ModalOverLay>{children}</ModalOverLay>,accessDom)}
        
        </>
    );
};

export default Modal;