import React from "react";

function Kundenstimmen() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-10 text-center rounded-b-xl shadow-md mb-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kundenstimmen</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Was unsere Kunden über uns sagen – Ehrliche Meinungen und Erfahrungsberichte
          </p>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center transition-transform hover:-translate-y-1 flex-1 min-w-[200px]">
            <div className="text-blue-500 text-3xl mb-4">
              <i className="fas fa-star"></i>
            </div>
            <div className="text-3xl font-bold mb-1 text-gray-800">4.9/5</div>
            <div className="text-gray-600">Durchschnittliche Bewertung</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center transition-transform hover:-translate-y-1 flex-1 min-w-[200px]">
            <div className="text-blue-500 text-3xl mb-4">
              <i className="fas fa-comment"></i>
            </div>
            <div className="text-3xl font-bold mb-1 text-gray-800">357+</div>
            <div className="text-gray-600">Kundenbewertungen</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center transition-transform hover:-translate-y-1 flex-1 min-w-[200px]">
            <div className="text-blue-500 text-3xl mb-4">
              <i className="fas fa-users"></i>
            </div>
            <div className="text-3xl font-bold mb-1 text-gray-800">98%</div>
            <div className="text-gray-600">Zufriedene Kunden</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
            <div className="p-6">
              <div className="text-yellow-400 mb-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="italic mb-6 text-gray-600">
                "Der Service war herausragend! Das Team hat meine Erwartungen übertroffen. Ich werde definitiv wieder hierher kommen und empfehle es weiter."
              </p>
              <div className="flex items-center">
                <img src="https://randomuser.me/api/portraits/women/43.jpg" alt="Sarah Müller" className="w-14 h-14 rounded-full object-cover border-2 border-blue-500 mr-4" />
                <div>
                  <div className="font-bold text-gray-800">Sarah Müller</div>
                  <div className="text-sm text-gray-500">Geschäftsführerin, TechSolutions</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
            <div className="p-6">
              <div className="text-yellow-400 mb-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="italic mb-6 text-gray-600">
                "Die Qualität der Arbeit ist exzellent. Die Kommunikation war throughout das Projekt hervorragend und die Ergebnisse haben meine Erwartungen übertroffen."
              </p>
              <div className="flex items-center">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Thomas Weber" className="w-14 h-14 rounded-full object-cover border-2 border-blue-500 mr-4" />
                <div>
                  <div className="font-bold text-gray-800">Thomas Weber</div>
                  <div className="text-sm text-gray-500">Marketing Director, Innovate GmbH</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
            <div className="p-6">
              <div className="text-yellow-400 mb-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <p className="italic mb-6 text-gray-600">
                "Schneller Service, professionelles Team und herausragende Ergebnisse. Was will man mehr? Vielen Dank für die großartige Zusammenarbeit!"
              </p>
              <div className="flex items-center">
                <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Julia Schmidt" className="w-14 h-14 rounded-full object-cover border-2 border-blue-500 mr-4" />
                <div>
                  <div className="font-bold text-gray-800">Julia Schmidt</div>
                  <div className="text-sm text-gray-500">Inhaberin, DesignStudio</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial 4 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
            <div className="p-6">
              <div className="text-yellow-400 mb-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="italic mb-6 text-gray-600">
                "Ich bin absolut begeistert von dem Ergebnis. Das Team war sehr professionell und hat alle meine Wünsche umgesetzt. Absolute Empfehlung!"
              </p>
              <div className="flex items-center">
                <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Michael Braun" className="w-14 h-14 rounded-full object-cover border-2 border-blue-500 mr-4" />
                <div>
                  <div className="font-bold text-gray-800">Michael Braun</div>
                  <div className="text-sm text-gray-500">CTO, NextGen Technologies</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial 5 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
            <div className="p-6">
              <div className="text-yellow-400 mb-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <p className="italic mb-6 text-gray-600">
                "Gute Arbeit, pünktliche Lieferung und fairer Preis. Der Kundenservice war besonders hilfreich bei all meinen Fragen. Danke!"
              </p>
              <div className="flex items-center">
                <img src="https://randomuser.me/api/portraits/women/28.jpg" alt="Anna Köhler" className="w-14 h-14 rounded-full object-cover border-2 border-blue-500 mr-4" />
                <div>
                  <div className="font-bold text-gray-800">Anna Köhler</div>
                  <div className="text-sm text-gray-500">Bloggerin, TravelLife</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial 6 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
            <div className="p-6">
              <div className="text-yellow-400 mb-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="italic mb-6 text-gray-600">
                "Eines der besten Unternehmen, mit denen ich zusammengearbeitet habe. Die Expertise und Professionalität sind unübertroffen. Großartig!"
              </p>
              <div className="flex items-center">
                <img src="https://randomuser.me/api/portraits/men/74.jpg" alt="Robert Fischer" className="w-14 h-14 rounded-full object-cover border-2 border-blue-500 mr-4" />
                <div>
                  <div className="font-bold text-gray-800">Robert Fischer</div>
                  <div className="text-sm text-gray-500">Produktmanager, FutureVision</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 md:p-12 text-center mb-12 text-white">
          <h2 className="text-3xl font-bold mb-6">Werden Sie Teil unserer Erfolgsgeschichte</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Haben wir Ihr Interesse geweckt? Kontaktieren Sie uns noch heute für ein unverbindliches Beratungsgespräch.
          </p>
          <button className="py-3 px-8 bg-white text-blue-700 rounded-full text-lg font-medium hover:bg-gray-100 transition shadow-md hover:-translate-y-1">
            Kontakt aufnehmen
          </button>
        </div>
      </div>
      
      <footer className="py-8 text-center text-gray-600 border-t border-gray-300">
        <div className="container mx-auto px-4">
          <p>© 2023 Ihr Unternehmen. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}

export default Kundenstimmen;