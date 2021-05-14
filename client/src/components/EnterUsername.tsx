import React from 'react'

const EnterUsername = (props: {handleConnection: Function, username: string, setUsername: Function}) => {
    return (
        <form className="enter-username-form" onSubmit={e => {
            e.preventDefault();
            props.handleConnection();
        }}>
            <input 
                type="text" 
                value={props.username} 
                onChange={e => props.setUsername(e.target.value)} 
                placeholder="Enter a username..."
                required={true}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default EnterUsername
