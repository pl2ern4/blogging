import { signout, getSession } from "next-auth/client";
import HeaderWrapper from "../components/header";
import BasePage from "../components/base-page";

import { connectToDatabase } from "../lib/mongodb";
import { useState } from "react";

export default function Home({ user, articles }) {
  const [submit, setSubmit] = useState();
  const submitForm = async (params) => {
    const data = {...params, createdBy: user.email, img: user.image};
    const response = await fetch("/api/upload-article", {
      method: "POST",
      body: JSON.stringify(data)
    });
    setSubmit(response.ok?{}:{error:'Some issue going on, Please try later'})
  };
  return (
    <div>
      <HeaderWrapper user={user} signout={signout} />
      <BasePage submit={submit} submitForm={submitForm} articles={articles} />
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
    .find({'article': { $exists: true, $ne: null } })
    .toArray()
    .then((res) => {
      if (!res) {
        return [];
      }
      return res.map(({ _id, date_of_creation, title, createdBy, article,img }) => {
        return {
          id: JSON.stringify(_id),
          title,
          img,
          createdBy,
          creation_time: date_of_creation,
          article: article,
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
