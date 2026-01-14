import "./App.css";

function ExperienceInfo({ companyName, setCompanyName, positionTitle, setPositionTitle, responsibilities, setResponsibilities, startDate, setStartDate, endDate, setEndDate }) {
    return (
        <>
            <h3>Experience</h3>
            <div className="experienceContainer">
                <p>Enter the name of the company:</p>
                <input
                    type="text"
                    value={companyName}
                    onChange={(event) => setCompanyName(event.target.value)}
                />

                <p>Enter the title of the position:</p>
                <input
                    type="text"
                    value={positionTitle}
                    onChange={(event) => setPositionTitle(event.target.value)}
                />

                <p>Enter the start date (Month 20XX):</p>
                <input
                    type="text"
                    value={startDate}
                    onChange={(event) => setStartDate(event.target.value)}
                />

                <p>Enter the end date (Month 20XX):</p>
                <input
                    type="text"
                    value={endDate}
                    onChange={(event) => setEndDate(event.target.value)}
                />

                <p>Enter the job responsibilities:</p>
                <input
                    className="tall"
                    type="text"
                    value={responsibilities}
                    onChange={(event) => setResponsibilities(event.target.value)}
                />
            </div>
        </>
    );
}

export default ExperienceInfo;