import React from 'react';
import { useLocation } from 'react-router-dom';
// import './ComparisonTable.css'; // Link to your CSS file

const CompareCourse = () => {
  const location=useLocation();
  const coursesIdArray=location?.state;
  console.log(coursesIdArray,'coursesIdArray');
  return (
    <div className="comparison-table-container">
     <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
  <img style={{ width: "80px", height: "80px" }} src='/frame-1686561276-3.svg' alt="Icon" />
  <h1 className="comparison-table-title font-gilroy-bold" style={{ fontWeight: "700", fontSize: "24px" ,marginTop:"10px"}}>
    Courses Comparison
  </h1>
</div>

      <table className="comparison-table">
        {/* Table headers */}
        <thead>
          <tr>
            <th>Criteria</th>
            <th>{coursesIdArray[0]?.courseName||'--'}</th>
            <th>{coursesIdArray[1]?.courseName||'--'}</th>
            <th>{coursesIdArray[2]?.courseName||'--'}</th>
            <th>{coursesIdArray[3]?.courseName||'--'}</th>
            <th>{coursesIdArray[4]?.courseName||'--'}</th>
          </tr>
        </thead>
        <tbody>
          {/* Each row of comparison data */}
     
          <tr>
            <td>University Name</td>
            <td><img style={{width:"35px",height:"35px",borderRadius:"50%"}} src={coursesIdArray[0]?.courseLogo} alt='icon'/> {coursesIdArray[0]?.universityName||'--'}</td>
            <td><img style={{width:"35px",height:"35px",borderRadius:"50%"}} src={coursesIdArray[1]?.courseLogo} alt='icon'/> {coursesIdArray[1]?.universityName||'--'}</td>
            <td><img style={{width:"35px",height:"35px",borderRadius:"50%"}} src={coursesIdArray[2]?.courseLogo} alt='icon'/> {coursesIdArray[2]?.universityName||'--'}</td>
            <td><img style={{width:"35px",height:"35px",borderRadius:"50%"}} src={coursesIdArray[3]?.courseLogo} alt='icon'/> {coursesIdArray[3]?.universityName||'--'}</td>
            <td><img style={{width:"35px",height:"35px",borderRadius:"50%"}} src={coursesIdArray[4]?.courseLogo} alt='icon'/> {coursesIdArray[4]?.universityName||'--'}</td>
          </tr>
          <tr>
            <td>Study Mode</td>
            <td>{coursesIdArray[0]?.uniqueCourseInfo?.studyMode||'--'}</td>
            <td>{coursesIdArray[1]?.uniqueCourseInfo?.studyMode||'--'}</td>
            <td>{coursesIdArray[2]?.uniqueCourseInfo?.studyMode||'--'}</td>
            <td>{coursesIdArray[3]?.uniqueCourseInfo?.studyMode||'--'}</td>
            <td>{coursesIdArray[4]?.uniqueCourseInfo?.studyMode||'--'}</td>
          </tr>

          <tr>
            <td>Program Level</td>
            <td>{coursesIdArray[0]?.level||'--'}</td>
            <td>{coursesIdArray[1]?.level||'--'}</td>
            <td>{coursesIdArray[2]?.level||'--'}</td>
            <td>{coursesIdArray[3]?.level||'--'}</td>
            <td>{coursesIdArray[4]?.level||'--'}</td>
          </tr>
          <tr>
            <td>Duration</td>
            <td>{coursesIdArray[0]?.uniqueCourseInfo?.duration||'--'}</td>
            <td>{coursesIdArray[1]?.uniqueCourseInfo?.duration||'--'}</td>
            <td>{coursesIdArray[2]?.uniqueCourseInfo?.duration||'--'}</td>
            <td>{coursesIdArray[3]?.uniqueCourseInfo?.duration||'--'}</td>
            <td>{coursesIdArray[4]?.uniqueCourseInfo?.duration||'--'}</td>
          </tr>
        
         
          <tr>
            <td>Requirenments</td>
            <td>{coursesIdArray[0]?.requirements||'--'}</td>
            <td>{coursesIdArray[1]?.requirements||'--'}</td>
            <td>{coursesIdArray[2]?.requirements||'--'}</td>
            <td>{coursesIdArray[3]?.requirements||'--'}</td>
            <td>{coursesIdArray[4]?.requirements||'--'}</td>
          </tr>
          <tr>
            <td>Application Fee</td>
            <td>{coursesIdArray[0]?.uniqueCourseInfo?.applicationFee||'--'}</td>
            <td>{coursesIdArray[1]?.uniqueCourseInfo?.applicationFee||'--'}</td>
            <td>{coursesIdArray[2]?.uniqueCourseInfo?.applicationFee||'--'}</td>
            <td>{coursesIdArray[3]?.uniqueCourseInfo?.applicationFee||'--'}</td>
            <td>{coursesIdArray[4]?.uniqueCourseInfo?.applicationFee||'--'}</td>
          </tr>
          <tr>
            <td>Tution Fee</td>
            <td>$ {coursesIdArray[0]?.uniqueCourseInfo?.fee||'--'}</td>
            <td>$ {coursesIdArray[1]?.uniqueCourseInfo?.fee||'--'}</td>
            <td>$ {coursesIdArray[2]?.uniqueCourseInfo?.fee||'--'}</td>
            <td>$ {coursesIdArray[3]?.uniqueCourseInfo?.fee||'--'}</td>
            <td>$ {coursesIdArray[4]?.uniqueCourseInfo?.fee||'--'}</td>
          </tr>
          <tr>
            <td>Application Deadline</td>
            <td>{coursesIdArray[0]?.uniqueCourseInfo?.applicationDeadline?.split('T')[0]||'--'}</td>
            <td>{coursesIdArray[1]?.uniqueCourseInfo?.applicationDeadline?.split('T')[0]||'--'}</td>
            <td>{coursesIdArray[2]?.uniqueCourseInfo?.applicationDeadline?.split('T')[0]||'--'}</td>
            <td>{coursesIdArray[3]?.uniqueCourseInfo?.applicationDeadline?.split('T')[0]||'--'}</td>
            <td>{coursesIdArray[4]?.uniqueCourseInfo?.applicationDeadline?.split('T')[0]||'--'}</td>
          </tr>
          {/* ... more rows based on your comparison points */}
        </tbody>
      </table>
    </div>
  );
};

export default CompareCourse;
