import React from 'react';

export default function List({ info, futureBirthday }) {
  return (
    <>
      <ul>
        {iterate(info, futureBirthday)}
      </ul>
    </>
  );
}

function iterate(data, flag) {
  if (!data) return;
  const bgColor = flag ? { backgroundColor: "#FFFF00" } : {};
  return (
    <>
      {data.map((person, index) => (
        <li key={index} style={bgColor}>
          <div className="flex">
            <img src={person.img} alt="img" />
            <div className="title">
              <h3 className="name">{person.name}</h3>
              <h5 className="age">{CalculateAge(person.birthday)} years</h5>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}

// for calculating age
function CalculateAge(birthday) {
  let birthYear = new Date(birthday).getFullYear();
  let currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}
