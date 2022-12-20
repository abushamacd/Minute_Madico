import React from "react";
import FullLayout from "../../sections/dashboard/FullLayout";

const AllList = () => {
  return (
    <FullLayout>
      <div className="flex flex-wrap">
        {/* Left */}
        <div className="w-full xl:w-full mb-12 xl:mb-0 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white p-4">
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {products.map((product, index) => ( */}
                  {/* <tr key={product._id}> */}
                  <tr>
                    <th>hhhhh</th>
                    <th>hhhhh</th>
                    <th>hhhhh</th>
                    <th>hhhhh</th>
                    {/* <th>{index + 1}</th>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td> */}
                    <td>
                      <label
                        // onClick={() => setDeletingProduct(product)}
                        htmlFor="deleteProductModal"
                        className="btn btn-xs bg-red-600 text-base-100"
                      >
                        Delete
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <th>hhhhh</th>
                    <th>hhhhh</th>
                    <th>hhhhh</th>
                    <th>hhhhh</th>
                    {/* <th>{index + 1}</th>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td> */}
                    <td>
                      <label
                        // onClick={() => setDeletingProduct(product)}
                        htmlFor="deleteProductModal"
                        className="btn btn-xs bg-red-600 text-base-100"
                      >
                        Delete
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <th>hhhhh</th>
                    <th>hhhhh</th>
                    <th>hhhhh</th>
                    <th>hhhhh</th>
                    {/* <th>{index + 1}</th>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td> */}
                    <td>
                      <label
                        // onClick={() => setDeletingProduct(product)}
                        htmlFor="deleteProductModal"
                        className="btn btn-xs bg-red-600 text-base-100"
                      >
                        Delete
                      </label>
                    </td>
                  </tr>
                  {/* ))} */}
                </tbody>
              </table>
            </div>
            {/* Load Modal */}
            {/* {deletingProduct && (
              <ProductDeleteModal
                deletingProduct={deletingProduct}
                refetch={refetch}
                setDeletingProduct={setDeletingProduct}
              ></ProductDeleteModal>
            )} */}
          </div>
        </div>
      </div>
    </FullLayout>
  );
};

export default AllList;
