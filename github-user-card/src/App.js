import React from 'react';
import axios from 'axios';
import User from './components/User'
import styled from 'styled-components'

class App extends React.Component {

    //initial state (of ALL our data, so array)
    state = {
        data: [],
        followersData: []
    }

    // cDM with axios call
    componentDidMount() {
        axios
        .get("https://api.github.com/users/jameswhite1911")
        .then(res => {
            this.setState({
                data: res.data
            })
        })
        .catch(err => {console.log(err)})

        axios
        .get("https://api.github.com/users/jameswhite1911/followers")
        .then(res => {
            this.setState({
                followersData: res.data[0]
            })
        })
        .catch(err => {console.log(err)})
    }

    //cDU if we want to change on update

    //handleChanges
    // handleChanges = e => {
    //     this.setState({

    //     })
    // }

    //handleSubmit
    // handleSubmit = e => {
    //     e.preventDefault();
    //     axios
    //     .get("https://api.github.com/users/jameswhite1911")
    //     .then(res => {console.log(res)}) //set state in here
    //     .catch(err => {console.log(err)})
    // }

    //render
    render() {
        console.log('rendering');
        return (
            <StyledDiv className="App">
                <h1>Github User Cards</h1>
                <User className="user" data={this.state.data} followersData={this.state.followersData}/>
            </StyledDiv>
        )
    }
}

export default App;

const StyledDiv = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: center;

 .user {
     border: 2px solid black;
     border-radius: 15px;
     padding: 2px 10px 2px 10px;
}

`