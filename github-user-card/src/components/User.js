import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

function User(props) {
    return (
        <>
            <StyledDiv key={props.data.id} className="user">
                <div>
                    <h3>{props.data.name}</h3>
                    <h3>{props.followersData.login}</h3>
                </div>
            </StyledDiv>
        </>
    )
}

export default User;


const StyledDiv = styled.div`
h3 {
    border: 2px solid black;
    padding: 2px 10px 2px 10px;
    display: flex;
    flex-flow: column nowrap;
    align-items:center;
}

`