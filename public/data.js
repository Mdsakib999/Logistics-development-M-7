import {
  Boxes,
  Facebook, Instagram, Linkedin, Mail, MapPin,
  PackageCheck,
  Phone,
  Plane,
  Ship,
  Truck,
  Twitter,
  Warehouse,
} from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Muntasir Mahmud",
    role: "Product Manager",
    description:
      "Tristique pharetra consectetur. Et vitae rutrum aliquam consectetur dictum enim placerat nulla. Turpis pharetra pharetra enim platea risus neque felis interdum.Tristique pharetra consectetur. Et vitae rutrum aliquam consectetur dictum enim placerat nulla. Turpis pharetra pharetra enim platea risus neque felis interdum.",
    image:
      "/images/testimonial-1.png",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Logistics Coordinator",
    description: " lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae rutrum aliquam consectetur dictum enim placerat nulla. Turpis pharetra pharetra enim platea risus neque felis interdum.Tristique pharetra consectetur. Et vitae rutrum aliquam consectetur dictum enim placerat nulla. Turpis pharetra pharetra enim platea risus neque felis interdum.",
    image:
      "/images/testimonial-2.png",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "David Chen",
    role: "Operations Director",
    description:
      "ipsum dolor sit amet, consectetur adipiscing elit. Et vitae rutrum aliquam consectetur dictum enim placerat nulla. Turpis pharetra pharetra enim platea risus neque felis interdum.Tristique pharetra consectetur. Et vitae rutrum aliquam consectetur dictum enim placerat nulla. Turpis pharetra pharetra enim platea risus neque felis interdum.",
    image:
      "/images/testomonial-3.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
];

