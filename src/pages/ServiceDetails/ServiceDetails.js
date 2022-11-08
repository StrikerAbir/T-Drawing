import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../utilities/Hook/useTitle';

const ServiceDetails = () => {
    const service = useLoaderData()
    const { service_id, title, rating, img, price, description } = service;
    useTitle(title)
    return (
        <div>
            <section>
                {title}
            </section>
            <section>

            </section>
        </div>
    );
};

export default ServiceDetails;