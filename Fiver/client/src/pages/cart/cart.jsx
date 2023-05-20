// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import "./cart.scss";
// import { useQuery } from "@tanstack/react-query";
// import newRequest from "../../../../api/utils/newRequest";
// import { useNavigate } from "react-router-dom";
// const cart = () => {
//   const { id } = useParams();

//   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
//   const navigate = useNavigate();
//   const { isLoading, error, data } = useQuery({
//     queryKey: ["orders"],
//     queryFn: () =>
//       newRequest.get(`/orders/${id}`).then((res) => {
//         return res.data;
//       }),
//   });
//   //   const handleContact = async (order) => {
//   //     const sellerId = order.sellerId;
//   //     const buyerId = order.buyerId;
//   //     const id = sellerId + buyerId;
//   //     try {
//   //       const res = await newRequest.get(`/conversations/single/${id}`);
//   //       navigate(`/message/${res.data.id}`);
//   //     } catch (err) {
//   //       if (err.response.status === 404) {
//   //         const res = await newRequest.post(`/conversations/`, {
//   //           to: currentUser.Isseller ? buyerId : sellerId,
//   //           // to: currentUser.seller ? buyerId : sellerId,
//   //         });
//   //         navigate(`/message/${res.data.id}`);
//   //       }
//   //     }
//   //   };
//   return (
//     <>
//       <div className="orders">
//         {isLoading ? (
//           "loading"
//         ) : error ? (
//           "error"
//         ) : (
//           <div className="container">
//             <div className="title">
//               <h1>Orders</h1>
//             </div>
//             <table>
//               <tr>
//                 <th>Image</th>
//                 <th>Title</th>
//                 <th>Price</th>
//                 <th>Contact</th>
//               </tr>
//               {data.map((order) => (
//                 <tr key={order._id}>
//                   <td>
//                     <img className="image" src={order.img} alt="" />
//                   </td>
//                   <td>{order.title}</td>
//                   <td>{order.price}</td>

//                   <td>
//                     <img
//                       className="message"
//                       src="./img/message.png"
//                       alt=""
//                       onClick={() => handleContact(order)}
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </table>
//             <Link to={`/pay/${id}`}>
//               <button>Continue</button>
//             </Link>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default cart;

//const location = useLocation();
//   const { id } = useParams();
// Assuming the ID is passed as state from the previous page
//   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
//   const navigate = useNavigate();
import React from "react";
import { Link, useParams } from "react-router-dom";
import "./cart.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../../../api/utils/newRequest";
import { useNavigate } from "react-router-dom";
const Orders = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery({
    queryKey: ["cart"],
    queryFn: () =>
      newRequest.get(`/cart`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div className="orders">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Cart</h1>
          </div>
          <table>
            <tr>
              <th>Title</th>
              {/* <th>Image</th> */}
              <th>Price</th>
              <th>Quantity</th>
            </tr>
            {data.map((cart) => (
              <tr key={card._id}>
                {/* <td>
                  <img className="image" src={cart.products.title} alt="" />
                </td>
                <td>{cart.products.price}</td>
                <td>{cart.products.quantity}</td> */}

                {/* <td>
                  <img
                    className="message"
                    src="./img/message.png"
                    alt=""
                    onClick={() => handleContact(order)}
                  />

                  
                </td> */}
                {cart.products.map((product) => (
                  <React.Fragment key={product.gigId}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                  </React.Fragment>
                ))}
              </tr>
            ))}
            <Link to={`/pay/${cart._id}`}>
              <button>Continue</button>
            </Link>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
