import React, { useEffect } from "react";
import { isMobile } from 'react-device-detect';
import Showcase from "../components/versionOne/Showcase";
import Features from "../components/versionOne/Features";
import ThongKe from "../components/versionOne/ThongKe";
import Services from "../components/versionOne/Services";
import QuyTrinh from "../components/versionOne/QuyTrinh";
import Footer from '../components/versionOne/Footer';
const HomeOne = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    if (isMobile) {
        return (
            <React.Fragment>
                <Showcase />
                <Features />
                <ThongKe />
                <Services />
                <QuyTrinh />
                <Footer />
            </React.Fragment>
        );
    }
    else {
        return <div className="vh-100 " style={{
            width: '100%', marginTop: '10%'
        }}>
            <h3 className="text-center">Thiết bị không hỗ trợ. Vui lòng truy cập bằng điện thoại</h3>
        </div>
    }

}

export default HomeOne;
