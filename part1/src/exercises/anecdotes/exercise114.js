import { useState } from "react";

const Anecdote114 = () => {
  const anecdotes = [
    "If doing something hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90% of the code accounts for the first 10% of the development time... The remaining 10% of the code accounts for the remaining 90% of the time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. So if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without intensive use of console.log is like a doctor refusing to use X-rays or blood tests when diagnosing patients.",
    "The only way to go fast is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleAnecdote = () => {
    const randomNumers = Math.floor(Math.random() * 8);
    setSelected(randomNumers);
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const maxVotes = Math.max(...votes);
  const mostVotedIndex = votes.indexOf(maxVotes);

  const mostVotedAnecdote = anecdotes[mostVotedIndex];

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleAnecdote}>Next anecdote</button>

      <h2>Anecdote with most votes</h2>
      <p>{mostVotedAnecdote}</p>
      <p>Has {votes[mostVotedIndex]} votes</p>
    </div>
  );
};

export default Anecdote114;
