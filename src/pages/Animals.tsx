import "../styles/Animals.css";

function Animals() {
  return (
    <div className="animals">
      <h1>Naše životinje</h1>
      <div className="adoption">
        <div className="filters">
          <div className="type">
            {" "}
            <h3>Vrsta:</h3>
            <div className="input">
              {" "}
              <input type="radio" />
              <label>Pas</label>
            </div>
            <div className="input">
              {" "}
              <input type="radio" />
              <label>Mačka</label>
            </div>
            <div className="input">
              {" "}
              <input type="radio" />
              <label>Zec</label>
            </div>
          </div>
          <div className="spol">
            {" "}
            <h3>Spol:</h3>
            <div className="input">
              {" "}
              <input type="radio" />
              <label>Mužjak</label>
            </div>
            <div className="input">
              {" "}
              <input type="radio" />
              <label>Ženka</label>
            </div>
          </div>
        </div>
        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem
          blanditiis eveniet magni, exercitationem, praesentium necessitatibus
          esse vel quasi obcaecati odio eius quam, qui vero repudiandae laborum
          quae doloremque cupiditate.
        </div>
      </div>
    </div>
  );
}

export default Animals;
