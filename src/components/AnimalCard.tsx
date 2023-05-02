import '../styles/AnimalCard.css';

function AnimalCard({ animal }:any) {
    const { name, type, years, description, adopted } = animal;

    return(
        <div className="animal-card">
            <h2>{name}</h2>
            <div className='animal-img'>
                <img src="src\assets\dog-dummy-img.jpeg" alt={`${name}`} />
            </div>
            <div className="animal-type">
                <p>Vrsta:</p>
                <p>{type}</p>
            </div>
            <div className="animal-years">
                <p>Godine:</p>
                <p>{years}</p>
            </div>
            <div className="animal-description">
                <p>Opis</p>
                <p>{description}</p>
            </div>
            <div className="animal-adopted">
                <p>Udomljena:</p>
                <p>{adopted ? 'Da' : 'Ne'}</p>
            </div>
        </div>
    )
}

export default AnimalCard;
