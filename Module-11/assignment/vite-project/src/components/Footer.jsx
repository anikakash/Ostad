
const Footer = () => {
    const footerList = ['about', 'project', 'home', 'contact'];
    return (
        <div>
            {
                footerList.map((item,idx)=>(
                    <li key={idx}>{item}</li>
                ))
            }
        </div>
    );
};

export default Footer;