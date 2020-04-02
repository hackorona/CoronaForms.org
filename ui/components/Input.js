import { useState, useRef, Fragment } from "react";

export default props => {
    const el = useRef(null);
    const [value, setValue] = useState("");
    const [focus, setFocus] = useState(false);

    function handleChange(event) {
        setValue(event.target.value);
        if (props.onChange) {
            props.onChange(event);
        }
    }

    function handleBlur() {
        if (value !== "") {
            return;
        }
        setFocus(false);
    }

    function handleLabelClick() {
        setTimeout(() => {
            el.current.focus();
        }, 50);
    }

    return <Fragment>
        <style jsx>{`
        .input-field{
            position: relative;
        }
        .input-field label{
            display: block;
            position: absolute;
            top: 19px;
            ${props.rtl ? "right" : "left"}: 20px;
            font-size: 24px;
            color: #757575;
            transition: .15s ease;
            transition-property: all;
        }
        .input-field.focus label{
            top: 8px;
            font-size: 16px;
            font-weight: bold;
            color: #000;
        }
        .input-field input{
            border: none;
            outline: none;
            width: 100%;
            padding: 20px;
            font-size: 24px;
            padding-top: 28px;
            padding-right: 20px;
            padding-bottom: 10px;
            transition: .15s ease;
            box-sizing: border-box;
            -webkit-appearance: none;
            transition-property: all;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom: 2px solid #ccc;
            text-align: ${props.rtl ? "right" : "left"};
            direction: ${props.rtl ? "rtl" : "ltr"};
        }
        .input-field.focus input{
            border-color: #000;
        }
        `}</style>
        <div className={["input-field", focus ? "focus" : ""].join(" ")}>
            <label onClick={handleLabelClick}>{props.label || props.placeholder}</label>
            <input autoFocus={props.autoFocus} required type={(props.type === "date" && focus) ? "date" : "text"} ref={el} value={value} onChange={handleChange} onFocus={() => setFocus(true)} onBlur={handleBlur} />
        </div>
    </Fragment>
}