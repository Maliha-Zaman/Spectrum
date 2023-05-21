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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../../../api/utils/newRequest";
import { useNavigate } from "react-router-dom";
const Orders = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery({
    queryKey: ["cart"],
    queryFn: () =>
      newRequest.get(`/cart`).then((res) => {
        return res.data;
      }),
    staleTime: 1000,
  });
  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/cart/${id}`);
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });
  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  const handlePay = (cartId) => {
    navigate(`/pay/${cartId}`);
  };

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
          {/* {data && data.products.length === 0 && data.length === 0 ? ( */}
          {
            // data &&
            // data.products &&
            // data.products.length === 0 &&
            data.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    {/* <th>Image</th> */}
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((cart) => (
                    <React.Fragment key={cart._id}>
                      {cart.products.map((product) => (
                        <tr key={product.gigId}>
                          <td>{product.title}</td>
                          <td>{product.price}</td>
                          <td>{product.quantity}</td>
                          <td>
                            <img
                              className="delete"
                              src="./img/delete.png"
                              alt=""
                              onClick={() => handleDelete(product.gigId)}
                            />
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                  <tr>
                    {/* <td colSpan="3">
                </td> */}
                  </tr>
                  {/* <Link to={`/pay/${cart._id}`}>
              <button>Continue</button>
            </Link> */}
                </tbody>
              </table>
            )
          }
          {/* {data.length > 0 && (
            <button onClick={() => handlePay(data[0]._id)}>Continue</button>
          )} */}
          {data.length > 0 && (
            <Link to={`/pay/${data[0]._id}`}>
              <button>Continue</button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Orders;
