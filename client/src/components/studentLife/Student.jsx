import "./student.css";
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import images
import student from "../../assets/student.jpg";
import around from "../../assets/around.jpg";
import health from "../../assets/health.jpg";
import safety from "../../assets/safety.jpg";
import counseling from "../../assets/counseling.jpg";
import slidee1 from "../../assets/slidee1.jpg";
import slidee2 from "../../assets/slidee2.jpg";
import slidee3 from "../../assets/slidee3.jpg";
import slidee4 from "../../assets/slidee4.jpg";
import slidee5 from "../../assets/slidee5.jpg";
import slidee6 from "../../assets/slidee6.jpg";
import slidee7 from "../../assets/slidee7.jpg";
import slidee8 from "../../assets/slidee8.jpg";
import slidee9 from "../../assets/slidee9.jpg";

function Student() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, image: slidee1,},
    { id: 2, image: slidee2, },
    { id: 3, image: slidee3,},
    { id: 4, image: slidee4,},
    { id: 5, image: slidee5,},
    { id: 6, image: slidee6,  },
    { id: 7, image: slidee7,},
    { id: 8, image: slidee8,},
    { id: 9, image: slidee9,}
  ];
  const cards = [
    {
      title: "Getting Around",
      description: "Wherever students live or need to go, the Department of Transportation Services provides safe, affordable, sustainable and innovative options.",
      image: around,
    },
    {
      title: "Health Center",
      description: "Our broad range of high-quality, cost-effective health care and wellness programs support physical and mental health and academic success.",
      image: health,
    },
  ];

  const cardss = [
    {
      title: "Campus Safety",
      description: "Al-Hikmah University Security Department serves the campus community, protects life and property, and upholds the law, all within a supportive, respectful and inclusive environment.",
      image: safety,
    },
    {
      title: "Counseling Center",
      description: "Students can find help, guidance and resources for mental health and personal growth in a safe and supportive environment.",
      image: counseling,
    },
  ];

  // SLIDER SECTION
    const slideGroups = [];
  for (let i = 0; i < slides.length; i += 3) {
    slideGroups.push(slides.slice(i, i + 3));
  }

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideGroups.length);
  }, [slideGroups.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideGroups.length) % slideGroups.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);


  const renderCards = (cardArray) => (
    <section className="student-life-grid">
      {cardArray.map((card, idx) => (
        <div
          key={idx}
          className="life-card"
          style={{ backgroundImage: `url(${card.image})` }}
        >
          <div className="overlay">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <div className="arrow-icon">↗</div>
          </div>
        </div>
      ))}
    </section>
  );

  return (
    <div>
      {/* Campus Life Section */}
      <section className="campus-section">
        <div className="campus-container">
          <div className="campus-text">
            <p className="campus-label">Campus Life</p>
            <h2 className="campus-title">
              Beyond Books, Into Life — The Al-Hikmah Experience.
            </h2>
            <div className="campus-underline"></div>
            <p className="campus-description">
              Al-Hikmah is a community of scholars committed to holistic education.
            </p>
          </div>
          <div className="campus-image">
            <img src={student} alt="Campus" />
          </div>
        </div>
      </section>

      {/* Student Life Activities Section */}
      <section className="student-life-section">
        <div className="card athletics">
          <div className="overlay">
            <h2>Athletics</h2>
            <p> 
              HUI has one of the nation's most successful athletics programs:
              Terps have racked up 47 national championships overall and 49
              conference titles over the past decade in the Big Ten. Fear the
              Turtle!
            </p>
            <div className="arrow-icon">↗</div>
          </div>
        </div>

        <div className="card art">
          <div className="overlay">
            <h2>The Arts</h2>
            <p>
              HUI is home to a vibrant arts community where students, faculty,
              alums and visiting artists transform ideas into exciting and
              thought-provoking experiences.
            </p>
            <div className="arrow-icon">↗</div>
          </div>
        </div>

        <div className="card well">
          <div className="overlay">
            <h2>Recreation & Wellness</h2>
            <p>
              Terps play, explore, train and compete and support one another.
              RecWell offers lots of options for fun and being active across
              campus.
            </p>
            <div className="arrow-icon">↗</div>
          </div>
        </div>
      </section>

      {/* Render card sections */}
      {renderCards(cards)}
      {renderCards(cardss)}

      {/* Image Slider Section */}
       <div>
      {/* Image Slider Section */}
       <div>
      {/* Image Slider Section */}
      <div className="slider-container">
        <div className="slider-wrapper">
          <div 
            className="slides-container"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: 'transform 0.5s ease-in-out'
            }}
          >
            {slideGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="slide-group">
                {group.map((slide, index) => (
                  <div key={slide.id} className="slide">
                    <img 
                      src={slide.image} 
                      alt={`Slide ${slide.id}`} 
                      className="slide-image" 
                    />
                    {/* Show text overlay on the middle slide of each group */}
                    {index === 1 && (
                      <div className="slide-overlay">
                        <div className="slide-content">
                          <h2>{slide.title}</h2>
                          <p>{slide.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <button 
            className="nav-arrow nav-arrow-left"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="nav-arrow nav-arrow-right"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          <div className="dots-container">
            {slideGroups.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Student;
