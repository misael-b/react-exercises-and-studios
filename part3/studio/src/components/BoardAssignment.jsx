import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      { "label": "Thanksgiving Dinner dessert", "value": "Thanksgiving Dinner dessert" },
      { "label": "Fourth of July Barbecue dessert", "value": "Fourth of July Barbecue dessert" },
      { "label": "Party dessert", "value": "Party dessert" }
   ];

   const listOfBoards = (props) => {
      return props.map((boardValue) => <option value={boardValue.value}> {boardValue.label }</option >);
   };

   const [boardName, setName] = useState('no boards yet');


   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
         <select value={boardName} onChange={handleChange}>
            <option value="">* Select A Board *</option>
            {listOfBoards(boards)}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
