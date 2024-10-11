import { Link } from 'react-router-dom';

const CheckBox = ({ name, label, className, value, checked, onChange, ...props }) => {
  return (
    <div className="flex items-center">
      <div className={`flex items-center w-full ${className}`}>
        <input
          {...props}
          id={label + name}
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="w-[16px] h-[18px] outline-none text-green-500 bg-white rounded
                     focus:ring-transparent 
                     focus:ring-2"
        />
        {label ? (
          <label
            htmlFor={name}
            className="ms-2 w-full flex justify-between items-center text-[14px]
                        font-[500]  text-[#384250]"
          >
            I agree with the{' '}
            <Link to={'/terms'} download className="underline ml-2  text-[14px] cursor-pointer text-[#384250]">
              terms and conditions
            </Link>
          </label>
        ) : null}
      </div>
    </div>
  );
};


export default CheckBox;