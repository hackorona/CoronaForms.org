import strings from "../strings.json";
import Button from "../components/Button";
import { useState, Fragment, useRef } from "react";
import Input from "../components/Input";
import SignaturePad from "../components/SignaturePad";

export default (props) => {
    const formEl = useRef(null);
    const [step, setStep] = useState(0);
    const [download, setDownload] = useState(false);
    const [fullName1, setFullName1] = useState("");
    const [fullName2, setFullName2] = useState("");
    const [fullName3, setFullName3] = useState("");

    const [IDNumber1, setIDNumber1] = useState("");
    const [IDNumber2, setIDNumber2] = useState("");
    const [IDNumber3, setIDNumber3] = useState("");

    const [accountVisible1, setAccountVisible1] = useState(false);
    const [accountVisible2, setAccountVisible2] = useState(false);

    const [signature, setSignature] = useState("");
    const [loanType, setLoanType] = useState("");
    const [loanNumbers, setLoanNumbers] = useState("");

    const [bankAccountNumber, setBankAccountNumber] = useState("");
    const [nearMortgageDate, setNearMortgageDate] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    function addAccountOwner() {
        if (!accountVisible1) {
            setFullName2("");
            setIDNumber2("");
            return setAccountVisible1(true);
        }
        if (!accountVisible2) {
            setFullName3("");
            setIDNumber3("");
            return setAccountVisible2(true);
        }
    }

    function processPdfDocument(_download) {
        setDownload(_download ? true : false);
        formEl.current.submit();
    }

    return <Fragment>
        <form style={{ display: "none" }} ref={formEl} method="POST" target="_blank" action={`https://api.coronaforms.org/api/v1/pdf/leumi${download ? "?download=1" : ""}`}>
            <input type="text" name="full_name" value={fullName1} />
            <input type="text" name="full_name_2" value={fullName2} />
            <input type="text" name="full_name_3" value={fullName3} />
            <input type="text" name="id" value={IDNumber1} />
            <input type="text" name="id_2" value={IDNumber2} />
            <input type="text" name="id_3" value={IDNumber3} />
            {loanType === "all_loans" && <input type="text" name="all_loans" value="1" />}
            {loanType === "specific_loans" && <input type="text" name="specific_loans" value="1" />}
            <input type="text" name="loans_numbers" value={loanNumbers} />
            <input type="text" name="bank_account_number" value={bankAccountNumber} />
            <input type="text" name="near_mortgage_date" value={nearMortgageDate} />
            <input type="text" name="phone_number" value={phoneNumber} />
            <input type="text" name="sig" value={signature} />
            <input type="text" name="current_date" value="1" />
        </form>
        {step === 0 && <Fragment>
            <h1 className="mb-2">{strings[props.language].Forms.Accounts.title}</h1>
            <h2 className="mb-2">{strings[props.language].Forms.Accounts.subtitle}</h2>
            <form onSubmit={() => setStep(1)}>
                <Input rtl={props.language === "hebrew" ? true : false} autoFocus required value={fullName1} onChange={e => setFullName1(e.target.value)} className="field not-round" placeholder={strings[props.language].Common.FullName} />
                <Input rtl={props.language === "hebrew" ? true : false} required value={IDNumber1} onChange={e => setIDNumber1(e.target.value)} className="field not-round" placeholder={strings[props.language].Common.IDNumber} />
                {accountVisible1 && <div className="mt-2 name_and_id">
                    <Input rtl={props.language === "hebrew" ? true : false} required value={fullName2} onChange={e => setFullName2(e.target.value)} className="field not-round" placeholder={strings[props.language].Common.FullName} />
                    <Input rtl={props.language === "hebrew" ? true : false} required value={IDNumber2} onChange={e => setIDNumber2(e.target.value)} className="field not-round" placeholder={strings[props.language].Common.IDNumber} />
                    <Button rtl={props.language === "hebrew" ? true : false} onClick={() => setAccountVisible1(false)}>{strings[props.language].Common.Remove}</Button>
                </div>}
                {accountVisible2 && <div className="mt-2 mb-2 name_and_id">
                    <Input rtl={props.language === "hebrew" ? true : false} required value={fullName3} onChange={e => setFullName3(e.target.value)} className="field not-round" placeholder={strings[props.language].Common.FullName} />
                    <Input rtl={props.language === "hebrew" ? true : false} required value={IDNumber3} onChange={e => setIDNumber3(e.target.value)} className="field not-round" placeholder={strings[props.language].Common.IDNumber} />
                    <Button rtl={props.language === "hebrew" ? true : false} onClick={() => setAccountVisible2(false)}>{strings[props.language].Common.Remove}</Button>
                </div>}
                <div className="mt-2">
                    {(!accountVisible1 || !accountVisible2) && <Button rtl={props.language === "hebrew" ? true : false} onClick={addAccountOwner} type="button">{strings[props.language].Common.AddAccountOwner}</Button>}
                    <Button rtl={props.language === "hebrew" ? true : false} arrow>{strings[props.language].Common.Next}</Button>
                </div>
            </form>
        </Fragment>}
        {step === 1 && <Fragment>
            <h1 className="mb-2">{strings[props.language].Forms.MortgageTypeSelection.title}</h1>
            <h2 className="mb-2">{strings[props.language].Forms.MortgageTypeSelection.subtitle}</h2>
            <Button rtl={props.language === "hebrew" ? true : false} arrow onClick={() => (setLoanType("all_loans"), setStep(3))}>{strings[props.language].Common.AllMyMortgageLoans}</Button>
            <Button rtl={props.language === "hebrew" ? true : false} onClick={() => (setLoanType("specific_loans"), setStep(2))}>{strings[props.language].Common.ChooseMortgageLoans}</Button>
        </Fragment>}
        {step === 2 && <Fragment>
            <form onSubmit={() => setStep(3)}>
                <h1 className="mb-2">{strings[props.language].Forms.MortgageLoanNumbers.title}</h1>
                <h2 className="mb-2">{strings[props.language].Forms.MortgageLoanNumbers.subtitle}</h2>
                <Input rtl={props.language === "hebrew" ? true : false} autoFocus value={loanNumbers} onChange={e => setLoanNumbers(e.target.value)} required className="field not-round" label={strings[props.language].Common.LoanNumbers} />
                <Button rtl={props.language === "hebrew" ? true : false} className="mt-2" arrow>{strings[props.language].Common.Next}</Button>
            </form>
        </Fragment>}
        {step === 3 && <Fragment>
            <form onSubmit={() => setStep(4)}>
                <h1 className="mb-2">{strings[props.language].Forms.BankAndContactInforamtion.title}</h1>
                <h2 className="mb-2">{strings[props.language].Forms.BankAndContactInforamtion.subtitle}</h2>
                <Input rtl={props.language === "hebrew" ? true : false} autoFocus value={bankAccountNumber} onChange={e => setBankAccountNumber(e.target.value)} required className="field not-round" placeholder={strings[props.language].Common.BankAccountNumber} />
                <Input rtl={props.language === "hebrew" ? true : false} value={nearMortgageDate} onChange={e => setNearMortgageDate(e.target.value)} label={strings[props.language].Forms.BankAndContactInforamtion.NextMortgagePaymentDate} type="date" required className="field not-round" />
                <Input rtl={props.language === "hebrew" ? true : false} value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} required className="field not-round" placeholder={strings[props.language].Common.PhoneNumber} />
                <Button rtl={props.language === "hebrew" ? true : false} className="mt-2" arrow onClick={() => setStep(3)}>{strings[props.language].Common.Next}</Button>
            </form>
        </Fragment>}
        {step === 4 && <Fragment>
            <h1 className="mb-2">{strings[props.language].Forms.Signature.title}</h1>
            <h2 className="mb-2">{strings[props.language].Forms.Signature.subtitle}</h2>
            <SignaturePad onChange={signatureDataURL => setSignature(signatureDataURL)} />
            <Button rtl={props.language === "hebrew" ? true : false} onClick={() => processPdfDocument(false)} className="mt-2" arrow>{strings[props.language].Common.PreviewRequest}</Button>
            <Button rtl={props.language === "hebrew" ? true : false} onClick={() => processPdfDocument(true)} className="mt-2" arrow>{strings[props.language].Common.Download}</Button>
        </Fragment>}
    </Fragment>
}