const services = [
  {
    id: 1,
    image: "/images/scene-with-photorealistic-logistics-operations-proceedings (1).jpg",
    title: "Air Freight",
    icon: Plane,
    info: "Fast global air transport",
    description:
      "Fast and reliable air cargo services for time-sensitive shipments across the globe.",
    fullDescription:
      "Our air freight services provide the fastest and most reliable solution for time-sensitive cargo shipments worldwide. With partnerships with major airlines and access to dedicated cargo aircraft, we ensure your goods reach their destination quickly and safely. Whether you need express delivery, standard air freight, or charter services, our experienced team handles every aspect of the shipping process with precision and care.\n\nWe understand that time is critical in today's fast-paced business environment. Our air freight solutions are designed to meet tight deadlines while maintaining the highest standards of safety and security. From small parcels to oversized cargo, we have the expertise and infrastructure to handle shipments of any size across our global network spanning over 200 countries.",
    features: [
      "Express delivery within 24-48 hours to major destinations",
      "Global network coverage across 200+ countries",
      "Real-time tracking and monitoring systems",
      "Dedicated cargo handling and security protocols",
      "Temperature-controlled options for sensitive goods",
      "Customs clearance assistance and documentation support",
      "Door-to-door delivery services available",
      "24/7 customer support and shipment updates",
    ],
    process: [
      {
        step: 1,
        title: "Booking & Quote",
        description: "Contact our team for a customized quote based on your cargo specifications and destination.",
      },
      {
        step: 2,
        title: "Documentation",
        description: "We assist with all necessary shipping documents, customs paperwork, and compliance requirements.",
      },
      {
        step: 3,
        title: "Pickup & Packaging",
        description: "Professional pickup service with expert packaging to ensure cargo safety during transit.",
      },
      {
        step: 4,
        title: "Air Transport",
        description: "Your cargo is loaded onto the next available flight with priority handling and security.",
      },
      {
        step: 5,
        title: "Customs Clearance",
        description: "Our customs experts handle all clearance procedures at the destination country efficiently.",
      },
      {
        step: 6,
        title: "Final Delivery",
        description: "Last-mile delivery to your specified address with proof of delivery confirmation.",
      },
    ],
    stats: {
      deliveryTime: "24-48 hours",
      coverage: "200+ countries",
      reliability: "99.5%",
    },
    relatedServices: [2, 5],
  },
  {
    id: 2,
    image: "/images/contact-3.jpg",
    title: "Ocean Freight",
    icon: Ship,
    info: "Affordable international shipping",
    description:
      "Cost-effective sea freight solutions for large-scale international shipping needs.",
    fullDescription:
      "Ocean freight remains the most economical choice for international shipping, especially for large volumes and heavy cargo. Our comprehensive sea freight services include Full Container Load (FCL) and Less than Container Load (LCL) options, providing flexibility for businesses of all sizes. We work with leading shipping lines to offer competitive rates and reliable transit times across major trade routes.\n\nWith decades of experience in maritime logistics, we handle everything from port-to-port shipping to complete door-to-door solutions. Our team manages vessel booking, container stuffing, customs documentation, and cargo insurance, ensuring your goods arrive safely and on schedule. Whether you're shipping raw materials, finished products, or oversized equipment, our ocean freight solutions deliver exceptional value and reliability.",
    features: [
      "Full Container Load (FCL) and Less than Container Load (LCL) options",
      "Competitive rates on major shipping routes worldwide",
      "Specialized containers for various cargo types",
      "Port-to-port and door-to-door service options",
      "Cargo insurance and risk management solutions",
      "Container tracking and shipment visibility",
      "Customs brokerage and documentation services",
      "Consolidation services for cost optimization",
    ],
    process: [
      {
        step: 1,
        title: "Consultation",
        description: "Discuss your shipping needs and receive a detailed quote for FCL or LCL services.",
      },
      {
        step: 2,
        title: "Booking",
        description: "Reserve container space on the optimal vessel route for your timeline and budget.",
      },
      {
        step: 3,
        title: "Container Loading",
        description: "Professional loading and securing of cargo at origin port with proper documentation.",
      },
      {
        step: 4,
        title: "Ocean Transit",
        description: "Your cargo sails across international waters with regular tracking updates provided.",
      },
      {
        step: 5,
        title: "Port Clearance",
        description: "Handle all customs formalities and port procedures at the destination efficiently.",
      },
      {
        step: 6,
        title: "Delivery",
        description: "Final transportation from port to your warehouse or specified delivery location.",
      },
    ],
    stats: {
      deliveryTime: "15-45 days",
      coverage: "500+ ports",
      reliability: "98.8%",
    },
    relatedServices: [1, 6],
  },
  {
    id: 3,
    image: "/images/bernd-dittrich-eCc7FjMoR74-unsplash.jpg",
    title: "Road Freight",
    icon: Truck,
    info: "Reliable ground delivery",
    description:
      "Efficient ground transportation services for domestic and regional deliveries.",
    fullDescription:
      "Our road freight services provide flexible and reliable ground transportation solutions for domestic and cross-border deliveries. With a modern fleet of trucks and an extensive network of partner carriers, we offer comprehensive coverage across the region. From small parcels to full truckload shipments, we ensure your cargo reaches its destination safely and on time.\n\nWe specialize in both short-haul and long-haul trucking services, offering various vehicle types to match your specific cargo requirements. Our experienced drivers and logistics coordinators work together to optimize routes, reduce transit times, and provide real-time visibility throughout the journey. Whether you need regular scheduled deliveries or ad-hoc transportation, our road freight solutions deliver reliability and value.",
    features: [
      "Full Truckload (FTL) and Less than Truckload (LTL) services",
      "Modern fleet with GPS tracking on all vehicles",
      "Temperature-controlled trucks for sensitive cargo",
      "Express and economy service options available",
      "Cross-border transportation with customs support",
      "Flexible scheduling and route optimization",
      "Specialized vehicles for oversized or heavy cargo",
      "Professional drivers with safety certifications",
    ],
    process: [
      {
        step: 1,
        title: "Request Quote",
        description: "Provide cargo details and destination for an instant competitive quote.",
      },
      {
        step: 2,
        title: "Schedule Pickup",
        description: "Choose a convenient pickup time and location for your shipment.",
      },
      {
        step: 3,
        title: "Loading",
        description: "Our team carefully loads and secures your cargo in the appropriate vehicle.",
      },
      {
        step: 4,
        title: "Transportation",
        description: "Track your shipment in real-time as it travels along the optimized route.",
      },
      {
        step: 5,
        title: "Updates",
        description: "Receive automated notifications at key milestones throughout the journey.",
      },
      {
        step: 6,
        title: "Delivery",
        description: "Safe delivery to the destination with signature confirmation and proof of delivery.",
      },
    ],
    stats: {
      deliveryTime: "1-5 days",
      coverage: "Nationwide",
      reliability: "99.2%",
    },
    relatedServices: [4, 5],
  },
  {
    id: 4,
    image: "/images/pexels-pixabay-209251.jpg",
    title: "Warehousing",
    icon: Warehouse,
    info: "Secure storage solutions",
    description:
      "Secure storage facilities with advanced inventory management systems.",
    fullDescription:
      "Our state-of-the-art warehousing facilities provide secure, flexible storage solutions tailored to your business needs. Equipped with advanced inventory management systems, climate control, and 24/7 security monitoring, our warehouses ensure your goods are stored safely and efficiently. We offer both short-term and long-term storage options with scalable space to accommodate your changing requirements.\n\nBeyond basic storage, we provide comprehensive warehouse management services including inventory tracking, order fulfillment, pick and pack operations, and quality control. Our strategically located facilities enable efficient distribution and reduce transportation costs. Whether you need bulk storage, specialized handling for sensitive products, or integrated e-commerce fulfillment, our warehousing solutions streamline your supply chain operations.",
    features: [
      "Climate-controlled storage environments",
      "Advanced inventory management software",
      "24/7 security surveillance and access control",
      "Flexible storage space from 100 to 100,000+ sq ft",
      "Order fulfillment and pick-pack services",
      "Real-time inventory visibility and reporting",
      "Cross-docking and transloading capabilities",
      "Specialized storage for hazardous materials",
    ],
    process: [
      {
        step: 1,
        title: "Assessment",
        description: "Evaluate your storage needs and recommend the optimal warehouse solution.",
      },
      {
        step: 2,
        title: "Setup",
        description: "Configure warehouse space and integrate with your inventory management systems.",
      },
      {
        step: 3,
        title: "Receiving",
        description: "Accept incoming shipments with thorough inspection and documentation.",
      },
      {
        step: 4,
        title: "Storage",
        description: "Organize and store goods using optimal racking and location strategies.",
      },
      {
        step: 5,
        title: "Management",
        description: "Monitor inventory levels with real-time tracking and automated alerts.",
      },
      {
        step: 6,
        title: "Fulfillment",
        description: "Process orders and prepare shipments for distribution to end customers.",
      },
    ],
    stats: {
      deliveryTime: "Same day",
      coverage: "50+ facilities",
      reliability: "99.9%",
    },
    relatedServices: [3, 5],
  },
  {
    id: 5,
    image: "/images/why-choose.png",
    title: "Distribution",
    icon: Boxes,
    info: "Timely nationwide delivery",
    description:
      "Streamlined distribution networks ensuring timely delivery to your customers.",
    fullDescription:
      "Our distribution services create seamless connections between your products and customers through strategically optimized networks. We manage the entire distribution process, from warehouse to final delivery, ensuring your goods reach their destination efficiently and cost-effectively. With advanced route planning and real-time tracking, we provide visibility and control over every shipment.\n\nWe understand that effective distribution is critical to customer satisfaction and business success. Our nationwide network of distribution centers and delivery partners enables us to offer same-day, next-day, and scheduled delivery options. Whether you're serving retail stores, e-commerce customers, or B2B clients, our distribution solutions are designed to meet your specific requirements while optimizing costs and delivery times.",
    features: [
      "Nationwide distribution network coverage",
      "Same-day and next-day delivery options",
      "Multi-channel distribution support (retail, e-commerce, B2B)",
      "Route optimization for cost efficiency",
      "Last-mile delivery solutions",
      "Returns management and reverse logistics",
      "Proof of delivery with digital signatures",
      "Integration with major e-commerce platforms",
    ],
    process: [
      {
        step: 1,
        title: "Network Design",
        description: "Analyze your distribution needs and design an optimal delivery network.",
      },
      {
        step: 2,
        title: "Integration",
        description: "Connect your systems with our distribution platform for seamless operations.",
      },
      {
        step: 3,
        title: "Order Processing",
        description: "Receive and process orders automatically from all your sales channels.",
      },
      {
        step: 4,
        title: "Route Planning",
        description: "Optimize delivery routes using AI-powered algorithms for efficiency.",
      },
      {
        step: 5,
        title: "Dispatch",
        description: "Coordinate with delivery partners and dispatch shipments to customers.",
      },
      {
        step: 6,
        title: "Tracking",
        description: "Provide real-time tracking updates and delivery confirmation to customers.",
      },
    ],
    stats: {
      deliveryTime: "Same/Next day",
      coverage: "Nationwide",
      reliability: "99.3%",
    },
    relatedServices: [3, 4],
  },
  {
    id: 6,
    image: "/images/truck.jpg",
    title: "Value Forwarding",
    icon: PackageCheck,
    info: "End-to-end logistics support",
    description:
      "Comprehensive logistics solutions adding value at every step of the supply chain.",
    fullDescription:
      "Value forwarding represents our commitment to providing comprehensive, end-to-end logistics solutions that add value at every stage of your supply chain. As your single point of contact, we coordinate all aspects of freight forwarding, from origin to destination, across multiple transportation modes. Our integrated approach simplifies complex logistics challenges and delivers measurable improvements in efficiency and cost savings.\n\nWe go beyond traditional freight forwarding by offering value-added services such as supply chain consulting, vendor management, quality inspections, and packaging optimization. Our experienced logistics professionals work as an extension of your team, providing strategic insights and proactive solutions. Whether you're managing international trade, coordinating multi-modal shipments, or seeking to optimize your entire supply chain, our value forwarding services deliver comprehensive support and exceptional results.",
    features: [
      "Multi-modal transportation coordination (air, sea, road)",
      "Single point of contact for all logistics needs",
      "Supply chain consulting and optimization",
      "Vendor coordination and management services",
      "Quality control and pre-shipment inspections",
      "Packaging and labeling solutions",
      "Trade compliance and regulatory support",
      "Risk management and cargo insurance",
    ],
    process: [
      {
        step: 1,
        title: "Consultation",
        description: "Comprehensive analysis of your supply chain to identify optimization opportunities.",
      },
      {
        step: 2,
        title: "Planning",
        description: "Develop customized logistics strategy incorporating multiple transportation modes.",
      },
      {
        step: 3,
        title: "Coordination",
        description: "Manage all vendors, carriers, and service providers on your behalf.",
      },
      {
        step: 4,
        title: "Execution",
        description: "Implement the logistics plan with proactive monitoring and management.",
      },
      {
        step: 5,
        title: "Optimization",
        description: "Continuously analyze performance data to identify improvement opportunities.",
      },
      {
        step: 6,
        title: "Reporting",
        description: "Provide detailed analytics and insights on logistics performance and costs.",
      },
    ],
    stats: {
      deliveryTime: "Customized",
      coverage: "Global",
      reliability: "99.7%",
    },
    relatedServices: [1, 2],
  },
];

