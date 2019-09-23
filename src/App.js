import React, { Component } from 'react'
import Prefetch, { EVENTS } from 'hh-prefetch'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      imageUrl: null,
      image: null
    }
  }
  componentDidMount() {
    const params = {
      url: 'https://cloudfront.htelerad.com',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJoZWFsdGhodWIiLCJleHAiOjE1Njg4MDc4NjcsInVzZXIiOiJ7XCJyb2xlc1wiOltcImRlZmF1bHRcIixcImVkaXRvclwiXSxcIm5hbWVcIjpcIkhNX01BTkFHRVJcIixcImlkXCI6XCI1NmNmZTAxMGU0YjA5Y2YwN2EwZDAxZGNcIixcImVtYWlsXCI6XCJtYW5hZ2VyQHJhZG5ldC5rclwifSJ9.dUZa9bd5m78VlzXCS5q9ITjx-JuCctMB--sgCXG71us',
    };

    const prefetch = Prefetch.create(params);
    const image = {
        id: 1,
        index: 0,
        path: 'raw/20190315/raw_5c8b6ec4e4b01de6a1df0acbb1cda8fe-4703-11e9-a12c-0267f71daa3f-NzZlMzk3ZDY6MTY5ODA4MzEyZTE6NjcxMw==',
        thumb: 'thumbnail_base/20190315/thumbnail_base_5c8b6ec4e4b01de6a1df0acbb1cda8fe-4703-11e9-a12c-0267f71daa3f-NzZlMzk3ZDY6MTY5ODA4MzEyZTE6NjcxMw==',
        series: 1,
        study: 1
      }
    prefetch.add(image);
    prefetch.on(EVENTS.IMAGE_DONE, image => {
      this.setState({image: image});
      console.log('imgae: ', this.state.image)
    });
  }
  // getImage() {
  //   let blob = new Blob( [ this.state.imageUrl ], { type: "image/jpeg" } );
  //   let urlCreator = window.URL || window.webkitURL;
  //   this.setState({imageUrl: urlCreator.createObjectURL( blob )});
  // }

  render() {
    return (
      <div className="container">
      {/* <button onClick={()=> this.getImage()}>login</button>
        {this.state.imageUrl}
        <img src={this.state.imageUrl}/> */}
        example
      </div>
    )
  }
}