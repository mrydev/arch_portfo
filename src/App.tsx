// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
const [activeSection, setActiveSection] = useState('home');
const [isNavSolid, setIsNavSolid] = useState(false);
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [selectedProject, setSelectedProject] = useState<null | {
id: number;
title: string;
description: string;
fullDescription: string;
technical: string;
images: string[];
}>(null);
// Handle scroll to set active section and navbar style
useEffect(() => {
const handleScroll = () => {
const scrollPosition = window.scrollY;
// Make navbar solid after scrolling
if (scrollPosition > 50) {
setIsNavSolid(true);
} else {
setIsNavSolid(false);
}
// Determine active section
const sections = ['home', 'about', 'projects', 'resume', 'contact'];
for (const section of sections) {
const element = document.getElementById(section);
if (element) {
const rect = element.getBoundingClientRect();
if (rect.top <= 100 && rect.bottom >= 100) {
setActiveSection(section);
break;
}
}
}
};
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);
// Scroll to section
const scrollToSection = (sectionId: string) => {
const element = document.getElementById(sectionId);
if (element) {
window.scrollTo({
top: element.offsetTop - 70,
behavior: 'smooth'
});
}
setIsMenuOpen(false);
};
// Project data
const projects = [
{
id: 1,
title: "Urban Renewal Complex",
description: "Mixed-use development with sustainable features",
fullDescription: "A conceptual design for a mixed-use urban complex that integrates residential, commercial, and public spaces. The project focuses on sustainability, incorporating green roofs, rainwater harvesting systems, and energy-efficient facades.",
technical: "Materials: Concrete, Steel, Glass | Area: 12,000 sq.m | Location: Downtown District",
images: [
"https://readdy.ai/api/search-image?query=Modern%20architectural%20mixed-use%20building%20with%20glass%20facade%2C%20green%20roof%20terraces%2C%20and%20sustainable%20design%20elements.%20Urban%20setting%20with%20pedestrian%20areas%20and%20landscaping.%20Dramatic%20lighting%2C%20professional%20architectural%20photography%2C%20ultra%20high%20quality%2C%20photorealistic&width=800&height=600&seq=1&orientation=landscape",
"https://readdy.ai/api/search-image?query=Interior%20of%20modern%20architectural%20space%20with%20open%20floor%20plan%2C%20natural%20light%20through%20floor%20to%20ceiling%20windows%2C%20minimalist%20design%2C%20concrete%20and%20wood%20materials%2C%20architectural%20visualization%2C%20ultra%20high%20quality%2C%20photorealistic&width=800&height=600&seq=2&orientation=landscape",
"https://readdy.ai/api/search-image?query=Detailed%20architectural%20model%20of%20mixed-use%20development%20with%20multiple%20buildings%2C%20green%20spaces%2C%20and%20pedestrian%20walkways.%20Clean%20white%20model%20on%20dark%20background%2C%20professional%20studio%20lighting%2C%20architectural%20presentation%2C%20ultra%20high%20quality&width=800&height=600&seq=3&orientation=landscape"
]
},
{
id: 2,
title: "Waterfront Cultural Center",
description: "Public space celebrating local heritage",
fullDescription: "A cultural center designed to celebrate local heritage while creating a new landmark on the city's waterfront. The building's form draws inspiration from traditional maritime structures while employing contemporary architectural language.",
technical: "Materials: Exposed Concrete, Timber, Weathered Steel | Area: 5,800 sq.m | Location: Harbor District",
images: [
"https://readdy.ai/api/search-image?query=Modern%20cultural%20center%20building%20on%20waterfront%20with%20dramatic%20curved%20roof%2C%20large%20glass%20walls%20reflecting%20water%2C%20public%20plaza%20with%20people%2C%20evening%20lighting%2C%20professional%20architectural%20photography%2C%20ultra%20high%20quality%2C%20photorealistic&width=800&height=600&seq=4&orientation=landscape",
"https://readdy.ai/api/search-image?query=Interior%20of%20cultural%20center%20with%20high%20ceilings%2C%20exhibition%20space%2C%20natural%20light%20from%20skylights%2C%20wooden%20acoustic%20panels%2C%20people%20viewing%20art%20displays%2C%20architectural%20visualization%2C%20ultra%20high%20quality%2C%20photorealistic&width=800&height=600&seq=5&orientation=landscape",
"https://readdy.ai/api/search-image?query=Architectural%20site%20plan%20and%20section%20drawings%20of%20waterfront%20cultural%20center%2C%20detailed%20technical%20drawing%20with%20measurements%20and%20annotations%2C%20professional%20presentation%20on%20white%20background%2C%20ultra%20high%20quality&width=800&height=600&seq=6&orientation=landscape"
]
},
{
id: 3,
title: "Modular Housing Prototype",
description: "Innovative solution for affordable living",
fullDescription: "An innovative housing prototype designed to address urban density and affordability challenges. The modular system allows for flexible configurations and efficient construction while maintaining high design standards and quality of life.",
technical: "Materials: Cross-Laminated Timber, Prefabricated Panels | Area: 45-90 sq.m per unit | Location: Various",
images: [
"https://readdy.ai/api/search-image?query=Modern%20modular%20housing%20units%20with%20clean%20geometric%20design%2C%20stacked%20configuration%2C%20large%20windows%2C%20private%20balconies%20with%20plants%2C%20sustainable%20materials%2C%20professional%20architectural%20photography%2C%20ultra%20high%20quality%2C%20photorealistic&width=800&height=600&seq=7&orientation=landscape",
"https://readdy.ai/api/search-image?query=Interior%20of%20compact%20modular%20apartment%20with%20efficient%20layout%2C%20built-in%20furniture%2C%20large%20windows%2C%20warm%20wood%20finishes%2C%20minimalist%20design%2C%20architectural%20visualization%2C%20ultra%20high%20quality%2C%20photorealistic&width=800&height=600&seq=8&orientation=landscape",
"https://readdy.ai/api/search-image?query=Exploded%20axonometric%20diagram%20of%20modular%20housing%20system%20showing%20assembly%20components%2C%20connection%20details%2C%20and%20configuration%20options%2C%20technical%20illustration%20on%20white%20background%2C%20architectural%20presentation%2C%20ultra%20high%20quality&width=800&height=600&seq=9&orientation=landscape"
]
},
{
id: 4,
title: "Community Learning Center",
description: "Educational space promoting collaboration",
fullDescription: "A community-focused learning center designed to promote collaboration and knowledge sharing. The building creates a series of interconnected spaces that can adapt to different learning activities and community events.",
technical: "Materials: Brick, Exposed Concrete, Wood | Area: 3,200 sq.m | Location: Suburban District",
images: [
"https://readdy.ai/api/search-image?query=Modern%20community%20learning%20center%20with%20brick%20and%20glass%20facade%2C%20central%20courtyard%20with%20trees%2C%20people%20gathering%20in%20outdoor%20spaces%2C%20warm%20afternoon%20lighting%2C%20professional%20architectural%20photography%2C%20ultra%20high%20quality%2C%20photorealistic&width=800&height=600&seq=10&orientation=landscape",
"https://readdy.ai/api/search-image?query=Interior%20of%20learning%20center%20with%20collaborative%20workspace%2C%20bookshelves%2C%20natural%20light%2C%20exposed%20wooden%20ceiling%20structure%2C%20people%20studying%20and%20interacting%2C%20architectural%20visualization%2C%20ultra%20high%20quality%2C%20photorealistic&width=800&height=600&seq=11&orientation=landscape",
"https://readdy.ai/api/search-image?query=Physical%20architectural%20model%20of%20community%20learning%20center%20showing%20spatial%20organization%2C%20materiality%2C%20and%20landscape%20integration%2C%20detailed%20white%20model%20on%20wooden%20base%2C%20studio%20lighting%2C%20architectural%20presentation%2C%20ultra%20high%20quality&width=800&height=600&seq=12&orientation=landscape"
]
},
{
id: 5,
title: "Vertical Urban Garden",
description: "Integrating nature into urban fabric",
fullDescription: "A vertical garden concept that integrates nature into the dense urban fabric. The project explores how architecture can support urban agriculture, biodiversity, and create new types of public spaces in the city.",
technical: "Materials: Steel Structure, Composite Panels, Hydroponic Systems | Area: 1,800 sq.m | Location: City Center",
images: [
"https://readdy.ai/api/search-image?query=Vertical%20urban%20garden%20structure%20with%20multiple%20levels%20of%20green%20plantings%2C%20integrated%20water%20systems%2C%20public%20viewing%20platforms%2C%20set%20against%20urban%20skyline%2C%20professional%20architectural%20photography%2C%20ultra%20high%20quality%2C%20photorealistic&width=800&height=600&seq=13&orientation=landscape",
"https://readdy.ai/api/search-image?query=Interior%20view%20of%20vertical%20garden%20with%20people%20tending%20to%20plants%2C%20hydroponic%20growing%20systems%2C%20transparent%20roof%20allowing%20natural%20light%2C%20educational%20displays%2C%20architectural%20visualization%2C%20ultra%20high%20quality%2C%20photorealistic&width=800&height=600&seq=14&orientation=landscape",
"https://readdy.ai/api/search-image?query=Detailed%20technical%20diagram%20of%20vertical%20garden%20systems%20showing%20water%20circulation%2C%20growing%20beds%2C%20structural%20support%2C%20and%20environmental%20control%20systems%2C%20professional%20technical%20illustration%20on%20white%20background%2C%20ultra%20high%20quality&width=800&height=600&seq=15&orientation=landscape"
]
},
{
id: 6,
title: "Adaptive Reuse Lofts",
description: "Transforming industrial heritage",
fullDescription: "An adaptive reuse project that transforms an abandoned industrial building into contemporary living spaces. The design preserves the character and history of the original structure while creating modern, light-filled lofts.",
technical: "Materials: Existing Brick, Exposed Steel, Glass | Area: 4,500 sq.m | Location: Industrial District",
images: [
"https://readdy.ai/api/search-image?query=Converted%20industrial%20building%20with%20preserved%20brick%20facade%2C%20new%20large%20windows%2C%20rooftop%20addition%20with%20terraces%2C%20contextual%20urban%20setting%2C%20evening%20lighting%2C%20professional%20architectural%20photography%2C%20ultra%20high%20quality%2C%20photorealistic&width=800&height=600&seq=16&orientation=landscape",
"https://readdy.ai/api/search-image?query=Interior%20of%20converted%20loft%20with%20high%20ceilings%2C%20exposed%20brick%20walls%2C%20original%20steel%20columns%2C%20modern%20furnishings%2C%20large%20industrial%20windows%2C%20architectural%20visualization%2C%20ultra%20high%20quality%2C%20photorealistic&width=800&height=600&seq=17&orientation=landscape",
"https://readdy.ai/api/search-image?query=Before%20and%20after%20architectural%20drawings%20showing%20transformation%20of%20industrial%20building%20to%20residential%20lofts%2C%20detailed%20plans%20and%20sections%2C%20annotations%20highlighting%20preserved%20elements%2C%20professional%20presentation%2C%20ultra%20high%20quality&width=800&height=600&seq=18&orientation=landscape"
]
}
];
return (
<div className="font-mono text-gray-900 min-h-screen">
{/* Navigation */}
<nav className={`fixed w-full z-50 transition-all duration-300 ${isNavSolid ? 'bg-black text-white py-3' : 'bg-transparent text-white py-5'}`}>
<div className="container mx-auto px-6 flex justify-between items-center">
<a href="#home" className="text-2xl font-bold tracking-tighter cursor-pointer" onClick={() => scrollToSection('home')}>
J.SMITH_
</a>
{/* Desktop Navigation */}
<div className="hidden md:flex space-x-8">
{['home', 'about', 'projects', 'resume', 'contact'].map((section) => (
<button
key={section}
onClick={() => scrollToSection(section)}
className={`cursor-pointer uppercase text-sm tracking-widest whitespace-nowrap ${activeSection === section ? 'text-white font-bold' : 'text-gray-400 hover:text-white'}`}
>
{section}
</button>
))}
</div>
{/* Mobile Navigation Button */}
<div className="md:hidden">
<button
onClick={() => setIsMenuOpen(!isMenuOpen)}
className="cursor-pointer !rounded-button whitespace-nowrap"
>
<i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
</button>
</div>
</div>
{/* Mobile Menu */}
{isMenuOpen && (
<div className="md:hidden bg-white shadow-lg absolute w-full">
<div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
{['home', 'about', 'projects', 'resume', 'contact'].map((section) => (
<button
key={section}
onClick={() => scrollToSection(section)}
className={`cursor-pointer capitalize py-2 !rounded-button whitespace-nowrap ${activeSection === section ? 'text-black font-medium' : 'text-gray-500'}`}
>
{section}
</button>
))}
</div>
</div>
)}
</nav>
{/* Hero Section */}
<section id="home" className="relative h-screen flex items-center justify-start overflow-hidden bg-black">
<div className="absolute inset-0 bg-black/60 z-10"></div>
<div
className="absolute inset-0 bg-cover bg-center"
style={{
backgroundImage: `url('https://readdy.ai/api/search-image?query=Brutalist%20architecture%20photography%20with%20dramatic%20concrete%20facade%2C%20strong%20geometric%20shapes%2C%20raw%20concrete%20textures%2C%20harsh%20shadows%2C%20monumental%20scale%2C%20black%20and%20white%20architectural%20photography%2C%20ultra%20high%20quality%2C%20photorealistic&width=1440&height=900&seq=19&orientation=landscape')`
}}
></div>
<div className="container mx-auto px-6 relative z-20">
<div className="max-w-3xl">
<h1 className="text-6xl md:text-8xl font-bold text-white mb-6 opacity-0 animate-fadeIn tracking-tighter" style={{animation: 'fadeIn 1s forwards'}}>
JOHN_<br/>SMITH
</h1>
<h2 className="text-xl md:text-2xl font-mono text-white mb-8 opacity-0 animate-fadeIn border-l-4 border-white pl-4" style={{animation: 'fadeIn 1s 0.3s forwards'}}>
ARCHITECTURE STUDENT / 2025
</h2>
</div>
<button
onClick={() => scrollToSection('projects')}
className="mt-8 px-8 py-3 bg-white text-black hover:bg-gray-200 transition-all duration-300 opacity-0 animate-fadeIn cursor-pointer !rounded-button whitespace-nowrap font-bold tracking-widest text-sm"
style={{animation: 'fadeIn 1s 0.6s forwards'}}
>
EXPLORE_WORKS
</button>
</div>
{/* Scroll Indicator */}
<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
<i className="fas fa-chevron-down text-white text-2xl"></i>
</div>
</section>
{/* About Section */}
<section id="about" className="py-20 bg-black text-white">
<div className="container mx-auto px-6">
<h2 className="text-4xl font-bold mb-16 tracking-tighter border-b-4 border-white pb-4 inline-block">ABOUT_ME</h2>
<div className="flex flex-col md:flex-row items-start gap-12">
<div className="md:w-2/5">
<div className="overflow-hidden border-8 border-white">
<img
src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20young%20male%20architecture%20student%20in%20modern%20studio%20environment%2C%20well-dressed%20in%20casual%20professional%20attire%2C%20surrounded%20by%20architectural%20models%20and%20drawings%2C%20natural%20lighting%2C%20thoughtful%20expression%2C%20ultra%20high%20quality%2C%20photorealistic&width=600&height=800&seq=20&orientation=portrait"
alt="John Smith - Architecture Student"
className="w-full h-full object-cover object-top"
/>
</div>
</div>
<div className="md:w-3/5">
<h3 className="text-3xl font-bold mb-8 tracking-tighter">MANIFESTO_</h3>
<p className="text-gray-300 mb-6 leading-relaxed font-mono">
I am a final-year architecture student passionate about creating spaces that blend functionality, sustainability, and aesthetic beauty. My design approach focuses on human-centered solutions that respond to both environmental and social contexts.
</p>
<p className="text-gray-600 mb-6 leading-relaxed">
Throughout my academic journey, I've developed expertise in parametric design, sustainable building practices, and digital fabrication. I believe architecture has the power to address pressing challenges of our time while creating meaningful experiences for people.
</p>
<p className="text-gray-600 mb-8 leading-relaxed">
When not designing, you can find me sketching urban landscapes, exploring photography, or volunteering for community design initiatives. I'm currently seeking opportunities to collaborate with forward-thinking architectural practices.
</p>
<div className="flex flex-wrap gap-4 mt-12">
<div className="bg-white text-black px-6 py-4">
<span className="block text-xs tracking-widest mb-1">EDUCATION_</span>
<span className="font-bold">M.ARCH 2025</span>
</div>
<div className="bg-white text-black px-6 py-4">
<span className="block text-xs tracking-widest mb-1">LOCATION_</span>
<span className="font-bold">NYC</span>
</div>
<div className="bg-white text-black px-6 py-4">
<span className="block text-xs tracking-widest mb-1">FOCUS_</span>
<span className="font-bold">BRUTALIST.URBAN</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Projects Section */}
<section id="projects" className="py-20 bg-black">
<div className="container mx-auto px-6">
<h2 className="text-3xl font-bold mb-16 text-white tracking-tighter border-b-4 border-white pb-4 inline-block">SELECTED_WORKS</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
{projects.map((project) => (
<div
key={project.id}
className="group relative cursor-pointer border-4 border-white"
onClick={() => setSelectedProject(project)}
>
<div className="aspect-[4/3] overflow-hidden">
<img
src={project.images[0]}
alt={project.title}
className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
/>
</div>
<div className="absolute inset-0 bg-black/60 opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
<div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
<div>
<span className="text-sm tracking-widest opacity-75">PROJECT_{project.id}</span>
<h3 className="text-2xl font-bold mt-2 tracking-tighter">{project.title}</h3>
</div>
<div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-gray-300 text-sm mb-4 font-mono">{project.description}</p>
<button className="bg-white text-black px-6 py-2 text-sm font-bold tracking-widest !rounded-button whitespace-nowrap">
VIEW_DETAILS
</button>
</div>
</div>
</div>
))}
</div>
</div>
</section>
{/* Resume Section */}
<section id="resume" className="py-20 bg-zinc-900">
<div className="container mx-auto px-6 text-center">
<h2 className="text-3xl font-bold mb-16">CURRICULUM VITAE</h2>
<div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
<div className="mb-8 w-40 h-56 mx-auto bg-gray-100 rounded shadow-inner flex items-center justify-center">
<i className="far fa-file-pdf text-gray-400 text-5xl"></i>
</div>
<h3 className="text-xl font-semibold mb-4">John Smith - Architecture CV</h3>
<p className="text-gray-600 mb-8">
Download my complete CV to learn more about my education, skills, and experience in architectural design.
</p>
<a
href="#"
className="inline-flex items-center px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap"
>
<i className="fas fa-download mr-2"></i>
Download CV
</a>
</div>
</div>
</section>
{/* Contact Section */}
<section id="contact" className="py-20 bg-black text-white">
<div className="container mx-auto px-6">
<h2 className="text-3xl font-bold text-center mb-16">GET IN TOUCH</h2>
<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
<div>
<h3 className="text-xl font-semibold mb-6">Contact Information</h3>
<p className="text-gray-600 mb-8 leading-relaxed">
I'm currently available for internships, collaborations, and academic opportunities. Feel free to reach out if you'd like to discuss potential projects or just want to connect.
</p>
<div className="space-y-4 mb-8">
<div className="flex items-start">
<i className="fas fa-envelope text-gray-400 mt-1 w-6"></i>
<span className="ml-3 text-gray-600">john.smith@architecture.edu</span>
</div>
<div className="flex items-start">
<i className="fas fa-phone text-gray-400 mt-1 w-6"></i>
<span className="ml-3 text-gray-600">+1 (555) 123-4567</span>
</div>
<div className="flex items-start">
<i className="fas fa-map-marker-alt text-gray-400 mt-1 w-6"></i>
<span className="ml-3 text-gray-600">New York, NY, USA</span>
</div>
</div>
<h3 className="text-xl font-semibold mb-4">Connect</h3>
<div className="flex space-x-4">
<a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 cursor-pointer">
<i className="fab fa-linkedin-in text-gray-700"></i>
</a>
<a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 cursor-pointer">
<i className="fab fa-instagram text-gray-700"></i>
</a>
<a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 cursor-pointer">
<i className="fab fa-behance text-gray-700"></i>
</a>
<a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 cursor-pointer">
<i className="fab fa-pinterest text-gray-700"></i>
</a>
</div>
</div>
<div>
<form className="space-y-6">
<div>
<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
<input
type="text"
id="name"
className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
placeholder="Your name"
/>
</div>
<div>
<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
<input
type="email"
id="email"
className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
placeholder="Your email address"
/>
</div>
<div>
<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
<textarea
id="message"
rows={5}
className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
placeholder="Your message"
></textarea>
</div>
<button
type="submit"
className="w-full px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap"
>
Send Message
</button>
</form>
</div>
</div>
</div>
</section>
{/* Footer */}
<footer className="py-8 bg-zinc-900 text-white border-t border-white/20">
<div className="container mx-auto px-6 text-center">
<p className="mb-4">© {new Date().getFullYear()} John Smith. All rights reserved.</p>
<p className="text-gray-400 text-sm">
Designed and built with passion for architecture and design.
</p>
</div>
</footer>
{/* Project Modal */}
{selectedProject && (
<div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8">
<div className="bg-black border-4 border-white max-w-5xl w-full max-h-[90vh] overflow-y-auto">
<div className="p-6 md:p-8">
<div className="flex justify-between items-center mb-6">
<h3 className="text-2xl font-bold text-white tracking-tighter">{selectedProject.title}</h3>
<button
onClick={() => setSelectedProject(null)}
className="text-white hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap"
>
<i className="fas fa-times text-xl"></i>
</button>
</div>
{/* Project Images */}
<div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="md:col-span-2">
<img
src={selectedProject.images[0]}
alt={selectedProject.title}
className="w-full h-auto rounded-lg"
/>
</div>
<div>
<img
src={selectedProject.images[1]}
alt={`${selectedProject.title} detail`}
className="w-full h-auto rounded-lg"
/>
</div>
<div>
<img
src={selectedProject.images[2]}
alt={`${selectedProject.title} detail`}
className="w-full h-auto rounded-lg"
/>
</div>
</div>
{/* Project Details */}
<div className="space-y-6">
<div className="text-white">
<h4 className="text-lg font-semibold mb-2 tracking-tighter">PROJECT_DESCRIPTION</h4>
<p className="text-gray-400 font-mono">{selectedProject.fullDescription}</p>
</div>
<div className="mt-8 text-white">
<h4 className="text-lg font-semibold mb-2 tracking-tighter">TECHNICAL_DETAILS</h4>
<p className="text-gray-400 font-mono">{selectedProject.technical}</p>
</div>
</div>
</div>
</div>
</div>
)}
{/* CSS Animations */}
<style>{`
@keyframes fadeIn {
from { opacity: 0; transform: translateY(20px); }
to { opacity: 1; transform: translateY(0); }
}
`}</style>
</div>
);
};
export default App