const Services = () => {
    const services = ['laundry', 'computer maintenance', 'something else...'];

    return (
        <section>
            <h2>Our Services</h2>
            <p>Explore our list of services.</p>
            {services.map(service => (
                <div>
                    {service}
                </div>
            ))}
        </section>
    )
}

export default Services;
