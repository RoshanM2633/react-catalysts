import React from 'react';

class ServiceModal extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            display:'block'
        }

        console.log(props);
        this.handleChildClick=this.handleChildClick.bind(this);
    }

    handleChildClick(e){
        e.stopPropagation();
    }


    render() {
        return (
            <div className="open-mod service-modal" style={{display:this.state.display}} onClick={this.props.closeHandler}>
                <div className="service-container" onClick={this.handleChildClick}>
                    <h2 className="modal-head">{this.props.isOpen.heading}</h2>
                    <p className="modal-data">{this.props.isOpen.para1}</p>
                    <p className="modal-rpo">{this.props.isOpen.para2}</p>
                    <span className="cross" onClick={this.props.closeHandler}></span>
                </div>
            </div>
        );
    }
}

export default ServiceModal;