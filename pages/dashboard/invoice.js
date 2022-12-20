import React from "react";
import FullLayout from "../../sections/dashboard/FullLayout";
import logo from "../../public/logo.png";
import Image from "next/image";

const Invoice = () => {
  return (
    <FullLayout>
      <div className="flex flex-wrap">
        {/* Left */}
        <div className="w-full mb-12 xl:mb-0 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white p-4">
            {/* First Row */}
            <div className="flex justify-between border-b">
              <div className="site_info w-1/3 p-3">
                <Image src={logo} alt="logo" width={180} />
                <div className="address mt-4">
                  <h2 className="font-bold">Address</h2>
                  <p className="text-gray-500 text-sm">
                    1419 Riverwood Drive, <br /> Redding, CA 96001
                  </p>
                </div>
              </div>
              <div className="invoice_info w-1/3 p-3">
                <ul>
                  <li className="mt-2 text-sm">
                    <span className="text-gray-500">Invoice No. : </span>
                    #54638990jnn
                  </li>
                  <li className="mt-2 text-sm">
                    <span className="text-gray-500">Email : </span>
                    contact@imshama.com
                  </li>
                  <li className="mt-2 text-sm">
                    <span className="text-gray-500">Phone : </span>
                    019XXXXXX
                  </li>
                  <li className="mt-2 text-sm">
                    <span className="text-gray-500">Website : </span>
                    www.minutemedico.com
                  </li>
                  <li className="mt-2 text-sm">
                    <span className="text-gray-500">Patient Name : </span>
                    Abu Shama
                  </li>
                </ul>
              </div>
            </div>
            {/* Second Row */}
            <div className="flex justify-between border-b">
              <div className="site_info w-1/3 p-3">
                <span className="font-bold">Invoice</span>{" "}
                <span
                  className={`p-1 text-center mx-auto rounded text-white ${process.env.NEXT_PUBLIC_gb} hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-200 text-xs`}
                >
                  Status
                </span>
                <div className="address mt-4">
                  <h2 className="font-bold">Surgery (Gynecology)</h2>
                </div>
              </div>
              <div className="invoice_info w-1/3 p-3">
                <ul>
                  <li className="mt-2 text-sm">
                    <span className="text-gray-500">Issue Dt. : </span>
                    25th Sep. 2020
                  </li>
                  <li className="mt-2 text-sm">
                    <span className="text-gray-500">Due Dt. : </span>
                    11th Oct. 2020
                  </li>
                  <li className="mt-2 text-sm">
                    <span className="text-gray-500">Dr. Name : </span>
                    Dr. Calvin Carlo
                  </li>
                </ul>
              </div>
            </div>
            {/* Table */}
            <div className="overflow-x-auto mt-2 border-b">
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

            {/* Total Row */}
            <div className="flex justify-between border-b">
              <div className="site_info w-1/3 p-3"></div>
              <div className="invoice_info w-1/3 p-3">
                <div className="flex justify-between">
                  <ul>
                    <li className="mt-2 text-sm">
                      <span className="text-gray-500">Issue Dt. : </span>
                    </li>
                    <li className="mt-2 text-sm">
                      <span className="text-gray-500">Due Dt. : </span>
                    </li>
                    <li className="mt-2 text-sm">
                      <span className="text-gray-500">Dr. Name : </span>
                    </li>
                  </ul>
                  <ul>
                    <li className="mt-2 text-sm">25th Sep. 2020</li>
                    <li className="mt-2 text-sm">11th Oct. 2020</li>
                    <li className="mt-2 text-sm">Dr. Calvin Carlo</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer Row */}
            <div className="flex justify-between border-b">
              <div className="site_info w-1/3 p-3">
                <p className="text-xs">
                  Customer Service:{" "}
                  <span className="text-gray-500">(+12) 1546-456-856</span>{" "}
                </p>
              </div>
              <div className="invoice_info w-1/3 p-3">
                <p className="text-xs">
                  Stay with us, We care about your health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FullLayout>
  );
};

export default Invoice;
