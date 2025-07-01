import type { Product, Variant } from "../types/Product"

interface Props{
    product: Product;
    variant: Variant;
    setVariant: (variant:Variant)=> void;
}
const VariantSelector =({product,variant,setVariant}:Props)=>{
    return (
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row gap-10 p-8 md:p-14 mt-10">
      {/* Left: Gallery */}
      <div className="flex flex-col items-center md:w-1/2">
        <div className="w-full flex flex-col items-center">
          <img
            src={variant.image}
            alt={variant.size || variant.color || product.name}
            className="w-80 h-80 object-contain rounded-2xl shadow-lg border border-gray-100 bg-gray-50"
          />
        </div>
        {/* Thumbnail gallery (if more images) */}
        {/* <div className="flex gap-2 mt-4">
          {product.variant.map((v) => (
            <img key={v.id} src={v.image} alt={v.size} className="w-14 h-14 object-contain rounded-lg border border-gray-200 cursor-pointer" />
          ))}
        </div> */}
      </div>

      {/* Right: Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <nav className="text-xs text-gray-400 mb-2">
            Home / Products / <span className="text-gray-700 font-medium">{product.name}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">{product.name}</h1>
          <div className="flex items-center gap-3 mb-4">
            {product.label && (
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md tracking-wide animate-pulse">
                {product.label}
              </span>
            )}
            {/* <span className="text-yellow-400 text-sm">★★★★★</span> */}
          </div>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            {product.description}
          </p>
          <div className="mb-8">
            <span className="text-lg text-gray-500">Price: </span>
            <span className="text-3xl font-bold text-blue-700">${variant.price || product.base_price}</span>
          </div>

          {/* Variant selection (size/color) */}
          {product.variant && product.variant.length > 1 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Variant:</h3>
              <div className="flex flex-wrap gap-2">
                {product.variant.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2 rounded-lg font-medium text-sm border transition-all duration-200 ${
                      variant.id === v.id
                        ? "bg-blue-600 text-white border-blue-600 shadow-lg scale-105"
                        : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-blue-50 hover:border-blue-400 hover:shadow-md"
                    }`}
                  >
                    {v.size || v.color || "Variant"}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4 mb-8">
            <label htmlFor="qty" className="text-gray-700 font-medium">Quantity:</label>
            <input
              id="qty"
              type="number"
              min={1}
              defaultValue={1}
              className="w-16 px-2 py-1 border border-gray-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    )

};
export default VariantSelector;