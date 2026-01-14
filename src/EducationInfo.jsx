import "./App.css";

function EducationInfo({ school, setSchool, degree, setDegree, schoolCompletedDate, setSchoolCompletedDate }) {
    return (
        <>
            <h3>Education</h3>
            <div className="educationContainer">
                <p>Enter the name of your school:</p>
                <input
                type="text"
                value={school}
                onChange={(event) => setSchool(event.target.value)}
                />

                <p>Enter the name of your degree:</p>
                <input
                type="text"
                value={degree}
                onChange={(event) => setDegree(event.target.value)}
                />

                <p>Enter the date you completed/expected to complete your degree: (Month 20XX)</p>
                <input
                type="text"
                value={schoolCompletedDate}
                onChange={(event) => setSchoolCompletedDate(event.target.value)}
                />
            </div>
        </>
    );
}

export default EducationInfo;