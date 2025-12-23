import RelatedServices from "@/components/service/RelatedServices";
import ServiceDetails from "@/components/service/ServiceDetails";
import { getAllServiceIds, getServiceById } from "@/lib/serviceUtils";
import { notFound } from "next/navigation";

// Generate static params for all services
export async function generateStaticParams() {
  const serviceIds = getAllServiceIds();
  return serviceIds.map((id) => ({
    id: id.toString(),
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} - Freight Forward Services`,
    description: service.description,
    openGraph: {
      title: `${service.title} - Freight Forward Services`,
      description: service.description,
      images: [service.image],
    },
  };
}

// Service Detail Page Component
export default async function ServiceDetailPage({ params }) {
  const { id } = await params;
  const service = getServiceById(id);

  // Handle 404 for invalid service IDs
  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceDetails service={service} />
      <RelatedServices serviceId={service.id} />
    </>
  );
}

