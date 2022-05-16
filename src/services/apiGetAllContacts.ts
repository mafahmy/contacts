import axios, { AxiosResponse } from "axios";
import { token } from "./generateToken";

// import { Contact, FetchState } from "../types/Contact";
// import { useEffect, useState } from "react";

// // export interface Contacts {
// //   totalCount: number;
// //   contacts: Contact[];
// // }
// const useGetAllContacts = () => {
//   // const [contact, setContact] = useState<Service<Contacts>>({
//   //   status: "loading",
//   // });
//   const [fetchState, setFetchState] = useState(FetchState.Default);
//   const [contacts, setContacts] = useState<Array<Contact>>([]);
//   useEffect(() => {
//     const getcontact = () => {
//     axios
//       .get("https://api-im.chatdaddy.tech/contacts", {
//         headers: { Authorization: `bearer ${token.access_token}` },
//       })
//       .then((response) => {
//         setContacts(response.data);
//         setFetchState(FetchState.Success);
//       })
//       .catch((error) => {
//         setFetchState(FetchState.Error);
//         console.log(error);
//       });
//       return contacts
//     }
    
//   }, []);
// };

// export default useGetAllContacts;
