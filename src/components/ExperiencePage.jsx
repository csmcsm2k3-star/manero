import React from 'react';

const ExperiencePage = () => {
    return (
        <div className="experience-page">
            <section className="hero-section">
                <h1 className="hero-title fade-in">MANERO</h1>
                <p className="hero-subtitle title-script fade-in">Gastronomía Inolvidable</p>
            </section>

            <section className="experience-section spirit">
                <div className="container experience-grid">
                    <div className="experience-content fade-in">
                        <span className="section-subtitle">El Espíritu</span>
                        <h2 className="section-title">Gastro-Lifestyle</h2>
                        <div className="title-separator-left"></div>
                        <p>Manero es mucho más que un bar; es un espacio donde la sofisticación se encuentra con la tradición. Un lugar para ver y ser visto, donde cada detalle ha sido diseñado para transportarte a una época de elegancia atemporal.</p>
                        <p>Descubra el arte del tapeo elevado a su máxima expresión en el corazón de la ciudad.</p>
                    </div>
                    <div className="experience-image-container fade-in">
                        <img src="https://excelenciasgourmet.com/sites/default/files/articulos/2025-03/manero.png" alt="Manero Atmosphere" className="experience-image" />
                    </div>
                </div>
            </section>

            <section className="experience-section kitchen reverse">
                <div className="container experience-grid">
                    <div className="experience-image-container fade-in">
                        <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000" alt="Manero Kitchen" className="experience-image" />
                    </div>
                    <div className="experience-content fade-in">
                        <span className="section-subtitle">La Cocina</span>
                        <h2 className="section-title">Producto en Estado Puro</h2>
                        <div className="title-separator-left"></div>
                        <p>Nuestra propuesta gastronómica se basa en la excelencia de la materia prima. Desde los mejores ibéricos cortados a cuchillo hasta conservas gourmet seleccionadas por nuestros maestros.</p>
                        <p>Cada bocado es un homenaje a los sabores auténticos que definen nuestra identidad.</p>
                    </div>
                </div>
            </section>

            <section className="experience-section cellar">
                <div className="container experience-grid">
                    <div className="experience-content fade-in">
                        <span className="section-subtitle">La Bodega</span>
                        <h2 className="section-title">Vinos con Alma</h2>
                        <div className="title-separator-left"></div>
                        <p>Una selección meticulosa de las mejores Denominaciones de Origen. Vinos tintos con carácter, blancos frescos y cavas que celebran los momentos especiales.</p>
                        <p>Nuestros sumilleres han curado una carta para maridar a la perfección con nuestra propuesta de tapas y raciones.</p>
                    </div>
                    <div className="experience-image-container fade-in">
                        <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1000" alt="Manero Cellar" className="experience-image" />
                    </div>
                </div>
            </section>

            <section className="experience-section locations">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">Donde Estamos</span>
                        <h2 className="section-title">Nuestras Ubicaciones</h2>
                        <div className="title-separator"></div>
                    </div>

                    <div className="locations-grid">
                        <div className="location-card fade-in">
                            <h3>Manero Alicante</h3>
                            <p>Calle Médico Pascual Pérez, 3<br />03001 Alicante</p>
                            <p className="location-contact">T. +34 965 14 44 44</p>
                        </div>
                        <div className="location-card fade-in" style={{ animationDelay: '0.2s' }}>
                            <h3>Manero Madrid</h3>
                            <p>Calle de Claudio Coello, 3<br />28001 Madrid</p>
                            <p className="location-contact">T. +34 911 23 45 67</p>
                        </div>
                        <div className="location-card fade-in" style={{ animationDelay: '0.4s' }}>
                            <h3>Manero Balmis</h3>
                            <p>Plaza de Balmis, 1<br />03001 Alicante</p>
                            <p className="location-contact">T. +34 965 20 20 20</p>
                        </div>
                    </div>

                    <div className="locations-footer">
                        <a href="https://barmanero.es" target="_blank" rel="noopener noreferrer" className="btn-secondary">Visitar Web Oficial</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExperiencePage;
