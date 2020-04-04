import "./style.css";
import Head from "next/head";
import Hero from "../components/Hero";
import strings from "../strings.json";
import Button from "../components/Button";
import LeumiForm from "../components/LeumiForm";
import { useState, Fragment, useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";

export default () => {
    const [step, setStep] = useState("main");
    const [language, setLanguage] = useState(null);
    const [bank, setBank] = useState(null);

    function changeLangauge(lang) {
        setLanguage(lang);
        set("lang", lang);
    }

    function get(key, defaultValue) {
        if (localStorage) {
            return localStorage.getItem(key) || defaultValue;
        }
        return defaultValue;
    }

    function set(key, value) {
        if (localStorage) {
            localStorage.setItem(key, value);
        }
    }

    useEffect(() => {
        setLanguage(get("lang", navigator.language.indexOf("he") === 0 ? "hebrew" : "english"));
    }, []);

    return language && <div className={language}>
        <Container>
            <Head>
                <title>CoronaForms</title>
            </Head>
            <Row className="header">
                <Col xs={4}><img onTouchEnd={() => setStep("main")} onClick={() => setStep("main")} src="/logo.svg" /></Col>
                <Col xs={8} className="menuItems">
                    <a href="#mission">{strings[language].Header.OurMission}</a>
                    <a href="#terms-of-use">{strings[language].Header.Terms}</a>
                </Col>
            </Row>
            <div className="text-center mt-2">
                <Hero>
                    {step === "main" && <Fragment>
                        <h1 className="mb-2">{strings[language].Hero.title}</h1>
                        <h2 className="mb-2">{strings[language].Hero.subtitle}</h2>
                        <Button rtl={language == "hebrew"} disabled tooltip={strings[language].Common.ComingSoon} arrow>{strings[language].Hero.SmallBusinessAid}</Button>
                        <Button rtl={language == "hebrew"} arrow onClick={() => setStep("choose_bank")}>{strings[language].Hero.MortgageSuspension}</Button>
                    </Fragment>}
                    {step === "choose_bank" && <Fragment>
                        <h1 className="mb-2">{strings[language].Forms.ChooseBank.title}</h1>
                        <h2 className="mb-2">{strings[language].Forms.ChooseBank.subtitle}</h2>
                        <Button rtl={language == "hebrew"} onClick={() => (setBank("leumi"), setStep("bank_form"))} arrow>{strings[language].Common.Leumi}</Button>
                        <Button rtl={language == "hebrew"} disabled onClick={() => (setBank("discount"), setStep("bank_form"))} arrow>{strings[language].Common.Discount}</Button>
                        <Button rtl={language == "hebrew"} disabled onClick={() => (setBank("jerusalem"), setStep("bank_form"))} arrow>{strings[language].Common.Jerusalem}</Button>
                    </Fragment>}
                    {step === "bank_form" && <Fragment>
                        {bank === "leumi" && <LeumiForm language={language} />}
                    </Fragment>}
                </Hero>
            </div>
            <div id="mission" className="mission">
                <h3>{strings[language].OurMission.title}</h3>
                <p>{strings[language].OurMission.p1}</p>
                <p>{strings[language].OurMission.p2}</p>
                <p><strong>CoronaForms</strong> {strings[language].OurMission.p3}</p>
                <div className="text-right mt-3">
                    <img src="/coronaforms.svg" />
                </div>
            </div>
        </Container>
        <div className="footer">
            <div className="floor"></div>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="mb-1 pt-1">
                            CoronaForms.org {new Date().getFullYear()}
                        </div>
                        <div className="mb-1">{strings[language].Footer.MadeWithLoveInIsrael}</div>
                    </Col>
                    <Col md={6} className="language-links">
                        {language === "hebrew" && <a href="#" onClick={() => changeLangauge("english")}>Also available in English</a>}
                        {language === "english" && <a href="#" onClick={() => changeLangauge("hebrew")}>זמין גם בעברית</a>}
                    </Col>
                </Row>
            </Container>
            <div style={{ background: "#000", height: 20 }}></div>
        </div>
    </div>
}