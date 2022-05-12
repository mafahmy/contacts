import axios from "axios";
import { token } from "./generateToken";
import { Service } from "../types/Service";
import { Contact } from "../types/Contact";
import { useEffect, useState } from "react";


export interface Contacts {
  contacts: Contact[];
}
const useGetAllContacts = () => {
  const [contact, setContact] = useState<Service<Contacts>>({
    status: "loading",
  });
  useEffect(() => {
    axios
      .get("https://api-im.chatdaddy.tech/contacts", {
        headers: { Authorization: `bearer ${token.access_token}` },
      })
      .then((response) =>
        setContact({ status: "loaded", payload: response.data })
      )
      .catch((error) => setContact({ status: "error", error }));
  }, []);
  return contact;
};

export default useGetAllContacts;

