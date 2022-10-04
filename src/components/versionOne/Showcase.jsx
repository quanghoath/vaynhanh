import React, { useState } from "react";
import PropTypes from "prop-types";
import "react-modal-video/css/modal-video.min.css";
import ModalVideo from "react-modal-video";
import { useHistory } from "react-router-dom";

import {  axiosGet } from '../../axiosClient';
const Showcase = (props) =>{
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);
    const { showcasenName, showcaseBtnOneText, showcaseDescription, showcaseBtnTwoText, showcaseImage } = props;

    const openModal =()=> {
        setIsOpen(true);
    }
    const vayNgay =()=>{
        let userToken = JSON.parse(localStorage.getItem('user'));
        axiosGet("/user/" + userToken.id).then((res) => {
            history.push('/xacnhanvay', {
                item: {
                    phone: res.phone,
                    name: res.name,
                    createdAt: new Date(),
                    idUser: res.id,
                    soTien: 20000000,
                    soThang: 6
                }
            });
        })
    }
        return (
            <React.Fragment>
                <div id="home" className="main-banner bg-gray">
                    <div className="pattern-2" />
                    <div className="bg-top" />
                    <div className="bg-bottom" />
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="main-banner-content">
                                            <h1>{showcasenName}</h1>
                                            <p>
                                                {showcaseDescription}
                                            </p>
                                            <p>18 tuổi vẫn vay được</p>
                                            <p>Miễn thẩm định nhà</p>
                                            <a
                                               onClick={()=>vayNgay()}
                                                className="btn btn-primary"
                                            >
                                                {showcaseBtnOneText}
                                            </a>

                                            <ModalVideo
                                                channel="youtube"
                                                isOpen={isOpen}
                                                videoId="vr0qNXmkUJ8"
                                                onClose={() => setIsOpen(false) }
                                            />
                                            <button
                                                onClick={openModal}
                                                className="btn btn-secondary "
                                            >
                                                <i className="icofont-ui-play" />
                                                {showcaseBtnTwoText}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="banner-img">
                                            <img
                                                src={showcaseImage}
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pattern" />
                </div>
            </React.Fragment>
        );
}

//Props Types
Showcase.propTypes = {
    showcasenName: PropTypes.string,
    showcaseDescription: PropTypes.string,
    showcaseImage: PropTypes.string,
    showcaseBtnOneLink: PropTypes.string,
    showcaseBtnOneText: PropTypes.string,
    showcaseBtnTwoText: PropTypes.string
};

//Default Props
Showcase.defaultProps = {
    showcasenName: "Lotte Finace cho vay tiền mặt",
    showcaseDescription:
        "Không thế chấp tài sản.",
    showcaseImage: require("../../assets/img/main-banner.png"),
    showcaseBtnOneLink: "#features",
    showcaseBtnOneText: "Vay ngay",
    showcaseBtnTwoLink: "//www.youtube.com/watch?v=vr0qNXmkUJ8",
    showcaseBtnTwoText: "Video giới thiệu"
};

export default Showcase;
