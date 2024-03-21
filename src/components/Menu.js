import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AddMovie from "./AddMovie";
import Movies from "./Movies";
import Reviews from "./Reviews";

function Menu(){

    return <div>
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="movies">Movies</Link>
        </li>
        <li class="nav-item">
          {
        // <a class="nav-link" href="addMovie/0">Add Movie</a>
}
          <Link class="nav-link" to="addMovie/0">Add Movie</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="reviews">Reviews</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

    <Routes>
        <Route path="/movies" element ={<Movies/>}></Route>
        <Route path="/addMovie/:id" element ={<AddMovie/>}></Route>

        <Route path="/reviews" element ={<Reviews/>}></Route>

    </Routes>


    </div>
}

export default Menu;