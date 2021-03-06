import React, {Component} from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import axios from 'axios'
import moment from 'moment'
import {Button, Image} from 'react-bootstrap'


class AllTime extends Component{
	constructor(props){
		super(props)

		this.state = {
			thirtyDay: []
		}
	}

	componentWillMount(){
		this.fetchData()
	}

	fetchData(){
		const FETCH_URL="https://fcctop100.herokuapp.com/api/fccusers/top/alltime"
		const people = []
		axios.get(FETCH_URL).then(response => response.data.map((dataInside, idx)=>{
			

			people.push({place: idx+1, username: dataInside.username, recent: dataInside.recent, alltime: dataInside.alltime, lastUp: dataInside.lastUpdate, img: dataInside.img})
			this.setState({thirtyDay: people})
		}))

		
		
	}

	componentDidMount(){
		
	}

	imageFormatter(cell, row){
      return (<Image style={{maxHeight:"35px"}}src={cell} responsive/>)
    }
    dateFormatter(cell,row){
    	return(moment(cell).calendar())
    }

	render(){
		var dataF= this.state.thirtyDay
		return(
			<div>
					
					<BootstrapTable  data={dataF}  striped={true} search={true} options={ { noDataText: 'Loading Latest Leadboard. Please wait...' } }   hover={'true'} center pagination>
						<TableHeaderColumn headerAlign='center' dataAlign="center" width="70px" isKey dataField="place" dataSort={true}>Place</TableHeaderColumn>
						<TableHeaderColumn headerAlign='center' dataAlign="center"  width="40"dataField="img" dataFormat={this.imageFormatter}></TableHeaderColumn>
						<TableHeaderColumn headerAlign='center' dataAlign="center" dataField="username" dataSort={true}>Username</TableHeaderColumn>
						<TableHeaderColumn headerAlign='center' dataAlign="center"  dataField="recent" dataSort={true}>Last 30</TableHeaderColumn>
						<TableHeaderColumn headerAlign='center' dataAlign="center"  dataField="alltime" dataSort={true}>All-Time</TableHeaderColumn>
						<TableHeaderColumn headerAlign='center' dataAlign="center"  dataField="lastUp" dataFormat={this.dateFormatter} dataSort={true}>Last Updated</TableHeaderColumn>
					</BootstrapTable>
			</div>

		)
	}
}

export default AllTime
