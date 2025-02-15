import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Logo } from './components/Logo';

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm fixed w-full z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Logo className="h-8 mr-8" />
            <div className="flex items-center space-x-6">
              <div className="relative">
                <button 
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  onMouseEnter={() => setIsAboutOpen(true)}
                  onMouseLeave={() => setIsAboutOpen(false)}
                >
                  About
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isAboutOpen && (
                  <div 
                    className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    onMouseEnter={() => setIsAboutOpen(true)}
                    onMouseLeave={() => setIsAboutOpen(false)}
                  >
                    <div className="py-1">
                      <a href="#about-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600">
                        About Us
                      </a>
                      <a href="#management-team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600">
                        Management Team
                      </a>
                      <a href="#biothreat-advisory-board" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600">
                        Biothreat Advisory Board
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <a href="#products" className="text-gray-600 hover:text-blue-600 transition-colors">Products</a>
              <a href="#news" className="text-gray-600 hover:text-blue-600 transition-colors">News & Media</a>
              <div className="relative">
                <button 
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                >
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isResourcesOpen && (
                  <div 
                    className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    onMouseEnter={() => setIsResourcesOpen(true)}
                    onMouseLeave={() => setIsResourcesOpen(false)}
                  >
                    <div className="py-1">
                      <a href="#resources-overview" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600">
                        Overview
                      </a>
                      <a href="#publications" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600">
                        Publications
                      </a>
                      <a href="#about-anthrax" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600">
                        About Anthrax
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <a href="#consulting" className="text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap">Consulting Services</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Join Us Banner */}
      <div className="fixed top-16 w-full bg-gradient-to-r from-blue-600 to-blue-700 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-center">
          <a 
            href="#careers" 
            className="inline-flex items-center px-8 py-2 border border-transparent text-sm font-medium rounded-full text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Join Us
          </a>
        </div>
      </div>

      {/* Hero Section - adjusted top padding to account for Join Us banner */}
      <div className="relative h-screen pt-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Defending Tomorrow – Today</h1>
            <p className="text-xl text-gray-300 mb-8">
              Elusys Therapeutics is dedicated to delivering innovative medical countermeasures that enable fast, effective, and durable protection against infectious agents. Our goal is to accelerate the development and commercialization of novel biodefense solutions, such as our anthrax antitoxin ANTHIM® (obiltoxaximab), for strategic government partners.
            </p>
            <div className="flex space-x-4">
              <a href="#about-anthrax" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors">
                About Anthrax
              </a>
              <a href="#products" className="border border-blue-500 hover:bg-blue-500/10 text-white px-8 py-3 rounded-lg transition-colors">
                Our Products
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Management Team Section */}
      <div className="py-24 bg-gray-900" id="management-team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Management Team</h2>
          <div className="grid gap-8">
            {/* Management team profiles will be added here */}
          </div>
        </div>
      </div>

      {/* Biothreat Advisory Board Section */}
      <div className="py-24 bg-black" id="biothreat-advisory-board">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Biothreat Advisory Board</h2>
          <div className="grid gap-8">
            {/* Advisory board member profiles will be added here */}
          </div>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="py-24 bg-gray-900" id="news">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest News</h2>
          <div className="space-y-8">
            <div className="bg-black/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
              <div className="text-sm text-gray-400 mb-2">March 14, 2024</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-500">Elusys Therapeutics Announces New Contract with Public Health Agency of Canada for ANTHIM® (obiltoxaximab)</h3>
              <p className="text-gray-300 mb-6">
                Elusys Therapeutics, Inc. announced today that it has been awarded a new contract by the Public Health Agency of Canada (PHAC) for the supply of ANTHIM® (obiltoxaximab), a monoclonal antibody anthrax antitoxin. This contract follows successful deliveries under previous contracts and reinforces Canada's commitment to protecting its citizens against potential bioterrorism threats.
              </p>
              <a href="#" className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors">
                Read More <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            <div className="bg-black/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
              <div className="text-sm text-gray-400 mb-2">January 15, 2024</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-500">Elusys Therapeutics Completes Delivery of ANTHIM® to the Strategic National Stockpile</h3>
              <p className="text-gray-300 mb-6">
                Elusys Therapeutics, Inc. today announced the completion of deliveries of ANTHIM® (obiltoxaximab) to the U.S. Strategic National Stockpile under its most recent contract with the Biomedical Advanced Research and Development Authority (BARDA). This milestone represents the continued successful partnership between Elusys and the U.S. government in strengthening national preparedness against potential anthrax attacks.
              </p>
              <a href="#" className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors">
                Read More <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            <div className="bg-black/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
              <div className="text-sm text-gray-400 mb-2">October 5, 2023</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-500">Elusys Therapeutics Expands International Presence with New Partnerships</h3>
              <p className="text-gray-300 mb-6">
                Elusys Therapeutics, Inc. announces the expansion of its international partnerships for ANTHIM® (obiltoxaximab), marking significant progress in the company's mission to provide global access to critical medical countermeasures. These partnerships will facilitate the availability of ANTHIM® in key markets, enhancing worldwide preparedness against anthrax threats.
              </p>
              <a href="#" className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors">
                Read More <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            <div className="bg-black/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
              <div className="text-sm text-gray-400 mb-2">July 12, 2023</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-500">Elusys Therapeutics Launches Biodefense Consulting Services Division</h3>
              <p className="text-gray-300 mb-6">
                Elusys Therapeutics, Inc. today announced the launch of its Biodefense Consulting Services division, leveraging the company's extensive experience in developing and commercializing medical countermeasures. This new division will provide strategic guidance to organizations navigating the complex landscape of biodefense product development and government contracting.
              </p>
              <a href="#" className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors">
                Read More <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            <div className="text-center mt-12">
              <a href="#" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors">
                View All News <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-24 bg-black" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Products</h2>
          <div className="bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-500">ANTHIM® (obiltoxaximab)</h3>
                <h4 className="text-xl font-semibold mb-4 text-white">A Medical Countermeasure to Mitigate the Effect of Anthrax Exposure</h4>
                <div className="space-y-6 text-gray-300">
                  <p>
                    Elusys has been awarded over $450 million in procurement and development contracts by the Biomedical Advanced Research and Development Authority (BARDA), the National Institute of Allergy and Infectious Disease (NIAID) and the Department of Defense (DoD). Working closely with these agencies, Elusys has been able to advance ANTHIM® to the commercial stage providing a therapeutic for inclusion in the Strategic National Stockpile to strengthen US biosecurity against a potential anthrax attack. Elusys was also contracted as of 2022 to deliver ANTHIM® to the Public Health Agency of Canada. Obiltoxaximab was first licensed for commercial use by the FDA in 2016 and by Health Canada in 2020.
                  </p>
                  <p>
                    Obiltoxaximab is a monoclonal anthrax antitoxin licensed as ANTHIM® in the United States and Canada. Details including Indications and Usage and Important Safety Information can be found by visiting the website below.
                  </p>
                  <div className="pt-4">
                    <a href="#learn-more" className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors">
                      Learn more about ANTHIM®
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center p-8 bg-white rounded-lg">
                <img 
                  src="/anthim-vial.jpg" 
                  alt="ANTHIM® (obiltoxaximab) 600 mg/6 mL vial" 
                  className="max-w-[300px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consulting Services Section */}
      <div className="py-24 bg-gray-900" id="consulting">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Elusys Consulting Services</h2>
          <div className="bg-black/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-500">Expert Biodefense Consulting</h3>
                <p className="text-gray-300">
                  Leveraging our extensive experience in developing and commercializing medical countermeasures, Elusys offers comprehensive consulting services to companies navigating the complex landscape of biodefense programs. Our team of experts brings decades of combined experience in successful product development, regulatory approval, and government contracting.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-white">Strategic Advisory Services</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Program strategy development and optimization</li>
                    <li>• Government contract navigation and compliance</li>
                    <li>• Regulatory pathway planning and execution</li>
                    <li>• Manufacturing process development and scale-up</li>
                    <li>• Quality systems implementation</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-white">Areas of Expertise</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Medical countermeasure development</li>
                    <li>• BARDA, NIAID, and DoD contract management</li>
                    <li>• FDA and Health Canada regulatory processes</li>
                    <li>• Strategic National Stockpile requirements</li>
                    <li>• International biodefense partnerships</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 text-white">Why Choose Elusys Consulting?</h4>
                <p className="text-gray-300">
                  Our track record speaks for itself. With over $450 million in successful government contracts and the development of ANTHIM®, we understand what it takes to bring critical medical countermeasures from concept to commercialization. Our consulting team can help your organization navigate complex regulatory requirements, optimize development strategies, and accelerate your path to success in the biodefense sector.
                </p>
              </div>

              <div className="pt-6">
                <a href="#contact" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors">
                  Contact Us About Consulting Services
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Learn More About Our Solutions</h2>
          <p className="mb-8 text-lg">Click below to learn more regarding anthrax and our products.</p>
          <div className="flex justify-center space-x-6">
            <a href="#about-anthrax" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">
              About Anthrax
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#products" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">
              Our Products
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <Logo className="h-12" />
              </div>
              <p className="text-gray-400">Defending Tomorrow – Today</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about-us" className="hover:text-blue-500">About Us</a></li>
                <li><a href="#management-team" className="hover:text-blue-500">Management Team</a></li>
                <li><a href="#biothreat-advisory-board" className="hover:text-blue-500">Biothreat Advisory Board</a></li>
                <li><a href="#products" className="hover:text-blue-500">Products</a></li>
                <li><a href="#news" className="hover:text-blue-500">News & Media</a></li>
                <li><a href="#consulting" className="hover:text-blue-500">Consulting Services</a></li>
                <li><a href="#resources-overview" className="hover:text-blue-500">Resources Overview</a></li>
                <li><a href="#publications" className="hover:text-blue-500">Publications</a></li>
                <li><a href="#about-anthrax" className="hover:text-blue-500">About Anthrax</a></li>
                <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@elusys.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Science Park Drive</li>
                <li>Research City, RC 12345</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-500">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-blue-500">Twitter</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Elusys. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;