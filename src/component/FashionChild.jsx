import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FashionChild = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 min-h-screen flex flex-col items-center py-8">
      {/* Header Section */}
      <h1 className="text-5xl font-extrabold text-white mb-10 text-center">
        Explore Fashion Trends
      </h1>

      {/* Navigation Links */}
      <div className="flex gap-6 mb-8">
        <Link
          to="/fashon/fashionchild/clothes"
          className="px-6 py-3 bg-white text-purple-600 font-bold rounded-full shadow-lg hover:bg-purple-200 hover:scale-105 transition-transform"
        >
          Clothes
        </Link>
        <Link
          to="/fashon/fashionchild/beauty"
          className="px-6 py-3 bg-white text-pink-600 font-bold rounded-full shadow-lg hover:bg-pink-200 hover:scale-105 transition-transform"
        >
          Beauty
        </Link>
        <Link
          to="/fashon/fashionchild/footwear"
          className="px-6 py-3 bg-white text-teal-600 font-bold rounded-full shadow-lg hover:bg-teal-200 hover:scale-105 transition-transform"
        >
          Footwear
        </Link>
      </div>

      {/* Fetch Products Button */}
      <button
        onClick={getData}
        className="px-8 py-3 bg-yellow-400 text-yellow-900 font-bold rounded-full shadow-xl hover:bg-yellow-500 hover:scale-105 transition-transform mb-12"
      >
        Fetch Products
      </button>

      {/* Products Grid */}
      <div className="grid gap-8 grid-cols-1  w-11/12 max-w-screen-xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:scale-105"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full object-cover"
            />

            {/* Product Details */}
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {product.title}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                Category: <span className="font-medium">{product.category}</span>
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Price: <span className="font-medium">${product.price}</span>
              </p>
              <p className="text-sm text-gray-500 line-clamp-3">
                {product.description}
              </p>

              {/* Ratings and Count */}
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-yellow-500 flex items-center gap-1">
                  ⭐ {product.rating.rate}
                </span>
                <span className="text-sm text-gray-500">
                  ({product.rating.count} reviews)
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FashionChild;
