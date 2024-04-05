import QuestionItem from "./QuestionItem";

function QuestionList({questions,deleteItem,changeItem}) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question => (
      <QuestionItem 
      key={question.id}
      question={{...question,deleteItem,changeItem}}
      />))}</ul>
    </section>
  );
}

export default QuestionList;
