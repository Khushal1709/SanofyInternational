import { Upload, RotateCw } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function ProductCustomizer() {
  const [selectedSize, setSelectedSize] = useState("17.5×11.5");
  const [selectedMaterial, setSelectedMaterial] = useState("Acrylic");
  const [selectedGlassThickness, setSelectedGlassThickness] = useState("3mm");
  const [selectedThickness, setSelectedThickness] = useState("3mm");
  const [selectedFrameShape, setSelectedFrameShape] = useState("Four Corner Round");
  const [selectedFrameMaterial, setSelectedFrameMaterial] = useState("PVC");
  const [instructions, setInstructions] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [frameRotation, setFrameRotation] = useState(0); // Only 0 or 90 degrees
  const [price, setPrice] = useState(120000);
  const [dimensions, setDimensions] = useState({ width: 17.5, height: 11.5 });
  const fileInputRef = useRef(null);
  const frameRef = useRef(null);
  const [isCustomSize, setIsCustomSize] = useState(false);
  const [customSizes, setCustomSizes] = useState([]);
  const [isRotating, setIsRotating] = useState(false);
  const [imageNaturalSize, setImageNaturalSize] = useState({
    width: 0,
    height: 0,
  });

  // Parse size string into dimensions when size changes
  useEffect(() => {
    if (!isCustomSize && !isRotating) {
      const sizeParts = selectedSize.replace(/\s/g, "").split(/[x×]/);
      if (sizeParts.length === 2) {
        const width = Number.parseFloat(sizeParts[0].replace(",", "."));
        const height = Number.parseFloat(sizeParts[1].replace(",", "."));
        if (!isNaN(width) && !isNaN(height)) {
          // Set dimensions based on the selected size
          setDimensions({
            width: frameRotation === 90 ? height : width,
            height: frameRotation === 90 ? width : height,
          });
        }
      }
    }
  }, [selectedSize, isCustomSize, frameRotation, isRotating]);

  // Calculate price based on dimensions
  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      const basePrice = 120000;
      const sizeMultiplier =
        (dimensions.width * dimensions.height) / (17.5 * 11.5);
      setPrice(Math.round(basePrice * sizeMultiplier));

      if (selectedMaterial === "Glass") {
        setPrice((prev) => Math.round(prev * 1.15));
      } else if (selectedMaterial === "Canvas") {
        setPrice((prev) => Math.round(prev * 0.9));
      } else if (selectedMaterial === "Acrylic White Matte") {
        setPrice((prev) => Math.round(prev * 1.05));
      }

      if (
        selectedFrameMaterial === "Aluminum" ||
        selectedFrameMaterial === "Aluminum Slim"
      ) {
        setPrice((prev) => Math.round(prev * 1.1));
      } else if (selectedFrameMaterial === "SSPVD") {
        setPrice((prev) => Math.round(prev * 1.2));
      } else if (selectedFrameMaterial === "Without frame") {
        setPrice((prev) => Math.round(prev * 0.85));
      }

      if (selectedThickness === "4mm") {
        setPrice((prev) => Math.round(prev * 1.05));
      } else if (selectedThickness === "5mm") {
        setPrice((prev) => Math.round(prev * 1.1));
      }
    }
  }, [selectedMaterial, selectedFrameMaterial, selectedThickness, dimensions]);

  // Reset frame shape if incompatible with square sizes
  useEffect(() => {
    const isSquareSize = ["18 x 18", "24 x 24", "30 x 30"].includes(
      selectedSize
    );

    if (
      isSquareSize &&
      (selectedFrameShape === "Rectangle" || selectedFrameShape === "Oval")
    ) {
      setSelectedFrameShape("Four Corner Round");
    }

    if (
      !isSquareSize &&
      (selectedFrameShape === "Square" || selectedFrameShape === "Round")
    ) {
      setSelectedFrameShape("Four Corner Round");
    }
  }, [selectedSize, selectedFrameShape]);

  const sizes = [
    "17.5×11.5",
    "23.5 x 16",
    "29.5 x 20",
    "18 x 18",
    "24 x 24",
    "30 x 30",
    "23.5 x 11.5",
    "29.5x14.5",
    "35.5x17.5",
    "41.5 x 20.5",
  ];

  const materials = [
    "Acrylic",
    "Acrylic White Matte",
    "Canvas",
    "Glass",
    "Other",
  ];
  const glassThicknesses = ["3mm"];
  const thicknesses = ["3mm", "4mm", "5mm"];
  const frameShapes = [
    "Four Corner Round",
    "Square",
    "Rectangle",
    "Oval",
    "Round",
    "Top Round",
    "Bottom Round",
  ];
  const frameMaterials = [
    "PVC",
    "SSPVD",
    "Aluminum",
    "Aluminum Slim",
    "Without frame",
  ];

  // Updated handleImageUpload function based on the video
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          // Store the natural dimensions of the image
          setImageNaturalSize({
            width: img.width,
            height: img.height,
          });

          // Check if image is portrait (taller than wide)
          const isPortrait = img.height > img.width;

          // Auto-rotate frame to match image orientation
          if (isPortrait && dimensions.width > dimensions.height) {
            setFrameRotation(90);
            setDimensions((prev) => ({
              width: prev.height,
              height: prev.width,
            }));
          }
          // If image is landscape and frame is portrait, rotate frame
          else if (!isPortrait && dimensions.width < dimensions.height) {
            setFrameRotation(0);
            setDimensions((prev) => ({
              width: prev.height,
              height: prev.width,
            }));
          }

          setUploadedImage(event.target?.result);
        };
        img.src = event.target?.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // Updated rotateFrameAndContent function based on the video
  const rotateFrameAndContent = () => {
    setIsRotating(true);

    // Toggle between 0 and 90 degrees for the frame
    setFrameRotation((prev) => (prev === 0 ? 90 : 0));

    // Swap dimensions
    setDimensions((prev) => ({
      width: prev.height,
      height: prev.width,
    }));

    // Reset the rotating flag after a short delay
    setTimeout(() => setIsRotating(false), 50);
  };

  const handleCustomSizeChange = (dimension, value) => {
    if (value === "" || (!isNaN(value) && value > 0)) {
      if (dimension === "width") {
        setDimensions((prev) => ({
          ...prev,
          width: value === "" ? "" : Number.parseFloat(value),
        }));
      } else {
        setDimensions((prev) => ({
          ...prev,
          height: value === "" ? "" : Number.parseFloat(value),
        }));
      }
    }
  };

  const handleSaveCustomSize = () => {
    if (dimensions.width && dimensions.height) {
      const customSizeString = `${dimensions.width}×${dimensions.height}`;
      if (
        !customSizes.includes(customSizeString) &&
        !sizes.includes(customSizeString)
      ) {
        setCustomSizes((prev) => [...prev, customSizeString]);
        setSelectedSize(customSizeString);
        setIsCustomSize(false);
      }
    }
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const discountPrice = Math.round(price * 0.59);
  const savings = price - discountPrice;

  // Always use cover for all images to eliminate white space
  const getImageFitStyle = () => {
    return "cover";
  };

  const isImagePortrait = imageNaturalSize.height > imageNaturalSize.width;

  return (
    <div
      style={{ fontFamily: "Times New Roman" }}
      className="w-full max-w-7xl mx-auto px-4 py-4 md:py-8"
    >
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        className="hidden"
      />

      {/* Breadcrumb */}
      <div className="text-sm mb-6">
        <span className="text-gray-500">Home</span>
        <span className="mx-2 text-gray-500"></span>
        <span className="text-gray-500">Fruitland</span>
        <span className="mx-2 text-gray-500"></span>
        <span className="text-gray-500">Customize</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {/* Product Image - Keeping this div exactly as requested */}
        <div
          className="p-4 md:p-8 relative bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center"
          style={{
            minHeight: "300px",
            height: "auto",
            aspectRatio: "1/1",
            maxWidth: "100%",
          }}
        >
          {/* Width dimension indicator - always horizontal */}
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-full z-10">
            <div className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm">
              <div className="h-0.5 w-6 bg-black"></div>
              <span className="mx-2 text-sm font-bold">
                {dimensions.width} inch Width
              </span>
              <div className="h-0.5 w-6 bg-black"></div>
            </div>
          </div>

          {/* Height dimension indicator - always vertical */}
          <div className="absolute top-1/2 left-1 transform -translate-y-1/2 flex items-center justify-center h-full z-10">
            <div
              className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              <div className="w-0.5 h-6 bg-black"></div>
              <span className="mx-2 text-sm font-bold">
                {dimensions.height} inch Height
              </span>
              <div className="w-0.5 h-6 bg-black"></div>
            </div>
          </div>

          {/* Wrapper for the frame to handle rotation */}
          <div
            className="transition-transform duration-300 origin-center flex items-center justify-center"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          >
            {/* Frame container */}
            <div
              ref={frameRef}
              className="relative transition-all h-[500px] w-[500px] transform duration-300  overflow-hidden"
              style={{
                transform: `rotate(${frameRotation}deg)`,
                aspectRatio:
                  frameRotation === 90
                    ? `${dimensions.height / dimensions.width}`
                    : `${dimensions.width / dimensions.height}`,
                maxWidth: "100%",
                maxHeight: "100%",
                width: "auto",
                height: "auto",
                padding: "0px",
                boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
                backgroundColor: "#fff",
                border:
                  selectedFrameMaterial === "Without frame"
                    ? "none"
                    : selectedFrameMaterial === "PVC"
                    ? `${selectedThickness.replace("mm", "")}px solid #000000`
                    : selectedFrameMaterial === "SSPVD"
                    ? `${selectedThickness.replace("mm", "")}px solid #C0C0C0`
                    : selectedFrameMaterial === "Aluminum"
                    ? `${selectedThickness.replace("mm", "")}px solid #A9A9A9`
                    : selectedFrameMaterial === "Aluminum Slim"
                    ? `${Math.max(
                        Number.parseInt(selectedThickness.replace("mm", "")) /
                          2,
                        3
                      )}px solid #A9A9A9`
                    : `${selectedThickness.replace("mm", "")}px solid #000000`,
                borderRadius:
                  selectedFrameShape === "Four Corner Round"
                    ? "12px"
                    : selectedFrameShape === "Square"
                    ? "0px"
                    : selectedFrameShape === "Rectangle"
                    ? "0px"
                    : selectedFrameShape === "Oval"
                    ? "50% / 50%"
                    : selectedFrameShape === "Round"
                    ? "50%"
                    : selectedFrameShape === "Top Round"
                    ? "50% 50% 0 0"
                    : selectedFrameShape === "Bottom Round"
                    ? "0 0 50% 50%"
                    : "0px",
              }}
            >
              <div
                className="w-full h-full flex items-center justify-center cursor-pointer overflow-hidden"
                onClick={triggerFileInput}
                style={{
                  borderRadius:
                    selectedFrameShape === "Four Corner Round"
                      ? "4px"
                      : selectedFrameShape === "Square"
                      ? "0px"
                      : selectedFrameShape === "Rectangle"
                      ? "0px"
                      : selectedFrameShape === "Oval"
                      ? "50% / 35%"
                      : selectedFrameShape === "Round"
                      ? "50%"
                      : selectedFrameShape === "Top Round"
                      ? "50% 50% 0 0"
                      : selectedFrameShape === "Bottom Round"
                      ? "0 0 50% 50%"
                      : "0px",
                  backgroundColor:
                    selectedMaterial === "Acrylic White Matte"
                      ? "#F5F5F5"
                      : selectedMaterial === "Canvas"
                      ? "#F8F8E8"
                      : selectedMaterial === "Glass"
                      ? "rgba(255, 255, 255, 0.85)"
                      : "white",
                  backgroundImage:
                    selectedMaterial === "Canvas"
                      ? "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmZmYwIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmNWY1ZTUiPjwvcmVjdD4KPC9zdmc+')"
                      : "none",
                  backgroundRepeat: "repeat",
                  boxShadow:
                    selectedMaterial === "Glass"
                      ? "inset 0 0 10px rgba(255,255,255,0.5)"
                      : "none",
                  border:
                    selectedMaterial === "Glass"
                      ? "1px solid rgba(255,255,255,0.6)"
                      : "none",
                }}
              >
                {uploadedImage ? (
                  <img
                    src={uploadedImage || "/placeholder.svg"}
                    alt="Uploaded preview"
                    className="w-[500px] h-[500px] transition-all duration-300"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      transform:
                        frameRotation === 90
                          ? "rotate(-90deg)"
                          : "rotate(0deg)",
                      borderRadius:
                        selectedFrameShape === "Four Corner Round"
                          ? "20px"
                          : selectedFrameShape === "Square"
                          ? "0px"
                          : selectedFrameShape === "Rectangle"
                          ? "0px"
                          : selectedFrameShape === "Oval"
                          ? "50% / 50%"
                          : selectedFrameShape === "Round"
                          ? "50%"
                          : selectedFrameShape === "Top Round"
                          ? "50px 50px 0 0"
                          : selectedFrameShape === "Bottom Round"
                          ? "0 0 50px 50px"
                          : "0px",
                      overflow: "hidden", // Ensures the shape is enforced
                    }}
                  />
                ) : (
                  <div className="text-center p-4 md:p-12">
                    <Upload className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-4 text-gray-500" />
                    <p className="text-lg md:text-xl font-medium">
                      Upload Image
                    </p>
                    <p className="text-sm text-red-600 mt-2">Click here</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
            {uploadedImage && (
              <button
                className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                onClick={rotateFrameAndContent}
                aria-label="Rotate frame and content"
              >
                <RotateCw className="w-5 h-5 text-gray-700 cursor-pointer" />
              </button>
            )}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-2xl font-medium mb-1">
            Geometric Harmony Wall Art
          </h1>
          <div className="text-sm text-gray-500 mb-4">4.0 (24 reviews)</div>

          <div className="flex items-baseline mb-4">
            <span className="text-xl font-bold">₹{formatPrice(price)}.00</span>
            <span className="text-gray-500 line-through text-sm ml-2">
              ₹{formatPrice(Math.round(price * 1.1))} Save
            </span>
            <span className="text-green-600 text-sm ml-2">
              ₹{formatPrice(savings)} (41%)
            </span>
          </div>

          <p className="text-sm mb-4">Designed by The Oasis (Made in India)</p>

          <ul className="text-sm mb-6 space-y-1">
            <li>
              • Made with High Quality {selectedGlassThickness}{" "}
              {selectedMaterial.toLowerCase()}
              {selectedMaterial === "Glass"
                ? " sheet"
                : selectedMaterial === "Canvas"
                ? ""
                : " sheet"}
            </li>
            <li>
              • Framed with a {selectedThickness} thick premium{" "}
              {selectedFrameMaterial === "Without frame"
                ? "borderless design"
                : `${selectedFrameMaterial.toLowerCase()} frame`}
            </li>
          </ul>

          {/* Size Selection */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-3">Select Size (inch)</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`border rounded-sm py-2 px-4 text-sm ${
                    selectedSize === size && !isCustomSize
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-gray-100"
                  }`}
                  onClick={() => {
                    setSelectedSize(size);
                    setIsCustomSize(false);
                  }}
                >
                  {size}
                </button>
              ))}
              {customSizes.map((size) => (
                <button
                  key={`custom-${size}`}
                  className={`border rounded-sm py-2 px-4 text-sm ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-gray-100"
                  }`}
                  onClick={() => {
                    setSelectedSize(size);
                    const sizeParts = size.replace(/\s/g, "").split(/[x×]/);
                    if (sizeParts.length === 2) {
                      const width = Number.parseFloat(
                        sizeParts[0].replace(",", ".")
                      );
                      const height = Number.parseFloat(
                        sizeParts[1].replace(",", ".")
                      );
                      setDimensions({ width, height });
                    }
                    setIsCustomSize(false);
                  }}
                >
                  {size}
                </button>
              ))}
              <button
                className={`border rounded-sm py-2 px-4 text-sm ${
                  isCustomSize
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
                onClick={() => setIsCustomSize(true)}
              >
                Custom Size
              </button>
            </div>

            {isCustomSize && (
              <div className="mt-4">
                <div className="grid grid-cols-2 gap-4 mb-2">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Width (inch)
                    </label>
                    <input
                      type="number"
                      min="1"
                      step="0.1"
                      value={dimensions.width}
                      onChange={(e) =>
                        handleCustomSizeChange("width", e.target.value)
                      }
                      className="w-full border rounded-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Height (inch)
                    </label>
                    <input
                      type="number"
                      min="1"
                      step="0.1"
                      value={dimensions.height}
                      onChange={(e) =>
                        handleCustomSizeChange("height", e.target.value)
                      }
                      className="w-full border rounded-sm p-2"
                    />
                  </div>
                </div>
                <button
                  onClick={handleSaveCustomSize}
                  className="mt-2 bg-gray-200 hover:bg-gray-300 text-black py-1 px-4 rounded-sm text-sm cursor-pointer"
                  disabled={!dimensions.width || !dimensions.height}
                >
                  Save Custom Size
                </button>
              </div>
            )}
          </div>

          {/* Product Materials */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-3">Product Materials</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {materials.map((material) => (
                <button
                  key={material}
                  className={`border rounded-sm py-2 px-4 text-sm ${
                    selectedMaterial === material
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-gray-100"
                  }`}
                  onClick={() => setSelectedMaterial(material)}
                >
                  {material}
                </button>
              ))}
            </div>
          </div>

          {selectedMaterial === "Glass" && (
            <div className="mb-8">
              <h2 className="text-lg font-medium mb-3">Glass Thickness</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {glassThicknesses.map((thickness) => (
                  <button
                    key={thickness}
                    className={`border rounded-sm py-2 px-4 text-sm ${
                      selectedGlassThickness === thickness
                        ? "bg-black text-white"
                        : "bg-white text-black hover:bg-gray-100"
                    }`}
                    onClick={() => setSelectedGlassThickness(thickness)}
                  >
                    {thickness}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Thickness (mm) */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-3">Thickness (mm)</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {thicknesses.map((thickness) => (
                <button
                  key={thickness}
                  className={`border rounded-sm py-2 px-4 text-sm ${
                    selectedThickness === thickness
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-gray-100"
                  }`}
                  onClick={() => setSelectedThickness(thickness)}
                >
                  {thickness}
                </button>
              ))}
            </div>
          </div>

          {/* Frame Shape */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-3">Frame Shape</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {frameShapes
                .filter((shape) => {
                  const isSquareSize = [
                    "18 x 18",
                    "24 x 24",
                    "30 x 30",
                  ].includes(selectedSize);
                  if (
                    isSquareSize &&
                    (shape === "Rectangle" || shape === "Oval")
                  ) {
                    return false;
                  }
                  if (
                    !isSquareSize &&
                    (shape === "Square" || shape === "Round")
                  ) {
                    return false;
                  }
                  return true;
                })
                .map((shape) => (
                  <button
                    key={shape}
                    className={`border rounded-sm py-2 px-4 text-sm ${
                      selectedFrameShape === shape
                        ? "bg-black text-white"
                        : "bg-white text-black hover:bg-gray-100"
                    }`}
                    onClick={() => setSelectedFrameShape(shape)}
                  >
                    {shape}
                  </button>
                ))}
            </div>
          </div>

          {/* Frame Materials */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-3">Frame Materials</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {frameMaterials
                .filter((material) => {
                  if (
                    selectedFrameShape === "Square" ||
                    selectedFrameShape === "Rectangle"
                  ) {
                    return true;
                  }
                  return material !== "PVC" && material !== "Aluminum Slim";
                })
                .map((material) => (
                  <button
                    key={material}
                    className={`border rounded-sm py-2 px-4 text-sm ${
                      selectedFrameMaterial === material
                        ? "bg-black text-white"
                        : "bg-white text-black hover:bg-gray-100"
                    }`}
                    onClick={() => setSelectedFrameMaterial(material)}
                  >
                    {material}
                  </button>
                ))}
            </div>
          </div>

          {/* Write Instructions */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-3">Write Instructions</h2>
            <textarea
              className="w-full border rounded-sm p-3 h-32 resize-none"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Add any special instructions here..."
            />
          </div>

          {/* Add to Cart Button */}
          <button className="w-full bg-black rounded-sm text-white py-3 font-medium transition-colors cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
