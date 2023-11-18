import data from '../data.json';
import { useState } from 'react';

export default function MyProjects() {
  const [index, setIndex] = useState(0);
  

  function handleClick() {
    if (index < data.projects.length - 1) {
      setIndex(index + 1);
    }
    else {
      setIndex(0);
    }
  };
  
  let year = data.worldCups[index].year;
  let host = data.worldCups[index].host;
  let champion = data.worldCups[index].champion;
  let runnerUp = data.worldCups[index].runnerUp;
  let image = data.worldCups[index].image;

  return (
    <div>

      <button onClick={handleClick}>
        Next
      </button>

      <h2>World Cups</h2>

        <div>Year: {year}</div>
        <div>Host: {host}</div>
        <div>Champion: {champion}</div>
        <div>Runner-Up: {runnerUp}</div>
    
      <img src={ image}></img>

    </div>
  );

}