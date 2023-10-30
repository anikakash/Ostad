
const About = (props) => {
    return (
        <div>
            <h2>This is About H2</h2>
            <p>This is about {props.des['name']}</p>

            {props.uni===true?(<p>He study in {props.des['uni']}</p>) : (<p> His age is {props.des.age}</p>)}
        </div>
    );
};

export default About;