import Select from 'react-select';

const Selected = ({
    options,
    value,
    defaultValue,
    defaultInputValue,
    pleaceholder,
    fontsize,
    fontWeight = 500,
    ...props
}) => {
    return (
        <Select
            {...props}
            className=" w-full max-w-full focus:outline-none 
      focus:border-none focus:ring-transparent"
            classNamePrefix="select"
            placeholder={pleaceholder}
            isClearable={false}
            isSearchable={true}
            name="role"
            id="role"
            value={value}
            defaultInputValue={defaultInputValue}
            defaultValue={defaultValue}
            options={options}
            styles={{
                ...props.styles,
                control: (provided, state) => ({
                    ...provided,
                    width: '100%',
                    outline: state.isFocused || state.isFocused ? '1px solid black' : '',
                    borderColor: state.isFocused ? '#000000' : '#000000',
                    boxShadow: state.isFocused ? 'none' : '',
                    padding: '0.2rem 0.3rem',
                    border: '1px solid #D0D5DD',
                    borderRadius: '0.375rem',
                    fontWeight: fontWeight,
                    color: '#11927',
                    fontSize: fontsize,
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    ':hover': {
                        border: '1px solid #D0D5DD'
                    },
                    '::placeholder': {
                        color: '#0000',
                        fontWeight: fontWeight,
                        fontSize: '1rem'
                    }
                }),
                option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.isSelected ? '#F9FAFB' : 'white',
                    color: state.isSelected ? 'black' : 'black',
                    outline: 'none',
                    fontWeight: fontWeight,
                    margin: '0 auto',
                    maxWidth: '100%',
                    borderRadius: '0.375rem',
                    ':active': {
                        backgroundColor: '#F9FAFB'
                    },
                    ':hover': {
                        backgroundColor: '#F9FAFB'
                    }
                }),
                input: base => ({
                    ...base,
                    'input:focus': {
                        boxShadow: 'none'
                    }
                }),
                indicatorSeparator: (provided, state) => ({
                    ...provided,
                    display: 'none'
                })
            }}
        />
    );
};

export default Selected;
