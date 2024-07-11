import React from 'react';
import Style from './Categorie.module.css';
import { Card as BootstrapCard} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Categorie = () => {
    const Type = [
        { id: 1, name: "AUDI   🏎️💨  ", icon: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600"},
        { id: 2, name: "KIA   🏎️💨  ", icon: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 3, name: "VOLKSWAGEN  Ꮤ⃝ ", icon: "https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 4, name: "Memoir  🏎️💨  ", icon: "https://images.pexels.com/photos/14964994/pexels-photo-14964994/free-photo-of-trees-around-volkswagen-golf.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 5, name: "Travel  🏎️💨  ", icon: "https://images.pexels.com/photos/19922984/pexels-photo-19922984/free-photo-of-red-dacia-duster-left-on-the-roadside.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 6, name: "Health  🏎️💨  ", icon: "https://images.pexels.com/photos/4077271/pexels-photo-4077271.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 7, name: "Poetry  🏎️💨  ", icon: "https://images.pexels.com/photos/12163946/pexels-photo-12163946.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 8, name: "Cooking", icon: "https://images.pexels.com/photos/18029633/pexels-photo-18029633/free-photo-of-parked-black-van.jpeg?auto=compress&cs=tinysrgb&w=600" },
    ];

    return (
        <>
            <h1 className={Style.title}>Explore Our Vehicles Catigories </h1> <br />
            <div className={Style.container}>
                {Type.map(category => (
                    <BootstrapCard  key={category.id}  className={`${Style.category}`} >
                        <BootstrapCard.Img variant="top" src={category.icon} style={{ height: '15rem' }} />
                        <BootstrapCard.Body>
                            <BootstrapCard.Title>{category.name}</BootstrapCard.Title>
                            <BootstrapCard.Text>
                                100 items
                            </BootstrapCard.Text>
                            <div className={Style.btnn}>
                                <a href="#" className={Style.btnn}> see Car Models</a>
                            </div>
                        </BootstrapCard.Body>
                    </BootstrapCard>
                ))}
            </div>
        </>
    );
};


export default Categorie;