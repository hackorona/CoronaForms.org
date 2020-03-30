export default ({ title, subtitle, buttons }) => {
    return <div>
        <div style={{ margin: "auto", maxWidth: 670, fontWeight: "bold", fontSize: 39, lineHeight: "50px" }}>{title}</div>
        <div className="mt-2" style={{ maxWidth: 670, margin: "auto", marginTop: 26 }}>{subtitle}</div>

        <div style={{ marginTop: 26 }}>
            {buttons}
        </div>
    </div>
}