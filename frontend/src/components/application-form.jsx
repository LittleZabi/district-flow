import { formatBytes, trimTitle } from "../lib/common";
import { applicationFilesAllowLimit } from "../lib/constants";
import { useState, useEffect } from "react";
const ApplicationForm = () => {
  const [message, setMessage] = useState(false);
  const [files, setFiles] = useState([]);
  useEffect(() => {
    console.log("files: ", files);
  }, [files]);
  const handleForm = (e) => {
    e.preventDefault();
  };
  const handleFileInput = (e) => {
    let new_files = [];
    [...e.target.files].map(file => {
      if ((files.length + new_files.length) >= applicationFilesAllowLimit)
        setMessage({
          message: `You can Select maximum ${applicationFilesAllowLimit} files!`,
          variant: "alert",
        });
      else new_files = [...new_files, file];
    });
    setFiles([...files, ...new_files]);
  };

  function dropHandler(ev) {
    dropLeave(ev);
    setMessage(false);
    ev.preventDefault();
    if (ev.dataTransfer.items) {
      if (
        ev.dataTransfer.items.length > applicationFilesAllowLimit ||
        files.length + 1 > applicationFilesAllowLimit
      ) {
        setMessage({
          message: `You can Select maximum ${applicationFilesAllowLimit} files!`,
          variant: "alert",
        });
        return 0;
      }
      let new_files = [];
      [...ev.dataTransfer.items].forEach((item, i) => {
        if (item.kind === "file") {
          const file = item.getAsFile();
          let isExist = false;
          files.map((f) => {
            if (f.name === file.name) {
              isExist = true;
              return 0;
            }
          });
          if (!isExist) {
            new_files = [...new_files, file]
          }
        }
      });
      setFiles([...files, ...new_files]);
    } else {
      if (
        ev.dataTransfer.files.length >= applicationFilesAllowLimit ||
        files.length + 1 >= applicationFilesAllowLimit
      ) {
        setMessage({
          message: `You can Select maximum ${applicationFilesAllowLimit} files!`,
          variant: "alert",
        });
        return 0;
      }
      [...ev.dataTransfer.files].forEach((file) => setFiles([...files, file]));
    }
  }
  const dropLeave = (event) => {
    event.target.classList.remove("active");
    try {
      let k = document?.querySelector(".sp-1");
      k.textContent = "Drag one or more files";
    } catch (e) {}
  };
  function dragOverHandler(ev) {
    ev.preventDefault();
    ev.target.classList.add("active");
    try {
      let k = document?.querySelector(".sp-1");
      k.textContent = "Release to Upload File's";
    } catch (e) {}
  }
  const removeFileItem = (index) =>
    setFiles(files.filter((e, i) => i !== index));
  return (
    <div className="flex application-form">
      <div className="form-left">
        <h2>Application</h2>
        <p>
          Empower Your Voice, Connect with the District. Apply and Communicate
          Efficiently. Streamline Your Applications, Share Your Concerns, and
          Shape a Better District Together.
        </p>
        <form onSubmit={handleForm}>
          <div className="flex-yxz">
            <div className="a03x">
              <label htmlFor="firstname">YOUR FIRST NAME</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="E.g. Muhammad"
              />
            </div>
            <div className="a03x">
              <label htmlFor="lastname">YOUR LAST NAME.</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="E.g. Qasim"
              />
            </div>
          </div>

          <div className="flex-yxz">
            <div className="a03x full-w">
              <label htmlFor="address">YOUR FULL ADDRESS</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="E.g. 123 Main Street, City, State, Postal Code"
              />
            </div>
          </div>

          <div className="flex-yxz">
            <div className="a03x">
              <label htmlFor="email">YOUR EMAIL ADDRESS</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E.g. qasim123@example.com"
              />
            </div>
            <div className="a03x">
              <label htmlFor="phone">YOUR PHONE NUMBER</label>
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                placeholder="E.g. +923000000"
              />
            </div>
          </div>

          <div className="flex-yxz">
            <div className="a03x">
              <label htmlFor="subject">APPLICATION SUBJECT</label>
              <select name="subject" id="subject">
                <option defaultValue>Select Subject</option>
                <option value="option 1">option 1</option>
                <option value="option 2">option 2</option>
              </select>
            </div>
          </div>

          <div className="flex-yxz">
            <div className="a03x full-w">
              <label htmlFor="application">YOUR APPLICATION TEXT</label>
              <textarea
                name="application"
                id="application"
                placeholder="Enter your full descriptive application."
              ></textarea>
            </div>
          </div>

          <div className="flex-yxz attachment">
            <div className="a03x full-w">
              <label htmlFor="attachment">
                ATTACHMENTS FILES <small>(optional)</small>
              </label>
              <span className="font-2 font-size-12">
                Select maximum {applicationFilesAllowLimit} files only.
              </span>
              <span className="font-2 font-size-12">
                {files.length} Files Selected.
              </span>
              <div className="selected-files-list">
                {files.map((e, i) => {
                  return (
                    <div className="flex" key={i}>
                      <span title={e.name}>
                        {trimTitle(e.name, 17, 10)} | {formatBytes(e.size, 1)}
                        <span
                          className="close-333"
                          onClick={() => removeFileItem(i)}
                        >
                          &times;
                        </span>
                      </span>
                    </div>
                  );
                })}
              </div>
              <div
                className="drop-zone"
                onDrop={dropHandler}
                onDragLeave={dropLeave}
                onDragOver={dragOverHandler}
                onClick={() => document.querySelector("#attachment").click()}
              >
                <span className="sp-1">Drop your files here</span>
                <span className="sp-2">OR</span>
                <button
                  className="btn-1"
                  onClick={() => document.querySelector("#attachment")}
                >
                  Click to select files
                </button>
                <input
                  type="file"
                  onChange={handleFileInput}
                  name="attachment"
                  id="attachment"
                  multiple
                />
              </div>
            </div>
          </div>
          {message && (
            <div className={`message ${message.variant}`}>
              {message.message}
            </div>
          )}

          <input type="submit" value="Submit Application" />
        </form>
      </div>
      <div className="form-right">
        <img src="/images/form-bg.webp" alt="form bg" />
      </div>
    </div>
  );
};
export default ApplicationForm;
