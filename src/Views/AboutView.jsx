import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


const AboutView = () => {

    const { id } = useParams();

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
            .then(json => console.log(json))
            .catch(err => console.error(err));
    }, [id])

    // const { backdrop_path, name, title, overview };

    return (
        <div>
            

        </div>
    )
}

export default AboutView