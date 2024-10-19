import Link from "next/link";
const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry the page you're looking for doesnt exist</p>
      <Link href="/"> Return Home</Link>
    </div>
  );
};

export default NotFound;
