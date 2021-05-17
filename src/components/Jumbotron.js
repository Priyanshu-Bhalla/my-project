import React from 'react';
import '../index.css';
const Jumbotron =()=> {
   return(
<>

<div      className="container-fluid">
    <div      className="row">

      <div      className="col  col-xl-6">
        <div      className=" jumbotron jumbotron-fluid text-center" id="jumbo-cart">
          <div>
            <h5      className="display-5" id="cart-head"><strong>
                My Cart
              </strong></h5>
            <img src="assets/img/shopping-cart.png" alt="" id="cart-icon"/>

          </div>
          <div id="line" ></div>
          <div id="list-container"
           >
            <h3>Cart List</h3>
          </div>
          <div id="list-btns">
            <button      className="btn btn-md btn-outline-dark" id="remove">Remove</button>
            <a      className="btn btn-md btn-outline-dark" id="purchase">Purchase
              Now</a>
          </div>
        </div>
      </div>





 
      <div      className="col  col-xl-6">
        <div      className="jumbotron jumbotron-fluid text-center" id="jumbo1">
          <a type="button"      className="btn btn-outline-dark btn-lg" id="jumbotron-button" target="_blank" href="https://www.stepshoes.com/blog.html">Explore</a>

          <h5      className="display-5"><strong>Burn through the skies</strong></h5>
          <br/>
          <p      className="lead"><em>A new bond of comfort and agility...</em></p>
        </div>
        <div      className="jumbotron jumbotron-fluid text-center" id="jumbo2">
          <a type="button"      className="btn btn-outline-dark btn-lg" id="jumbotron-button" target="_blank" href="https://www.stepshoes.com/blog.html">Explore</a>

          <h5      className="display-5"><strong>So many shoes but only TWO FEET! </strong></h5>
          <br/>
          <p      className="lead"><em>If The Shoe Fits....</em></p>
        </div>
      </div>

    </div>




  </div>
        
</>
       

       
       )

       }
       export default Jumbotron;