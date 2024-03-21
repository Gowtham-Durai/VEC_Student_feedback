function displayContent(str,idx){
  
  if(idx==0 || idx%6==0)
      return( <tr key={idx}>
               <td><b>{str}</b></td>
                </tr>)
  else 
      return (<tr key={idx}>
        <td><tt>{str}</tt></td>
        <td className=" text-center"><select  className="border-2 border-orange-500 w-16"></select></td>
        </tr>)
}

export default function StudentFeedback(){

    const contents=[
      "1. PLANNING AND ORGANISATION",
"1.1 Teacher Comes to the class in time",
"1.2 Teaching is well planned",
"1.3 Aims/Objectives made clear",
"1.4 Subject matter organised in logical sequence",
"1.5 Teacher comes Well prepared in the Subject",

"2. PRESENTATION / COMMUNICATION",
"2.1 Teacher speaks clearly and audibly",
"2.2 Teacher writes and draws legibly",
"2.3 Teacher provides examples of concepts / principles explanations are clear and effective",
"2.4 Teacher's pace and level of institution are suited to the attainment of students",
"2.5 Teacher offers assistance and counselling to the needy students",

"3. STUDENTS PARTICIPATION",
"3.1 Teacher asks questions to promote interaction and reflective thinking",
"3.2 Teacher encourages questioning / raising doubts by students and answers them well",
"3.3 Teacher enxures learner activity and problem solving ability in the class",
"3.4 Teacher encourages, compliments and praises originality and creativity displayed by the students",
"3.5 Teacher is courteous and impartial in dealing with the students",

"4. CLASS MANAGEMENT / ASSESSMENT OF STUDENT",
"4.1 Teacher engages classes regularly and maintains discipline",
"4.2 Teacher covers the syllabus completely and at appropriate pace",
"4.3 Teacher hold tests regularly which are helpful to students in building up confidence in their acquistion and application of knowledge",
"4.4 Teacher's evaluation of scripts is fair and impartial",
"4.5 Teacher is prompt in valuing and returning the answer scripts"
    ]


    return (<>
<div className=" feedback-table p-10 pt-5">
  <table className="w-full border-2  border-orange-500 border-collapse">
      <thead className="border-3 border-orange-600 ">
          <tr>
            <th className="w-4/5 ">Subjects</th>
            <th>Rating</th>
          </tr>
      </thead>
      <tbody>
        {contents.map((str,idx)=>{
          return displayContent(str,idx);
        })}
      </tbody>
  </table>
</div>
    </>);
}