import React from 'react';
import Style from './Category.module.css';
import { Card as BootstrapCard } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Category = () => {
    const carTypes = [
        { id: 1, name: "AUDI", icon: "https://s26162.pcdn.co/wp-content/uploads/2023/09/fantasy-8094384_1280.jpg" },
        { id: 2, name: "KIA", icon: "https://media.istockphoto.com/id/183801283/es/vector/19-th-century-ilustraci%C3%B3n-de-pareja-durmiendo-en-la-mesa.jpg?s=612x612&w=0&k=20&c=CsnR9DlFURfMqwdzVg1o26kTLg8eTbHsJ92vRp1mOO8=" },
        { id: 3, name: "VOLKSWAGEN", icon: "https://haroldasthriller.wordpress.com/wp-content/uploads/2015/02/13-nobody-14899.jpg" },
        { id: 4, name: "Memoir", icon: "https://target.scene7.com/is/image/Target/GUEST_f462d57f-731e-4a81-846b-1c49bc51ac60?wid=488&hei=488&fmt=pjpeg" },
        { id: 5, name: "Travel", icon: "https://travelmelodies.com/wp-content/uploads/2020/03/Kids-travel-books-feature.jpg" },
        { id: 6, name: "Health", icon: "https://www.stockvault.net/data/2018/06/24/252636/preview16.jpg" },
        { id: 7, name: "Poetry", icon: "https://wallpapers.com/images/hd/poetry-background-p6a1y27tcthrm9o0.jpg" },
        { id: 8, name: "Cooking", icon: "https://grainfreenola.com/wp-content/uploads/back-cover-cookbook-mawas-way-mcqueen.jpg" },
    ];

    return (
        <>
            <h1 className={Style.title}>Explore Our Vehicle Categories</h1> <br />
            <div className={Style.container}>
                {carTypes.map(category => (
                    <BootstrapCard key={category.id} className={Style.category}>
                        <BootstrapCard.Img variant="top" src={category.icon} style={{ height: '15rem' }} />
                        <BootstrapCard.Body>
                            <BootstrapCard.Title>{category.name}</BootstrapCard.Title>
                            <BootstrapCard.Text>
                                100 items
                            </BootstrapCard.Text>
                            <div className={Style.btnContainer}>
                                <a href="#" className={Style.btn}>See Car Models</a>
                            </div>
                        </BootstrapCard.Body>
                    </BootstrapCard>
                ))}
            </div>
        </>
    );
};

export default Category;
