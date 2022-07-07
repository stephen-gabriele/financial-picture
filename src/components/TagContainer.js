import React, {useState} from 'react'
import TagCard from './TagCard';

const TagContainer = ({transactionIndex, tags, deleteTag, addTag}) => {
  const [input, setInput] = useState(
    {value: "",}
  )

  function handleInputChange(event) {
    setInput(prevInput => {
      return {
          ...prevInput,
          [event.target.name]: event.target.value,
        }
    })
  }

  function inputIsValid() {
    return (input.value.match(/^[A-Za-z]+$/i) 
      && input.value.length < 11 
      && input.value.length > 0)
  }

  function submit() {
    if (inputIsValid()){
      addTag(transactionIndex, input.value)
      setInput(prevInput => {
        return {
          ...prevInput,
          value: ""
        }
      })
    }
  }

  return ( 
  <div className='grid gap-1 grid-cols-2 auto-cols-fr'>
    {tags.map((tag, tagIndex) => <TagCard transactionIndex={transactionIndex} deleteTag={deleteTag} tagIndex={tagIndex} tag={tag}/>)}
    <div className='flex'>
      <input
        className={`w-2/3 rounded-md outline-0 border ${(input.value.length===0 || inputIsValid()) ? 'border-white' : 'border-rose-600'}`}
        type="text"
        placeholder="Add Tag"
        onChange={handleInputChange}
        name="value"
        value={input.value}
      />
      <button onClick={submit}className={'w-1/3 bg-slate-200 rounded-md text-sm'}>Add</button>
    </div>
  </div> );
}
 
export default TagContainer;