import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { useState, useEffect } from 'react';
// import the interface from /Albums so you don't have to retype the interface
import { Album } from './Albums';

// pass in match object generic to RouteComponentProps <{ id: string }>
export interface DetailsProps extends RouteComponentProps<{ id: string }> { }

// use ES6 destructuring  match: { params: { id } } }
// or can name variable let id = match.params.id
const Details: React.SFC<DetailsProps> = ({ history, match: { params: { id } } }) => {
    
    const [album, setAlbum] = useState<Album>({
        id: null,
        title: null,
        artist: null,
        url: null,
        image: null,
        thumbnail_image: null,
        _created: null
    });

    const getAlbum = async () => {
        let r = await fetch(`http://student-fun-api.herokuapp.com/api/hiphop/${id}`);
        let album = await r.json();
        setAlbum(album);
    }

    // instead of blank array, pass in id so that it if the route parameter
    // passes a new id it will rerun the useEffect
    useEffect(() => { getAlbum(); }, [id])
    
    return (
        <section className="row my-5">
            <article className="col-md-12">
                <img src={album.image} alt="album image" className="card-img-top w-50 h-50 d-block mx-auto"/>
                <div className="card m-1 p-1 shadow">
                    <div className="card-body text-center align-itetms-center mb-2">
                        <h4 className="card-title">{album.title}</h4>
                        <div className="d-flex justify-content-center align-items-center mb-2">
                            <p className="card-text mx-3">{album.artist}</p>
                            <img src={album.thumbnail_image} alt="artist image" style={{ height: '8%', width: '8%' }} className="mx-3 border rounded-circle" />
                        </div>
                        <a href={album.url} target="_blank" className="btn btn-secondary shadow btn-block mx-auto">Buy</a>
                        <button onClick={() => history.goBack()} className="btn btn-warning shadow btn-block mx-auto">Go Back</button>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Details;