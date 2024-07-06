import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl">Get in Touch</h1>
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
    </div>
  );
};

export default Contact;