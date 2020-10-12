import React, { Component } from "react";
import Customer from "./components/Customer";
import "./App.css";

const customers = [
  {
    'id': 1,
    'image': "https://placeimg.com/64/64/1",
    'name': "신승철",
    'birthday': "961222",
    'gender': "남자",
    'job': "대학생",
  },
  {
    'id': 2,
    'image': "https://placeimg.com/64/64/2",
    'name': "홍길동",
    'birthday': "951215",
    'gender': "남자",
    'job': "개발자",
  },
  {
    'id': 3,
    'image': "https://placeimg.com/64/64/3",
    'name': "이순신",
    'birthday': "821224",
    'gender': "남자",
    'job': "디자이너",
  },
];

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c=>{// function item(c){
            return (
              <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.gender}
              gender={c.gender}
              job={c.job}></Customer>
            )
          })
        }
      </div>
    );
  }
}

export default App;
