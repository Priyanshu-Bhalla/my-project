import React from 'react';
import '../index.css';
const Footer1 =()=> {
   return(
       <>
       <div class="row">
    <div class="col">
      <footer class="page-footer font-small stylish-color-dark pt-4 bg-dark text-light" >
        <ul class="list-unstyled list-inline text-center py-2">
          <li class="list-inline-item">
            <h5 class="mb-1">Register for free</h5>
          </li>
          <li class="list-inline-item">
            <a href="#" class="btn btn-light btn-rounded" data-bs-toggle="modal"
            data-bs-target="#myModal">Sign up!</a>
          </li>
        </ul>
        <ul class="list-unstyled list-inline text-center bg-light">
          <li class="list-inline-item">
            <a href="https://www.facebook.com/" class="fa fa-facebook"></a>
          </li>
          <li class="list-inline-item">
            <a href="https://twitter.com/?lang=en" class="fa fa-twitter"></a>
          </li>
          <li class="list-inline-item">
            <a href="https://www.google.com/" class="fa fa-google"></a>
          </li>
          <li class="list-inline-item">
            <a href="https://www.instagram.com/" class="fa fa-instagram"></a>
          </li>
        </ul>
        
      </footer>
    </div>
  </div>
       </>
   )
}
export default Footer1;