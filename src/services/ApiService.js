import axios from "axios";
const baseURL="http://localhost:9999/movies";
class ApiService{
   
    getAllMovies(){
         //Promise object .....
      /*   axios.interceptors.request.use(
            (config)=>{
               console.log("i m interceptor")
            }
         );*/
        return axios.get(baseURL);
    }
 getMovieById(id){
  
    console.log(typeof id)
    console.log(id);
    return axios.get(baseURL+"/"+id);
 }
 updateMovie(movie,id){
    console.log("id : "+id)
    console.log(typeof id)
    console.log(`${baseURL/id}`);
    return axios.put(baseURL+"/"+id,movie)
 }
    addNewMovie(movie){
        return axios.post(baseURL,movie);
    }
}
export default ApiService;