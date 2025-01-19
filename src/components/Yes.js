

function Yes(){
  
  
  const handleClick2  = (e) => e.target.textContent = 'Keep going then?'
  
  return(<button className='yes' onDoubleClick={handleClick2}>Yes</button>);
}

export default Yes