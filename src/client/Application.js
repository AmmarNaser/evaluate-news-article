import React, { useState } from "react";
import { handleSubmit } from "./helpers/handleSubmit";
import { checkUrl } from "./helpers/checkUrl";

export default function App() {
  const [loading, setloading] = useState(false);
  const [result, setresult] = useState();
  const [enterurl, setURL] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    const checking = checkUrl(enterurl);
    console.log(checking);
    if (checking) {
      setloading(true);
      handleSubmit(enterurl).then((data) => {
        const { agreement, confidence, irony, model, score_tag, subjectivity } =
          data;
        setresult({
          agreement,
          confidence,
          irony,
          model,
          score_tag,
          subjectivity,
        });
        setloading(false);
      });
    } else {
      alert("incorrect url");
    }
  };

  return (
    <div className="mainPage">
      <form onSubmit={submitHandler} className="{classes.mainForm}">
        <div>
          <label htmlFor="enter-url" className="{classes.mainLabel}">
            Input your URL
          </label>
          <input
            type="text"
            placeholder="  please input URL"
            id="enter-url"
            onChange={(e) => setURL(e.target.value)}
          />
        </div>

        <button>Submit</button>
      </form>
      {loading && <p className="">Loading..</p>}
      <section>
        <h3> Results </h3>
        <div>
          <ul>
            {result &&
              Object.entries(result).map(([key, value]) => (
                <li key={key}>
                  {key} : {value}
                </li>
              ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
