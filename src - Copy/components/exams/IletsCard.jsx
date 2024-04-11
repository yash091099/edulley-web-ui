import React from "react";

const IletsCard = () => {
  return (
    <div className="course_card mt-0" style={{ backgroundColor: "#f3f3f3" }}>
      <div>
        <h4 className="fw-semibold">Overview</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis
          dui nec neque rutrum bibendum. Donec in ultricies turpis. Fusce
          scelerisque vel nibh eget pellentesque. Ut ac odio sed velit
          pellentesque malesuada. Donec tempor elit quis maximus convallis.
          Phasellus hendrerit nisl felis, et bibendum metus laoreet id. Duis
          ultrices tempor aliquam. Pellentesque luctus a velit eget porttitor
        </p>
      </div>
      <div className="mt-4">
        <h4 className="fw-semibold">Why ILETS</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis
          dui nec neque rutrum bibendum. Donec in ultricies turpis. Fusce
          scelerisque vel nibh eget pellentesque. Ut ac odio sed velit
          pellentesque malesuada. Donec tempor elit quis maximus convallis.
          Phasellus hendrerit nisl felis, et bibendum metus laoreet id. Duis
          ultrices tempor aliquam. Pellentesque luctus a velit eget porttitor.
          Nam eu accumsan urna. In fermentum nulla in quam convallis, in viverra
          justo pulvinar. Quisque volutpat enim vel lectus condimentum, sed
          consectetur mauris lacinia. Ut elementum massa vitae dolor
          sollicitudin, quis faucibus sapien laoreet. Ut arcu purus, varius eget
          elit sed, efficitur finibus purus.
        </p>
      </div>
      
      <div className="mt-4">
        <h4 className="fw-semibold">IELTS Syllabus</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis
          dui nec neque rutrum bibendum. Donec in ultricies turpis. Fusce
          scelerisque vel nibh eget pellentesque. Ut ac odio sed velit
          pellentesque malesuada. Donec tempor elit quis maximus convallis.
          Phasellus hendrerit nisl felis, et bibendum metus laoreet id. Duis
          ultrices tempor aliquam. Pellentesque luctus a velit eget porttitor.
          Nam eu accumsan urna. In fermentum nulla in quam convallis, in viverra
          justo pulvinar. Quisque volutpat enim vel lectus condimentum, sed
          consectetur mauris lacinia. Ut elementum massa vitae dolor
          sollicitudin, quis faucibus sapien laoreet. Ut arcu purus, varius eget
          elit sed, efficitur finibus purus.
        </p>
        <div className="table-container mt-[150px]">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Section</th>
                            <th>Number of Questions and Duration</th>
                            <th>Content</th>
                            <th>Remarks</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td data-label="Section">Listening</td>
                            <td data-label="Number of Questions and Duration">
                              Four recordings, 40 questions, 30 minutes + 10
                              minutes (transfer time)
                            </td>
                            <td data-label="Content">
                              Four recorded monologues and conversations.
                            </td>
                            <td data-label="Remarks">
                              A correct answer is awarded one mark, and the
                              final score is provided as a band score in the
                              range of 1-9.
                            </td>
                          </tr>
                          <tr>
                            <td data-label="Section">Reading</td>
                            <td data-label="Number of Questions and Duration">
                              40 questions <br />
                              60 minutes
                            </td>
                            <td data-label="Content">
                              Three passages which can be analytical, factual,
                              discursive, or descriptive.
                            </td>
                            <td data-label="Remarks">
                              Each correct answer is awarded one mark, and the
                              final score is provided as a band score in the
                              range of 1-9.
                            </td>
                          </tr>
                          <tr>
                            <td data-label="Section">Writing</td>
                            <td data-label="Number of Questions and Duration">
                              60 minutes
                            </td>
                            <td data-label="Content">
                              Task1: Summarize or describe a table, graph,
                              chart, or diagram in at least 150 words.
                              <br />
                              Task2: Short essay task of at least 250 words.
                            </td>
                            <td data-label="Remarks">
                              The contribution of Task 2 is twice that of Task 1
                              in the final writing score.
                            </td>
                          </tr>
                          <tr>
                            <td data-label="Section">Speaking </td>
                            <td data-label="Number of Questions and Duration">
                              11 to 14 minutes{" "}
                            </td>
                            <td data-label="Content">
                              Face-to-face interview with three parts which are
                              recorded.
                              <br />
                              The first part involves answering short questions.
                              <br />
                              The second part involves speaking at length about
                              a general topic, followed by a structured
                              discussion in the third part.
                            </td>
                            <td data-label="Remarks">
                              Each part of the test assesses speaking skills in
                              different ways, like interaction pattern, task
                              input, and test taker output.
                            </td>
                          </tr>
                          {/* Repeat for other rows */}
                        </tbody>
                      </table>
                    </div>
      </div>
      <div className="mt-4">
        <h4 className="fw-semibold">IELTS Preparation</h4>
        <p>
          You should take a practice test because that is the best way to
          identify your weaknesses. It is crucial for students to understand
          what to expect from the test format before they start practicing.
          Reviewing each section's test content, questions, and task types can
          help students become more familiar with it. The last piece of advice
          is to start exam preparation at least three to six months in advance.
          <p>
            Below are a few things you need to keep in mind while preparing for
            the IELTS exam:
          </p>
        </p>
      </div>
      <div className="mt-4">
        <h4 className="fw-semibold">Polish your reading</h4>
        <p>
          The IELTS reading module is challenging not because reading is hard
          but because it necessitates in-depth reading within a constrained time
          frame. For people to succeed in this part, several methods are
          suggested.
        </p>
        <p>
          Some advice reading the questions first, noting the answers as they
          occur in the passage, and then answering them. Another is to read the
          passage's topic, read each paragraph's first and last lines, and then
          go on to the questions to comprehend where the specific answer is
          while reading the complete passage. You must put several methods into
          practice to ascertain which method suits you the best.
        </p>
      </div>
      <div className="mt-4">
        <h4 className="fw-semibold">
          Assess yourself and determine your level
        </h4>
        <p>
          Doing mock tests to find your weaknesses is the first part of
          assessing yourself that you must constantly undergo to direct your
          preparation and revision efforts in the right direction. This is
          helpful when taking a test like the IELTS since it can show you what
          structure to use, what words and vocabulary to use, and how to place
          words in a well-constructed sentence.
        </p>
      </div>
      <div className="mt-4">
        <h4 className="fw-semibold">Focus on skill improvement</h4>
        <p>
          As you have become more fluent in English and improved your language
          proficiency, now is the time to improve your listening abilities by
          becoming accustomed to sound, environment, and speakers. Include your
          friends and family in your plan; let them assist you in identifying
          any potential red flags. It will be easier for you to gain impartial
          knowledge of how you're performing if you have a reliable source of
          feedback.
        </p>
      </div>
      <div className="mt-4">
        <h4 className="fw-semibold">Practice whenever you can</h4>
        <p>
          You can learn numerous words that will help you enhance your spoken
          and listening English by interacting with various types of people.
          Your practice sessions don't have to take place during set hours. Your
          regular routine can include them, making it more interesting,
          enjoyable, and productive.
        </p>
      </div>
    </div>
  );
};

export default IletsCard;
