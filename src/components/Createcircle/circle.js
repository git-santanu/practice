const Circle = ({inputNumber}) => {
    const size = inputNumber * 100;
return (
    <div>
        <div className="circle-size" style={{
            height: `${size}px`,
            width: `${size}px`
        }}>
            {
                inputNumber > 1 && 
                <Circle inputNumber={inputNumber-1}>
                </Circle>
            }
        </div>
    </div>
)
}
export default Circle;