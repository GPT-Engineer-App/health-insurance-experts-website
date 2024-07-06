import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center space-y-8">
      <section className="hero bg-cover bg-center py-20" style={{ backgroundImage: 'url("/placeholder.svg")' }}>
        <div className="bg-black bg-opacity-50 py-20">
          <h1 className="text-5xl text-white">Welcome to Stone Oak Health Insurance Experts</h1>
          <p className="text-xl text-white mt-4">Your trusted partner in health insurance solutions</p>
          <Button variant="primary" className="mt-6">Learn More</Button>
        </div>
      </section>
      <section id="about" className="py-20">
        <h2 className="text-4xl">About Us</h2>
        <p className="mt-4">We are dedicated to providing the best health insurance solutions for you and your family.</p>
        <img src="/placeholder.svg" alt="About Us" className="mx-auto object-cover w-full h-[400px] mt-6" />
      </section>
      <section id="services" className="py-20 bg-gray-100">
        <h2 className="text-4xl">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="service-card p-6 bg-white shadow-md">
            <h3 className="text-2xl">Service 1</h3>
            <p className="mt-2">Description of service 1.</p>
          </div>
          <div className="service-card p-6 bg-white shadow-md">
            <h3 className="text-2xl">Service 2</h3>
            <p className="mt-2">Description of service 2.</p>
          </div>
          <div className="service-card p-6 bg-white shadow-md">
            <h3 className="text-2xl">Service 3</h3>
            <p className="mt-2">Description of service 3.</p>
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-20">
        <h2 className="text-4xl">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="testimonial-card p-6 bg-white shadow-md">
            <img src="/placeholder.svg" alt="Client 1" className="mx-auto object-cover w-24 h-24 rounded-full" />
            <p className="mt-4">Client 1's feedback.</p>
          </div>
          <div className="testimonial-card p-6 bg-white shadow-md">
            <img src="/placeholder.svg" alt="Client 2" className="mx-auto object-cover w-24 h-24 rounded-full" />
            <p className="mt-4">Client 2's feedback.</p>
          </div>
          <div className="testimonial-card p-6 bg-white shadow-md">
            <img src="/placeholder.svg" alt="Client 3" className="mx-auto object-cover w-24 h-24 rounded-full" />
            <p className="mt-4">Client 3's feedback.</p>
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 bg-gray-100">
        <h2 className="text-4xl">Get in Touch</h2>
        <form className="mt-8 space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
          <input type="tel" placeholder="Phone" className="w-full p-3 border rounded" />
          <textarea placeholder="Message" className="w-full p-3 border rounded h-32"></textarea>
          <Button variant="primary">Submit</Button>
        </form>
        <div className="mt-8">
          <img src="/placeholder.svg" alt="Map" className="mx-auto object-cover w-full h-[400px]" />
        </div>
      </section>
    </div>
  );
};

export default Index;