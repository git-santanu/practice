import React from "react";

const Interest = ({ data, setData }) => {
    const handleChangeData = (e) => {
        setData(prev => ({
            ...prev,
            interests: [...data.interests, e.target.checked]   
        }))
    }
  return (
    <div>
      <input type="checkbox" style={{cursor: "pointer"}} name="coding" value={data.interests.includes('coding')} onChange={handleChangeData} />
      <label htmlFor="">Coding</label>
      <input type="checkbox" style={{cursor: "pointer"}} name="music" value={data.interests.includes('music')} onChange={handleChangeData} />
      <label htmlFor="">Music</label>
    </div>
  );
};

export default Interest;
