const imageOptions = [
  { url: "https://www.gstatic.com/keep/backgrounds/music_light_0609.svg", label: "Nature" },
  { url: "https://www.gstatic.com/keep/backgrounds/celebration_light_0714.svg", label: "City" },
  { url: "https://www.gstatic.com/keep/backgrounds/food_light_0609.svg", label: "Abstract" },
  { url: "https://www.gstatic.com/keep/backgrounds/grocery_light_0609.svg", label: "Space" },
  { url: "https://www.gstatic.com/keep/backgrounds/travel_light_0614.svg", label: "Flowers" },
  { url: "https://www.gstatic.com/keep/backgrounds/video_light_0609.svg", label: "Flowers" },
];

const ImagePicker = ({ ele, updateBackgroundImage }) => {
  return (
    <div className="flex gap-2 flex-wrap mt-2">
      {imageOptions.map(({ url, label }) => (
        <img
          key={url}
          src={url}
          alt={label}
          title={label}
          className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
            ele.backgroundImage === url ? "border-black" : "border-gray-300"
          }`}
          onClick={() => updateBackgroundImage(ele.id, url)}
        />
      ))}
    </div>
  );
};

export default ImagePicker;