import React from "react";

const List = ({ people }) => {
  
  return (
    <>
      {people.map((person) => {
        // const {id, name, age, image} = person;
        return (
          <article key={person.id} className="person">
            <div className="main_div">
              <img
                className="person_image"
                src={person.image}
                alt={person.name}
              />
            </div>
            <div className="name_age_box">
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
