import { useRef, useEffect, useState } from "react";
import SignaturePad from "signature_pad";

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

    return <div style={{ width: 304, margin: "auto" }}>
        <div style={{ backgroundColor: "#eee" }} className="mb-2">
            <canvas style={{ border: "2px solid #ccc" }} ref={el}></canvas>
        </div>
        <button onClick={() => pad.clear()}>
            {props.resetButtonText}
        </button>
        {props.nextButton}
    </div>;
}