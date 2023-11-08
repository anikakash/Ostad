
const Service = (props) => {
    const serviceList = ["Programming Course", "Debug", "Testing"];
    const serviceList2 = ['UI', 'UX', 'Figma', 'Canva'];
    return (
        <div>
            <h1>My Services are: </h1>
            <ol>
            {
                (props.options? serviceList : serviceList2).map((item, idx)=>(
                    <li key={idx}>{item}</li>
                    ))
            }
            </ol>
        </div>
    );
};

export default Service;