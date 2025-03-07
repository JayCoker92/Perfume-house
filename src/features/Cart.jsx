// import React from 'react'

// const Cart = () => {
//   return (
//     <>
//       <main>

//       <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellat placeat cum sunt, itaque amet et ullam dolores rem tempora voluptatum? Illum, rem soluta error magni sit consequuntur dolores facilis blanditiis mollitia explicabo aliquid quidem. Reprehenderit eveniet dicta dolorem blanditiis totam fuga magnam error natus esse quisquam est distinctio itaque et, cupiditate, veritatis officiis iste autem laboriosam repellendus dolore hic.</h2>
//         </main>

//     </>
//   )
// }

// export default Cart

// import  React  from 'react'
// import cartPreview from "../assets/My Cart Preview.png";
// import imageOne from "../assets/image 1.png";
// import imageTwo from "../assets/image 2.png";
// import avent from "../assets/imagep.png";
// import eleganza from "../assets/eleganza.png";
// import aventConfirm from "../assets/cart5.png";
// import successIcon  from "../assets/Success Icon.png";

// const Cart = () => {

//   return (

//     <>
//     <div className='container mx-5 '>
//     <div className=' w-hug[348px]  mx-auto'>
//       <img className='w-45' src={cartPreview} alt="cart-preview" />
//       <br />
//      <img src={imageOne} alt="first-cart" />
//      <br />
//      <img src={imageTwo} alt="image-2" />
//      <br />
//      <div className='flex '>
//      <img className='w-25' src={avent} alt= "avent for him" />

//      <div className='mx-5  '>

//        <img src={eleganza} alt="" />
//      </div>

//      </div>
//      <br />
//      <div>
//      <img src={aventConfirm} alt="" />
//      </div>
//      <br />
//      {/* You can open the modal using document.getElementById('ID').showModal() method */}
// <button className="w-76 h-[43px] bg-[#8D34FF] rounded text-[#F5F5F5] cursor-pointer text-sm" onClick={()=>document.getElementById('my_modal_4').showModal()}>Confirm Order</button>
// <dialog id="my_modal_4" className="modal">
//   <div className="modal-box w-11/12 max-w-5xl">
//     <img src={successIcon} alt="icon" />
//     <h3 className="font-bold text-lg">Order Confirmed</h3>
//     <p>We hope you enjoy your order</p>

//     <p className="py-4">Click the button below to close</p>
//     <div className="modal-action">
//       <form method="dialog">
//         {/* if there is a button, it will close the modal */}
//         <button className="w-76 h-[43px] bg-[#8D34FF] rounded text-[#F5F5F5] cursor-pointer text-sm ">Start New Order</button>
//       </form>
//     </div>
//   </div>
// </dialog>
//     </div>
//     </div>

//     </>
//   )
// }

// export default Cart
import React from "react";
import cartPreview from "../assets/My Cart Preview.png";
import imageOne from "../assets/image 1.png";
import imageTwo from "../assets/image 2.png";
import avent from "../assets/imagep.png";
import eleganza from "../assets/eleganza.png";
import aventConfirm from "../assets/cart5.png";
import successIcon from "../assets/Success Icon.png";
import threeImg from "../assets/three.png";
import cross from "../assets/Group2.png";

const Cart = () => {
  return (
    <>
      <div className=" container my-9">
        <div className=" w-hug[348px]  mx-auto">
          <img className="w-45" src={cartPreview} alt="cart-preview" />
          <br />
          <img src={imageOne} alt="first-cart" />
          <br />
          <img src={imageTwo} alt="image-2" />
          <br />
          <div className="flex ">
            <img className="w-25" src={avent} alt="avent for him" />

            <div className="mx-5  ">
              <img src={eleganza} alt="" />
            </div>
          </div>
          <br />
          <div>
            <img src={aventConfirm} alt="" />
          </div>
          <br />
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="w-76 h-[43px] bg-[#8D34FF] rounded text-[#F5F5F5] cursor-pointer text-sm"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Confirm Order
          </button>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-8/12 max-w-xl">
              <div className="flex justify-between">
                <img src={successIcon} alt="icon" />
                <img className="w-10 my-6 h-7" src={cross} alt="cross-icon" />
              </div>
              <h3 className="font-bold text-lg">Order Confirmed</h3>
              <p>We hope you enjoy your order</p>
              <br />
              <div>
                <img src={threeImg} alt="three" />
              </div>

              <p className="py-4"></p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button className="w-47 h-[50px] bg-[#8D34FF] rounded-2xl text-[#F5F5F5] cursor-pointer text-sm ">
                    Start New Order
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
};

export default Cart;
