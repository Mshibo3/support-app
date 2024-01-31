import Link from "next/link";
import Layout from "../components/Layout";
import { useRouter } from 'next/router';

interface LoginPageProps {
  username: string | false;
}

export default function LoginPage({ username }: LoginPageProps) {
  const router = useRouter();
  const { msg } = router.query;

  return (
    <Layout pageTitle="login">
      <Link href="/">Home</Link>
      <br />
      {msg ? (
        <h3 className="red">{msg}</h3>
      ) : (
        <></>
      )}
      <h2>Log in</h2>
      <form action="/api/login" method="POST">
        <input
          minLength={3}
          name="username"
          id="username"
          type="text"
          placeholder="username"
          required
        />
        <br />
        <input
          minLength={5}
          name="password"
          id="password"
          type="password"
          placeholder="password"
          required
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const req = context.req;
  const res = context.res;
  const username: string | undefined = getCookie('username', { req, res });

  if (username !== undefined) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  return { props: { username: false } };
}
