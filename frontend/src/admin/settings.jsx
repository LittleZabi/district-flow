import { useEffect, useState } from "react";

const Settings = ({ settings }) => {
  const [newDept, setNewDept] = useState("");
  const [departments, setDepartments] = useState([]);
  const [newSub, setNewSub] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const handleAddDept = () => {
    if (newDept !== "") setDepartments([...departments, newDept]);
    setNewDept("");
  };
  const handleAddSub = () => {
    if (newSub !== "") setSubjects([...subjects, newSub]);
    setNewDept("");
  };
  const handlePopDept = (a) => {
    const n = departments.filter((e, i) => i !== a);
    setDepartments(n);
  };
  const handlePopSub = (a) => {
    const n = subjects.filter((e, i) => i !== a);
    setSubjects(n);
  };
  useEffect(() => {
    setDepartments(settings.departments);
    setSubjects(settings.subjects);
  }, [settings]);
  return (
    <div>
      <h1 className="form-title">Change Settings <br/></h1>
      <div className="departments">
        <h3>Change applications department status settings</h3>
        <div className="flex a983823">
          {departments.map((e, i) => {
            return (
              <section key={i}>
                {e} <button onClick={() => handlePopDept(i)}>&times;</button>
              </section>
            );
          })}
        </div>
        <div className="input-223">
          <input
            type="text"
            onChange={(e) => setNewDept(e.target.value)}
            placeholder="Add new Department..."
            value={newDept}
            name="new_dept"
          />
          <button onClick={handleAddDept}>Add</button>
          <button
            onClick={() => {
              setDepartments(settings.departments);
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="departments subjects">
        <h3>Change Applications Subjects</h3>
        <div className="flex a983823">
          {subjects.map((e, i) => {
            return (
              <section key={i}>
                {e} <button onClick={() => handlePopSub(i)}>&times;</button>
              </section>
            );
          })}
        </div>
        <div className="input-223">
          <input
            type="text"
            onChange={(e) => setNewSub(e.target.value)}
            placeholder="Add new Subjects..."
            value={newSub}
            name="new_dept"
          />
          <button onClick={handleAddSub}>Add</button>
          <button
            onClick={() => {
              setSubjects(settings.subjects);
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="flex a992kc">
        <button>Save Settings</button>
      </div>
    </div>
  );
};

export default Settings;
