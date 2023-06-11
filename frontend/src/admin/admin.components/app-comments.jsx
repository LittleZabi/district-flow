import axios from "axios";
import { useEffect, useState } from "react";
import { API_URI } from "../../lib/constants";
import { life, randomColor } from "../../lib/common";

const ApplicationComments = ({ app_id }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get(API_URI + "application/fetch-comments", { params: { id: app_id } })
      .then((e) => {
        console.log(e.data);
        setComments(e.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  return (
    <div>
      {comments.map((comment, i) => {
        return (
          <section
            className="comment-sec"
            key={i}
            style={{ background: randomColor() }}
          >
            <div className="x8a3">
              <span className="a883">{comment.name}</span>
              <div className="flex all8">
                <span>{comment.from}</span>
                &#x2022;
                <span>{life(comment.createdAt).from()}</span>
                &#x2022;
                <span>Application status: {comment.app_status}</span>
              </div>
            </div>
            <p>{comment.comment}</p>
          </section>
        );
      })}
    </div>
  );
};

export default ApplicationComments;
