const Services = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl">Our Services</h1>
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
    </div>
  );
};

export default Services;