import { signout, getSession } from "next-auth/client";
import HeaderWrapper from "../components/header";
import BasePage from "../components/base-page";

const Profile = ({articles, user }) => {
  return (
    <div>
      <HeaderWrapper user={user} signout={signout} />
      <BasePage showDelete={true} articles={articles} />
    </div>
  );
};

export async function getServerSideProps(req) {
  const session = await getSession(req);

  if (!session) {
    return {
      redirect: {
        destination: "/signIn",
        permanent: false,
      },
    };
  }
  const con = await connectToDatabase();
  const collection = con.db.collection("article");
  const articles = await collection
    .find({ createdBy: session.email })
    .toArray()
    .then((res) => {
      if (!res) {
        return [];
      }
      return res.map(
        ({ _id, date_of_creation, title, createdBy, article, img }) => {
          return {
            id: JSON.stringify(_id),
            title,
            img,
            createdBy,
            creation_time: date_of_creation,
            article: article,
          };
        }
      );
    });
  return {
    props: {
      user: session?.user,
      articles: articles,
    },
  };
}
export default Profile;
