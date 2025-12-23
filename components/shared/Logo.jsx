import Link from "next/link";

const colorClasses = {
  foreground: "text-foreground",
  secondary: "text-secondary",
  primary:"text-primary",
};
const Logo = ({color="primary"}) => {
  return (
          <Link href="/" className={`text-2xl font-semibold ${colorClasses[color]} leading-[1.21]`}>
            <h1>Freight Solutions</h1>
          </Link>
  )
}

export default Logo