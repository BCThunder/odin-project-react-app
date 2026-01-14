function ResumeDisplay({ submitted, fullName, phoneNumber, email, school, degree, schoolCompletedDate, companyName, positionTitle, responsibilities, startDate, endDate }) {
    if (!submitted) {
        return (
            <div className="resumeDisplay">
                <p>No resume submitted yet.</p>
            </div>
        );
    }

    console.log("Resume submitted!");
    return (
        <div className="resumeDisplay">
            <div className="resumeHeader">
                <h2>{fullName}</h2>
                <p>{phoneNumber} | {email}</p>
            </div>

            <div className="resumeEducation">
                <h3 className="resumeSectionHeader">Education</h3>
                <div className="resumeTitle">
                    <p><strong>{degree}</strong>, {school}</p>
                    <p>{schoolCompletedDate}</p>
                </div>
            </div>

            <div className="resumeExperience">
                <h3 className="resumeSectionHeader">Experience</h3>
                <div className="resumeTitle">
                    <p><strong>{positionTitle}</strong> | {companyName}</p>
                    <p>{startDate} — {endDate}</p>
                </div>
                <p>{responsibilities}</p>
            </div>
        </div>
    );
}

export default ResumeDisplay;