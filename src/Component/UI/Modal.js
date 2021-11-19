import { Fragment } from "react/cjs/react.production.min"
import ReactDOM from 'react-dom';
import classes from './Modal.module.css'

const BackDrop = (props)=>{
    return <div className={classes.backdrop} onClick = {props.onClose}/>
}

const ModalOverLay = (props)=>{
    return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
    </div>
}

const overLay = document.getElementById("overlays");

const Modal = (props)=>{
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop onClose = {props.onClose}></BackDrop>,overLay)}
            {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>,overLay)}
        </Fragment>
    )
}

export default Modal;