import React from 'react'
import { connect } from 'react-redux';
import Menu from './Menu'


const ListOfPhotos = (props) => {

    let getLargePhotoUrl = (id) => {
      let largePhotos = props.store.photoList["lg"];
      for ( let prop in largePhotos) {
        if (largePhotos[prop]["id"] === id) {
          return largePhotos[prop]["image_url"];
        }
        
      }
    }

    return (
        <div className="container"
            onClick={() => {
             document.getElementById("imgViewer").setAttribute("src", "" );
             document.getElementById("imgViewer").setAttribute("class", "" );
              }
            }
        >
          <div className="container title">500px popular photo</div>
          <Menu/>
          <div className="flex-container">
            { (() => {
                let photosToShow = [];
                 if (props.store.photoList.hasOwnProperty("sm")){
                    let photos = props.store.photoList["sm"];
                    for ( let prop in photos) {
                      photosToShow.unshift(
                          <div key={prop} className="flex-item flex-container">
                              <div 
                                className="image-describe"
                              >
                                <div className="image-name">
                                    {photos[prop]['name']} 
                                 </div>
                                 <div className="image-author">
                                    author: {photos[prop]['user']['username']}
                                 </div>
                              </div>
                            <img src={photos[prop]['image_url']} 
                                 className="image-round"
                                  onClick={(event) => {
                                    event.stopPropagation();
                                    getLargePhotoUrl(photos[prop]['id']);
                                    document.getElementById("imgViewer").setAttribute("src", getLargePhotoUrl(photos[prop]['id']) );
                                    document.getElementById("imgViewer").setAttribute("class", 'photo-view-container' );
                                }
                              }
                            >
                            </img>
                          </div>
                        )
                    }
                  }
                  return photosToShow
            })()
          }
          </div>
          <div>
            <img src="" 
                 id="imgViewer" 
                 key="photo-view-container" 
                 onClick={(event) => {
                                    event.stopPropagation();
                                }
                              }
            >
            </img>
          </div>
        </div>
    )
}


export default connect(
  state => ({
    store: state
  }),
  dispatch => ({})
  )(ListOfPhotos);  