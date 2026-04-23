import { useState } from 'react'

function App() {
  const [activeGalleryImage, setActiveGalleryImage] = useState(0)
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectedBooking, setSelectedBooking] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  
  const galleryImages = [
    'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80&w=1200&h=800',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200&h=800',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200&h=800',
    'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1200&h=800',
    'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&q=80&w=1200&h=800',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=1200&h=800'
  ]

  // Booked dates simulation
  const bookedDates = [
    new Date(new Date().getFullYear(), new Date().getMonth(), 5),
    new Date(new Date().getFullYear(), new Date().getMonth(), 12),
    new Date(new Date().getFullYear(), new Date().getMonth(), 18),
    new Date(new Date().getFullYear(), new Date().getMonth(), 22),
    new Date(new Date().getFullYear(), new Date().getMonth(), 27)
  ].map(d => d.toDateString())

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
  }

  const handleBookClick = (bookingType) => {
    setSelectedBooking(bookingType)
    setShowCalendar(true)
  }

  const isDateBooked = (date) => bookedDates.includes(date.toDateString())
  const isDatePast = (date) => date < new Date(new Date().setHours(0,0,0,0))
  const isSameDay = (d1, d2) => d1.toDateString() === d2.toDateString()

  const getDaysInMonth = (year, month) => {
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const days = []
    for (let i = 0; i < firstDay.getDay(); i++) days.push(null)
    for (let day = 1; day <= lastDay.getDate(); day++) {
      days.push(new Date(year, month, day))
    }
    return days
  }

  const monthDays = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth())
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December']

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">🏊 Pool & Cabana</div>
          <div className="nav-links">
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('gallery')}>Gallery</button>
            <button onClick={() => scrollToSection('booking')}>Booking</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Exclusive Pool & Cabana Experience</h1>
          <p>Your perfect retreat for relaxation and unforgettable moments</p>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <h2>About Our Facility</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Welcome to our premium pool and cabana facility, designed for ultimate relaxation and comfort. Located in a peaceful natural setting, our property offers the perfect escape from the daily routine.</p>
              <p>Our heated swimming pool features modern filtration systems, comfortable sun loungers, and shaded relaxation areas. The adjacent cabana provides full amenities including changing rooms, shower facilities, and a lounge area.</p>
              <ul className="features-list">
                <li>✅ Heated 25m swimming pool</li>
                <li>✅ Fully equipped cabana facilities</li>
                <li>✅ Sun terrace with comfortable loungers</li>
                <li>✅ Outdoor shower facilities</li>
                <li>✅ Peaceful natural surroundings</li>
                <li>✅ Private booking available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section gallery">
        <div className="container">
          <h2>Photo Gallery</h2>
          
          <div className="gallery-main">
            <img 
              src={galleryImages[activeGalleryImage]} 
              alt="Pool facility" 
              className="gallery-main-image"
            />
          </div>
          
          <div className="gallery-thumbnails">
            {galleryImages.map((img, index) => (
              <button
                key={index}
                className={`gallery-thumb ${activeGalleryImage === index ? 'active' : ''}`}
                onClick={() => setActiveGalleryImage(index)}
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="section booking">
        <div className="container">
          <h2>Booking Information</h2>
          <div className="booking-cards">
            <div className="booking-card">
              <h3>Daily Access</h3>
              <div className="price">€ 25 / day</div>
              <ul>
                <li>Full day pool access</li>
                <li>Sun lounger included</li>
                <li>Shower & changing facilities</li>
                <li>Towel service available</li>
              </ul>
              <button className="book-button" onClick={() => handleBookClick('Daily Access')}>Book Now</button>
            </div>
            
            <div className="booking-card featured">
              <h3>Cabana Rental</h3>
              <div className="price">€ 120 / day</div>
              <ul>
                <li>Private cabana for up to 6 persons</li>
                <li>Exclusive pool area access</li>
                <li>Personal waiter service</li>
                <li>Refreshments included</li>
              </ul>
              <button className="book-button" onClick={() => handleBookClick('Daily Access')}>Book Now</button>
            </div>
            
            <div className="booking-card">
              <h3>Private Event</h3>
              <div className="price">On Request</div>
              <ul>
                <li>Full facility exclusive use</li>
                <li>Custom catering options</li>
                <li>Event planning assistance</li>
                <li>Available for weddings & parties</li>
              </ul>
              <button className="book-button">Request Quote</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2>Contact & Location</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>123 Poolside Drive, Relaxation City</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>+1 234 567 8900</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>info@poolcabana.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕐</span>
                <div>
                  <h4>Opening Hours</h4>
                  <p>Daily: 09:00 - 20:00</p>
                </div>
              </div>
            </div>
            
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Pool & Cabana. All rights reserved.</p>
        </div>
      </footer>

      {/* Booking Calendar Modal */}
      {showCalendar && (
        <div className="modal-overlay" onClick={() => setShowCalendar(false)}>
          <div className="calendar-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Book {selectedBooking}</h3>
              <button className="close-button" onClick={() => setShowCalendar(false)}>×</button>
            </div>
            
            <div className="calendar-nav">
              <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}>
                ←
              </button>
              <span>
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </span>
              <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}>
                →
              </button>
            </div>

            <div className="calendar-grid">
              {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
                <div key={d} className="calendar-day-header">{d}</div>
              ))}
              
              {monthDays.map((day, i) => (
                <div key={i} className={`calendar-day 
                  ${!day ? 'empty' : ''} 
                  ${day && isDatePast(day) ? 'past' : ''} 
                  ${day && isDateBooked(day) ? 'booked' : ''} 
                  ${day && selectedDate && isSameDay(day, selectedDate) ? 'selected' : ''}
                `}>
                  {day && (
                    <button 
                      disabled={isDatePast(day) || isDateBooked(day)} 
                      onClick={() => setSelectedDate(day)}
                    >
                      {day.getDate()}
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="calendar-legend">
              <span className="legend-item available">Available</span>
              <span className="legend-item booked">Booked</span>
              <span className="legend-item past">Past</span>
            </div>

            {selectedDate && (
              <div className="selected-date-info">
                <p>Selected: {selectedDate.toLocaleDateString()}</p>
                <button className="confirm-button">Confirm Booking</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
