import {InputProps} from './types';
import './styles.ts';


function Input({ id, name, type = "text", placeholder, label,disabled,error }: InputProps) {
  return (
    <div className='input-wrapper'>
      <label className='input-label' htmlFor={id}>{label}</label>
      <input className='input-component' id={id} 
      name={name} 
      type={type} 
      placeholder={placeholder}
      disabled = {disabled} 
    
      />
      {error && <span className='error-message'>{error}</span>}
    </div>
  );
}

export default Input;
