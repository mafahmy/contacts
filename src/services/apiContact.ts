import axios  from "axios";
import { token } from "./generateToken";

import { Contact, FetchState } from "../types/Contact";
import { useEffect, useState } from "react";

export const getAllContact = async () => {
    try {
        const {data} = await axios
        .get<Array<Contact>>("https://api-im.chatdaddy.tech/contacts", {
          headers: { Authorization: `bearer ${token.access_token}` },
        })
        return data
    } catch (error) {
        console.log(error);
        
    }
   

}