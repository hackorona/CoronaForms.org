import Button from "./Button";
import strings from "../strings.json";
import { useRef, Fragment } from "react";

function NewsletterForm(props) {
    const el = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();
        if (typeof props.onSubmit === "function") {
            props.onSubmit(el.current.value);
        }
    }

    return <Fragment>
        <style jsx>{`p.small{font-size:15px;margin:0;margin-top:7.5px;text-align:left;color:#111;}`}</style>
        <form onSubmit={handleSubmit} className="newsletter">
            <input className="field" ref={el} placeholder={strings.english.Common.EmailAddressPlaceholder} />
            <Button arrow>{strings.english.Common.SignUp}</Button>
            {props.subtitle && <p className="small">{props.subtitle}</p>}
            {props.children}
        </form>
    </Fragment>
}

export default NewsletterForm;