import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
export const img_300 = "https://image.tmdb.org/t/p/w300";
export const unavailable =
    "https://www.movienewz.com/img/films/poster-holder.jpg";


const AboutView = () => {

    const { id } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${id}`
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWM2ZGVhNjg4NmJjNmVmNjk3MDUwMmY2ZDI4YTc1YiIsIm5iZiI6MTczMzMwNDI3My4zNzY5OTk5LCJzdWIiOiI2NzUwMWZkMWY4NThlOWJiMTY1OWNmNGIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ANtrz3OALzzI5ERITV822f7lzJwnz7GydFxmA5y-4xY'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => setDetails(json))
            .catch(err => console.error(err));

        console.log(url)

    }, [id])

    console.log(details)


    // const { backdrop_path, name, title, overview } = Val

    return (
        <div className='container-about'>
            {details && ( // Check if details exists before accessing properties
                <div className='card d-flex flex-row justify-content-center mt-3 gap-4'>
                    <div className='card-image h-100'>
                        <img
                            src={
                                // Check if details.backdrop_path exists and is a string
                                typeof details.backdrop_path === 'string'
                                    ? `${img_300}/${details.backdrop_path}`
                                    : unavailable
                            }
                            alt={details.title || details.name}
                            className=''
                        />
                    </div>

                    <div className='card-body'>
                        <h1 className=''> {details.title || details.name} </h1>
                        <span>Release Date : {details.release_date}</span>
                        <p><span>Overview</span> : {details.overview}</p>
                    </div>
                </div>

            )
            }
        </div >
    );
}

export default AboutView



//     <div className=''>
//     Release Date : {details.release_date}
// </div>

{/* <h1 className=''> {details.title || details.name} </h1> */ }