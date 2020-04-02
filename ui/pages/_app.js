import "./style.css";
import Hero from "../components/Hero";
import strings from "../strings.json";
import Button from "../components/Button";
import { useState, Fragment } from "react";
import LeumiForm from "../components/LeumiForm";
import { Container, Row, Col } from "react-grid-system";

export default () => {
    const [data, setData] = useState({});
    const [step, setStep] = useState("main");
    const [language, setLanguage] = useState("hebrew");

    function handleUpdate(key, value, next = null) {
        let newData = { ...data };
        newData[key] = value;
        setData(newData);
        if (next) {
            setStep(next);
        }
    }

    return <div className={language}>
        <Container>
            <Row className="header">
                <Col xs={4}><img onClick={() => setStep("main")} src="/logo.svg" /></Col>
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
                        <Button rtl={language == "hebrew"} onClick={() => handleUpdate("bank", "leumi", "bank_form")} arrow>{strings[language].Common.Leumi}</Button>
                        <Button rtl={language == "hebrew"} disabled onClick={() => handleUpdate("bank", "discount", "bank_form")} arrow>{strings[language].Common.Discount}</Button>
                        <Button rtl={language == "hebrew"} disabled onClick={() => handleUpdate("bank", "jerusalem", "bank_form")} arrow>{strings[language].Common.Jerusalem}</Button>
                    </Fragment>}
                    {step === "bank_form" && <Fragment>
                        {data.bank === "leumi" && <LeumiForm language={language} data={data} handleUpdate={handleUpdate} />}
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
                <div className="mb-1 pt-1">
                    CoronaForms.org {new Date().getFullYear()}
                </div>
                <div className="mb-1">{strings[language].Footer.MadeWithLoveInIsrael}</div>
            </Container>
            <div style={{ background: "#000", height: 20 }}></div>
        </div>
    </div>
}