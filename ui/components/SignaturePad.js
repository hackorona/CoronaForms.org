import { useRef, useEffect, useState, Fragment } from "react";
import SignaturePad from "signature_pad";
import strings from "../strings.json";

export default (props) => {
    const el = useRef(null);
    const [pad, setPad] = useState(null);

    useEffect(() => {
        let _ = new SignaturePad(el.current, {
            onEnd: () => {
                props.onChange(_.toDataURL("image/png"))
            }
        });
        setPad(_);
    }, []);

    return <Fragment>
        <style jsx>{`
            .signature_wrapper{
                width: 275px;
                margin: auto;
                background: #eee;
                position: relative;
                border: 2px solid #ccc;
            }
            .signature_wrapper button{
                position: absolute;
                left: 5px;
                bottom: 5px;
                padding: 5px 10px;
                border: none;
                outline: none;
                background: #F8D57E;
                color: #000;
                cursor: pointer;
                border-radius: 3px;
                font-size: 14px;
                font-weight: bold;
                opacity: 0.7;
            }
            .signature_wrapper button:hover {opacity: 1;}
        `}</style>
        <div className="signature_wrapper">
            <canvas width="275" height="100" ref={el}></canvas>
            <button onClick={() => pad.clear()} type="button">{strings[props.language].Common.Reset}</button>
        </div>
    </Fragment>;
}