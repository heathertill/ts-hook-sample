import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export interface AlbumsProps { }

// create interface that can be imported into other components
// and not have to recreate the same interface in multiple places
export interface Album {
    id: number,
    title: string,
    artist: string,
    url: string,
    image: string,
    thumbnail_image: string,
    _created: Date
}

const Albums: React.SFC<AlbumsProps> = () => {

    // set useState type safety to the Album object 
    // and tell it that is will be an array of the album objects
    const [albums, setAlbums] = useState<Album[]>([]);

    const getAlbums = async () => {
        let r = await fetch('http://student-fun-api.herokuapp.com/api/hiphop');
        let albums = await r.json();
        setAlbums(albums);
    }


    useEffect(() => { getAlbums(); }, [])

    // {albums.map(album => ())} parens after => is implicit return
    return (
        <section className="row my-2">
            <ul className="list-group col-md-9 offset-md-3">
                {albums.map(album => (
                    <li key={album.id} className="list-group-item d-flex justify-content-between">
                        <h3>{album.title}</h3>
                        <Link to={`/${album.id}/details`} className="btn btn-info shadow-sm">Get Details</Link>
                    </li>
                ))}
            </ul>



        </section>
    );
}

export default Albums;