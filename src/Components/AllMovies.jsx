import axios from 'axios';



const Movies = () => {


    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/550?api_key=d008de29e3ad50061804b7bf62ef97d1',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDA4ZGUyOWUzYWQ1MDA2MTgwNGI3YmY2MmVmOTdkMSIsIm5iZiI6MTczMzMwOTUzOC4yNTEwMDAyLCJzdWIiOiI2NzUwMzQ2MjM1NWRiYzBiMTVkN2E5YjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1cQXQTWrc6xlSsm91H02kTsx5x2lwb01eV-VcyRk6rk'
        }
    };





  return (
        axios
        .request(options)
        .then(res => console.log(res.data))
        .catch(err => console.error(err))


        


  )
}

export default Movies

