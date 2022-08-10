import React, { Component, useEffect } from "react";

//Components List
import Showcase from "../components/versionOne/Showcase";
import Features from "../components/versionOne/Features";
import ThongKe from "../components/versionOne/ThongKe";
import Services from "../components/versionOne/Services";
import QuyTrinh from "../components/versionOne/QuyTrinh";
// import Footer from "../components/versionOne/Footer";

const HomeOne = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <React.Fragment>
            {/* NavBarMultiPage: src/components/common/NavBarMultiPage */}
            {/* <NavBarMultiPage pageName="home" /> */}
            {/* Showcase: src/components/versionOne/Showcase */}
            <Showcase />
            {/* Features: src/components/versionOne/Features */}
            <Features />
            {/* About: src/components/common/About */}
            <ThongKe />
            {/* Services: src/components/versionOne/Services */}
            <Services />
            <QuyTrinh />
            {/* Vision: src/components/common/Vision */}
            {/* <Vision />
                <FunFactCOunter />
                <JointClient />
                <Works />
                <Team />
                <Testimonial />
                <Faq />
                <Pricing />
                <Partners />
                <Subscribe /> */}
            {/* Footer: src/components/common/Footer */}
            {/* <Footer pageName="home" /> */}
        </React.Fragment>
    );

}

export default HomeOne;
