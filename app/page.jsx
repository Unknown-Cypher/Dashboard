// TODO
import Link from "next/link";
const Homepage = () => {
  return (
    <div>
      Homepage
      <Link href="/login" passHref>
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Homepage;
