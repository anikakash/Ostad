
const Hero = (props) => {
    return (
        <div>
            <ul>
                <li>Name : {props.des['name']}</li>
                <li>University : {props.des['uni']}</li>
                <li>Department : {props.des['dept']}</li>
                <li>Semester : {props.des['seme']}</li>
            </ul>
        </div>
    );
};

export default Hero;