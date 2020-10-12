import React, { Component } from "react";
import Customer from "./components/Customer";
import "./App.css";
import Paper from "@material-ui/core/Paper"
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {withStyles} from '@material-ui/core/styles'


const styles = theme => ({
  root:{
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX:"auto"
  },
  table:{
    minWidth:1080
  }
})

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "신승철",
    birthday: "961222",
    gender: "남자",
    job: "대학생",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "홍길동",
    birthday: "951215",
    gender: "남자",
    job: "개발자",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "이순신",
    birthday: "821224",
    gender: "남자",
    job: "디자이너",
  },
];

class App extends Component {

  state={
    customers: ""
  }

  //컴포넌트가 모두 마운트가 되었을때 실행된다.
  componentDidMount(){
    this.callApi()
      .then(res => this.setState({customers:res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers ? this.state.customers.map((c) => {
              // function item(c){
              return (
                <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.gender} gender={c.gender} job={c.job}></Customer>
              );
            }) : ""}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App) ;
