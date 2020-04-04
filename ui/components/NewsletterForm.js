import Input from "./Input";
import Button from "./Button";
import strings from "../strings.json";
import { useState, Fragment } from "react";

function NewsletterForm(props) {
    const [value, setValue] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();
        if (typeof props.onSubmit === "function") {
            props.onSubmit(value);
        }
    }

    function handleChange(e) {
        if (e && e.target) {
            setValue(e.target.value);
        }
    }

    return <Fragment>
        <style jsx>{`p.small{font-size:15px;margin:0;margin-top:7.5px;text-align:${props.rtl ? "right" : "left"};color:#111;}`}</style>
        <form onSubmit={handleSubmit} className="newsletter">
            <Input type="email" rtl={props.rtl} value={value} onChange={handleChange} label={strings[props.rtl ? "hebrew" : "english"].Common.EmailAddressPlaceholder} />
            <Button rtl={props.rtl} arrow>{strings[props.rtl ? "hebrew" : "english"].Common[props.buttonText || "SignUp"]}</Button>
            {props.subtitle && <p className="small">{props.subtitle}</p>}
            {props.children}
        </form>
    </Fragment>
}

export default NewsletterForm;