const pricingPlans = [
  {
    tier: "Beginner",
    price: 10,
    period: "Month",
    features: [
      "Basic domestic freight shipping services",
      "Real-time shipment tracking available",
      "Email support and documentation assistance",
      "Standard warehouse storage up to one month",
      "Monthly performance reports and analytics",
    ],
  },
  {
    tier: "Standard",
    price: 28,
    period: "Month",
    features: [
      "Domestic and international freight coverage",
      "Priority customer support with dedicated agent",
      "Advanced inventory management system integration",
      "Three months secure warehouse storage included",
      "Custom reporting and shipment optimization analysis",
    ],
    highlighted: true,
  },
  {
    tier: "Premium",
    price: 40,
    period: "Month",
    features: [
      "Global freight solutions with route optimization",
      "24/7 dedicated premium support team available",
      "Unlimited warehouse storage with climate control",
      "AI-powered predictive analytics and insights",
      "White-label solutions and custom integration support",
    ],
  },
];

const stats = [
  { label: 'Safe Package Delivery', percentage: '94%' },
  { label: 'Arrive On Time', percentage: '98%' },
  { label: 'Satisfied Clients', percentage: '100%' },
];

const contactDetails = [
  {
    icon: Phone,
    label: "Phone Number",
    value: "(307) 555-0133",
  },
  {
    icon: Mail,
    label: "Email Address",
    value: "info@example.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "2464 Royal Ln. Mesa, New Jersey 45463",
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export { contactDetails, pricingPlans, services, socialLinks, stats, teamMembers };

