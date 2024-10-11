export default function ProductCard({ imageUrl, title, date, description }) {
  return (
    <div className="card w-auto bg-white rounded-lg relative border border-gray">
      {/* Featured Chip */}
      <div className="absolute top-4 left-4 bg-gradient-to-r from-[#4F9531] to-[#21747C] text-white text-xs px-2 py-1 mt-2 ml-2 rounded-full">
        Featured
      </div>
      {/* Image */}
      <div className="p-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
          style={{ objectPosition: "center" }}
        />
      </div>

      <div className="p-4 pt-2">
        <h2 className="text-xl font-semibold text-[#3D3D3D]">{title}</h2>
        <p className="text-base text-[14px] text-[#868686]">{date}</p>
        <p className="mt-2 text-[16px] text-[#868686]">{description}</p>
      </div>
    </div>
  );
}
