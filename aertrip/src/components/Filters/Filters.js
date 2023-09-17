import React,{ useState } from 'react'
import "./Filters.css"
import { CgOptions } from "react-icons/cg";
import Slider from '@material-ui/core/Slider';



const Filters = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };


    const handleSelect = (value) => {
        setIsOpen(!isOpen);
      };


    
  
      const [value, setValue] =  React.useState([5,167,13,472]);
  
      // Changing State when volume increases/decreases
      const rangeSelector = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
      };

  return (
    <div className='filters-main-container'>
      <div>
        <div>
            <CgOptions/>
        </div>
        
        <div className='btn'>
            <span>Sort:</span>
            <select
                className={isOpen ? 'open-dropdown' : 'closed-dropdown'}
                value={selectedValue}
                onChange={(e) => handleSelect(e.target.value)}
            >
                <option>Smart </option>
                <option>Price </option>
                <option>Departure </option>
                <option>Arrival </option>
                <option>Duration </option>
            </select>
        </div>




        <div className="container">
          <button type="button" className="button" onClick={handleSelect}>
            Price
          </button>
            <div className={isOpen? "dropdown":"hide"}>
            <Slider
                value={value}
                onChange={rangeSelector}
                valueLabelDisplay="auto"
            />
               
            </div>
        </div>


      </div>
    </div>
  )
}

export default Filters
