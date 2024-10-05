
function FillButtons({label, className}) {
  return (
    <button className={`bg-white text-black px-5 py-2 rounded-full hover:bg-transparent border-2
     border-white hover:text-white transition-all duration-200 ease-linear tracking-wider ${className}`}>{label}</button>
  )
}

export default FillButtons