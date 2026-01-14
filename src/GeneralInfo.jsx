import "./App.css";

function GeneralInfo({ fullName, setFullName, phoneNumber, setPhoneNumber, email, setEmail }) {
    return (
        <>
            <h3>General Information</h3>
            <div className="generalInfoContainer">
                <p>Enter your first and last name:</p>
                <input
                type="text"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                />

                <p>Enter your phone number:</p>
                <input
                type="text"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                />

                <p>Enter your email:</p>
                <input
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                />
            </div>
        </>
    );
}

export default GeneralInfo;