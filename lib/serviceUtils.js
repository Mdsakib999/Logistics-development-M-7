import { services } from "@/public/data";

/**
 * Get a service by its ID
 * @param {number|string} id - The service ID
 * @returns {object|null} The service object or null if not found
 */
export function getServiceById(id) {
    const serviceId = typeof id === "string" ? parseInt(id, 10) : id;
    return services.find((service) => service.id === serviceId) || null;
}

/**
 * Get related services for a given service
 * @param {number} serviceId - The service ID
 * @param {number} limit - Maximum number of related services to return
 * @returns {array} Array of related service objects
 */
export function getRelatedServices(serviceId, limit = 3) {
    const service = getServiceById(serviceId);

    if (!service || !service.relatedServices) {
        return [];
    }

    return service.relatedServices
        .slice(0, limit)
        .map((id) => getServiceById(id))
        .filter(Boolean); // Remove any null values
}

/**
 * Get all service IDs for static generation
 * @returns {array} Array of service IDs
 */
export function getAllServiceIds() {
    return services.map((service) => service.id);
}

/**
 * Get all services
 * @returns {array} Array of all service objects
 */
export function getAllServices() {
    return services;
}
