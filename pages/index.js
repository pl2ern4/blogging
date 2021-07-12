import { signout, getSession } from "next-auth/client";
import ApplicationContext from '../context/application-context';
import HeaderWrapper from "../components/header";
import BasePage from "../components/base-page";

import { connectToDatabase } from "../lib/mongodb";
import { useContext } from "react";

export default function Home({ user, articles }) {
  const value = useContext(ApplicationContext);
  const submitForm = async (params) => {
    params.append("createdBy", user.email);
    params.append("img", user.image);
    const response = await fetch("/api/upload-article", {
      method: "POST",
      body: params,
    });
    debugger;
    value.dispatch('UPDATE_SUBMIT_STATUS',{createSubmit:response.ok })
  };
  return (
    <div>
      <HeaderWrapper user={user} signout={signout} />
      <BasePage submitForm={submitForm} articles={articles} />
    </div>
  );
}

export async function getServerSideProps(req, res) {
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
    .find({})
    .toArray()
    .then((res) => {
      if (!res) {
        return [];
      }
      return res.map(({ _id, date_of_creation, title, createdBy, article }) => {
        return {
          id: JSON.stringify(_id),
          title,
          createdBy,
          creation_time: date_of_creation,
          article: typeof article === "object" ? ["file.xlsx"] : article,
        };
      });
    });
  return {
    props: {
      isUserValid: !!session,
      user: session?.user,
      articles: articles,
    },
  };
}
