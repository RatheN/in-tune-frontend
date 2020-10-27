import React from 'react'
import {connect} from 'react-redux'
import {addArtist} from '../actions/addArtist'

class ArtistInput extends React.Component {

    state = {name: '',
    genre: ''
}

    change = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addArtist(this.state)
        this.setState({
            name: '',
            genre: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label className="label">Name of the Artist: </label>
                        <div className="control">
                            <input className="input" type='text' placeholder="Name" value={this.state.name} name="name" onChange={this.change}/><br/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Artist's Genre: </label>
                        <div className="control">
                            <input className="input" type='text' placeholder="Genre" value={this.state.genre} name="genre" onChange={this.change}/><br/>
                        </div>
                    </div>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addArtist})(ArtistInput)