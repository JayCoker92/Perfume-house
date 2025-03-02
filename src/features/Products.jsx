// import React from 'react'
// import { perfumes } from '../product';

// const Products = () => {
//   return (
//     <>
//     <main>
//         <div>
//             {perfumes.map((perfumes)=>{
//         return {
            
//           console.log(perfumes);
            

//         }


//             })}

//         </div>
    
//     </main>

//     </>
//   )
// }

// export default Products



// 



// 







import React from 'react'
import { perfumes } from '../product';
import rating from "../assets/Frame 27.png";
import priceImg from "../assets/Frame 1000005520.png";


const Products = () => {
  
  return (
    <>
      <main className="container mx-auto">
      <div className="md:grid md:grid-cols-3 md:gap-y-[54px] md:gap-x-[34px] ">
          {perfumes.map((perfume) => {
            return (
              <div key={perfume.id} className="card bg-base-100 w-[300px] md:w-[256.62px] md:h-[415.55px] border-[1.14px] border-[#F3F2FB] rounded-[4.56px] shadow-sm  ">
                <figure>
                  <img className='' src={perfume.image} alt={perfume.id} />
                </figure>
                <div className="card-body ">
                  <h2 className="card-title">{perfume.title}</h2>
                  <div>
                    <img src={rating} alt="star-pics" />
                    <img src={priceImg} alt="amount" />
                  </div>
                  <p>
                    {perfume.rating} ({perfume.rateCount})
                  </p>
                  <div className="card-actions justify-end">
                    <button className="w-full h-[25px] bg-[#8D34FF] rounded text-[#F5F5F5] cursor-pointer text-sm">Add to cart</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Products