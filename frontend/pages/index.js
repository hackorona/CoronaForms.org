import { useState, useRef } from "react";
import Form from "../components/form";
import Styles from "../components/styles";
import lang from "../components/language";
import SignaturePad from "../components/signature-pad";
import { Container, Row, Col } from 'react-grid-system';


export default () => {
    const el = useRef(null);
    const [currLang, setCurrLang] = useState("hebrew");
    const [currCountry, setCurrCountry] = useState("Israel");
    const [formState, setFormState] = useState(0);
    const [form, setForm] = useState({ current_date: 1 });

    function updateForm(key, value) {
        console.log("key", key, "value", value);
        let newForm = JSON.parse(JSON.stringify(form));
        newForm[key] = value;
        if (key === "all_loans" && value) {
            delete newForm["specific_loans"];
            delete newForm["loans_numbers"];
        }
        if (key === "loans_numbers") {
            if (value) {
                delete newForm["all_loans"];
                newForm["specific_loans"] = "1";
            } else {
                delete newForm["specific_loans"];
                newForm["all_loans"] = "1";
            }
        }
        setForm(newForm);
    }

    function handleNext(to, key, value) {
        if (typeof value !== "string") {
            value = value.value;
        }
        return () => {
            updateForm(key, value);
            setFormState(to);
        };
    }

    async function generatePDF() {
        document.querySelector("form.preview").submit();
    }

    return <div className={currLang}>
        <Styles />
        <div style={{ height: 70 }}>
            <Container className="mb-4">
                <Row>
                    <Col xs={4} style={{ lineHeight: "70px" }}><img src="/logo.svg" /></Col>
                    <Col className="menu_items" xs={8} style={{ textAlign: currLang === "hebrew" ? "left" : "right", lineHeight: "70px" }}>
                        <a href="#">{lang[currLang].header.OurMission}</a>
                        <a href="#">{lang[currLang].header.Terms}</a>
                    </Col>
                </Row>
            </Container>
            <Container className="mb-4">
                {formState === 0 && <div style={{ textAlign: "center" }}>
                    <Form title={lang[currLang].title}
                        subtitle={<div>{lang[currLang].subtitle}: <strong>{lang[currLang].countries[currCountry]}</strong></div>}
                        buttons={<div className="mt-2">
                            <button disabled>
                                {lang[currLang].forms.SmallBusinessAid}
                                <div className="tooltip">
                                    <div className="relative">{lang[currLang].common.ComingSoon}<div className="arrow-up"></div></div>
                                </div>
                            </button>
                            <button onClick={() => setFormState(1)} className="with_icon">
                                {lang[currLang].forms.MortgageRelief}
                                <img src="/arrow-right.svg" width="10" />
                            </button>
                        </div>} />
                </div>}
                {formState > 0 && <Row>
                    <Col xs={3}>
                        <ul>
                            {lang[currLang].questions.map((q, index) => {
                                return <li key={index} onClick={() => formState > index + 1 ? setFormState(index + 1) : null} className={formState <= index ? "" : "active"}>{q.id}</li>
                            })}
                        </ul>
                    </Col>
                    <Col xs={9}>
                        <div className="center mb-4">
                            {formState === 1 && <div>
                                <Form title={lang[currLang].questions[0].title}
                                    subtitle={lang[currLang].questions[0].subtitle}
                                    buttons={<div>
                                        <button onClick={handleNext(2, "bank", "leumi")} className="with_icon">
                                            {lang[currLang].common.Leumi}
                                            <img src="/arrow-right.svg" width="10" />
                                        </button>
                                        <button onClick={handleNext(2, "bank", "discount")} className="with_icon">
                                            {lang[currLang].common.Discount}
                                            <img src="/arrow-right.svg" width="10" />
                                        </button>
                                        <button onClick={handleNext(2, "bank", "jerusalem")} className="with_icon">
                                            {lang[currLang].common.Jerusalem}
                                            <img src="/arrow-right.svg" width="10" />
                                        </button>
                                    </div>} />
                            </div>}
                            {formState === 2 && <div>
                                <Form title={lang[currLang].questions[1].title}
                                    subtitle={lang[currLang].questions[1].subtitle}
                                    buttons={<div>
                                        <div style={{ maxWidth: 700, margin: "auto" }}>
                                            <form onSubmit={e => (e.preventDefault(), handleNext(3, "full_name", el.current)())}>
                                                <input required ref={el} autoFocus={true} className="mb-2" placeholder={lang[currLang].placeholders.FullName} />
                                                <button className="with_icon">
                                                    {lang[currLang].common.Next}
                                                    <img src="/arrow-right.svg" width="10" />
                                                </button>
                                            </form>
                                        </div>
                                    </div>} />
                            </div>}
                            {formState === 3 && <div>
                                <Form title={lang[currLang].questions[2].title}
                                    subtitle={lang[currLang].questions[2].subtitle}
                                    buttons={<div>
                                        <div style={{ maxWidth: 700, margin: "auto" }}>
                                            <form onSubmit={e => (e.preventDefault(), handleNext(4, "id", el.current)())}>
                                                <input required ref={el} autoFocus={true} className="mb-2" placeholder={lang[currLang].placeholders.IDNumber} />
                                                <button className="with_icon">
                                                    {lang[currLang].common.Next}
                                                    <img src="/arrow-right.svg" width="10" />
                                                </button>
                                            </form>
                                        </div>
                                    </div>} />
                            </div>}
                            {formState === 4 && <div>
                                <Form title={lang[currLang].questions[3].title}
                                    subtitle={lang[currLang].questions[3].subtitle}
                                    buttons={<div>
                                        <div style={{ maxWidth: 700, margin: "auto" }}>
                                            <button onClick={handleNext(6, "all_loans", "1")} className="with_icon">
                                                {lang[currLang].common.Yes}
                                                <img src="/arrow-right.svg" width="10" />
                                            </button>
                                            <button onClick={handleNext(5, "all_loans", "0")} className="with_icon">
                                                {lang[currLang].common.No}
                                                <img src="/arrow-right.svg" width="10" />
                                            </button>
                                        </div>
                                    </div>} />
                            </div>}
                            {formState === 5 && <div>
                                <Form title={lang[currLang].questions[4].title}
                                    subtitle={lang[currLang].questions[4].subtitle}
                                    buttons={<div>
                                        <div style={{ maxWidth: 700, margin: "auto" }}>
                                            <form onSubmit={e => (e.preventDefault(), handleNext(6, "loans_numbers", el.current)())}>
                                                <input required ref={el} autoFocus={true} className="mb-2" placeholder="1234, 5678" />
                                                <button className="with_icon">
                                                    {lang[currLang].common.Next}
                                                    <img src="/arrow-right.svg" width="10" />
                                                </button>
                                            </form>
                                        </div>
                                    </div>} />
                            </div>}
                            {formState === 6 && <div>
                                <Form title={lang[currLang].questions[5].title}
                                    subtitle={lang[currLang].questions[5].subtitle}
                                    buttons={<div>
                                        <div style={{ maxWidth: 700, margin: "auto" }}>
                                            <form onSubmit={e => (e.preventDefault(), handleNext(7, "bank_account_number", el.current)())}>
                                                <input required ref={el} autoFocus={true} className="mb-2" placeholder="000000" />
                                                <button className="with_icon">
                                                    {lang[currLang].common.Next}
                                                    <img src="/arrow-right.svg" width="10" />
                                                </button>
                                            </form>
                                        </div>
                                    </div>} />
                            </div>}
                            {formState === 7 && <div>
                                <Form title={lang[currLang].questions[6].title}
                                    subtitle={lang[currLang].questions[6].subtitle}
                                    buttons={<div>
                                        <div style={{ maxWidth: 700, margin: "auto" }}>
                                            <form onSubmit={e => (e.preventDefault(), handleNext(8, "near_mortgage_date", el.current)())}>
                                                <input type="date" ref={el} required autoFocus={true} className="mb-2" />
                                                <button className="with_icon">
                                                    {lang[currLang].common.Next}
                                                    <img src="/arrow-right.svg" width="10" />
                                                </button>
                                            </form>
                                        </div>
                                    </div>} />
                            </div>}
                            {formState === 8 && <div>
                                <Form title={lang[currLang].questions[7].title}
                                    subtitle={lang[currLang].questions[7].subtitle}
                                    buttons={<div>
                                        <div style={{ maxWidth: 700, margin: "auto" }}>
                                            <form onSubmit={e => (e.preventDefault(), handleNext(9, "phone_number", el.current)())}>
                                                <input type="tel" ref={el} required autoFocus={true} className="mb-2" placeholder="050-1234567" />
                                                <button className="with_icon">
                                                    {lang[currLang].common.Next}
                                                    <img src="/arrow-right.svg" width="10" />
                                                </button>
                                            </form>
                                        </div>
                                    </div>} />
                            </div>}
                            {formState === 9 && <div>
                                <Form title={lang[currLang].questions[8].title}
                                    subtitle={lang[currLang].questions[8].subtitle}
                                    buttons={<div>
                                        <div style={{ maxWidth: 700, margin: "auto" }}>
                                            <SignaturePad onChange={sig => updateForm("sig", sig)}
                                                resetButtonText={"RESET"}
                                                nextButton={<button onClick={() => generatePDF()} className="with_icon">
                                                    {lang[currLang].common.ImDone}
                                                    <img src="/arrow-right.svg" width="10" />
                                                </button>} />
                                        </div>
                                    </div>} />
                                <form className="preview" style={{ display: "none" }} method="POST" action={"http://localhost:8080/api/v1/pdf/" + form.bank} target="_blank">
                                    {Object.keys(form).map((key, index) => {
                                        return <input key={index} type="text" name={key} onChange={e => console.log(e)} value={form[key]} />
                                    })}
                                </form>
                            </div>}
                        </div>
                    </Col>
                </Row>}
            </Container>
            <Container className="mt-4 mission">
                <h1>{lang[currLang].mission_section.title}</h1>
                <p>{lang[currLang].mission_section.p1}</p>
                <p>{lang[currLang].mission_section.p2}</p>
                <p><strong>CoronaForms</strong> {lang[currLang].mission_section.p3}</p>
                <div className="mt-4">
                    <img className="responsive" style={{ minWidth: 270, maxWidth: 770 }} src="/cleaning.svg" />
                </div>
            </Container>
            <Container className="footer mb-4">
                CoronaForms.org {new Date().getFullYear()} - {lang[currLang].footer.MadeWithLoveInIsrael}
                <div className="mt-2">
                    {currLang === "hebrew" && <div>
                        <a onClick={() => setCurrLang("english")} href="#">Also available in English</a>
                    </div>}
                    {currLang === "english" && <div>
                        <a onClick={() => setCurrLang("hebrew")} href="#">זמין גם בעברית</a>
                    </div>}
                </div>
            </Container>
        </div>
    </div>
}