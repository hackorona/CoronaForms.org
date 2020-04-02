import { Fragment } from "react";
import strings from "../strings.json";
import { useState, useEffect } from "react";
import NewsletterForm from "../components/NewsletterForm";

function Hero(props) {
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://api.coronaforms.org/api/v1/geo");
            const jsonData = await response.json();
            setCountry(jsonData.countryName);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
        fetchData();
    }, []);

    return <div className="auto hero">
        {loading && <div className="loading"><img width="50" src="/puff.svg" /></div>}
        {!loading && country === "Israel" && <Fragment>
            {props.children}
        </Fragment>}
        {!loading && country !== "Israel" && <Fragment>
            <h1 className="mb-2">{strings.english.Hero.title}</h1>
            <h2 className="mb-2 text-left">{strings.english.Hero.NoFormsFound}</h2>
            <NewsletterForm subtitle={strings.english.Common.PrivacyPolicy} />
        </Fragment>}
    </div>
}

export default Hero;