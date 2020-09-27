import React from 'react'
import "./css/area.css"
import { MDBDataTableV5 } from 'mdbreact';

class AreaTablas extends React.Component {
    render() {
        return (
            <div>
                <div className='areaTabla'>
                <MDBDataTableV5
                        hover
                        entriesOptions={[5, 20, 25]}
                        entries={5}
                        pagesAmount={4}
                        data={this.props.Datos}
                        className='tabla'
                        />
                        
                </div>
            </div>
        )
    }
}

export default AreaTablas