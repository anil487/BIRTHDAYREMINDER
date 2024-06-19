import React from 'react';
import "../CSS/Board.css";
import List from './list';

const info = [
  {
    img: "https://i.imgur.com/Tmkkdfc.jpg",
    name: "Anil",
    birthday: "2000-06-19"
  },
  {
    img: "https://i.imgur.com/ZH5D1D4.jpg",
    name: "Aneel",
    birthday: "2000-09-10"
  },
  {
    img: "https://i.imgur.com/2itJ9cT.jpeg",
    name: "nikin",
    birthday: "2000-06-19"
  },
  {
    img: "https://i.imgur.com/ZJKMrBP.jpeg",
    name: "Rajiv",
    birthday: "2000-08-19"
  },
  {
    img: "https://i.imgur.com/J5cQPGU.jpeg",
    name: "Aashish",
    birthday: "1998-07-09"
  }
];

export default function Board() {
  return (
    <main id='site-main'>
      <h1 className='text-dark title'>BIRTHDAY REMINDER APP</h1>
      <div className='board'>
        <List info={Today(info)} />
        <h2 className='futureBirthday'>Future Birthday</h2>
        <List info={futureBirthday(info, 3)} futureBirthday={true} />
      </div>
    </main>
  );
}

function Today(person) {
  let currentDay = new Date().getDate();
  let currentMonth = new Date().getMonth();

  let filter = person.filter(data => {
    let day = new Date(data.birthday).getDate();
    let month = new Date(data.birthday).getMonth();

    return currentDay === day && currentMonth === month;
  });

  return filter;
}

// future birthday
function futureBirthday(person, twoMonths) {
  let currentMonth = new Date().getMonth();
  let currentDay = new Date().getDate();

  let filter = person.filter(data => {
    let month = new Date(data.birthday).getMonth();
    let day = new Date(data.birthday).getDate();

    if (currentDay === day) return false;

    return month >= currentMonth && month <= currentMonth + twoMonths;
  });
  return filter;
}
