import React from 'react'
import {Link} from 'react-router-dom'

const Artists = (props) => {

    props.artists.sort((a, b) => (a.name > b.name) ? 1 : -1)

    return (
        <div className="content" style={{padding: '20px'}}>
            <h1 className="title is-3">Artists:</h1>
            <div className='box' style={{padding: '10px', background: '#00d1b2' }}>
                {props.artists.map(artist =>
                    <div key={artist.id}>
                        <Link to={`/artists/${artist.id}`} style={{color: "black"}}>{artist.name}</Link>
                    </div> )}
            </div>
            <div className="link">Can't find the artist you're looking for? <Link to='/artists/new'> Click Here To Add An Artist.</Link></div>
        </div>
    )
}

export default Artists