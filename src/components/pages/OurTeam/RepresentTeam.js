import React from 'react'
import * as data from './data'
import { default as Avatar } from './Avatar'

class Team extends React.Component {

    constructor(props) {
        super(props)
    }

    chunkArray(arr, size) {
        let i, j, temparry = []
        for (i = 0, j = arr.length; i < j;i += size)
            temparry.push(arr.slice(i, i + size))

        return temparry
    }

    render() {
        let chunkedAvatarsList = this.chunkArray(data.avatarsList, 3)
        
        return (
            <div>
                <div className="headtext">
                    <row>
                        <div className="col-md-12">
                            <div className="offset-col-md-4">
                                <h1><b>{data.headRepresentTeam.head}</b></h1>
                            </div>
                            <div className="offset-col-md-4">
                                <h4>{data.headRepresentTeam.body}</h4>
                            </div>
                        </div>
                    </row>
                </div>
                <div className="container-fluid avatars">
                    <div className="col-md-12">
                        {
                            chunkedAvatarsList.map((group) => {
                                return (
                                    <row>
                                        {
                                            group.map((ele) => {
                                                return <Avatar _id={ele._id} name={ele.name} picture={ele.picture} position={ele.position} />
                                            })
                                        }
                                    </row>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
                
    }
}

export default Team