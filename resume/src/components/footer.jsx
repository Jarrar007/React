import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer" style={{textAlign : "center"}}>
      <h1 className="contact">Contact Me: </h1>
      <ul>
        <li>
          <a href="https://www.instagram.com/jarrar07?igsh=MTRyMnJ3bHA4OWlnNQ==" target="_blank">
            <img src = "/instagram.png" alt="insta logo" id="insta-img" className="icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Jarrar007" target="_blank">
            <img src="/github.png" alt="github logo" id="github-img" className="icon"/>
          </a>
        </li>
        <li>
          <a href=" https://wa.me/+923084632236" target="_blank">
            <img src="/whatsapp.png" alt="whatsapp logo" id="whatsapp-img" className="icon"/>
          </a>
        </li>
        <li>
          <a href="mailto:jarrarahmed2003@gmail.com" target="_blank">
            <img src="/gmail.png" alt="gmail logo" id="gmail-img" className="icon"/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
