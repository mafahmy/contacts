export interface Contact {
  id: string;
  accountId: string;
  assignee: string;
  name: string;
  platformNames: Array<string>;
  createdAt: string;
  updatedAt: string;
  phoneNumber: string;
  email: string;
  img: {
    url: string;
    fullUrl: string;
    fetchedAt: string;
  };
  tags: [
    {
      name: string,
      value: string,
      remove: boolean
    }
  ];
  assigner: string;
  messagesSent: number;
  messagesReceived: number;
  chat: object;
  nextPage: string | null;
}
