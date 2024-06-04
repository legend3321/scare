"use server";

import { cookies } from "next/headers";

const week = 7 * 24 * 60 * 60 * 1000;

export const getToken = () => {
  const cookie = cookies();
  return cookie.get("token");
};

export const setToken= (token: string) => {
  const cookie = cookies();
  cookie.set("token", token, {expires: new Date(Date.now() + week)});
}

export const removeToken = () => {
  const cookie = cookies();
  cookie.delete("token");
}


export const  getUser = async () => {
  const cookie = cookies();
  const user = await  cookie.get("user");
  return user;
};


export const setUser= (user: string) => {
  const cookie = cookies();
  cookie.set("user", user, {expires: new Date(Date.now() + week)});
}

export const removeUser = () => {
  const cookie = cookies();
  cookie.delete("user");
}
