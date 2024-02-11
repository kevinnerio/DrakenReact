function ServiceCard({service}) {
    return (
    <div className="column-container"> 
        <div className="column-container_image"><img src={service.image} alt={service.alt}/></div>
        <div className="column-container_content">
            <div className="column-container_title">{service.title}</div>
            <div className="column-container_desc">{service.desc}</div>
        </div>
    </div>
    )
}

export default ServiceCard; 