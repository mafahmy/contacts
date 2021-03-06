import axios from "axios";
import { token } from "./generateToken";
import qs from "qs"
import { Tag } from "../types/Tag";
import { Contact } from "../types/Contact"
import { useEffect, useState } from "react";

const api = "https://api-im.chatdaddy.tech";
const headers = {
  'Content-Type': 'application/json',
  Authorization: `bearer ${token.access_token}`,
};

export const getAllTags = async () => {
  try {
    const response = await axios.get<Array<Tag>>(`${api}/tags`, {
      headers,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllContacts = async (
  tags: Array<string>,
  notTags?: string[],
  minMessagesSent?: string,
  minMessagesRecv?: string,
  maxMessagesSent?: string,
  maxMessagesRecv?: string,
  q?: string
) => {
  try {
    const response = await axios.get<Array<Contact>>(`${api}/contacts`, {
      params: {
        tags: tags,
        notTags: notTags,
        minMessagesSent: Number(minMessagesSent),
        minMessagesRecv: Number(minMessagesRecv),
        maxMessagesSent: Number(maxMessagesSent),
        maxMessagesRecv: Number(maxMessagesRecv),
        q: q,
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      },

      headers,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
