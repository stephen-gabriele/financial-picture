import React, {useState} from 'react'
import TagCard from './TagCard';

const TagContainer = ({transactionIndex, tags, deleteTag, addTag}) => {
  const [input, setInput] = useState(
    {value: "", valid: true}
  )

  function handleInputChange(event) {
    setInput(prevInput => {
      return {
          ...prevInput,
          [event.target.name]: event.target.value
        }
    })
  }

  function submit() {
    setInput(prevInput => {
      addTag(transactionIndex, input.value)
      return {
        ...prevInput,
        value: ""
      }
    })
  }

  return ( 
  <div className='grid gap-1 grid-cols-2 auto-cols-fr'>
    {tags.map((tag, tagIndex) => <TagCard transactionIndex={transactionIndex} deleteTag={deleteTag} tagIndex={tagIndex} tag={tag}/>)}
    <div className='flex'>
      <input
        className={`w-2/3 rounded-md outline-0 ${input.valid ? 'border-white' : 'border-rose-600'}`}
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