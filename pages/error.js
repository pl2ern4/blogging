import { providers, getSession } from "next-auth/client";

export default function Error({ providers }) {
  return (
    <div>
        There is some problem going on please try again later after sometime.
    </div>
  );
}
export async function getServerSideProps(req,res) {
  const session = await getSession(req);
  if(!!session){
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return { props: { providers: await providers() } };
}