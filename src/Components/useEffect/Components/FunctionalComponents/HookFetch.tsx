import React, { ChangeEvent } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const HookFetch: React.FC = () => {
  const [id, setId] = useState<number>(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState<number>(1);
  const [post, setPost] = useState<Post>({
    id: 0,
    title: "",
    body: "",
    userId: 0,
  });

  useEffect(() => {
    axios
      .get<Post>(
        `https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`
      )
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setId(Number(e.target.value));
  };

  return (
    <div>
      <input value={id} onChange={handleChange} />
      <button className="button" onClick={() => setIdFromButtonClick(id)}>
        submit
      </button>
      <button className="button button-input">{post.title}</button>
    </div>
  );
};
