function Progressbar() {
  return (
    <div className="progress-container w-1/2 opacity-0 relative z-50" style={{ height: "2px", backgroundColor: "#ccc" }}>
      <div className="progress-bar bg-pink-800" style={{ width: "0%", height: "100%" }}></div>
    </div>
  )
}

export default Progressbar