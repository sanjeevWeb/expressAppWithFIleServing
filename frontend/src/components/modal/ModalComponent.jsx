import React, { useState } from 'react';
import './ModalComponent.css';

const ModalComponent = ({open,onClose,title,description,dropdownTitle,btnTitle }) => {

  if(!open) return null

  const [showInput, setShowInput] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [dropdownOptions, setDropdownOptions] = useState(['Option 1', 'Option 2', 'Option 3']);

  const handleSave = () => {
    if (userInput.trim()) {
      setDropdownOptions([...dropdownOptions, userInput]);
      setUserInput('');
      setShowInput(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* First Div */}
        <div className="modal-header">
          <button className="close-button" onClick={onClose}>X</button>
        </div>

        {/* Second Div */}
        <div className="modal-body">
          <p className="bold-text">{title}</p>
          <p className="small-text">
            {description}
          </p>
        </div>

        {/* Third Div */}
        <div className="modal-footer">
          <div>{dropdownTitle}</div>
          <select className="dropdown">
            {dropdownOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
          <button className="new-list-button" onClick={() => setShowInput(true)}>{btnTitle}</button>
          {showInput && (
            <div className="input-container">
              <input
                type="text"
                className="text-input"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Enter new list item"
              />
              <button className="save-button" onClick={handleSave}>{btnTitle}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
