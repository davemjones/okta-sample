import React from "react";
import "./token-detail.css";

const convertUnixToFormattedTimestamp = (unixTimestamp) =>
  new Date(unixTimestamp * 1000).toLocaleDateString("en-US") +
  " " +
  new Date(unixTimestamp * 1000).toLocaleTimeString("en-US");

const Item = ({ name, value, tip }) => {
  return (
    <>
      <div className="token-detail__name">{name}</div>
      <div className="token-detail__value">{value}</div>
    </>
  );
};

const TokenDetail = ({ token }) => {
  const details = [
    {
      name: "accessToken",
      token: token?.accessToken,
    },
    {
      name: "authorizeUrl",
      token: token?.authorizeUrl,
    },
    {
      name: "expiresAt",
      token: `${token?.expiresAt} (${convertUnixToFormattedTimestamp(
        token?.expiresAt
      )})`,
    },
    {
      name: "tokenType",
      token: token?.tokenType,
    },
    {
      name: "userinfoUrl",
      token: token?.userinfoUrl,
    },
    {
      name: "claims: aud",
      token: token?.claims?.aud,
    },
    {
      name: "claims: auth_time",
      token: `${token?.claims?.auth_time} (${convertUnixToFormattedTimestamp(
        token?.claims?.auth_time
      )})`,
    },
    {
      name: "claims: cid",
      token: token?.claims?.cid,
    },
    {
      name: "claims: exp",
      token: `${token?.claims?.exp} (${convertUnixToFormattedTimestamp(
        token?.claims?.exp
      )})`,
    },
    {
      name: "claims: iat",
      token: `${token?.claims?.iat} (${convertUnixToFormattedTimestamp(
        token?.claims?.iat
      )})`,
    },
    {
      name: "claims: iss",
      token: token?.claims?.iss,
    },
    {
      name: "claims: jti",
      token: token?.claims?.jti,
    },
    {
      name: "claims: scp",
      token: Array.isArray(token?.claims?.scp)
        ? `[${token?.claims?.scp.join(", ")}]`
        : "[]",
    },
    {
      name: "claims: uid",
      token: token?.claims?.uid,
    },
    {
      name: "claims: ver",
      token: token?.claims?.ver,
    },
  ];

  return (
    <section className="token-detail">
      {token && (
        <div className="token-detail__container">
          {details.map((item) => (
            <Item key={item.name} name={item.name} value={item.token} />
          ))}
        </div>
      )}
    </section>
  );
};

export default TokenDetail;
