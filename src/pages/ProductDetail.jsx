import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './productDetails.css';

const categoryTitles = {
  bakery: 'Bakery',
  gatoo: 'Gatoo',
  cookies: 'Cookies',
  'cup-cake': 'Cup Cake',
  nwaaem: 'Nwaaem',
  christmas: 'Christmas',
  'sham-elnseem': 'Sham Elnseem',
};

const ProductDetail = () => {
  const { category, id } = useParams();
  const title = categoryTitles[category] || category;
  const imageUrl = `/images/${category}/${id}`;
  const [modalOpen, setModalOpen] = useState(false);
  const whatsappNumber = '201014278883';
  const handleBuyNow = () => {
    const message = `مرحبا، أود شراء هذا المنتج: الفئة: ${title} - الصورة: ${id}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <Header />
      <div className="product-detail-bg">
        <div className="product-detail-container">
          <h2 className="product-detail-title">
            {
              title === 'Gatoo' ? 'تورته أريزونا - تحفة فنية من الحب والحلاوة' :
                title === 'Cookies' ? 'كوكيز أريزونا - فرحة مقرمشة تذوب في الفم' :
                  title === 'Cup Cake' ? 'كب كيك أريزونا - فرحة صغيرة بنكهة كبيرة' :
                    title === 'Nwaaem' ? 'نواعم العيد من أريزونا - حكايات حلوة من تراثنا' :
                      title === 'Christmas' ? 'حلويات الكريسماس من أريزونا - سحر الشتاء في كل قضمة' :
                        title === 'Sham Elnseem' ? 'حلويات شم النسيم من أريزونا - نفحات الربيع في كل قضمة' :
                          title === 'Bakery' ? 'مخبوزات أريزونا - رائحة البيت الدافئ في كل قضمة' :
                            title
            }
          </h2>
          <img
            className="product-detail-img"
            src={imageUrl}
            alt={id}
            onClick={() => setModalOpen(true)}
            style={{ cursor: 'zoom-in' }}
          />
          <div className="product-detail-name">
            {
              title === 'Gatoo' ? 'كل طبقة في تورتتنا تحكي قصة من النعومة والفخامة، مصنوعة يدويًا بأجود المكونات لتقدم لك تجربة لا تُنسى' :
                title === 'Cookies' ? 'كل قطعة كوكيز لدينا هي تحفة صغيرة من النعومة والطعم، تُحضر يوميًا بمكونات طبيعية لتقدم لك' :
                  title === 'Cup Cake' ? 'كل كب كيك لدينا هو تحفة مصغرة من الإبداع والطعم، مصنوعة بعناية لتقدم لك' :
                    title === 'Nwaaem' ? 'كل قطعة عندنا تحمل دفء الذكريات وجمال التقاليد' :
                      title === 'Christmas' ? 'احتفالات دافئة بنكهات الأعياد المحببة' :
                        title === 'Sham Elnseem' ? 'تراث مصري أصيل يُحيي بهجتكم في الربيع' :
                          title === 'Bakery' ? 'من فرننا إلى مائدتكم.. أصالة وذوق لا يقاوم' :
                            title
            }
          </div>
          <div className="product-detail-info">
            {
              title === 'Gatoo' ? (
                <>
                  <ul>
                    <li>تورته الشوكولاتة الفاخرة (طبقات مخملية مع كريمة جاناش)</li>
                    <li>تورته الفراولة الطازجة (بصوص الفواكه الطبيعي)</li>
                    <li>تورته الكراميل المقرمشة (بقطع نوجا مغطسة)</li>
                    <li>تصاميم مخصصة حسب مناسبتك!</li>
                  </ul>
                  <img src={require('../cake.png')} alt="" className='floating-image' />
                </>
              ) :
                title === 'Cookies' ? (
                  <>
                    <ul>
                      <li>كلاسيكي زبدة (هشّ مثل ذاكرة الطفولة)</li>
                      <li>شوكولاتة تشيب (بقطع شوكولاتة غزيرة)</li>
                      <li>زنجبيل دافئ (بنكهات العيد المُعبقة)</li>
                      <li>بسكويت ساندويتش (مع كريمة فراولة أو فانيلا)</li>
                    </ul>
                    <img src={require('../cake-3.png')} alt="" className='floating-image' />
                  </>
                ) :
                  title === 'Cup Cake' ? (
                    <>
                      <ul>
                        <li>فانيليا كلاسيكي (ناعم كالحرير)</li>
                        <li>شوكولاتة غنية (مع قلب شوكولاتة ذائب)</li>
                        <li>أحمر مخمل (بلمسة من الكريمة الحامضة)</li>
                        <li>كراميل بندق (مع زخرفة كراميل مملحة)</li>
                      </ul>
                      <img src={require('../cake-2.png')} alt="" className='floating-image' />
                    </>
                  ) :
                    title === 'Nwaaem' ? (
                      <>
                        <ul>
                          <li>كعك العيد الفاخر (عجوة بلدية ببهارات خاصة)</li>
                          <li>غريبة اللوز الهشة (تذوب في الفم كالثلج)</li>
                          <li>معمول التمر الطري (بحشوة ملكية)</li>
                          <li>بيتي فور بالبندق (بلمسة من الماء الوردي)</li>
                        </ul>
                        <img src={require('../nwaem.jpeg')} alt="" className='floating-image' />
                      </>
                    ) :
                      title === 'Christmas' ? (
                        <>
                          <ul>
                            <li>كعك الزنجبيل - أشكال عيدية بتوابل دافئة</li>
                            <li>كيك الفواكه - خليط كرسماسي مع الفواكه المكرملة</li>
                            <li>ميني كيكات الكريسماس - تورتات صغيرة بتصاميم احتفالية</li>
                            <li>حلويات الثلج - نعناع أبيض وشوكولاتة ساخنة</li>
                          </ul>
                          <img src={require('../christmas.png')} alt="" className='floating-image' />
                        </>
                      ) :
                        title === 'Sham Elnseem' ? (
                          <>
                            <ul>
                              <li>كعك البلح - بعجوة مميزة وبهارات عطرة</li>
                              <li> غريبة السمسم - مقرمشة بسمسم محمص</li>
                              <li>فطيرة الملوكا - بطبقات هشة وحشوة كريمية</li>
                              <li>حلويات جوز الهند - بنكهات ناعمة كنسيم الربيع</li>
                            </ul>
                          </>
                        ) :
                          title === 'Bakery' ? (
                            <>
                              <ul>
                                <li>كرواسون الزبدة - طبقات هشة تذوب في الفم</li>
                                <li>فطائر الصباح - بتشكيلة من الحشوات اللذيذة</li>
                                <li>خبز القمح الكامل - صحي وغني بالألياف</li>
                                <li>بسكويت الشوكولاتة - مقرمش بالشوكولاتة الغنية</li>
                              </ul>
                              <img src={require('../cake-4.png')} alt="" className='floating-image' />
                            </>
                          ) :
                            title
            }
          </div>
          <button className="buy-now-btn" onClick={handleBuyNow}>اطلب الآن عبر واتساب</button>
        </div>
      </div>
      {modalOpen && (
        <div className="image-modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="image-modal-content" onClick={e => e.stopPropagation()}>
            <button className="image-modal-close" onClick={() => setModalOpen(false)}>&times;</button>
            <img src={imageUrl} alt={id} className="image-modal-img" />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ProductDetail; 