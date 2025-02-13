

type IconInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

const iconOptions = [
    "linkedin", 
    "facebook", 
    "x", 
    "instagram", 
    "github"
];

export const IconInput = ({ value, onChange, placeholder }: IconInputProps) => {
    
  const initialValue = value || iconOptions[0];

  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 min-w-8 rounded-full bg-white p-1.5">
        {/* [TOSEE/] */}
        <img
          src={`/images/${value}.svg`}
          className="w-full h-full object-contain"
        />
      </div>
      <select
        value={initialValue}
        onChange={(e) => onChange(
            e.target.value
        )}
        className="border rounded px-2 py-1"
      >

        {iconOptions.map((icon) => (
          <option key={icon} value={icon}>
            {icon.replace(".svg", "")}
          </option>
        ))}
      </select>
    </div>
  );
};
