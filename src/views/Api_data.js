
import React from 'react'
import { Table } from "reactstrap";
import axios from 'axios'

class Api extends React.Component { 
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount(){
    axios.get("https://api.publicapis.org/entries").then((res) => {
      const data = res.data.entries;
      this.setState({ data: data.slice(0, 10) });
    });
  }
  render() {
    return (
      <section className='bg-white' style={{ marginTop: '63px' }}>
        <div className="Api m-5 p-4">
          <Table className='b-1'>
            <tbody>
            <tr style={{ backgroundColor: '#1f1f1f', color: 'white' }}>
                <td>API</td>
                <td>DESCRIPTION</td>
                <td>AUTH</td>
                <td>CORS</td>
                <td>CATEGORY</td>
                <td>LINK</td>
            </tr>
          {
            this.state.data.map((item, key) =>
            
            <tr key = {key}>
                <td> { item.API} </td>
                <td> { item.Description} </td>   
                <td> {item.Auth}</td>
                <td> {item.Cors}</td>
                <td> {item.Category}</td>
                <td> {item.Link}</td>
            </tr>
           )
          
          }
          </tbody>
          </Table>
        </div>
      </section>
    );
  }
}









export default Api;





/*import React,{useEffect,useState} from 'react'
import {Table} from "reactstrap";

class Api extends React.Component {
    constructor(props) {
      super(props);
      this.getdata = this.getdata.bind(this)
      this.state = {
          brand: "Ford",
          data: []
        };
        this.getdata()
    }
     getdata() {
  
        fetch("https://www.boredapi.com/api/activity").then((result)=>
        {
          result.json().then((resp)=>{
            console.log(resp);
            this.setState({
                data:resp
            })
    
          })
        })
    }
    render() {
      return (
        <section className='bg-white' style={{marginTop: '63px'}}>
        <div className="Api m-5 p-4">
      <Table className='b-1'>
       <tbody>
       <tr>
          <td>Activity</td>
          <td>Type</td>
          <td>Participants</td>
          <td>Price</td>
          <td>Key</td>
          <td>Accessibility</td>
        </tr>
        {
        
        <tr>
            <td>{this.state.data.activity}</td>
            <td>{this.state.data.type}</td>
            <td>{this.state.data.participants}</td>
            <td>{this.state.data.price}</td>
            <td>{this.state.data.key}</td>
            <td>{this.state.data.accessibility}</td>
        </tr>
          
        }
       </tbody>
      </Table>
    </div>
    </section>
      );
    }
  }
export default Api;*/
