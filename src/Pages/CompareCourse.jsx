import React from 'react';
// import './ComparisonTable.css'; // Link to your CSS file

const CompareCourse = () => {
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
            <th>MSc Business Innovation and Entrepreneurship</th>
            <th>MSc Business Innovation and Entrepreneurship</th>
            <th>MSc Business Innovation and Entrepreneurship</th>
            <th>MSc Business Innovation and Entrepreneurship</th>
            <th>MSc Business Innovation and Entrepreneurship</th>
          </tr>
        </thead>
        <tbody>
          {/* Each row of comparison data */}
          <tr>
            <td>Program Name</td>
            <td>MSc Business Innovation and Entrepreneurship</td>
            <td>MSc Business Innovation and Entrepreneurship</td>
            <td>MSc Business Innovation and Entrepreneurship</td>
            <td>MSc Business Innovation and Entrepreneurship</td>
            <td>MSc Business Innovation and Entrepreneurship</td>
          </tr>
          <tr>
            <td>University Name</td>
            <td><img style={{width:"50px",height:"50px"}} src='/f7buildingcolumns.svg' alt='icon'/> University of Bristol</td>
            <td><img style={{width:"50px",height:"50px"}} src='/f7buildingcolumns.svg' alt='icon'/> University of Bristol</td>
            <td><img style={{width:"50px",height:"50px"}} src='/f7buildingcolumns.svg' alt='icon'/> University of Bristol</td>
            <td><img style={{width:"50px",height:"50px"}} src='/f7buildingcolumns.svg' alt='icon'/> University of Bristol</td>
            <td><img style={{width:"50px",height:"50px"}} src='/f7buildingcolumns.svg' alt='icon'/> University of Bristol</td>
          </tr>
          <tr>
            <td>Website Url</td>
            <td>loremipsumdolorsitamet.....Bristol, United Kingdom</td>
            <td>loremipsumdolorsitamet.....Bristol, United Kingdom</td>
            <td>loremipsumdolorsitamet.....Bristol, United Kingdom</td>
            <td>loremipsumdolorsitamet.....Bristol, United Kingdom</td>
            <td>loremipsumdolorsitamet.....Bristol, United Kingdom</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>Bristol, United Kingdom</td>
            <td>Bristol, United Kingdom</td>
            <td>Bristol, United Kingdom</td>
            <td>Bristol, United Kingdom</td>
            <td>Bristol, United Kingdom</td>
          </tr>
          <tr>
            <td>Program Level</td>
            <td>Postgraduate</td>
            <td>Postgraduate</td>
            <td>Postgraduate</td>
            <td>Postgraduate</td>
            <td>Postgraduate</td>
          </tr>
          <tr>
            <td>Duration</td>
            <td>16 Months</td>
            <td>16 Months</td>
            <td>16 Months</td>
            <td>16 Months</td>
            <td>16 Months</td>
          </tr>
          <tr>
            <td>Intakes</td>
            <td>September</td>
            <td>September</td>
            <td>September</td>
            <td>September</td>
            <td>September</td>
          </tr>
          <tr>
            <td><img style={{width:"50px",height:"50px",marginRight:"5px"}} src='/image-132@2x.png' alt='icon'/>QS Ranking</td>
            <td>61</td>
            <td>61</td>
            <td>61</td>
            <td>61</td>
            <td>61</td>
          </tr>
          <tr>
            <td><img style={{width:"50px",height:"50px",marginRight:"5px"}} src='/frame-1686561342.svg' alt='icon'/>The Ranking</td>
            <td>61</td>
            <td>61</td>
            <td>61</td>
            <td>61</td>
            <td>61</td>
          </tr>
          <tr>
            <td>Requirenments</td>
            <td> IELTS Overall : 6.5<br/>
                 IELTS no Band less than : 6<br/>
                 TOEFL iBT Overall : 90<br/>
                 TOEFL iBT no Band less than : 20<br/>
                 PTE Overall : 90<br/>
                 PTE no Band less than : 60<br/>
            </td>
            <td> IELTS Overall : 6.5<br/>
                 IELTS no Band less than : 6<br/>
                 TOEFL iBT Overall : 90<br/>
                 TOEFL iBT no Band less than : 20<br/>
                 PTE Overall : 90<br/>
                 PTE no Band less than : 60<br/>
            </td>
            <td> IELTS Overall : 6.5<br/>
                 IELTS no Band less than : 6<br/>
                 TOEFL iBT Overall : 90<br/>
                 TOEFL iBT no Band less than : 20<br/>
                 PTE Overall : 90<br/>
                 PTE no Band less than : 60<br/>
            </td>
            <td> IELTS Overall : 6.5<br/>
                 IELTS no Band less than : 6<br/>
                 TOEFL iBT Overall : 90<br/>
                 TOEFL iBT no Band less than : 20<br/>
                 PTE Overall : 90<br/>
                 PTE no Band less than : 60<br/>
            </td>
            <td> IELTS Overall : 6.5<br/>
                 IELTS no Band less than : 6<br/>
                 TOEFL iBT Overall : 90<br/>
                 TOEFL iBT no Band less than : 20<br/>
                 PTE Overall : 90<br/>
                 PTE no Band less than : 60<br/>
            </td>
          </tr>
          <tr>
            <td>Application Fee</td>
            <td>NIL</td>
            <td>NIL</td>
            <td>NIL</td>
            <td>NIL</td>
            <td>NIL</td>
          </tr>
          <tr>
            <td>Tution Fee</td>
            <td>$ 30,000</td>
            <td>$ 30,000</td>
            <td>$ 30,000</td>
            <td>$ 30,000</td>
            <td>$ 30,000</td>
          </tr>
          <tr>
            <td>Scholarship</td>
            <td>No</td>
            <td>Yes</td>
            <td>No</td>
            <td>Yes</td>
            <td>No</td>
          </tr>
          {/* ... more rows based on your comparison points */}
        </tbody>
      </table>
    </div>
  );
};

export default CompareCourse;
