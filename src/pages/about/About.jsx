import React from 'react'
import './about.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const About = () => {
  return (
    <>
    <Header />
        <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">من نحن – الأريزونا</h1>
        
        <div className="about-section arabic">
          <p>
            من قلب القاهرة، وعلى مدار أكثر من ٦٠ عامًا، صنعت الأريزونا اسمها كواحدة من علامات الحلويات المميزة في مصر. بدأت الحكاية عام 1960 على يد الراحل الأستاذ أحمد سيد أحمد، الذي أسّس مشروعًا عائليًا بروح الحُب والإبداع. ومنذ ذلك الحين، تحول الأريزونا من محل حلويات بسيط إلى اسم يرتبط بالذوق الرفيع والجودة العالية والاحترافية.
          </p>
          
          <p>
            رغم رحيل المؤسس، إلا أن الإرث مستمر. اليوم، يُكمل أبناؤه المسيره، محافظين على نفس الروح، الشغف، والالتزام الذي غرسه فيهم والدهم. الأريزونا ليست مجرد محل حلويات — بل قصة عائلة، وجيل بعد جيل يصنع البهجة في كل قطعة حلوى.
          </p>
          
          <p>
            من التورتات الفاخرة للمناسبات، إلى الحلويات اليومية، إلى توفير أفضل خامات الخَبز للمحترفين والهواة — الأريزونا هي المكان الذي يجمع بين التراث، الجودة، والذوق المصري الأصيل.
          </p>
        </div>

        <div className="divider"></div>

        <h2 className="about-subtitle">Who We Are – Arizona Patisserie</h2>
        
        <div className="about-section english">
          <p>
            Allocates in Cairo since 1960, Arizona Patisserie is more than a legacy. Founded by the late Mr. Ahmed Sayed Ahmed, Arizona began as a humble family business rooted in love, craftsmanship, and tradition. Over 60 years later, his sons and daughter continue the journey, carrying forward his passion and values.
          </p>
          
          <p>
            From elegant cakes and handcrafted pastries to premium baking ingredients, Arizona has become a name known for quality, warmth, and timeless taste. Each dessert made tells a story — one of heritage, heart, and a deep love for sweets.
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default About
