import { Fragment } from "react";

function Button(props) {
    return <Fragment>
        <style jsx>{`
        button{
            color: #000;
            border: none;
            outline: none;
            cursor: pointer;
            font-size: 18px;
            font-weight: bold;
            padding: 10px 20px;
            position: relative;
            border-radius: 23px;
            transition: .15s ease;
            transition-property: all;
            background-color: #F8D57E;
            margin-${props.rtl ? "left" : "right"}: 26px;
            ${props.arrow && props.rtl ? "padding-left: 30px;" : ""}
            ${props.arrow && !props.rtl ? "padding-right: 30px;" : ""}
        }
        button:disabled{
            opacity: 0.8;
            background: #e2e2e2;
            cursor: not-allowed;
        }
        button:hover{ transform: scale(1.1); }
        button:active{ transform: scale(0.98); }
        button .tooltip{
            left: 28%;
            color: #fff;
            padding: 6px;
            bottom: 40px;
            display: none;
            font-size:13px;
            background: #000;
            position: absolute;
            border-radius: 3px;
        }
        button:hover .tooltip{ display: block; }
        button div.arrow-up {
            width: 0; 
            height: 0; 
            left: 43%;
            bottom: -10px;
            position: absolute;
            border-top: 5px solid black;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
        }
        @media only screen and (max-width: 400px) {
            button{
                width: 100%;
                margin-bottom: 13px;
                margin-${props.rtl ? "left" : "right"}: 0px;
            }
            button:hover{transform: scale(1);}
            button .tooltip{
                left: 36%;
            }
        }
        `}</style>
        <button type={props.type} onClick={props.onClick} className={props.className} disabled={props.disabled}>
            {props.children}
            {props.arrow && !props.rtl && <div className="arrow-right"></div>}
            {props.arrow && props.rtl && <div className="arrow-left"></div>}
            {props.tooltip && <div className="tooltip">
                {props.tooltip}
                <div style={{ position: "relative" }}>
                    <div className="arrow-up"></div>
                </div>
            </div>}
        </button>
    </Fragment>
}

export default Button;