import { providers, signIn, getSession } from "next-auth/client";

export default function SignIn({ providers }) {
  return (
    <>
      <style jsx>{`
        .wrapper {
          height: 100%;
          width:100%;
        }
        .wrapper div{
          top: 50%;
          position:absolute;
          transform: translate(14%,-50%);
        }
        button{
          margin: auto;
          width: 80vw;
          height: 2rem;
        }
        @media (max-width: 600px) {
         
        }
      `}</style>
      <div className="wrapper">
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
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