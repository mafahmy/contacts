import axios from "axios";
// import { token } from "./generateToken";
// // import { Service } from "../types/Service";
//  import { Tag } from "../types/Tag";
// import { useEffect, useState } from "react";


// export interface Tags {
//     tags: Tag[];
//   }
//   const useGetAllTags = () => {
//     const [tag, setTag] = useState<Service<Tags>>({
//       status: "loading",
//     });
//     useEffect(() => {
//       axios
//         .get("https://api-im.chatdaddy.tech/tags", {
//           headers: { Authorization: `bearer ${token.access_token}` },
//         })
//         .then((response) =>
//           setTag({ status: "loaded", payload: response.data })
//         )
//         .catch((error) => setTag({ status: "error", error }));
//     }, []);
//     return tag;
//   };
//   export default useGetAllTags;
  