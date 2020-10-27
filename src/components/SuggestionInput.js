import React from 'react'
import {connect} from 'react-redux'
import {addSuggestion} from '../actions/addSuggestion'

class SuggestionInput extends React.Component {

    state = {
        artist_suggestion: '',
        notable_songs: '',
        description: ''
    }
    
    change = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }
    
    submit = (event) => {
        event.preventDefault()
        this.props.addSuggestion(this.state, this.props.artist.id)
        this.setState({
            artist_suggestion: '',
            notable_songs: '',
            description: ''
        })
    }

    render() {
        return (
            <div className="content" style={{padding: '20px'}}>
                <h1 className="title is-3">Suggest an Artist for {this.props.artist ? this.props.artist.name : null}: </h1>
                <div className="box" style={{padding: '10px'}}>

                <form onSubmit={this.submit}>
                    <div className="field">
                        <label className="label">Artist Suggestion:</label>
                        <div className="control">
                            <input className="input" type="text" name="artist_suggestion" value={this.state.artist_suggestion} onChange={this.change}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Notable Songs:</label>
                        <div className="control">
                            <input className="input" type="text" name="notable_songs" value={this.state.notable_songs} onChange={this.change}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Description:</label>
                        <div className="control">
                            <input className="input" type="text" name="description" value={this.state.description} onChange={this.change}/>
                        </div>
                    </div>
                    <input type="submit"/>
                </form>

                </div>
            </div>
        )
    }
}


export default connect(null, {addSuggestion})(SuggestionInput)