import React, {useEffect,useState} from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions,setQuestions] = useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(r=>r.json())
    .then(questions => setQuestions(questions))
    .catch(error=>console.log(error))
  },[])
  function updateQuestions(newQuestion){
    setQuestions([...questions,newQuestion])
  }
  function deleteItem(itemId){
    setQuestions(questions.filter(question => question.id !== itemId))
  }
  function changeItem(item) {
    setQuestions(questions.map(question=> {
      if (question.id === item.id) {
        return item
      }
      return question
    }))
  }
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
        <QuestionForm updateQuestions={updateQuestions}  /> : 
        <QuestionList questions={questions} deleteItem={deleteItem} changeItem={changeItem} />}
    </main>
  );
}

export default App;
