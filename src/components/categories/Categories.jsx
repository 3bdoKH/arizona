import React from 'react'
import './categories.css'   
const Categories = () => {
    const categories = [
        {
            id : 1,
            name : 'تورتات',
            image: require('../../gatoo.jpeg'),
            description: 'تورتة أريزونا - قطعة من السعادة بين يديك، بشوكولاتة غنية أو فانيليا ناعمة وتصميمات تخطف الأنفاس',
            link: '/gatoo',
        },
        {
            id : 2,
            name : 'كوكيز',
            image: require('../../cookies.jpeg'),
            description: 'كوكيز أريزونا - لقمة هشّة تُذوب في الفم بنكهات زبدة فاخرة وقطع شوكولاتة غنية، تُخبز يومياً لتقدم لك دفئاً وحلاوة لا تُقاوم',
            link: '/cookies',
        },
        {
            id : 3,
            name : 'كب كيك',
            image: require('../../cup-cake.jpeg'),
            description: 'كب كيك أريزونا - قِطَع صغيرة من الفرحة! كيك ناعم ومُعطر بتشكيلة من النكهات الشهية، مُزين بطريقة جذابة تمنحك ابتسامة مع كل قضمة',
            link: '/cup-cake',
        },
        {
            id : 4,
            name : 'نواعم العيد',
            image: require('../../nwaem.jpeg'),
            description: 'نواعم العيد من أريزونا - حلويات تقليدية بأصالة الطعم ودفء الذكريات، لتجعل عيدك أطيب',
            link: '/nwaaem',
        },
        {
            id : 5,
            name : 'كريسماس',
            image: require('../../christmas.png'),
            description: 'حلويات الكريسماس من أريزونا – كعك الزنجبيل الساحر، كيك الفاكهة الاحتفالي، وشوكولاتة ساخنة لشتاء مليء بالدفء والحلاوة',
            link: '/christmas',
        },
        {
            id : 6,
            name : 'شم النسيم',
            image: require('../../sham.jpeg'),
            description: 'حلويات شم النسيم من أريزونا - كعك البلح المعطر، غريبة السمسم الذهبية، وفطائر الملوكا الطرية.. نكهات تراثية توقظ ذكريات الربيع',
            link: '/sham',
        },
        {
            id : 7,
            name : 'مخبوزات',
            image: require('../../bakery.jpeg'),
            description: 'مخبوزات أريزونا - من الفرن إلى قلبك، رائحة الذكريات ودفء البيت في كل قضمة',
            link: '/bakery',
        },
    ] 
    return (
        <div className='categories-container'>
            <h2 className='categories-title'>التصنيفات</h2>
            <div className="categories-grid">
                {
                    categories.map((category) => (
                        <div className="category-item" key={category.id}>
                            <a href={category.link}>
                                <img src={category.image} alt={category.name} />
                            </a>
                            <p>{category.description}</p>
                            <h3>{category.name}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories
